/* =========================================================
   RECIPE BOX REDESIGN — motion
   1. Hero: letter rise, stroke stagger, "today's special"
      typewriter, cursor parallax on the drawings.
   2. Recipe box: a scroll-driven, pinned stage. The lid opens
      and cards rise out of the box one at a time, then move
      to a pile. Smoothed with a small spring so it feels
      physical rather than locked to the scrollbar.
   Everything degrades to a static layout for reduced motion,
   touch-sized screens and short viewports.
========================================================= */

(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
    const lerp = (a, b, t) => a + (b - a) * t;
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);


    /* -----------------------------------------
       HERO
    ----------------------------------------- */

    // Split the name into letters so each can rise on its own.
    let ci = 0;
    document.querySelectorAll(".rk-hero__line").forEach((line) => {
        const text = line.textContent.trim();
        line.textContent = "";
        [...text].forEach((ch) => {
            const span = document.createElement("span");
            span.className = "rk-char";
            span.textContent = ch;
            span.style.setProperty("--ci", ci++);
            span.setAttribute("aria-hidden", "true");
            line.appendChild(span);
        });
    });

    // Stagger the portrait strokes.
    document.querySelectorAll(".rk-portrait path").forEach((path, i) => {
        path.style.setProperty("--pi", i);
    });

    // "Today's special" typewriter.
    const dish = document.querySelector(".rk-special__dish");
    const specials = [
        "event-driven microservices",
        "real-time Android apps",
        "APIs an AI assistant can call",
        "safer-route ML models",
        "interfaces people enjoy using"
    ];

    if (dish && !reduceMotion.matches) {
        let index = 0;
        const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

        const cycle = async () => {
            await sleep(3600);
            while (true) {
                const current = specials[index];
                for (let n = current.length; n >= 0; n--) {
                    dish.textContent = current.slice(0, n);
                    await sleep(22);
                }
                index = (index + 1) % specials.length;
                const next = specials[index];
                await sleep(260);
                for (let n = 1; n <= next.length; n++) {
                    dish.textContent = next.slice(0, n);
                    await sleep(48 + Math.random() * 40);
                }
                await sleep(2600);
            }
        };
        cycle();
    }

    // Cursor parallax: drawings drift slightly toward the pointer.
    const hero = document.querySelector(".rk-hero");
    if (hero && finePointer.matches && !reduceMotion.matches) {
        const movers = [...hero.querySelectorAll(".rk-doodle, .rk-hero__art")];
        let frame = null;
        let px = 0;
        let py = 0;

        const apply = () => {
            movers.forEach((el) => {
                const scale = el.classList.contains("rk-hero__art") ? 0.5 : 1;
                el.style.setProperty("--px", `${px * 14 * scale}px`);
                el.style.setProperty("--py", `${py * 10 * scale}px`);
            });
            frame = null;
        };

        hero.addEventListener("pointermove", (e) => {
            const r = hero.getBoundingClientRect();
            px = ((e.clientX - r.left) / r.width - 0.5) * 2;
            py = ((e.clientY - r.top) / r.height - 0.5) * 2;
            if (!frame) frame = requestAnimationFrame(apply);
        });

        hero.addEventListener("pointerleave", () => {
            px = 0;
            py = 0;
            if (!frame) frame = requestAnimationFrame(apply);
        });
    }


    /* -----------------------------------------
       RECIPE BOX
    ----------------------------------------- */

    const box = document.querySelector(".rk-box");
    if (!box) return;

    const stage = box.querySelector(".rk-box__stage");
    const cards = [...box.querySelectorAll(".rk-card")];
    const indexButtons = [...box.querySelectorAll("[data-rk-goto]")];
    const counter = box.querySelector(".rk-box__counter b");
    const n = cards.length;

    // f is a continuous "which card" value: card i is centred at f = i.
    // It starts below 0 so the lid can open before the first card rises.
    const F_START = -0.7;
    const fromProgress = (p) => F_START + p * (n - 1 - F_START + 0.3);
    const toProgress = (f) => (f - F_START) / (n - 1 - F_START + 0.3);

    let isStatic = false;
    let target = F_START;
    let current = F_START;
    let running = false;
    let activeIndex = -1;

    const shouldBeStatic = () =>
        reduceMotion.matches ||
        window.innerWidth < 900 ||
        window.innerHeight < 640;

    const setReadable = (card, readable) => {
        if (card.dataset.readable === String(readable)) return;
        card.dataset.readable = String(readable);
        card.toggleAttribute("aria-hidden", !readable);
        card.querySelectorAll("a, button:not(.rk-card__tab)").forEach((el) => {
            if (readable) el.removeAttribute("tabindex");
            else el.setAttribute("tabindex", "-1");
        });
    };

    const setActive = (i) => {
        if (i === activeIndex) return;
        activeIndex = i;
        cards.forEach((card, k) => card.classList.toggle("is-active", k === i));
        indexButtons.forEach((b, k) =>
            b.setAttribute("aria-current", k === i ? "true" : "false")
        );
        if (counter) counter.textContent = String(i + 1).padStart(2, "0");
    };

    const render = (f) => {
        const vw = window.innerWidth / 100;
        const vh = window.innerHeight / 100;

        // Lid swings open as the section arrives.
        const lid = ease(clamp((f - F_START) / 0.28));
        box.style.setProperty("--lid", lid.toFixed(4));
        box.style.setProperty("--lid-z", lid > 0.45 ? 5 : 52);

        cards.forEach((card, i) => {
            const d = f - i;

            // 0 → 1 while rising out of the box, 0 → 1 while moving to the pile.
            const rise = ease(clamp((d + 0.65) / 0.55));
            const leave = i === n - 1 ? 0 : ease(clamp((d - 0.35) / 0.6));

            // Waiting in the box: tops peek out, later cards sit lower.
            const wait = clamp(-d, 0, 4);
            const boxY = 59 * vh + wait * 1.6 * vh;
            const boxRot = (i % 2 ? 1.2 : -1.2);

            // On the pile: off to the left, small, fanned.
            const depth = clamp(d - 1, 0, 3);
            const pileX = -37 * vw - depth * 0.8 * vw;
            const pileY = 34 * vh + depth * 0.7 * vh;
            const pileRot = -7 + depth * 2.4;

            const centerRot = i % 2 ? 0.8 : -0.8;

            let x = 0;
            let y = lerp(boxY, 0, rise);
            let rot = lerp(boxRot, centerRot, rise);
            let scale = lerp(0.8, 1, rise);

            if (leave > 0) {
                x = lerp(0, pileX, leave);
                y = lerp(0, pileY, leave) - Math.sin(leave * Math.PI) * 6 * vh;
                rot = lerp(centerRot, pileRot, leave);
                scale = lerp(1, 0.36, leave);
            }

            card.style.setProperty("--rise", rise.toFixed(3));

            card.style.transform =
                `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`;

            // Stacking: the card being read is on top; the next card is the
            // front-most one in the box; newest pile card sits on the pile.
            let z;
            if (leave > 0.5) z = 10 + i;
            else if (rise > 0.02) z = 60;
            else z = 50 - i;
            card.style.zIndex = z;

            // Older pile cards fade so the pile stays tidy.
            card.style.opacity = d > 3.2 ? clamp(1 - (d - 3.2) * 2, 0.15) : 1;

            // Only the readable card is reachable by keyboard / screen reader.
            // (Not `inert`: cards waiting in the box must keep clickable tabs.)
            setReadable(card, rise > 0.9 && leave < 0.1);
        });

        setActive(clamp(Math.floor(f + 0.65), 0, n - 1));
    };

    const readScroll = () => {
        const rect = box.getBoundingClientRect();
        const travel = box.offsetHeight - window.innerHeight;
        const p = clamp(-rect.top / travel);
        target = fromProgress(p);
    };

    const tick = () => {
        // Critically-damped-ish follow: smooth, no overshoot.
        current += (target - current) * 0.16;
        if (Math.abs(target - current) < 0.0005) current = target;
        render(current);
        if (current !== target) {
            requestAnimationFrame(tick);
        } else {
            running = false;
        }
    };

    const onScroll = () => {
        if (isStatic) return;
        readScroll();
        if (!running) {
            running = true;
            requestAnimationFrame(tick);
        }
    };

    const scrollToCard = (i) => {
        const travel = box.offsetHeight - window.innerHeight;
        const top = box.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: top + clamp(toProgress(i + 0.05)) * travel,
            behavior: reduceMotion.matches ? "auto" : "smooth"
        });
    };

    const setMode = () => {
        isStatic = shouldBeStatic();
        box.classList.toggle("is-static", isStatic);

        if (isStatic) {
            cards.forEach((card) => {
                card.style.transform = "";
                card.style.zIndex = "";
                card.style.opacity = "";
                setReadable(card, true);
                card.classList.add("is-active");
            });
            box.style.removeProperty("--lid");
            activeIndex = -1;
            return;
        }

        readScroll();
        current = target;
        render(current);
    };

    // Keyboard / screen-reader path: after the index scrolls a card into
    // place, move focus onto that card's "Read the full recipe" button.
    // (Cards are only focusable once they're out of the box, so we wait
    // until the scroll has settled and the card is readable.)
    const focusCardWhenReady = (i, startedAt = performance.now()) => {
        const card = cards[i];
        if (card.dataset.readable === "true" && !running) {
            card.querySelector(".rk-card__open")?.focus({ preventScroll: true });
            return;
        }
        if (performance.now() - startedAt < 2500) {
            requestAnimationFrame(() => focusCardWhenReady(i, startedAt));
        }
    };

    indexButtons.forEach((button) =>
        button.addEventListener("click", () => {
            const i = Number(button.dataset.rkGoto);
            scrollToCard(i);
            focusCardWhenReady(i);
        })
    );

    // Clicking a card's tab while it's still in the box pulls it out.
    cards.forEach((card, i) => {
        card.querySelector(".rk-card__tab")?.addEventListener("click", () => {
            if (!isStatic) scrollToCard(i);
        });
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", setMode);
    reduceMotion.addEventListener?.("change", setMode);

    setMode();
})();


