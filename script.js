// -------------------------
// Translations (kept intact)
// -------------------------
const translations = {
    en: {
        settings: "Settings",
        theme: "Theme",
        language: "Language",
        light: "Light",
        dark: "Dark",
        biography: "Biography",
        inventions: "Inventions",
        art: "Art",
        legacy: "Legacy",
        heroTitle: "Leonardo<br>da Vinci",
        heroDates: "1452 — 1519",
        heroDesc: "Renaissance polymath who embodied the fusion of art, science, and innovation. A visionary whose notebooks contained designs for flying machines, anatomical studies, and masterpieces that continue to inspire humanity five centuries later.",
        biographyTitle: "Biography",
        birth1452: "Birth in Vinci",
        birthDesc: "Born on April 15 in the hilltop town of Vinci, Republic of Florence. The illegitimate son of a successful notary and a local woman, marking the beginning of an extraordinary life.",
        apprentice1466: "Apprenticeship Begins",
        apprenticeDesc: "At age 14, became apprentice to the renowned artist Andrea del Verrocchio in Florence, learning painting, sculpture, metalwork, and mechanical arts in one of the city's most prestigious workshops.",
        milan1482: "Milan Court",
        milanDesc: "Moved to Milan under the patronage of Ludovico Sforza, where he served as court artist, engineer, and inventor, creating military designs, architectural plans, and court entertainments.",
        mona1503: "The Mona Lisa",
        monaDesc: "Began work on his most famous portrait, revolutionizing the art of painting with innovative techniques and psychological depth that continue to captivate viewers worldwide.",
        death1519: "Final Chapter",
        deathDesc: "Died on May 2 at Château du Clos Lucé in Amboise, France, under the patronage of King Francis I, leaving behind thousands of pages of notes and drawings that revealed his genius to the world.",
        inventionsTitle: "Inventions",
        aerialScrew: "Aerial Screw",
        aerialDesc: "Designed a helicopter-like flying machine with a helical rotor, demonstrating his understanding of aerodynamics centuries before powered flight became reality.",
        armoredTank: "Armored Tank",
        tankDesc: "Conceptualized a mobile fortress powered by cranks, featuring armor plating and gun ports—essentially the first tank design in history.",
        parachute: "Parachute Design",
        parachuteDesc: "Created a pyramid-shaped parachute made of linen, which modern testing has proven to be remarkably effective and safe for descent.",
        robotKnight: "Robotic Knight",
        robotDesc: "Built a mechanical automaton that could sit, stand, and move its arms independently, representing pioneering work in robotics and automation.",
        hydraulic: "Hydraulic Systems",
        hydraulicDesc: "Designed complex water management systems including canals, locks, and irrigation networks that influenced civil engineering for generations.",
        bridge: "Multi-Level Bridge",
        bridgeDesc: "Proposed innovative bridge designs with multiple levels for different types of traffic, anticipating modern urban planning concepts.",
        artTitle: "Masterworks",
        monaLisa: "Mona Lisa",
        monaArtDesc: "The world's most famous portrait, showcasing sfumato technique and enigmatic expression. Housed in the Louvre, it represents the pinnacle of Renaissance portraiture.",
        lastSupper: "The Last Supper",
        supperDesc: "Revolutionary fresco depicting Christ's final meal with mathematical precision in perspective and profound emotional narrative, despite its deteriorating condition.",
        vitruvian: "Vitruvian Man",
        vitruvianDesc: "Iconic drawing demonstrating ideal human proportions, perfectly embodying Renaissance fusion of art, mathematics, and scientific observation.",
        ladyErmine: "Lady with an Ermine",
        ermineDesc: "Portrait of Cecilia Gallerani showcasing innovative three-quarter pose and masterful rendering of light, texture, and psychological presence.",
        legacyTitle: "Legacy",
        scientific: "Scientific Method",
        scientificDesc: "His approach of observation, hypothesis, and experimentation laid crucial groundwork for modern scientific methodology and empirical research practices.",
        interdisciplinary: "Interdisciplinary Innovation",
        interDesc: "Demonstrated how art and science could complement each other, inspiring today's approach to creative problem-solving across multiple fields.",
        anatomical: "Anatomical Revolution",
        anatomicalDesc: "His detailed dissections and drawings advanced medical understanding, establishing artistic documentation as a tool for scientific discovery.",
        modern: "Modern Inspiration",
        modernDesc: "Continues to inspire contemporary artists, engineers, and inventors worldwide, representing the ideal of lifelong learning and boundless curiosity."
    },
    es: {
        settings: "Configuración",
        theme: "Tema",
        language: "Idioma",
        light: "Claro",
        dark: "Oscuro",
        biography: "Biografía",
        inventions: "Inventos",
        art: "Arte",
        legacy: "Legado",
        heroTitle: "Leonardo<br>da Vinci",
        heroDates: "1452 — 1519",
        heroDesc: "Polímata renacentista que encarnó la fusión del arte, la ciencia y la innovación. Un visionario cuyos cuadernos contenían diseños de máquinas voladoras, estudios anatómicos y obras maestras que continúan inspirando a la humanidad cinco siglos después.",
        biographyTitle: "Biografía",
        birth1452: "Nacimiento en Vinci",
        birthDesc: "Nació el 15 de abril en la ciudad montañosa de Vinci, República de Florencia. Hijo ilegítimo de un notario exitoso y una mujer local, marcando el comienzo de una vida extraordinaria.",
        apprentice1466: "Comienza el Aprendizaje",
        apprenticeDesc: "A los 14 años, se convirtió en aprendiz del renombrado artista Andrea del Verrocchio en Florencia, aprendiendo pintura, escultura, metalurgia y artes mecánicas en uno de los talleres más prestigiosos de la ciudad.",
        milan1482: "Corte de Milán",
        milanDesc: "Se trasladó a Milán bajo el patrocinio de Ludovico Sforza, donde sirvió como artista de la corte, ingeniero e inventor, creando diseños militares, planos arquitectónicos y entretenimientos cortesanos.",
        mona1503: "La Mona Lisa",
        monaDesc: "Comenzó a trabajar en su retrato más famoso, revolucionando el arte de la pintura con técnicas innovadoras y profundidad psicológica que continúan cautivando a espectadores de todo el mundo.",
        death1519: "Capítulo Final",
        deathDesc: "Murió el 2 de mayo en el Château du Clos Lucé en Amboise, Francia, bajo el patrocinio del Rey Francisco I, dejando atrás miles de páginas de notas y dibujos que revelaron su genio al mundo.",
        inventionsTitle: "Inventos",
        aerialScrew: "Tornillo Aéreo",
        aerialDesc: "Diseñó una máquina voladora similar a un helicóptero con un rotor helicoidal, demostrando su comprensión de la aerodinámica siglos antes de que el vuelo motorizado se hiciera realidad.",
        armoredTank: "Tanque Blindado",
        tankDesc: "Conceptualizó una fortaleza móvil propulsada por manivelas, con blindaje y puertos de disparo: esencialmente el primer diseño de tanque en la historia.",
        parachute: "Diseño de Paracaídas",
        parachuteDesc: "Creó un paracaídas en forma de pirámide hecho de lino, que las pruebas modernas han demostrado que es notablemente efectivo y seguro para el descenso.",
        robotKnight: "Caballero Robótico",
        robotDesc: "Construyó un autómata mecánico que podía sentarse, pararse y mover sus brazos independientemente, representando un trabajo pionero en robótica y automatización.",
        hydraulic: "Sistemas Hidráulicos",
        hydraulicDesc: "Diseñó sistemas complejos de gestión del agua incluyendo canales, esclusas y redes de irrigación que influyeron en la ingeniería civil durante generaciones.",
        bridge: "Puente Multinivel",
        bridgeDesc: "Propuso diseños innovadores de puentes con múltiples niveles para diferentes tipos de tráfico, anticipando conceptos modernos de planificación urbana.",
        artTitle: "Obras Maestras",
        monaLisa: "La Mona Lisa",
        monaArtDesc: "El retrato más famoso del mundo, mostrando la técnica del sfumato y una expresión enigmática. Alojada en el Louvre, representa la cúspide del retrato renacentista.",
        lastSupper: "La Última Cena",
        supperDesc: "Fresco revolucionario que representa la última comida de Cristo con precisión matemática en perspectiva y narrativa emocional profunda, a pesar de su condición deteriorada.",
        vitruvian: "Hombre de Vitruvio",
        vitruvianDesc: "Dibujo icónico que demuestra las proporciones humanas ideales, encarnando perfectamente la fusión renacentista del arte, las matemáticas y la observación científica.",
        ladyErmine: "Dama con Armiño",
        ermineDesc: "Retrato de Cecilia Gallerani mostrando una pose innovadora de tres cuartos y una representación magistral de la luz, textura y presencia psicológica.",
        legacyTitle: "Legado",
        scientific: "Método Científico",
        scientificDesc: "Su enfoque de observación, hipótesis y experimentación sentó las bases cruciales para la metodología científica moderna y las prácticas de investigación empírica.",
        interdisciplinary: "Innovación Interdisciplinaria",
        interDesc: "Demostró cómo el arte y la ciencia podrían complementarse mutuamente, inspirando el enfoque actual para la resolución creativa de problemas en múltiples campos.",
        anatomical: "Revolución Anatómica", 
        anatomicalDesc: "Sus disecciones detalladas y dibujos avanzaron la comprensión médica, estableciendo la documentación artística como una herramienta para el descubrimiento científico.",
        modern: "Inspiración Moderna",
        modernDesc: "Continúa inspirando a artistas, ingenieros e inventores contemporáneos en todo el mundo, representando el ideal del aprendizaje permanente y la curiosidad ilimitada."
    },
    fr: {
        settings: "Paramètres",
        theme: "Thème",
        language: "Langue",
        light: "Clair",
        dark: "Sombre",
        biography: "Biographie",
        inventions: "Inventions",
        art: "Art",
        legacy: "Héritage",
        heroTitle: "Léonard<br>de Vinci",
        heroDates: "1452 — 1519",
        heroDesc: "Polymathe de la Renaissance qui incarnait la fusion de l'art, de la science et de l'innovation. Un visionnaire dont les carnets contenaient des dessins de machines volantes, des études anatomiques et des chefs-d'œuvre qui continuent d'inspirer l'humanité cinq siècles plus tard.",
        biographyTitle: "Biographie",
        birth1452: "Naissance à Vinci",
        birthDesc: "Né le 15 avril dans la ville perchée de Vinci, République de Florence. Fils illégitime d'un notaire prospère et d'une femme locale, marquant le début d'une vie extraordinaire.",
        apprentice1466: "Début de l'Apprentissage",
        apprenticeDesc: "À 14 ans, devient apprenti du célèbre artiste Andrea del Verrocchio à Florence, apprenant la peinture, la sculpture, la métallurgie et les arts mécaniques dans l'un des ateliers les plus prestigieux de la ville.",
        milan1482: "Cour de Milan",
        milanDesc: "S'installe à Milan sous le patronage de Ludovico Sforza, où il sert comme artiste de cour, ingénieur et inventeur, créant des dessins militaires, des plans architecturaux et des divertissements de cour.",
        mona1503: "La Joconde",
        monaDesc: "Commence le travail sur son portrait le plus célèbre, révolutionnant l'art de la peinture avec des techniques innovantes et une profondeur psychologique qui continue de captiver les spectateurs du monde entier.",
        death1519: "Chapitre Final",
        deathDesc: "Mort le 2 mai au Château du Clos Lucé à Amboise, France, sous le patronage du Roi François Ier, laissant derrière lui des milliers de pages de notes et de dessins qui ont révélé son génie au monde.",
        inventionsTitle: "Inventions",
        aerialScrew: "Vis Aérienne",
        aerialDesc: "A conçu une machine volante semblable à un hélicoptère avec un rotor hélicoïdal, démontrant sa compréhension de l'aérodynamique des siècles avant que le vol motorisé ne devienne réalité.",
        armoredTank: "Char Blindé",
        tankDesc: "A conceptualisé une forteresse mobile propulsée par des manivelles, avec un blindage et des ports de tir—essentiellement le premier design de char de l'histoire.",
        parachute: "Design de Parachute",
        parachuteDesc: "A créé un parachute en forme de pyramide en lin, que les tests modernes ont prouvé être remarquablement efficace et sûr pour la descente.",
        robotKnight: "Chevalier Robotique",
        robotDesc: "A construit un automate mécanique qui pouvait s'asseoir, se lever et bouger ses bras indépendamment, représentant un travail pionnier en robotique et automatisation.",
        hydraulic: "Systèmes Hydrauliques",
        hydraulicDesc: "A conçu des systèmes complexes de gestion de l'eau incluant canaux, écluses et réseaux d'irrigation qui ont influencé l'ingénierie civile pendant des générations.",
        bridge: "Pont Multi-Niveaux",
        bridgeDesc: "A proposé des conceptions innovantes de ponts avec plusieurs niveaux pour différents types de trafic, anticipant les concepts modernes d'urbanisme.",
        artTitle: "Chefs-d'œuvre",
        monaLisa: "La Joconde",
        monaArtDesc: "Le portrait le plus célèbre du monde, montrant la technique du sfumato et une expression énigmatique. Abritée au Louvre, elle représente l'apogée du portrait de la Renaissance.",
        lastSupper: "La Cène",
        supperDesc: "Fresque révolutionnaire dépeignant le dernier repas du Christ avec une précision mathématique en perspective et un récit émotionnel profond, malgré son état de détérioration.",
        vitruvian: "Homme de Vitruve",
        vitruvianDesc: "Dessin iconique démontrant les proportions humaines idéales, incarnant parfaitement la fusion Renaissance de l'art, les mathématiques et l'observation scientifique.",
        ladyErmine: "Dame à l'Hermine",
        ermineDesc: "Portrait de Cecilia Gallerani montrant une pose innovante de trois quarts et un rendu magistral de la lumière, de la texture et de la présence psychologique.",
        legacyTitle: "Héritage",
        scientific: "Méthode Scientifique",
        scientificDesc: "Son approche d'observation, d'hypothèse et d'expérimentation a posé les bases cruciales de la méthodologie scientifique moderne et des pratiques de recherche empirique.",
        interdisciplinary: "Innovation Interdisciplinaire",
        interDesc: "A démontré comment l'art et la science pouvaient se compléter mutuellement, inspirant l'approche actuelle de résolution créative de problèmes dans plusieurs domaines.",
        anatomical: "Révolution Anatomique",
        anatomicalDesc: "Ses dissections détaillées et ses dessins ont fait progresser la compréhension médicale, établissant la documentation artistique comme un outil pour la découverte scientifique.",
        modern: "Inspiration Moderne",
        modernDesc: "Continue d'inspirer les artistes, ingénieurs et inventeurs contemporains du monde entier, représentant l'idéal d'apprentissage permanent et de curiosité sans limites."
    },
    de: {
        settings: "Einstellungen",
        theme: "Design",
        language: "Sprache",
        light: "Hell",
        dark: "Dunkel",
        biography: "Biografie",
        inventions: "Erfindungen",
        art: "Kunst",
        legacy: "Vermächtnis",
        heroTitle: "Leonardo<br>da Vinci",
        heroDates: "1452 — 1519",
        heroDesc: "Renaissance-Universalgelehrter, der die Verschmelzung von Kunst, Wissenschaft und Innovation verkörperte. Ein Visionär, dessen Notizbücher Entwürfe für Flugmaschinen, anatomische Studien und Meisterwerke enthielten, die die Menschheit fünf Jahrhunderte später weiterhin inspirieren.",
        biographyTitle: "Biografie",
        birth1452: "Geburt in Vinci",
        birthDesc: "Geboren am 15. April in der Bergstadt Vinci, Republik Florenz. Der uneheliche Sohn eines erfolgreichen Notars und einer einheimischen Frau, was den Beginn eines außergewöhnlichen Lebens markierte.",
        apprentice1466: "Lehre Beginnt",
        apprenticeDesc: "Mit 14 Jahren wurde er Lehrling des renommierten Künstlers Andrea del Verrocchio in Florenz und lernte Malerei, Bildhauerei, Metallbearbeitung und mechanische Künste in einer der prestigeträchtigsten Werkstätten der Stadt.",
        milan1482: "Mailänder Hof",
        milanDesc: "Zog nach Mailand unter der Schirmherrschaft von Ludovico Sforza, wo er als Hofkünstler, Ingenieur und Erfinder diente und militärische Entwürfe, architektonische Pläne und Hofunterhaltung schuf.",
        mona1503: "Die Mona Lisa",
        monaDesc: "Begann die Arbeit an seinem berühmtesten Porträt und revolutionierte die Malkunst mit innovativen Techniken und psychologischer Tiefe, die Betrachter weltweit weiterhin fesseln.",
        death1519: "Letztes Kapitel",
        deathDesc: "Starb am 2. Mai im Château du Clos Lucé in Amboise, Frankreich, unter der Schirmherrschaft von König Franz I. und hinterließ Tausende von Seiten mit Notizen und Zeichnungen, die sein Genie der Welt offenbarten.",
        inventionsTitle: "Erfindungen",
        aerialScrew: "Luftschraube",
        aerialDesc: "Entwarf eine hubschrauberartige Flugmaschine mit einem schraubenförmigen Rotor und demonstrierte sein Verständnis der Aerodynamik Jahrhunderte bevor der motorisierte Flug Realität wurde.",
        armoredTank: "Gepanzerter Panzer",
        tankDesc: "Konzipierte eine mobile Festung, die von Kurbeln angetrieben wurde, mit Panzerung und Schießscharten—im Wesentlichen das erste Panzerdesign der Geschichte.",
        parachute: "Fallschirm-Design",
        parachuteDesc: "Schuf einen pyramidenförmigen Fallschirm aus Leinen, der durch moderne Tests als bemerkenswert effektiv und sicher für den Abstieg erwiesen wurde.",
        robotKnight: "Roboter-Ritter",
        robotDesc: "Baute einen mechanischen Automaten, der sich setzen, stehen und seine Arme unabhängig bewegen konnte und damit Pionierarbeit in Robotik und Automatisierung leistete.",
        hydraulic: "Hydraulische Systeme",
        hydraulicDesc: "Entwarf komplexe Wassermanagementsysteme einschließlich Kanäle, Schleusen und Bewässerungsnetze, die den Tiefbau über Generationen beeinflussten.",
        bridge: "Mehrstöckige Brücke",
        bridgeDesc: "Schlug innovative Brückenentwürfe mit mehreren Ebenen für verschiedene Verkehrsarten vor und nahm moderne Stadtplanungskonzepte vorweg.",
        artTitle: "Meisterwerke",
        monaLisa: "Mona Lisa",
        monaArtDesc: "Das berühmteste Porträt der Welt, das die Sfumato-Technik und einen rätselhaften Ausdruck zeigt. Im Louvre untergebracht, repräsentiert es den Höhepunkt der Renaissance-Porträtmalerei.",
        lastSupper: "Das Abendmahl",
        supperDesc: "Revolutionäres Fresko, das Christi letzte Mahlzeit mit mathematischer Präzision in der Perspektive und tiefgreifender emotionaler Erzählung darstellt, trotz ihres verschlechterten Zustands.",
        vitruvian: "Vitruvianischer Mensch",
        vitruvianDesc: "Ikonische Zeichnung, die ideale menschliche Proportionen demonstriert und die Renaissance-Verschmelzung von Kunst, Mathematik und wissenschaftlicher Beobachtung perfekt verkörpert.",
        ladyErmine: "Dame mit Hermelin",
        ermineDesc: "Porträt von Cecilia Gallerani, das eine innovative Dreiviertel-Pose und meisterhafte Darstellung von Licht, Textur und psychologischer Präsenz zeigt.",
        legacyTitle: "Vermächtnis",
        scientific: "Wissenschaftliche Methode",
        scientificDesc: "Sein Ansatz von Beobachtung, Hypothese und Experimentation legte entscheidende Grundlagen für moderne wissenschaftliche Methodologie und empirische Forschungspraktiken.",
        interdisciplinary: "Interdisziplinäre Innovation",
        interDesc: "Demonstrierte, wie sich Kunst und Wissenschaft gegenseitig ergänzen können, und inspirierte den heutigen Ansatz zur kreativen Problemlösung in mehreren Bereichen.",
        anatomical: "Anatomische Revolution",
        anatomicalDesc: "Seine detaillierten Sektionen und Zeichnungen förderten das medizinische Verständnis und etablierten künstlerische Dokumentation als Werkzeug für wissenschaftliche Entdeckungen.",
        modern: "Moderne Inspiration",
        modernDesc: "Inspiriert weiterhin zeitgenössische Künstler, Ingenieure und Erfinder weltweit und repräsentiert das Ideal des lebenslangen Lernens und der grenzenlosen Neugier."
    }
};

