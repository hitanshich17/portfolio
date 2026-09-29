/* =========================================
   CONTACT LINKS — edit these
   Leave a value empty ("") to hide that link.
========================================= */

const CONTACT_LINKS = {
    email: "hitanshichhabria17@gmail.com",

    // Google Calendar → Appointment schedule → Share → Website embed.
    // Paste the iframe's src here, e.g.
    // "https://calendar.google.com/calendar/appointments/schedules/XXXX?gv=true"
    calendar: "",

    linkedin: "https://www.linkedin.com/in/hitanshichhabria/",

    github: "https://github.com/hitanshich17",

    // e.g. "files/Hitanshi-Chhabria-Resume.pdf"
    resume: "files/Hitanshi-Chhabria-Resume.pdf"
};


/* =========================================
   ELEMENTS
========================================= */

const fan = document.querySelector(".card-fan");

const fanCards = [
    ...document.querySelectorAll(".fan-card")
];

const progressFill = document.querySelector(
    ".page-progress__fill"
);

const year = document.querySelector("#year");

const experienceTrack = document.querySelector(
    ".experience-track"
);

const previousButton = document.querySelector(
    ".carousel-arrow--left"
);

const nextButton = document.querySelector(
    ".carousel-arrow--right"
);

const experienceCards = [
    ...document.querySelectorAll(".experience-card")
];

const modal = document.querySelector(
    "#experience-modal"
);

const modalBackdrop = document.querySelector(
    ".experience-modal__backdrop"
);

const modalCloseButton = document.querySelector(
    ".experience-modal__close"
);


/* =========================================
   EXPERIENCE CONTENT
========================================= */

const experienceData = {
    sap: {
        number: "01",

        theme: "sap",

        company: "SAP America",

        location: "Newtown Square, PA",

        headline: "Full-Stack Engineer",

        dates: "April 2025 — March 2026",

        type: "Software Engineering",

        introduction:
            "At SAP, I worked across product design, software development, testing and cloud deployment in Client Service Management. I turned fragmented, manual enterprise processes into centralized, usable and intelligent tools.",

        roles: [
            {
                title: "Full-Stack Engineer",
                dates: "Oct 2025 — Mar 2026"
            },
            {
                title: "Software Engineer, Quality Assurance",
                dates: "Apr 2025 — Sep 2025"
            }
        ],

        highlights: [
            "Owned the full lifecycle of the RFx Toolkit: a JavaScript/XML front end backed by SAP HANA spanning 7 core workflows, replacing a manual spreadsheet-and-email process.",

            "Led the migration of a low-code RFP process to a custom SAP BTP application, adopted by 4 divisions and saving $7K a year in third-party licensing.",

            "Engineered a RAG pipeline over 70+ page RFP documents (OpenAI ADA-002 embeddings, cosine-similarity search, purpose-built CDS views) behind a chatbot that cut document review time 75% and query load times 50% for 25+ concurrent users.",

            "Deployed and demoed the toolkit to production, partnering with leadership on product decisions to secure company-wide rollout.",

            "Built an onboarding module in Procurator that made new team-member ramp-up 13x faster, replacing a 6-touchpoint manual process.",

            "Shipped 31 features for CMM, a client-management platform, including a contract-linking tool that made contract generation 40% faster.",

            "Traced a legacy production save-failure to inconsistent variable naming and restored service for 500+ users within 5 hours.",

            "Wrote a Python automation bot on Tricentis Tosca for weekly SAP Ariba regression testing, removing around 500 hours a year of manual QA."
        ],

        tags: [
            "JavaScript",
            "SAP BTP",
            "SAP HANA",
            "CDS",
            "RAG",
            "OpenAI Embeddings",
            "Vector Search",
            "Python",
            "Tricentis Tosca",
            "SAP Ariba",
            "Cloud Deployment"
        ]
    },


    septa: {
        number: "02",

        theme: "septa",

        company: "SEPTA",

        location: "Philadelphia, PA",

        headline: "Data & Systems Analyst",

        dates: "April 2024 — September 2024",

        type: "Data Analytics & Automation",

        introduction:
            "At SEPTA, I built reporting and automation systems that helped teams work with large operational datasets more efficiently and reduced dependence on repetitive manual processes.",

        roles: [
            {
                title: "Data & Systems Analyst",
                dates: "Apr 2024 — Sep 2024"
            }
        ],

        highlights: [
            "Designed interactive Power BI dashboards using DAX and parameterized templates, reducing ad-hoc reporting requests by approximately 35%.",

            "Automated the monthly operations reporting run with Bash, Python and Power Automate, halving report turnaround.",

            "Wrote Python scripts on Unix/Linux to parse raw enterprise data exports into clean tables for the dashboards, halving prep time.",

            "Created reusable reporting systems that made training and employee data easier for internal teams to understand and maintain."
        ],

        tags: [
            "Power BI",
            "DAX",
            "Power Automate",
            "Python",
            "Bash",
            "Unix/Linux",
            "PowerShell",
            "SAP SuccessFactors",
            "Data Visualization",
            "Process Automation",
            "SharePoint"
        ]
    },

    saxbys: {
    number: "03",

    theme: "saxbys",

    company: "Saxbys",

    location: "Drexel University · Philadelphia, PA",

    headline: "Cafe Team Member",

    dates: "May 2026 — Present",

    type: "Hospitality & Customer Experience",

    introduction:
        "Working at Saxbys has strengthened a different side of my problem-solving skills. Every shift requires balancing speed, communication, teamwork and attention to detail while creating a welcoming experience for every guest.",

    roles: [
        {
            title: "Cafe Team Member · Beverage Expert & Culinary",
            dates: "May 2026 — Present"
        }
    ],

    highlights: [
        "Prepared handcrafted beverages and food while maintaining quality and presentation standards.",

        "Delivered friendly customer service in a fast-paced campus café.",

        "Worked collaboratively with teammates during high-volume rush periods.",

        "Maintained food safety, cleanliness and inventory standards.",

        "Strengthened communication, adaptability and time-management skills through daily customer interactions."
    ],

    tags: [
        "Customer Experience",
        "Hospitality",
        "Teamwork",
        "Communication",
        "Time Management",
        "Food Safety",
        "Beverage Preparation",
        "Culinary"
    ]
},


    mrc: {
        number: "04",

        theme: "mrc",

        company: "Math Resource Center",

        location: "Drexel University · Philadelphia, PA",

        headline: "Math & Statistics Tutor",

        dates: "September 2023 — May 2026",

        type: "Education & Student Support",

        introduction:
            "Tutoring taught me how to explain difficult ideas with patience, adapt to the way different people learn and create an environment where asking questions feels safe.",

        roles: [
            {
                title: "Math & Statistics Tutor",
                dates: "Sep 2023 — May 2026"
            }
        ],

        highlights: [
            "Tutored more than 100 students in Calculus, Discrete Mathematics, Linear Algebra and Statistics.",

            "Supported students through individualized explanations, practice problems and targeted office hours.",

            "Co-developed Calculus I learning materials with faculty members.",

            "Led 30+ peer study sessions and helped students develop stronger problem-solving habits.",

            "More than 80% of supported students improved by at least one letter grade."
        ],

        tags: [
            "Calculus",
            "Statistics",
            "Discrete Mathematics",
            "Linear Algebra",
            "Teaching",
            "Communication",
            "Mentorship",
            "Problem Solving"
        ]
    },


    can: {
        number: "05",

        theme: "can",

        company: "Center for Autism & Neurodiversity",

        location: "Drexel University · Philadelphia, PA",

        headline: "Peer Mentor",

        dates: "September 2023 — March 2026",

        type: "Mentorship & Community",

        introduction:
            "As a peer mentor, I helped create a safe and inclusive space where neurodiverse students could receive consistent support while navigating academic responsibilities, social situations and university life.",

        roles: [
            {
                title: "Peer Mentor",
                dates: "Sep 2023 — Mar 2026"
            }
        ],

        highlights: [
            "Provided individualized academic and social support to neurodiverse students.",

            "Managed regular check-ins and helped students identify practical strategies for navigating university life.",

            "Organized 7 campus events that helped Neurodragons members build community and belonging across campus.",

            "Focused on trust, patience, consistency and meeting students where they were."
        ],

        tags: [
            "Peer Mentorship",
            "Community Building",
            "Inclusive Design",
            "Event Planning",
            "Communication",
            "Student Support",
            "Accessibility"
        ]
    }
};