/* =========================================================
   EXPERIENCE · KITCHEN STATIONS
   Aprons are damped springs. Moving the cursor across one
   pushes it in the direction of travel; it swings back to
   rest. Clicking gives it a little tug before the details open.
========================================================= */

(() => {
    const rack = document.querySelector(".rk-rack");
    if (!rack) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const aprons = [...rack.querySelectorAll(".rk-apron")].map((el) => ({
        el,
        swing: el.querySelector(".rk-apron__swing"),
        angle: 0,
        velocity: 0
    }));

    // Drop the aprons onto their hooks when the rack scrolls into view.
    if ("IntersectionObserver" in window && !reduceMotion) {
        const io = new IntersectionObserver((entries) => {
            if (!entries[0].isIntersecting) return;
            rack.classList.add("is-in");
            // a small swing as each one lands
            aprons.forEach((a, i) => setTimeout(() => kick(a, i % 2 ? -2.6 : 2.6), 250 + i * 110));
            io.disconnect();
        }, { threshold: 0.25 });
        io.observe(rack);
    } else {
        rack.classList.add("is-in");
    }

    if (reduceMotion) return;

    const STIFFNESS = 0.045;  // pull back toward hanging straight
    const DAMPING = 0.075;    // air resistance
    const MAX = 16;           // degrees
    let running = false;

    const step = () => {
        let moving = false;
        aprons.forEach((a) => {
            a.velocity += -STIFFNESS * a.angle - DAMPING * a.velocity;
            a.angle = Math.max(-MAX, Math.min(MAX, a.angle + a.velocity));
            if (Math.abs(a.angle) > 0.02 || Math.abs(a.velocity) > 0.02) {
                moving = true;
            } else {
                a.angle = 0;
                a.velocity = 0;
            }
            a.swing.style.setProperty("--sway", `${a.angle.toFixed(2)}deg`);
        });
        if (moving) requestAnimationFrame(step);
        else running = false;
    };

    const start = () => {
        if (!running) {
            running = true;
            requestAnimationFrame(step);
        }
    };

    function kick(a, impulse) {
        a.velocity += impulse;
        start();
    }

    // Push whichever apron the cursor is moving across.
    let lastX = null;
    rack.addEventListener("pointermove", (e) => {
        if (e.pointerType !== "mouse") return;
        const dx = lastX === null ? 0 : e.clientX - lastX;
        lastX = e.clientX;
        const hit = aprons.find((a) => {
            const r = a.el.getBoundingClientRect();
            return e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
        });
        // CSS rotation is clockwise, which swings the bottom to the LEFT
        // around the top pivot; so to push the bottom along with the
        // cursor the impulse is the negative of dx.
        if (hit && dx) kick(hit, Math.max(-1.6, Math.min(1.6, -dx * 0.06)));
    });
    rack.addEventListener("pointerleave", () => { lastX = null; });

    aprons.forEach((a) =>
        a.el.querySelector("button").addEventListener("click", () => kick(a, 3.2))
    );
})();