// -------------------------
// Language management
// -------------------------
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage || 'en';
    const langCode = browserLang.split('-')[0].toLowerCase();
    return translations[langCode] ? langCode : 'en';
}

// initial detect
let currentLang = detectBrowserLanguage();

// -------------------------
// Image Carousel System
// -------------------------
function initImageCarousel() {
    const images = document.querySelectorAll('.hero-image');
    if (images.length <= 1) return; // No carousel needed for single image
    
    let currentIndex = 0;
    
    // Ensure first image is active initially
    images.forEach((img, index) => {
        img.classList.toggle('active', index === 0);
    });
    
    function nextImage() {
        // Fade out current image
        images[currentIndex].classList.remove('active');
        
        // Move to next image (loop back to 0 if at end)
        currentIndex = (currentIndex + 1) % images.length;
        
        // Fade in new image
        setTimeout(() => {
            images[currentIndex].classList.add('active');
        }, 400); // Half of the CSS transition time for smooth crossfade
    }
    
    // Start the carousel
    setInterval(nextImage, 10000); // Change image every 10 seconds
}

// -------------------------
// Utility: set theme UI state (active buttons + attribute)
// -------------------------
function applyThemeUI(theme) {
    try {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    } catch (e) {}
    // update theme-option active classes and aria
    document.querySelectorAll('.theme-option').forEach(btn => {
        if (btn.dataset.theme === theme) {
            btn.classList.add('active');
            btn.setAttribute('aria-checked', 'true');
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-checked', 'false');
        }
    });
}