/* =========================================
   CURRENT YEAR
========================================= */

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =========================================
   MOTION PREFERENCES
========================================= */

const supportsFinePointer = window.matchMedia(
    "(pointer: fine)"
).matches;

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


/* =========================================
   HERO CARD MOVEMENT
========================================= */

if (
    fan &&
    fanCards.length &&
    supportsFinePointer &&
    !prefersReducedMotion
) {
    let frameId = null;

    let pointerX = 0;
    let pointerY = 0;


    const updateFanCards = () => {
        const rect = fan.getBoundingClientRect();

        const normalizedX =
            (
                (pointerX - rect.left) /
                rect.width -
                0.5
            ) * 2;

        const normalizedY =
            (
                (pointerY - rect.top) /
                rect.height -
                0.5
            ) * 2;


        fanCards.forEach((card, index) => {
            const depth =
                0.65 +
                index * 0.08;

            card.style.setProperty(
                "--x",
                `${normalizedX * 10 * depth}px`
            );

            card.style.setProperty(
                "--y",
                `${normalizedY * 6 * depth}px`
            );

            card.style.setProperty(
                "--tilt-x",
                `${normalizedY * -4}deg`
            );

            card.style.setProperty(
                "--tilt-y",
                `${normalizedX * 5}deg`
            );
        });


        frameId = null;
    };


    fan.addEventListener(
        "pointermove",
        (event) => {
            pointerX = event.clientX;
            pointerY = event.clientY;

            if (!frameId) {
                frameId =
                    requestAnimationFrame(
                        updateFanCards
                    );
            }
        }
    );


    fan.addEventListener(
        "pointerleave",
        () => {
            fanCards.forEach((card) => {
                card.style.setProperty(
                    "--x",
                    "0px"
                );

                card.style.setProperty(
                    "--y",
                    "0px"
                );

                card.style.setProperty(
                    "--tilt-x",
                    "0deg"
                );

                card.style.setProperty(
                    "--tilt-y",
                    "0deg"
                );
            });
        }
    );
}


/* =========================================
   SITE NAVIGATION
========================================= */

const siteNav =
    document.querySelector(".site-nav");

const siteNavToggle =
    document.querySelector(".site-nav__toggle");

const siteNavLinks = [
    ...document.querySelectorAll(".site-nav__links a")
];

const siteNavSectionLinks =
    siteNavLinks.filter((link) =>
        link.getAttribute("href").startsWith("#")
    );


const setNavOpen = (isOpen) => {
    siteNav?.classList.toggle("is-open", isOpen);

    siteNavToggle?.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    if (siteNavToggle) {
        siteNavToggle.textContent =
            isOpen ? "Close" : "Menu";
    }
};


siteNavToggle?.addEventListener(
    "click",
    () => {
        setNavOpen(
            !siteNav.classList.contains("is-open")
        );
    }
);


siteNavLinks.forEach((link) => {
    link.addEventListener(
        "click",
        () => setNavOpen(false)
    );
});


// Hide the nav while scrolling down, bring it back when scrolling up.
let lastScrollY = window.scrollY;

window.addEventListener(
    "scroll",
    () => {
        const currentScrollY = window.scrollY;

        const scrollingDown =
            currentScrollY > lastScrollY &&
            currentScrollY > 400;

        if (!siteNav?.classList.contains("is-open")) {
            siteNav?.classList.toggle(
                "is-hidden",
                scrollingDown
            );
        }

        lastScrollY = currentScrollY;
    },
    {
        passive: true
    }
);


// Highlight the section currently on screen.
if ("IntersectionObserver" in window) {
    const sectionObserver =
        new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    siteNavSectionLinks.forEach((link) => {
                        link.classList.toggle(
                            "is-active",
                            link.getAttribute("href") ===
                                `#${entry.target.id}`
                        );
                    });
                });
            },
            {
                rootMargin: "-45% 0px -50% 0px"
            }
        );

    siteNavSectionLinks.forEach((link) => {
        const section =
            document.querySelector(
                link.getAttribute("href")
            );

        if (section) {
            sectionObserver.observe(section);
        }
    });
}


/* =========================================
   PAGE PROGRESS
========================================= */

const updateProgress = () => {
    if (!progressFill) {
        return;
    }

    const scrollableHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        scrollableHeight > 0
            ? window.scrollY /
              scrollableHeight
            : 0;

    progressFill.style.height =
        `${Math.min(progress * 100, 100)}%`;
};


updateProgress();


window.addEventListener(
    "scroll",
    updateProgress,
    {
        passive: true
    }
);


window.addEventListener(
    "resize",
    updateProgress
);


/* =========================================
   EXPERIENCE CAROUSEL BUTTONS
========================================= */

const getCarouselScrollAmount = () => {
    const firstCard =
        experienceTrack?.querySelector(
            ".experience-card"
        );

    if (!firstCard) {
        return 400;
    }

    const cardWidth =
        firstCard.getBoundingClientRect().width;

    return cardWidth + 64;
};


previousButton?.addEventListener(
    "click",
    () => {
        experienceTrack?.scrollBy({
            left: -getCarouselScrollAmount(),
            behavior: "smooth"
        });
    }
);