/* =========================================================
   ARRIVALS + FRIDGE DOOR
   - [data-arrive] elements settle into place when scrolled
     into view (the clipping, the sticky note, the table card).
   - Fridge photos and the note can be dragged around. They
     tilt with the speed you drag them, then settle.
========================================================= */

(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const arrivals = document.querySelectorAll("[data-arrive]");
    if ("IntersectionObserver" in window && !reduceMotion) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-in");
                io.unobserve(entry.target);
            });
        }, { threshold: 0.3 });
        arrivals.forEach((el) => io.observe(el));
    } else {
        arrivals.forEach((el) => el.classList.add("is-in"));
    }

    const fridge = document.querySelector(".rk-fridge");
    if (!fridge) return;

    let topZ = 10;

    fridge.querySelectorAll(".rk-polaroid, .rk-note").forEach((item) => {
        let startX = 0;
        let startY = 0;
        let baseX = 0;
        let baseY = 0;
        let lastX = 0;
        let lastT = 0;
        let bounds = null;

        const set = (x, y, tilt) => {
            item.style.setProperty("--dx", `${x}px`);
            item.style.setProperty("--dy", `${y}px`);
            item.style.setProperty("--tilt", `${tilt}deg`);
        };

        item.addEventListener("pointerdown", (e) => {
            if (e.button !== 0) return;
            item.setPointerCapture(e.pointerId);
            item.classList.add("is-dragging");
            item.style.zIndex = ++topZ;

            startX = e.clientX;
            startY = e.clientY;
            baseX = parseFloat(item.style.getPropertyValue("--dx")) || 0;
            baseY = parseFloat(item.style.getPropertyValue("--dy")) || 0;
            lastX = e.clientX;
            lastT = performance.now();

            // keep it on the fridge door
            const f = fridge.getBoundingClientRect();
            const r = item.getBoundingClientRect();
            bounds = {
                minX: baseX + (f.left - r.left) + 6,
                maxX: baseX + (f.right - r.right) - 6,
                minY: baseY + (f.top - r.top) + 6,
                maxY: baseY + (f.bottom - r.bottom) - 6
            };
        });

        item.addEventListener("pointermove", (e) => {
            if (!item.classList.contains("is-dragging")) return;
            const now = performance.now();
            const speed = (e.clientX - lastX) / Math.max(1, now - lastT); // px per ms
            lastX = e.clientX;
            lastT = now;

            const x = Math.min(bounds.maxX, Math.max(bounds.minX, baseX + e.clientX - startX));
            const y = Math.min(bounds.maxY, Math.max(bounds.minY, baseY + e.clientY - startY));
            const tilt = reduceMotion ? 0 : Math.max(-14, Math.min(14, speed * 9));
            set(x, y, tilt);
        });

        const drop = () => {
            if (!item.classList.contains("is-dragging")) return;
            item.classList.remove("is-dragging");
            set(
                parseFloat(item.style.getPropertyValue("--dx")) || 0,
                parseFloat(item.style.getPropertyValue("--dy")) || 0,
                0
            );
        };

        item.addEventListener("pointerup", drop);
        item.addEventListener("pointercancel", drop);
    });
})();