// -------------------------
// Update content from translations
// -------------------------
function updateContent(lang) {
    const t = translations[lang];
    if (!t) return;

    // Navigation
    document.querySelector('a[href="#biography"]').textContent = t.biography;
    document.querySelector('a[href="#inventions"]').textContent = t.inventions;
    document.querySelector('a[href="#art"]').textContent = t.art;
    document.querySelector('a[href="#legacy"]').textContent = t.legacy;

    // Mobile menu links
    const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');
    mobileLinks[0].textContent = t.biography;
    mobileLinks[1].textContent = t.inventions;
    mobileLinks[2].textContent = t.art;
    mobileLinks[3].textContent = t.legacy;

    // Settings button label (both desktop and mobile)
    const settingsBtn = document.getElementById('settingsBtn');
    const mobileSettingsBtn = document.getElementById('mobileSettingsBtn');
    if (settingsBtn) settingsBtn.textContent = t.settings;
    if (mobileSettingsBtn) mobileSettingsBtn.textContent = t.settings;

    // Hero
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = t.heroTitle;
    const heroDates = document.querySelector('.hero-dates');
    if (heroDates) heroDates.textContent = t.heroDates;
    const heroDesc = document.querySelector('.hero-desc');
    if (heroDesc) heroDesc.textContent = t.heroDesc;

    // Biography
    const bioTitle = document.querySelector('#biography .section-title');
    if (bioTitle) bioTitle.textContent = t.biographyTitle;
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length >= 5) {
        timelineItems[0].querySelector('h3').textContent = t.birth1452;
        timelineItems[0].querySelector('p').textContent = t.birthDesc;
        timelineItems[1].querySelector('h3').textContent = t.apprentice1466;
        timelineItems[1].querySelector('p').textContent = t.apprenticeDesc;
        timelineItems[2].querySelector('h3').textContent = t.milan1482;
        timelineItems[2].querySelector('p').textContent = t.milanDesc;
        timelineItems[3].querySelector('h3').textContent = t.mona1503;
        timelineItems[3].querySelector('p').textContent = t.monaDesc;
        timelineItems[4].querySelector('h3').textContent = t.death1519;
        timelineItems[4].querySelector('p').textContent = t.deathDesc;
    }

    // Inventions
    const invTitle = document.querySelector('#inventions .section-title');
    if (invTitle) invTitle.textContent = t.inventionsTitle;
    const inventionCards = document.querySelectorAll('#inventions .content-card');
    if (inventionCards.length >= 6) {
        inventionCards[0].querySelector('.card-title').textContent = t.aerialScrew;
        inventionCards[0].querySelector('.card-text').textContent = t.aerialDesc;
        inventionCards[1].querySelector('.card-title').textContent = t.armoredTank;
        inventionCards[1].querySelector('.card-text').textContent = t.tankDesc;
        inventionCards[2].querySelector('.card-title').textContent = t.parachute;
        inventionCards[2].querySelector('.card-text').textContent = t.parachuteDesc;
        inventionCards[3].querySelector('.card-title').textContent = t.robotKnight;
        inventionCards[3].querySelector('.card-text').textContent = t.robotDesc;
        inventionCards[4].querySelector('.card-title').textContent = t.hydraulic;
        inventionCards[4].querySelector('.card-text').textContent = t.hydraulicDesc;
        inventionCards[5].querySelector('.card-title').textContent = t.bridge;
        inventionCards[5].querySelector('.card-text').textContent = t.bridgeDesc;
    }

    // Art
    const artTitle = document.querySelector('#art .section-title');
    if (artTitle) artTitle.textContent = t.artTitle;
    const artCards = document.querySelectorAll('#art .content-card');
    if (artCards.length >= 4) {
        artCards[0].querySelector('.card-title').textContent = t.monaLisa;
        artCards[0].querySelector('.card-text').textContent = t.monaArtDesc;
        artCards[1].querySelector('.card-title').textContent = t.lastSupper;
        artCards[1].querySelector('.card-text').textContent = t.supperDesc;
        artCards[2].querySelector('.card-title').textContent = t.vitruvian;
        artCards[2].querySelector('.card-text').textContent = t.vitruvianDesc;
        artCards[3].querySelector('.card-title').textContent = t.ladyErmine;
        artCards[3].querySelector('.card-text').textContent = t.ermineDesc;
    }

    // Legacy
    const legacyTitle = document.querySelector('#legacy .section-title');
    if (legacyTitle) legacyTitle.textContent = t.legacyTitle;
    const legacyCards = document.querySelectorAll('#legacy .content-card');
    if (legacyCards.length >= 4) {
        legacyCards[0].querySelector('.card-title').textContent = t.scientific;
        legacyCards[0].querySelector('.card-text').textContent = t.scientificDesc;
        legacyCards[1].querySelector('.card-title').textContent = t.interdisciplinary;
        legacyCards[1].querySelector('.card-text').textContent = t.interDesc;
        legacyCards[2].querySelector('.card-title').textContent = t.anatomical;
        legacyCards[2].querySelector('.card-text').textContent = t.anatomicalDesc;
        legacyCards[3].querySelector('.card-title').textContent = t.modern;
        legacyCards[3].querySelector('.card-text').textContent = t.modernDesc;
    }

    // Settings modal labels and theme buttons (now plain text)
    const settingsTitle = document.querySelector('.settings-title');
    if (settingsTitle) settingsTitle.textContent = t.settings;

    // theme-option plain text (no emojis)
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.textContent = (btn.dataset.theme === 'light') ? t.light : t.dark;
        // update aria label
        btn.setAttribute('aria-label', (btn.dataset.theme === 'light') ? t.light : t.dark);
    });

    // setting labels (first = theme, second = language)
    const settingLabels = document.querySelectorAll('.setting-label');
    if (settingLabels.length > 0) settingLabels[0].textContent = t.theme;
    if (settingLabels.length > 1) settingLabels[1].textContent = t.language;

    // Mark active language
    document.querySelectorAll('.lang-option').forEach(btn => {
        if (btn.dataset.lang === lang) btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

// -------------------------
// Initialization: theme & language from localStorage or system/browser
// -------------------------
const body = document.body;
const navbar = document.querySelector('#navbar');
const loader = document.getElementById('loader');
const settingsBtn = document.getElementById('settingsBtn');
const mobileSettingsBtn = document.getElementById('mobileSettingsBtn');
const settingsModal = document.getElementById('settingsModal');
const closeSettings = document.getElementById('closeSettings');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// determine theme (saved or system preference)
const savedTheme = (function() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
})();
const initialTheme = savedTheme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
// ensure UI reflects theme
applyThemeUI(initialTheme);

// language saved or detected
const savedLang = (function() {
    try { return localStorage.getItem('language'); } catch (e) { return null; }
})() || currentLang;
currentLang = savedLang;

// apply translations
updateContent(currentLang);

// set active theme (UI)
applyThemeUI(initialTheme);

// update navbar look on scroll
function updateNavbarBackground() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
}
window.addEventListener('scroll', updateNavbarBackground);