nextButton?.addEventListener(
    "click",
    () => {
        experienceTrack?.scrollBy({
            left: getCarouselScrollAmount(),
            behavior: "smooth"
        });
    }
);


/* =========================================
   CONVERT VERTICAL WHEEL TO HORIZONTAL
========================================= */

experienceTrack?.addEventListener(
    "wheel",
    (event) => {
        const primarilyVertical =
            Math.abs(event.deltaY) >
            Math.abs(event.deltaX);

        if (!primarilyVertical) {
            return;
        }

        event.preventDefault();

        experienceTrack.scrollLeft +=
            event.deltaY;
    },
    {
        passive: false
    }
);


/* =========================================
   CLICK AND DRAG CAROUSEL
========================================= */

if (
    experienceTrack &&
    supportsFinePointer
) {
    let isDragging = false;
    let dragStartX = 0;
    let startingScrollLeft = 0;
    let draggedDistance = 0;

    experienceTrack.addEventListener(
        "pointerdown",
        (event) => {
            isDragging = true;

            dragStartX = event.clientX;

            startingScrollLeft =
                experienceTrack.scrollLeft;

            draggedDistance = 0;
        }
    );

    experienceTrack.addEventListener(
        "pointermove",
        (event) => {
            if (!isDragging) {
                return;
            }

            const distance =
                event.clientX - dragStartX;

            draggedDistance = Math.max(
                draggedDistance,
                Math.abs(distance)
            );

            experienceTrack.scrollLeft =
                startingScrollLeft - distance;
        }
    );

    const finishDragging = () => {
        isDragging = false;
    };

    experienceTrack.addEventListener(
        "pointerup",
        finishDragging
    );

    experienceTrack.addEventListener(
        "pointerleave",
        finishDragging
    );

    experienceTrack.addEventListener(
        "pointercancel",
        finishDragging
    );

    experienceTrack.addEventListener(
        "click",
        (event) => {
            if (draggedDistance > 8) {
                event.preventDefault();
                event.stopPropagation();
            }
        },
        true
    );
}


/* =========================================
   EXPERIENCE MODAL ELEMENTS
========================================= */

const modalNumber =
    document.querySelector("#modal-number");

const modalCompany =
    document.querySelector("#modal-company");

const modalLocation =
    document.querySelector("#modal-location");

const modalHeadline =
    document.querySelector("#modal-headline");

const modalDates =
    document.querySelector("#modal-dates");

const modalType =
    document.querySelector("#modal-type");

const modalIntroduction =
    document.querySelector("#modal-introduction");

const modalRoles =
    document.querySelector("#modal-roles");

const modalRolesSection =
    document.querySelector("#modal-roles-section");

const modalHighlights =
    document.querySelector("#modal-highlights");

const modalTags =
    document.querySelector("#modal-tags");


let previouslyFocusedElement = null;


/* =========================================
   BUILD EXPERIENCE MODAL CONTENT
========================================= */

const populateModal = (
    experience
) => {
    if (
        !modal ||
        !modalNumber ||
        !modalCompany ||
        !modalLocation ||
        !modalHeadline ||
        !modalDates ||
        !modalType ||
        !modalIntroduction ||
        !modalRoles ||
        !modalRolesSection ||
        !modalHighlights ||
        !modalTags
    ) {
        return false;
    }


    modal.dataset.theme =
        experience.theme;

    modalNumber.textContent =
        experience.number;

    modalCompany.textContent =
        experience.company;

    modalLocation.textContent =
        experience.location;

    modalHeadline.textContent =
        experience.headline;

    modalDates.textContent =
        experience.dates;

    modalType.textContent =
        experience.type;

    modalIntroduction.textContent =
        experience.introduction;


    modalRoles.innerHTML = "";

    if (
        experience.roles &&
        experience.roles.length
    ) {
        modalRolesSection.hidden = false;

        experience.roles.forEach(
            (role) => {
                const roleElement =
                    document.createElement("div");

                roleElement.className =
                    "modal-role";

                const roleTitle =
                    document.createElement("p");

                roleTitle.className =
                    "modal-role__title";

                roleTitle.textContent =
                    role.title;


                const roleDates =
                    document.createElement("p");

                roleDates.className =
                    "modal-role__dates";

                roleDates.textContent =
                    role.dates;


                roleElement.append(
                    roleTitle,
                    roleDates
                );

                modalRoles.appendChild(
                    roleElement
                );
            }
        );
    } else {
        modalRolesSection.hidden = true;
    }


    modalHighlights.innerHTML = "";

    experience.highlights.forEach(
        (highlight) => {
            const listItem =
                document.createElement("li");

            listItem.textContent =
                highlight;

            modalHighlights.appendChild(
                listItem
            );
        }
    );


    modalTags.innerHTML = "";

    experience.tags.forEach(
        (tag) => {
            const tagElement =
                document.createElement("span");

            tagElement.className =
                "modal-tag";

            tagElement.textContent =
                tag;

            modalTags.appendChild(
                tagElement
            );
        }
    );


    return true;
};


/* =========================================
   OPEN EXPERIENCE MODAL
========================================= */

const openModal = (
    experienceKey
) => {
    const experience =
        experienceData[experienceKey];

    if (
        !experience ||
        !modal
    ) {
        return;
    }


    const populated =
        populateModal(
            experience
        );

    if (!populated) {
        return;
    }


    previouslyFocusedElement =
        document.activeElement;

    modal.classList.add(
        "is-open"
    );

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

    modalCloseButton?.focus();
};


/* =========================================
   CLOSE EXPERIENCE MODAL
========================================= */

const closeModal = () => {
    if (!modal) {
        return;
    }

    modal.classList.remove(
        "is-open"
    );

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

    previouslyFocusedElement?.focus();
};


/* =========================================
   EXPERIENCE CARD CLICKS
========================================= */

experienceCards.forEach(
    (card) => {
        const button =
            card.querySelector(
                ".experience-card__button"
            );

        if (!button) {
            return;
        }

        button.addEventListener(
            "click",
            () => {
                const experienceKey =
                    card.dataset.experience;

                openModal(
                    experienceKey
                );
            }
        );
    }
);


document
    .querySelectorAll("[data-experience-open]")
    .forEach((button) => {
        button.addEventListener(
            "click",
            () => openModal(
                button.dataset.experienceOpen
            )
        );
    });


/* =========================================
   EXPERIENCE MODAL CLOSE EVENTS
========================================= */

modalCloseButton?.addEventListener(
    "click",
    closeModal
);


modalBackdrop?.addEventListener(
    "click",
    closeModal
);


document.addEventListener(
    "keydown",
    (event) => {
        if (
            event.key === "Escape" &&
            modal?.classList.contains(
                "is-open"
            )
        ) {
            closeModal();
        }
    }
);