/* =========================================================
   THE 30-SECOND VERSION
   Native <dialog>: showModal() traps focus and Esc closes it.
   Clicking the dim backdrop closes it too.
========================================================= */

(() => {
    const dialog = document.getElementById("rk-quick");
    if (!dialog || typeof dialog.showModal !== "function") return;

    document.querySelectorAll("[data-quick-open]").forEach((button) =>
        button.addEventListener("click", () => dialog.showModal())
    );

    dialog.querySelector("[data-quick-close]")?.addEventListener("click", () => dialog.close());

    dialog.addEventListener("click", (e) => {
        // a click that lands on the <dialog> itself is on the backdrop
        if (e.target === dialog) dialog.close();
    });
})();


/* =========================================================
   "WATCH IT RUN" — NextToSkin's method, live
   A tiny timeline engine moves an event through the real
   architecture: catalog → Kafka (partitioned by product ID)
   → one recommender in the consumer group → Redis cache
   invalidation. Every third event is a bad payload: it is
   retried twice, then parked on the dead-letter topic.
========================================================= */

(() => {
    const card = document.querySelector('.rk-card[data-index="0"]');
    const toggle = card?.querySelector(".rk-card__watch");
    const flow = card?.querySelector(".rk-flow");
    if (!card || !toggle || !flow) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const event = flow.querySelector(".rk-flow__event");
    const dot = event.querySelector("circle");
    const keyLabel = event.querySelector(".rk-flow__key");
    const caption = flow.querySelector(".rk-flow__caption");
    const stepLabel = flow.querySelector(".rk-flow__step span");
    const nodes = Object.fromEntries(
        [...flow.querySelectorAll("[data-node]")].map((n) => [n.dataset.node, n])
    );

    const KEYS = [4821, 1377, 902, 3310, 2655, 718];
    const point = {
        catalog: [112, 116],
        kafkaIn: [150, 114],
        partition: (p) => [148 + 15.5 + p * 31, 114],
        kafkaOut: [272, 114],
        rec: (i) => [318, 40 + i * 68],
        redis: [260, 198],
        dlt: [260, 36]
    };

    let playing = false;
    let token = 0;

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    const place = ([x, y]) => event.setAttribute("transform", `translate(${x} ${y})`);

    // Move along a list of points over `ms`, unless motion is reduced.
    const travel = (pts, ms, myToken) =>
        new Promise((resolve) => {
            if (reduceMotion) {
                place(pts[pts.length - 1]);
                return resolve();
            }
            const lengths = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
            const total = lengths.reduce((a, b) => a + b, 0) || 1;
            const start = performance.now();
            const frame = (now) => {
                if (myToken !== token) return resolve();
                let d = ease(Math.min(1, (now - start) / ms)) * total;
                let i = 0;
                while (i < lengths.length - 1 && d > lengths[i]) d -= lengths[i++];
                const t = lengths[i] ? d / lengths[i] : 1;
                place([
                    pts[i][0] + (pts[i + 1][0] - pts[i][0]) * t,
                    pts[i][1] + (pts[i + 1][1] - pts[i][1]) * t
                ]);
                if (now - start < ms) requestAnimationFrame(frame);
                else resolve();
            };
            requestAnimationFrame(frame);
        });

    const methodSteps = [...card.querySelectorAll(".rk-card__method li")];
    const say = (step, text) => {
        stepLabel.textContent = step;
        caption.textContent = text;
        methodSteps.forEach((li, i) => li.classList.toggle("is-flow-step", i === step - 1));
    };

    const hot = (name, on = true) => nodes[name]?.classList.toggle("is-hot", on);
    const coolAll = () => Object.keys(nodes).forEach((n) => hot(n, false));

    const run = async () => {
        const myToken = ++token;
        let n = 0;
        while (playing && myToken === token) {
            const key = KEYS[n % KEYS.length];
            const bad = n % 3 === 2;
            const partition = key % 4;
            const rec = partition % 3;
            const pause = reduceMotion ? 2200 : 700;

            coolAll();
            keyLabel.textContent = `product ${key}`;
            event.classList.toggle("is-bad", bad);
            place(point.catalog);
            event.classList.add("is-on");

            hot("catalog");
            say(2, `The catalog publishes a product-updated event, keyed by product ID ${key}.`);
            await travel([point.catalog, point.kafkaIn, point.partition(partition)], 900, myToken);
            hot("catalog", false);
            hot("kafka");
            say(2, `Same key, same partition (p${partition}), so updates to product ${key} always stay in order.`);
            await sleep(pause);
            if (myToken !== token) break;

            hot("kafka", false);
            hot(`rec${rec}`);
            say(3, `Recommender ${rec + 1} owns partition p${partition} in the consumer group, so it picks the event up.`);
            await travel([point.partition(partition), point.kafkaOut, point.rec(rec)], 800, myToken);
            await sleep(pause / 2);
            if (myToken !== token) break;

            if (bad) {
                for (const attempt of [1, 2]) {
                    say(3, `Bad payload. Retry ${attempt} of 2…`);
                    const [x, y] = point.rec(rec);
                    await travel([[x, y], [x + 10, y], [x - 6, y], [x, y]], 380, myToken);
                    await sleep(reduceMotion ? 1200 : 350);
                    if (myToken !== token) break;
                }
                hot(`rec${rec}`, false);
                hot("dlt");
                say(3, "Still failing, so it's parked on the dead-letter topic to inspect later. Nothing is lost and the partition keeps moving.");
                await travel([point.rec(rec), point.dlt], 800, myToken);
            } else {
                hot(`rec${rec}`, false);
                hot("redis");
                say(4, `It clears product ${key} from the Redis cache (cache-aside), so the next recommendation uses fresh data.`);
                await travel([point.rec(rec), point.redis], 800, myToken);
            }

            await sleep(reduceMotion ? 2600 : 1500);
            event.classList.remove("is-on");
            await sleep(350);
            n++;
        }
    };

    const setPlaying = (on) => {
        playing = on;
        toggle.setAttribute("aria-pressed", String(on));
        toggle.innerHTML = on
            ? '<span aria-hidden="true">■</span> Show the recipe'
            : '<span aria-hidden="true">▶</span> Watch it run';
        card.classList.toggle("is-watching", on);
        flow.hidden = !on;
        if (on) {
            run();
        } else {
            token++;
            coolAll();
            event.classList.remove("is-on");
            methodSteps.forEach((li) => li.classList.remove("is-flow-step"));
        }
    };

    toggle.addEventListener("click", () => setPlaying(!playing));

    // Stop when the card is put back in the box (pinned mode) or scrolled away.
    new MutationObserver(() => {
        if (playing && !card.classList.contains("is-active")) setPlaying(false);
    }).observe(card, { attributes: true, attributeFilter: ["class"] });

    if ("IntersectionObserver" in window) {
        new IntersectionObserver(([entry]) => {
            if (playing && !entry.isIntersecting) setPlaying(false);
        }).observe(card);
    }
})();


