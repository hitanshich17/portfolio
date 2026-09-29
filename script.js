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

        headline: "Full-Stack Software Engineer",

        dates: "April 2025 — March 2026",

        type: "Software Engineering",

        introduction:
            "At SAP, I worked across product design, software development, testing and cloud deployment. I helped transform fragmented enterprise processes into more centralized, usable and intelligent tools.",

        roles: [
            {
                title: "Full-Stack Software Engineer",
                dates: "Oct 2025 — Mar 2026"
            },
            {
                title: "Software Developer & Tester",
                dates: "Apr 2025 — Sep 2025"
            }
        ],

        highlights: [
            "Architected and shipped the RFx Toolkit, a CAP application on SAP BTP that reduced RFP turnaround time by approximately 75%.",

            "Delivered the complete system lifecycle, including SAP HANA data modeling, backend services, secure cloud deployment and production release.",

            "Integrated LLM-powered summarization and semantic analysis into the backend to support automated RFP evaluation.",

            "Engineered contract-linking and cloning workflows in Power Apps, reducing contract creation time by approximately 40%.",

            "Diagnosed a production data-loss issue caused by Power Apps delegation limits and restored data integrity for an application serving more than 500 users."
        ],

        tags: [
            "JavaScript",
            "SAP BTP",
            "SAP HANA",
            "CAP",
            "Power Apps",
            "Power Automate",
            "JUnit",
            "LLM Integration",
            "Cloud Deployment",
            "Full-Stack Development"
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

            "Automated monthly report generation with Power Automate, cutting processing time by approximately 50%.",

            "Built Python and PowerShell scripts to parse and structure raw SAP SuccessFactors information.",

            "Created reusable reporting systems that made training and employee data easier for internal teams to understand and maintain."
        ],

        tags: [
            "Power BI",
            "DAX",
            "Power Automate",
            "Python",
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

            "Proactively organized peer study sessions and helped students develop stronger problem-solving habits.",

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

            "Designed engaging events that encouraged Neurodragons members to participate in the wider campus community.",

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
            "Senior Design Project · Android Development",

        title:
            "Race Walking Android App",

        description:
            "An Android application that transforms live data from wearable RWECS sensors into clear, real-time feedback for race-walking athletes.",

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

                    "Stores past sessions so athletes can review their performance."
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
            "Machine Learning · Safety Navigation",

        title:
            "Way2Go",

        description:
            "An AI-powered navigation system that uses Philadelphia crime data and machine learning to help users compare safer routes.",

        role:
            "Machine Learning Developer · Product Design",

        timeline:
            "2026",

        team:
            "Hitanshi Chhabria, Mustafa Bookwala and Armaan Parekh",

        tags: [
            "Python",
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
                    "images/projects/way2go/way2go-routes.png",

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
                            "89%",

                        label:
                            "Model accuracy"
                    },

                    {
                        value:
                            "83%",

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
            "2025",

        team:
            "Team project",

        tags: [
            "React",
            "TypeScript",
            "Next.js",
            "Node.js",
            "Authentication",
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
                    "What I Learned",

                text:
                    "CardWise taught me that recommendation systems are most useful when their complexity remains behind the interface. Users should not have to manually compare dozens of reward structures—the product should translate that information into a clear and trustworthy decision."
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


            const paragraph =
                document.createElement(
                    "p"
                );

            paragraph.textContent =
                section.text;


            content.append(
                heading,
                paragraph
            );


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