/* =========================================
   EXPERIENCE MODAL FOCUS TRAP
========================================= */

modal?.addEventListener(
    "keydown",
    (event) => {
        if (
            event.key !== "Tab" ||
            !modal.classList.contains(
                "is-open"
            )
        ) {
            return;
        }

        const focusableElements = [
            ...modal.querySelectorAll(
                `
                    button:not([disabled]),
                    a[href],
                    input:not([disabled]),
                    textarea:not([disabled]),
                    select:not([disabled]),
                    [tabindex]:not([tabindex="-1"])
                `
            )
        ];

        if (!focusableElements.length) {
            return;
        }

        const firstElement =
            focusableElements[0];

        const lastElement =
            focusableElements[
                focusableElements.length - 1
            ];

        if (
            event.shiftKey &&
            document.activeElement ===
                firstElement
        ) {
            event.preventDefault();
            lastElement.focus();
        } else if (
            !event.shiftKey &&
            document.activeElement ===
                lastElement
        ) {
            event.preventDefault();
            firstElement.focus();
        }
    }
);

/* =========================================
   PROJECT CASE STUDY DATA
========================================= */

const projectCaseStudies = {
    racewalking: {
        theme: "racewalking",

        eyebrow:
            "Senior Design · Humanitarian Award Winner",

        title:
            "Race Walking Android App",

        description:
            "An Android app that turns live data from wearable RWECS shoe sensors into real-time form feedback for race walkers. It won a Humanitarian Award and is published on the Google Play Store for coaches and athletes to use in live competition.",

        role:
            "Android Developer · UI Implementation · BLE Integration",

        timeline:
            "September 2025 — June 2026",

        team:
            "Six-person senior design team",

        tags: [
            "Kotlin",
            "Android Studio",
            "Jetpack Compose",
            "Bluetooth LE",
            "MVVM",
            "StateFlow",
            "GPS",
            "GitHub"
        ],

        images: [
            {
                src:
                    "images/projects/race-walking/device-screen.png",

                alt:
                    "Race Walking Android app device connection and start screen",

                wide: false
            },

            {
                src:
                    "images/projects/race-walking/sessions-screen.png",

                alt:
                    "Race Walking Android app training session history",

                wide: false
            },

            {
                src:
                    "images/projects/race-walking/tracking-screen.png",

                alt:
                    "Race Walking Android app live Loss of Contact tracking screen",

                wide: true
            }
        ],

        sections: [
            {
                title:
                    "The Problem",

                text:
                    "Race walking is judged partly by whether an athlete maintains visible contact with the ground. However, very short Loss of Contact events can be difficult to identify consistently through visual observation alone. Athletes needed a way to receive objective feedback while training instead of discovering issues during competition."
            },

            {
                title:
                    "The Solution",

                text:
                    "Our team developed an Android application that connects to custom RWECS sensors attached to an athlete’s shoes. The application receives live Bluetooth data, measures Loss of Contact duration and immediately warns the athlete when the selected threshold is exceeded.",

                bullets: [
                    "Connects to separate left and right shoe devices.",

                    "Processes incoming sensor data while maintaining a responsive interface.",

                    "Displays current Loss of Contact time and the athlete’s selected threshold.",

                    "Tracks duration, distance and training-session information.",

                    "Stores past sessions so athletes can review their performance.",

                    "Published on the Google Play Store for coaches and athletes to use in live competition."
                ]
            },

            {
                title:
                    "My Contribution",

                text:
                    "I contributed to the Android implementation, interface development and conversion of the existing iOS experience into an Android-compatible product. My work focused on making the application understandable during active training while supporting the technical requirements of live sensor communication.",

                bullets: [
                    "Implemented Android screens and reusable interface components.",

                    "Helped preserve feature consistency between the iOS and Android versions.",

                    "Supported BLE device connection and live-data behavior.",

                    "Developed training-session and Loss of Contact interfaces.",

                    "Participated in debugging, testing and project documentation."
                ]
            },

            {
                title:
                    "Technical Challenges",

                text:
                    "The application had to handle continuous, asynchronous sensor information without blocking the interface or losing synchronization between devices.",

                bullets: [
                    "Processing high-frequency BLE packets in real time.",

                    "Maintaining simultaneous connections to two RWECS devices.",

                    "Keeping paired sensor streams synchronized.",

                    "Supporting background operation and automatic reconnection.",

                    "Creating mock BLE streams when physical hardware was unavailable.",

                    "Testing session behavior independently from the wearable devices."
                ]
            },

            {
                title:
                    "System Architecture",

                text:
                    "The application uses an MVVM architecture with Jetpack Compose. Sensor information travels through Bluetooth services and repositories into ViewModels, where StateFlow exposes processed data reactively to the interface.",

                bullets: [
                    "Presentation layer: Jetpack Compose interface.",

                    "ViewModel layer: application and session logic.",

                    "Service layer: Bluetooth and GPS communication.",

                    "Data layer: repositories and stored session information.",

                    "Android 7.0 / API 24 and higher compatibility."
                ]
            },

            {
                title:
                    "What I Learned",

                text:
                    "This project changed the way I think about software reliability. A small delay, dropped packet or unclear status message matters much more when software is responding to physical activity in real time. I learned to consider connectivity, hardware limitations and user feedback as parts of the same experience."
            }
        ]
    },


    way2go: {
        theme:
            "way2go",

        eyebrow:
            "Philly Codefest 2026 · Machine Learning · Civic Safety",

        title:
            "Way2Go",

        description:
            "An AI-powered navigation system that uses Philadelphia crime data and machine learning to help users compare safer routes.",

        role:
            "Machine Learning Developer · Product Design",

        timeline:
            "Philly Codefest 2026",

        team:
            "Hitanshi Chhabria, Mustafa Bookwala and Armaan Parekh",

        links: [
            {
                label: "GitHub",
                url: "https://github.com/hitanshich17/Way2Go"
            }
        ],

        tags: [
            "Python",
            "Next.js",
            "Google Maps",
            "XGBoost",
            "KDE",
            "Machine Learning",
            "Crime Data",
            "Route Analysis",
            "Data Visualization",
            "UX Design"
        ],

        images: [
            {
                src:
                    "images/projects/way2go/way2go-home.png",

                alt:
                    "Way2Go starting point and destination interface",

                wide: false
            },

            {
                src:
                    "images/projects/way2go/way2go-routes.jpg",

                alt:
                    "Way2Go safer route comparison interface",

                wide: false
            },

            {
                src:
                    "images/projects/way2go/way2go-model.png",

                alt:
                    "Way2Go machine learning and route risk model visualization",

                wide: true
            }
        ],

        sections: [
            {
                title:
                    "The Problem",

                text:
                    "Most navigation applications optimize primarily for speed and distance. In Philadelphia, this can lead people through higher-risk areas even when another route could reduce their exposure with only a small difference in travel time."
            },

            {
                title:
                    "The Idea",

                text:
                    "Way2Go introduces safety as another routing factor. Users choose a starting point, destination and optional travel time. The system analyzes potential route segments and presents alternatives based on predicted crime risk."
            },

            {
                title:
                    "How It Works",

                text:
                    "The model evaluates location and temporal features before generating an aggregated risk score for each route segment.",

                bullets: [
                    "Trained on roughly 43,000 Philadelphia Police Department crime records.",

                    "Uses latitude and longitude data.",

                    "Considers time of day and seasonal patterns.",

                    "Includes crime category information.",

                    "Applies density-based crime analysis through Kernel Density Estimation.",

                    "Uses XGBoost to predict segment-level risk.",

                    "Aggregates segment predictions into a route safety score."
                ]
            },

            {
                title:
                    "Model Performance",

                text:
                    "The final safety calculation combines KDE and XGBoost outputs, giving greater weight to the machine-learning prediction.",

                metrics: [
                    {
                        value:
                            "83%",

                        label:
                            "Model accuracy"
                    },

                    {
                        value:
                            "0.89",

                        label:
                            "AUC-ROC score"
                    },

                    {
                        value:
                            "65%",

                        label:
                            "XGBoost weighting"
                    },

                    {
                        value:
                            "35%",

                        label:
                            "KDE weighting"
                    }
                ]
            },

            {
                title:
                    "Potential Impact",

                text:
                    "Way2Go is designed to reduce avoidable exposure to higher-risk route segments while keeping the navigation experience practical.",

                bullets: [
                    "Helps users compare safety alongside travel time.",

                    "Could prevent two to four high-risk segment exposures per trip.",

                    "Supports safer walking and commuting decisions.",

                    "Could provide broader geographic insights as adoption increases.",

                    "Creates opportunities for government and public-safety partnerships."
                ]
            },

            {
                title:
                    "Limitations and Next Steps",

                text:
                    "The current model relies on historical crime information rather than live reports. Crime data is also sensitive and must be presented carefully so that the product informs users without creating unnecessary fear or reinforcing harmful assumptions.",

                bullets: [
                    "Expand the dataset beyond the initial Philadelphia coverage.",

                    "Introduce opt-in live incident reporting.",

                    "Partner with the City of Philadelphia for more current information.",

                    "Conduct broader pilot testing.",

                    "Explore integration as an overlay for existing navigation systems."
                ]
            },

            {
                title:
                    "What I Learned",

                text:
                    "Way2Go taught me that responsible machine learning requires more than a high accuracy score. The meaning, age and sensitivity of the data all affect how a prediction should be communicated. The interface has to help users make informed choices without presenting risk as certainty."
            }
        ]
    },


    cardwise: {
        theme:
            "cardwise",

        eyebrow:
            "Full-Stack Development · Fintech",

        title:
            "CardWise",

        description:
            "A personalized credit-card rewards platform that helps users plan their spending, compare the cards they own and identify the strongest cashback option for each category.",

        role:
            "Full-Stack Developer · Product Design",

        timeline:
            "September — December 2025",

        team:
            "Team project",

        tags: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "REST API",
            "Vercel",
            "Recommendation Logic",
            "Responsive Design",
            "Fintech"
        ],

        images: [
            {
                src:
                    "images/projects/cardwise/dashboard.png",

                alt:
                    "CardWise dashboard showing planned monthly spending, categories and saved cards",

                wide: true
            },

            {
                src:
                    "images/projects/cardwise/my-cards.png",

                alt:
                    "CardWise My Cards page showing the credit cards owned by the user",

                wide: false
            },

            {
                src:
                    "images/projects/cardwise/category-ranking.png",

                alt:
                    "CardWise personalized card recommendations by spending category",

                wide: false
            },

            {
                src:
                    "images/projects/cardwise/global-ranking.png",

                alt:
                    "CardWise global credit-card ranking filtered by category and cashback rate",

                wide: true
            }
        ],

        sections: [
            {
                title:
                    "The Problem",

                text:
                    "Credit-card rewards are difficult to compare because every card has different cashback rates, bonus categories, annual fees and eligibility rules. People often use whichever card is most convenient instead of the card that provides the strongest reward for a particular purchase."
            },

            {
                title:
                    "The Idea",

                text:
                    "CardWise brings spending plans and credit-card reward information into one place. Users can save the cards they own, enter their expected monthly spending and see which card performs best for each category."
            },

            {
                title:
                    "The Dashboard",

                text:
                    "The dashboard gives users a quick overview of their monthly plan and saved cards before they move into more detailed recommendations.",

                bullets: [
                    "Displays total planned monthly spending.",

                    "Summarizes the number of spending categories in the plan.",

                    "Shows how many credit cards the user has saved.",

                    "Breaks the monthly budget into categories such as travel, groceries, gas, online purchases and pharmacy spending.",

                    "Provides direct navigation to spending and card-management tools."
                ]
            },

            {
                title:
                    "Personalized Recommendations",

                text:
                    "The My Cards experience compares only the cards owned by the current user. It identifies which saved card provides the strongest reward for each spending category.",

                bullets: [
                    "Users can add, remove or update the cards they own.",

                    "Each card displays its issuing bank and annual fee.",

                    "Cards are connected to their strongest spending categories.",

                    "The interface surfaces the best cashback-equivalent rate for each category.",

                    "Expandable rows reveal additional reward information without overwhelming the main view."
                ]
            },

            {
                title:
                    "Global Ranking",

                text:
                    "The global ranking lets users explore every card in the database, including cards they do not currently own. This makes CardWise useful both for optimizing current spending and researching future cards.",

                bullets: [
                    "Filters cards by spending category.",

                    "Sorts cards by their highest cashback-equivalent rate.",

                    "Displays bank, strongest category, reward rate and annual fee.",

                    "Makes reward comparisons easier through one consistent ranking system."
                ]
            },

            {
                title:
                    "What I Built",

                text:
                    "I worked across the product experience and full-stack implementation, connecting user accounts, spending plans, owned cards and reward information into a responsive application.",

                bullets: [
                    "Developed responsive pages for the dashboard, saved cards and global rankings.",

                    "Implemented authenticated user experiences and protected application routes.",

                    "Connected spending categories to card-level reward data.",

                    "Created personalized recommendation and ranking behavior.",

                    "Designed interfaces that communicate detailed financial comparisons without making the experience feel overly technical."
                ]
            },

            {
                title:
                    "Results",

                text:
                    "Built on a React/TypeScript front end and a Node.js/Express REST API with MongoDB, deployed on Vercel and tested with 15+ users.",

                metrics: [
                    {
                        value:
                            "50–60",

                        label:
                            "Cards and their category rules"
                    },

                    {
                        value:
                            "88%",

                        label:
                            "Recommendation accuracy"
                    },

                    {
                        value:
                            "<1s",

                        label:
                            "To answer which card to use"
                    }
                ]
            },

            {
                title:
                    "What I Learned",

                text:
                    "CardWise taught me that recommendation systems are most useful when their complexity remains behind the interface. Users should not have to manually compare dozens of reward structures—the product should translate that information into a clear and trustworthy decision."
            }
        ]
    },


    skinvidhi: {
        theme:
            "skinvidhi",

        eyebrow:
            "In progress · Full-Stack & AI",

        title:
            "SkinVidhi",

        description:
            "Answer a one-minute quiz and get a morning and night skincare routine built from products across every brand, within your budget.",

        role:
            "Designer & Developer",

        timeline:
            "September 2026 — Present",

        team:
            "Solo project",

        links: [
            {
                label: "GitHub",
                url: "https://github.com/hitanshich17/skinvidhi"
            }
        ],

        tags: [
            "Java 21",
            "Spring Boot",
            "Python",
            "FastAPI",
            "PostgreSQL",
            "pgvector",
            "Redis",
            "Docker",
            "AWS",
            "Terraform"
        ],

        images: [],

        sections: [
            {
                title:
                    "The Problem",

                text:
                    "Skincare brands build routines out of their own product lines. Comparing across brands means reading ingredient lists, prices and sizes one product at a time, which most people simply don't have time for."
            },

            {
                title:
                    "The Idea",

                text:
                    "SkinVidhi compares them all. A short quiz captures skin type, concerns and budget, and the app assembles a morning and night routine from whichever products fit best, regardless of brand."
            },

            {
                title:
                    "How It's Built",

                text:
                    "Two services work together behind the quiz, and everything runs locally in Docker.",

                bullets: [
                    "A Java 21 / Spring Boot core API handles products, ingredients, the quiz, routine rules, replacements and feedback.",

                    "A Python / FastAPI AI service handles label reading, embeddings, explanations and ranking.",

                    "PostgreSQL with pgvector stores products and canonical ingredients and powers similarity search.",

                    "Redis caches repeated lookups; S3 and SQS handle label images and asynchronous scan jobs.",

                    "Production is planned for a single EC2 instance provisioned with Terraform, with CI running Java tests, Python tests and Docker builds."
                ]
            },

            {
                title:
                    "The Data",

                text:
                    "Routines are only as good as the ingredient data behind them.",

                bullets: [
                    "Imports around 20,000 products with ingredient lists from Open Beauty Facts and normalizes them.",

                    "A curated US catalog records every product's full ingredient list, retailer offers, prices and sizes.",

                    "The catalog import rejects the whole batch, listing every problem, if any row is invalid."
                ]
            },

            {
                title:
                    "Where It's At",

                text:
                    "The foundation, ingredient pipeline and US product catalog are done. Next up are the quiz and routine rules engine, replacements and feedback, AI label reading, and the front end."
            },

            {
                title:
                    "Designing Responsibly",

                text:
                    "Skin is personal, and a routine builder shouldn't pretend to be a doctor. SkinVidhi says up front that it is not medical advice, and that severe or unusual skin problems should be seen by a dermatologist."
            }
        ]
    },


    voyago: {
        theme:
            "voyago",

        eyebrow:
            "Course Project · Full-Stack Development",

        title:
            "Voyago",

        description:
            "A collaborative travel-planning app where friends can build a trip together: itinerary, stays, transport and conversation in one place.",

        role:
            "Full-Stack Developer",

        timeline:
            "Drexel CS 478",

        team:
            "Three-person team",

        links: [
            {
                label: "GitHub",
                url: "https://github.com/hitanshich17/Voyago"
            }
        ],

        tags: [
            "React",
            "TypeScript",
            "Material UI",
            "Node.js",
            "Express",
            "MongoDB",
            "Socket.IO",
            "Google Maps",
            "Vitest"
        ],

        images: [],

        sections: [
            {
                title:
                    "The Problem",

                text:
                    "Planning a group trip usually means a group chat, a shared spreadsheet, a maps tab and a dozen booking links. Decisions get lost and nobody has the full picture."
            },

            {
                title:
                    "What It Does",

                text:
                    "Voyago keeps the whole trip in one shared space.",

                bullets: [
                    "Create trips and invite friends, with access controls for who can view and edit.",

                    "Plan accommodation and transport alongside a shared trip calendar.",

                    "See places and routes on an embedded Google Map.",

                    "Chat with your travel group in real time over Socket.IO.",

                    "Connect with friends through user relationships."
                ]
            },

            {
                title:
                    "How It's Built",

                bullets: [
                    "React and TypeScript front end built with Vite and Material UI.",

                    "Express 5 and TypeScript back end with a MongoDB database.",

                    "Cookie-based sessions with Argon2 password hashing.",

                    "Back-end tests written with Vitest."
                ]
            }
        ]
    },


    rfx: {
        theme:
            "rfx",

        eyebrow:
            "SAP America · Enterprise Software",

        title:
            "RFx Toolkit",

        description:
            "An SAP BTP application that brings the request-for-proposal process into one place, with a RAG-powered chatbot that reads 70+ page RFPs so people don't have to.",

        role:
            "Full-Stack Engineer",

        timeline:
            "October 2025 — March 2026",

        team:
            "SAP America",

        tags: [
            "SAP BTP",
            "CAP",
            "SAP HANA",
            "JavaScript",
            "RAG",
            "OpenAI ADA-002",
            "Vector Search",
            "Cloud Deployment"
        ],

        images: [],

        sections: [
            {
                title:
                    "The Problem",

                text:
                    "Responding to requests for proposals ran on spreadsheets, email and a low-code app with serious scalability and workflow gaps, plus a recurring third-party license. Reviewing a single 70+ page RFP took a long time."
            },

            {
                title:
                    "What I Built",

                text:
                    "I architected and shipped the RFx Toolkit and owned the complete system lifecycle, from data model to production release.",

                bullets: [
                    "Researched the existing low-code process and identified its scalability and workflow gaps.",

                    "Architected a JavaScript/XML front end backed by SAP HANA covering 7 core workflows.",

                    "Engineered a RAG pipeline that chunks and embeds RFP documents with OpenAI ADA-002 and retrieves them through cosine-similarity vector search and purpose-built CDS views.",

                    "Deployed to production on SAP BTP and demoed it to leadership, partnering on product decisions to secure company-wide approval and rollout."
                ]
            },

            {
                title:
                    "Impact",

                text:
                    "The toolkit was adopted by 4 divisions and replaced a paid third-party app.",

                metrics: [
                    {
                        value:
                            "75%",

                        label:
                            "Less document review time"
                    },

                    {
                        value:
                            "50%",

                        label:
                            "Faster query load times"
                    },

                    {
                        value:
                            "4",

                        label:
                            "Divisions adopted it"
                    },

                    {
                        value:
                            "$7K",

                        label:
                            "Saved every year"
                    }
                ]
            }
        ]
    },


    portfolio: {
        theme:
            "portfolio",

        eyebrow:
            "Design & Front-End Development",

        title:
            "This Portfolio",

        description:
            "The site you are on right now: designed and hand-built without a framework, so every interaction reflects a decision I made.",

        role:
            "Designer & Developer",

        timeline:
            "2026",

        team:
            "Solo project",

        links: [
            {
                label: "GitHub",
                url: "https://github.com/hitanshich17/portfolio"
            }
        ],

        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "Accessibility",
            "Responsive Design",
            "Interaction Design"
        ],

        images: [],

        sections: [
            {
                title:
                    "The Idea",

                text:
                    "I wanted a portfolio that felt like me rather than a template: warm colors, bold type and small moments of play, while still being quick to scan for someone who only has a minute."
            },

            {
                title:
                    "Design Decisions",

                bullets: [
                    "Every workplace and project card is illustrated with CSS instead of stock imagery, so each one carries its own personality.",

                    "A bold display typeface paired with a quiet sans-serif keeps headlines expressive and body text readable.",

                    "Case studies open in place, so visitors never lose their spot on the page.",

                    "Motion is subtle and turns off for anyone who prefers reduced motion."
                ]
            },

            {
                title:
                    "Built for Everyone",

                text:
                    "Dialogs trap focus and close with Escape, controls are real buttons, and layouts adapt from wide screens down to small phones."
            }
        ]
    }
};
/* =========================================
   PROJECT MODAL ELEMENTS
========================================= */