// Mobile hamburger menu toggle
function toggleMobileMenu() {
    const isActive = hamburger.classList.contains('active');
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Prevent body scroll when mobile menu is open
    if (!isActive) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

hamburger.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Loader + scroll memory restore after load (hide loader then restore)
window.addEventListener('load', () => {
    // Initialize image carousel
    initImageCarousel();
    
    setTimeout(() => {
        if (loader) loader.classList.add('hidden');
        updateNavbarBackground();

        // restore last section if present
        try {
            const last = localStorage.getItem('lastSection');
            if (last) {
                // small delay so layout stabilizes (images, fonts)
                const el = document.getElementById(last);
                if (el) {
                    // Use instant scroll to avoid double animation
                    el.scrollIntoView({ behavior: 'auto', block: 'start' });
                }
            }
        } catch (e) {}
    }, 800);
});

// Open/close settings modal
function openSettings() {
    settingsModal.classList.add('active');
    settingsModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeSettingsModal() {
    settingsModal.classList.remove('active');
    settingsModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

settingsBtn.addEventListener('click', openSettings);
mobileSettingsBtn.addEventListener('click', () => {
    // Close mobile menu first
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    // Then open settings
    openSettings();
});

closeSettings.addEventListener('click', closeSettingsModal);
settingsModal.addEventListener('click', e => {
    if (e.target === settingsModal) {
        closeSettingsModal();
    }
});

// Theme switcher buttons
document.querySelectorAll('.theme-option').forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.dataset.theme;
        applyThemeUI(theme);
        // update translations in case settings labels change with theme (not necessary but harmless)
        updateContent(currentLang);
    });
});