/* =========================================================
   THE SPECIALS BOARD
   Accessible tabs (arrow keys, Home/End). Switching wipes the
   board, then chalks the new list in. The first list is chalked
   in when the board scrolls into view.
========================================================= */

(() => {
    const board = document.querySelector(".rk-board");
    if (!board) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tabs = [...board.querySelectorAll('[role="tab"]')];
    const panels = tabs.map((t) => document.getElementById(t.getAttribute("aria-controls")));
    let current = 0;
    let busy = false;

    const write = (panel) => {
        if (reduceMotion) return;
        panel.classList.remove("is-writing");
        void panel.offsetWidth; // restart the animation
        panel.classList.add("is-writing");
    };

    const select = (i, focus = false) => {
        if (i === current || busy) {
            if (focus) tabs[i].focus();
            return;
        }
        busy = true;
        tabs.forEach((t, k) => {
            t.setAttribute("aria-selected", String(k === i));
            t.tabIndex = k === i ? 0 : -1;
        });
        if (focus) tabs[i].focus();

        const swap = () => {
            panels[current].hidden = true;
            panels[i].hidden = false;
            current = i;
            board.classList.remove("is-wiping");
            write(panels[i]);
            busy = false;
        };

        if (reduceMotion) return swap();
        board.classList.add("is-wiping");
        setTimeout(swap, 380);
    };

    tabs.forEach((tab, i) => {
        tab.addEventListener("click", () => select(i));
        tab.addEventListener("keydown", (e) => {
            const map = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
            if (!(e.key in map)) return;
            e.preventDefault();
            select((map[e.key] + tabs.length) % tabs.length, true);
        });
    });

    if ("IntersectionObserver" in window && !reduceMotion) {
        // keep the first list blank until the board arrives, so it can be chalked in
        panels[current].classList.add("is-pre");
        const io = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            panels[current].classList.remove("is-pre");
            write(panels[current]);
            io.disconnect();
        }, { threshold: 0.35 });
        io.observe(board);
    }
})();