const projectModal =
    document.querySelector(
        "#project-modal"
    );

const projectModalPanel =
    document.querySelector(
        ".project-modal__panel"
    );

const projectModalBackdrop =
    document.querySelector(
        ".project-modal__backdrop"
    );

const projectModalClose =
    document.querySelector(
        ".project-modal__close"
    );

const projectModalEyebrow =
    document.querySelector(
        "#project-modal-eyebrow"
    );

const projectModalTitle =
    document.querySelector(
        "#project-modal-title"
    );

const projectModalDescription =
    document.querySelector(
        "#project-modal-description"
    );

const projectModalGallery =
    document.querySelector(
        "#project-modal-gallery"
    );

const projectModalRole =
    document.querySelector(
        "#project-modal-role"
    );

const projectModalTimeline =
    document.querySelector(
        "#project-modal-timeline"
    );

const projectModalTeam =
    document.querySelector(
        "#project-modal-team"
    );

const projectModalTags =
    document.querySelector(
        "#project-modal-tags"
    );

const projectModalSections =
    document.querySelector(
        "#project-modal-sections"
    );

const projectOpenButtons = [
    ...document.querySelectorAll(
        "[data-project]"
    )
];

let projectPreviouslyFocused = null;


/* =========================================
   BUILD PROJECT GALLERY
========================================= */