// Language switcher
document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
        const newLang = btn.dataset.lang;
        currentLang = newLang;
        try { localStorage.setItem('language', currentLang); } catch (e) {}
        updateContent(currentLang);
        // reflect active language button
        document.querySelectorAll('.lang-option').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
    });
});

// Mark active theme button initially (in case of saved theme)
(function markInitialThemeButton() {
    const theme = document.documentElement.getAttribute('data-theme') || initialTheme;
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
        btn.setAttribute('aria-checked', btn.dataset.theme === theme ? 'true' : 'false');
    });
})();

// NAV link clicks update scroll memory (also update active state)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const id = href.slice(1);
            try { localStorage.setItem('lastSection', id); } catch (e) {}
        }
    });
});

// IntersectionObserver records last viewed section (scroll memory)
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // if the section is more than 50% visible, record it
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const id = entry.target.id;
            if (id) {
                try { localStorage.setItem('lastSection', id); } catch (e) {}
            }
        }
        // add fade-in animation when any section content becomes visible
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, { threshold: [0.5] });

// Observe main sections
document.querySelectorAll('#hero, #biography, #inventions, #art, #legacy').forEach(sec => sectionObserver.observe(sec));

// Also observe content cards, timeline items, and titles for animation (existing behavior)
const animObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('fade-in-up');
    });
}, { threshold: 0.2 });

document.querySelectorAll('.section-title, .content-card, .timeline-item').forEach(el => animObserver.observe(el));

// ensure the settings modal shows the currently selected language and theme
(function setInitialActiveLanguage() {
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
})();

// Close mobile menu when window is resized to desktop size
window.addEventListener('resize', () => {
    if (window.innerWidth > 968) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});