const buildProjectGallery = (
    images = []
) => {
    if (!projectModalGallery) {
        return;
    }

    projectModalGallery.innerHTML = "";

    projectModalGallery.hidden =
        !images.length;

    images.forEach(
        (image) => {
            const figure =
                document.createElement(
                    "figure"
                );

            figure.className =
                "project-gallery-item";

            if (image.wide) {
                figure.classList.add(
                    "project-gallery-item--wide"
                );
            }


            const imageElement =
                document.createElement(
                    "img"
                );

            imageElement.src =
                image.src;

            imageElement.alt =
                image.alt;

            imageElement.loading =
                "lazy";

            figure.appendChild(
                imageElement
            );

            projectModalGallery.appendChild(
                figure
            );
        }
    );
};


/* =========================================
   BUILD PROJECT TAGS
========================================= */

const buildProjectTags = (
    tags = []
) => {
    if (!projectModalTags) {
        return;
    }

    projectModalTags.innerHTML = "";

    tags.forEach(
        (tag) => {
            const tagElement =
                document.createElement(
                    "span"
                );

            tagElement.className =
                "project-modal__tag";

            tagElement.textContent =
                tag;

            projectModalTags.appendChild(
                tagElement
            );
        }
    );
};


/* =========================================
   BUILD PROJECT LINKS
========================================= */

const projectModalLinks =
    document.querySelector(
        "#project-modal-links"
    );

const buildProjectLinks = (
    links = []
) => {
    if (!projectModalLinks) {
        return;
    }

    projectModalLinks.innerHTML = "";

    projectModalLinks
        .closest(".project-meta-group")
        .hidden = !links.length;

    links.forEach(
        (link) => {
            const anchor =
                document.createElement(
                    "a"
                );

            anchor.className =
                "project-modal__link";

            anchor.href =
                link.url;

            anchor.target =
                "_blank";

            anchor.rel =
                "noopener";

            anchor.textContent =
                `${link.label} ↗`;

            projectModalLinks.appendChild(
                anchor
            );
        }
    );
};


/* =========================================
   BUILD PROJECT METRICS
========================================= */

const buildProjectMetrics = (
    metrics = []
) => {
    const metricsContainer =
        document.createElement(
            "div"
        );

    metricsContainer.className =
        "project-metrics";


    metrics.forEach(
        (metric) => {
            const metricCard =
                document.createElement(
                    "div"
                );

            metricCard.className =
                "project-metric";


            const value =
                document.createElement(
                    "p"
                );

            value.className =
                "project-metric__value";

            value.textContent =
                metric.value;


            const label =
                document.createElement(
                    "p"
                );

            label.className =
                "project-metric__label";

            label.textContent =
                metric.label;


            metricCard.append(
                value,
                label
            );

            metricsContainer.appendChild(
                metricCard
            );
        }
    );

    return metricsContainer;
};


/* =========================================
   BUILD PROJECT SECTIONS
========================================= */

const buildProjectSections = (
    sections = []
) => {
    if (!projectModalSections) {
        return;
    }

    projectModalSections.innerHTML = "";

    sections.forEach(
        (section, index) => {
            const sectionElement =
                document.createElement(
                    "section"
                );

            sectionElement.className =
                "project-case-section";


            const number =
                document.createElement(
                    "p"
                );

            number.className =
                "project-case-section__number";

            number.textContent =
                String(
                    index + 1
                ).padStart(
                    2,
                    "0"
                );


            const content =
                document.createElement(
                    "div"
                );

            content.className =
                "project-case-section__content";


            const heading =
                document.createElement(
                    "h3"
                );

            heading.textContent =
                section.title;


            content.appendChild(
                heading
            );


            if (section.text) {
                const paragraph =
                    document.createElement(
                        "p"
                    );

                paragraph.textContent =
                    section.text;

                content.appendChild(
                    paragraph
                );
            }


            if (
                section.bullets &&
                section.bullets.length
            ) {
                const list =
                    document.createElement(
                        "ul"
                    );

                section.bullets.forEach(
                    (bullet) => {
                        const item =
                            document.createElement(
                                "li"
                            );

                        item.textContent =
                            bullet;

                        list.appendChild(
                            item
                        );
                    }
                );

                content.appendChild(
                    list
                );
            }


            if (
                section.metrics &&
                section.metrics.length
            ) {
                content.appendChild(
                    buildProjectMetrics(
                        section.metrics
                    )
                );
            }


            sectionElement.append(
                number,
                content
            );

            projectModalSections.appendChild(
                sectionElement
            );
        }
    );
};


/* =========================================
   POPULATE PROJECT MODAL
========================================= */

const populateProjectModal = (
    project
) => {
    if (
        !projectModal ||
        !projectModalEyebrow ||
        !projectModalTitle ||
        !projectModalDescription ||
        !projectModalRole ||
        !projectModalTimeline ||
        !projectModalTeam
    ) {
        return false;
    }


    projectModal.dataset.theme =
        project.theme;

    projectModalEyebrow.textContent =
        project.eyebrow;

    projectModalTitle.textContent =
        project.title;

    projectModalDescription.textContent =
        project.description;

    projectModalRole.textContent =
        project.role;

    projectModalTimeline.textContent =
        project.timeline;

    projectModalTeam.textContent =
        project.team;


    buildProjectGallery(
        project.images
    );

    buildProjectTags(
        project.tags
    );

    buildProjectLinks(
        project.links
    );

    buildProjectSections(
        project.sections
    );


    return true;
};


/* =========================================
   OPEN PROJECT MODAL
========================================= */

const openProjectModal = (
    projectKey
) => {
    const project =
        projectCaseStudies[
            projectKey
        ];

    if (
        !project ||
        !projectModal
    ) {
        return;
    }


    const populated =
        populateProjectModal(
            project
        );

    if (!populated) {
        return;
    }


    projectPreviouslyFocused =
        document.activeElement;


    projectModal.classList.add(
        "is-open"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );


    if (projectModalPanel) {
        projectModalPanel.scrollTop =
            0;
    }


    window.setTimeout(
        () => {
            projectModalClose?.focus();
        },
        50
    );
};


/* =========================================
   CLOSE PROJECT MODAL
========================================= */

const closeProjectModal = () => {
    if (!projectModal) {
        return;
    }


    projectModal.classList.remove(
        "is-open"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );


    projectPreviouslyFocused?.focus();
};


/* =========================================
   PROJECT OPEN BUTTON EVENTS
========================================= */

projectOpenButtons.forEach(
    (button) => {
        button.addEventListener(
            "click",
            () => {
                openProjectModal(
                    button.dataset.project
                );
            }
        );
    }
);


/* =========================================
   PROJECT CLOSE EVENTS
========================================= */

projectModalClose?.addEventListener(
    "click",
    closeProjectModal
);

projectModalBackdrop?.addEventListener(
    "click",
    closeProjectModal
);

document.addEventListener(
    "keydown",
    (event) => {
        if (
            event.key ===
                "Escape" &&
            projectModal?.classList.contains(
                "is-open"
            )
        ) {
            closeProjectModal();
        }
    }
);
/* =========================================
   PROJECT MODAL FOCUS TRAP
========================================= */

projectModal?.addEventListener(
    "keydown",
    (event) => {
        if (
            event.key !== "Tab" ||
            !projectModal.classList.contains(
                "is-open"
            )
        ) {
            return;
        }

        const focusableElements = [
            ...projectModal.querySelectorAll(
                `
                    button:not([disabled]),
                    a[href],
                    input:not([disabled]),
                    textarea:not([disabled]),
                    select:not([disabled]),
                    [tabindex]:not([tabindex="-1"])
                `
            )
        ];

        if (!focusableElements.length) {
            return;
        }

        const firstElement =
            focusableElements[0];

        const lastElement =
            focusableElements[
                focusableElements.length - 1
            ];

        if (
            event.shiftKey &&
            document.activeElement ===
                firstElement
        ) {
            event.preventDefault();
            lastElement.focus();
        } else if (
            !event.shiftKey &&
            document.activeElement ===
                lastElement
        ) {
            event.preventDefault();
            firstElement.focus();
        }
    }
);


/* =========================================
   CONTACT
========================================= */

document
    .querySelectorAll("[data-contact]")
    .forEach((item) => {
        const url =
            CONTACT_LINKS[item.dataset.contact];

        const link =
            item.querySelector("a");

        if (!url || !link) {
            item.hidden = true;
            return;
        }

        link.href = url;
    });


const calendarOpenButton =
    document.querySelector("[data-calendar-open]");

const calendarFallback =
    document.querySelector("[data-calendar-fallback]");

const calendarFrame =
    document.querySelector("[data-calendar-frame]");

if (
    CONTACT_LINKS.calendar &&
    calendarOpenButton &&
    calendarFrame
) {
    calendarOpenButton.hidden = false;

    if (calendarFallback) {
        calendarFallback.hidden = true;
    }

    // The booking iframe only loads when asked for, so it doesn't slow the page down.
    calendarOpenButton.addEventListener(
        "click",
        () => {
            if (!calendarFrame.firstChild) {
                const iframe =
                    document.createElement("iframe");

                iframe.src = CONTACT_LINKS.calendar;
                iframe.title = "Book a call with Hitanshi";
                iframe.loading = "lazy";

                calendarFrame.appendChild(iframe);
            }

            calendarFrame.hidden = false;
            calendarOpenButton.hidden = true;

            calendarFrame
                .closest(".contact-card")
                ?.classList.add("is-expanded");
        }
    );
}


const copyEmailButton =
    document.querySelector("[data-copy-email]");

const copyEmailStatus =
    document.querySelector(".contact-card__status");

copyEmailButton?.addEventListener(
    "click",
    async () => {
        try {
            await navigator.clipboard.writeText(
                CONTACT_LINKS.email
            );

            copyEmailButton.textContent = "Copied ✓";

            if (copyEmailStatus) {
                copyEmailStatus.textContent =
                    "Email copied to your clipboard.";
            }
        } catch {
            if (copyEmailStatus) {
                copyEmailStatus.textContent =
                    `Couldn’t copy. My email is ${CONTACT_LINKS.email}`;
            }
        }

        window.setTimeout(
            () => {
                copyEmailButton.textContent = "Copy email";

                if (copyEmailStatus) {
                    copyEmailStatus.textContent = "";
                }
            },
            2500
        );
    }
);
