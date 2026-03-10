// ====== CONFIG ======
const githubUrl = ""; // <-- Mets ton GitHub ici quand tu veux (ex: https://github.com/tonusername)

// ====== MOBILE NAV ======
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger?.addEventListener("click", () => {
  const isOpen = navLinks.style.display === "flex";
  navLinks.style.display = isOpen ? "none" : "flex";
});

// Close menu after click (mobile)
navLinks?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    if (window.innerWidth <= 980) navLinks.style.display = "none";
  });
});

// ====== YEAR ======
document.getElementById("year").textContent = String(new Date().getFullYear());

// ====== GITHUB LINK PLACEHOLDER ======
function setGithubLinks() {
  const gh1 = document.getElementById("githubLink");
  const gh2 = document.getElementById("githubLink2");
  [gh1, gh2].forEach(el => {
    if (!el) return;
    if (githubUrl) {
      el.href = githubUrl;
      el.target = "_blank";
      el.rel = "noreferrer";
      el.classList.remove("disabled");
    } else {
      el.href = "#";
      el.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Ajoute ton lien GitHub dans script.js (githubUrl).");
      });
    }
  });
}
setGithubLinks();

// ====== PROJECT FILTER TABS ======
const tabs = document.querySelectorAll(".tab");
const projects = document.querySelectorAll(".project");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.getAttribute("data-filter");
    projects.forEach(card => {
      const tags = card.getAttribute("data-tags") || "";
      const show = (filter === "all") || tags.includes(filter);
      card.style.display = show ? "block" : "none";
    });
  });
});

// ====== CONTACT: mailto ======
const form = document.getElementById("contactForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const name = String(fd.get("name") || "").trim();
  const email = String(fd.get("email") || "").trim();
  const message = String(fd.get("message") || "").trim();

  const subject = encodeURIComponent(`Portfolio - Message de ${name}`);
  const body = encodeURIComponent(
    `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
  );

  window.location.href = `mailto:malakachari54@gmail.com?subject=${subject}&body=${body}`;
});

// ====== LANGUAGE TOGGLE (FR/EN) ======
const dict = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",

    "hero.eyebrow": "Portfolio",
    "hero.hi": "Salut, je suis",
    "hero.subtitle": "Étudiante Ingénieure — IA & Data Science",
    "hero.desc": "Je transforme les données en solutions concrètes : Machine Learning, Deep Learning (scikit-learn, TensorFlow), analyse de données (EDA/Data Mining) et SQL.",
    "hero.download": "Télécharger le CV",
    "hero.viewProjects": "Voir les projets",
    "hero.note": "Rabat, Maroc • Stage PFA recherché",

    "about.title": "À propos",
    "about.meTitle": "Qui je suis",
    "about.meText": "Étudiante ingénieure en 4ᵉ année (EMSI), option Intelligence Artificielle & Science des Données. Je recherche un stage PFA orienté AI/ML ou Data.",
    "about.focusTitle": "Ce que je peux apporter",
    "about.li1": "Analyse & préparation des données (EDA, nettoyage, features)",
    "about.li2": "Modèles ML/DL + évaluation (metrics, comparaison)",
    "about.li3": "Bases solides en architecture des données et systèmes",
    "about.expTitle": "Expérience",
    "about.expText": "Stage d’été chez AKWA Group (Casablanca) — développement d’un module Odoo pour la gestion des abonnements fixe/mobile.",
    "about.chip1": "Machine Learning",
    "about.chip2": "Deep Learning",
    "about.chip3": "Data Mining",
    "about.chip4": "SQL",

    "skills.title": "Compétences",
    "skills.aiTitle": "AI / ML & GenAI",
    "skills.aiText": "Machine Learning, Deep Learning, Data Mining (EDA), Text/Web Mining, Prompt Engineering, RAG, Multi-agents.",
    "skills.dataTitle": "Data & Bases de données",
    "skills.dataText": "SQL (PL/SQL, T-SQL), Oracle, SQL Server, MySQL, MongoDB, Cassandra, Neo4j.",
    "skills.sysTitle": "Systèmes & Outils",
    "skills.sysText": "Docker, Linux (Red Hat), VMware, VirtualBox, Hadoop/HDFS (concepts), Git/GitHub, Jupyter/Anaconda, Google Colab.",

    "projects.title": "Projets",
    "projects.tabAll": "Tous",
    "projects.tabAI": "AI / Data",
    "projects.tabSys": "Systèmes",
    "projects.tabSoft": "Logiciel",
    "projects.repoSoon": "Repository (bientôt)",

    "p1.title": "Classification énergétique des bâtiments",
    "p1.desc": "EDA, nettoyage, entraînement (SVM/Arbre/KNN), évaluation et app web de prédiction.",
    "p2.title": "Mini Data Centre (Proxmox / pfSense)",
    "p2.desc": "3 VMs (Firewall/Web/DB), WAN/DMZ/LAN, NAT/Port forwarding, règles firewall.",
    "p3.title": "Gestion d’un cabinet dentaire (Java Swing)",
    "p3.desc": "Application desktop en équipe, architecture 3-tiers (MVC/Service/DAO), modules RDV, dossier patient, facturation, rôles.",
    "p4.title": "Gestion d’un club de billard (Django)",
    "p4.desc": "Application web : réservations, tournois, utilisateurs/rôles, espace communauté.",
    "p5.title": "Stage AKWA Group — Module Odoo",
    "p5.desc": "Conception et développement d’un module Odoo pour la gestion des abonnements fixe/mobile.",

    "contact.title": "Contact",
    "contact.name": "Nom",
    "contact.msg": "Message",
    "contact.send": "Envoyer un message",
    "contact.note": "Le bouton ouvre votre application mail (mailto).",
    "contact.quick": "Infos rapides",
    "contact.locLabel": "Localisation:",
    "contact.tip": "Astuce : ajoute ton lien GitHub dans script.js (githubUrl)."
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.eyebrow": "Portfolio",
    "hero.hi": "Hi, I'm",
    "hero.subtitle": "Engineering Student — AI & Data Science",
    "hero.desc": "I turn data into practical solutions: Machine Learning, Deep Learning (scikit-learn, TensorFlow), data analysis (EDA/Data Mining), and SQL.",
    "hero.download": "Download Resume",
    "hero.viewProjects": "View projects",
    "hero.note": "Rabat, Morocco • Looking for a PFA internship",

    "about.title": "About",
    "about.meTitle": "Who I am",
    "about.meText": "4th-year engineering student (EMSI), AI & Data Science track. Looking for an AI/ML or Data internship (PFA).",
    "about.focusTitle": "What I can bring",
    "about.li1": "Data analysis & preparation (EDA, cleaning, features)",
    "about.li2": "ML/DL models + evaluation (metrics, comparison)",
    "about.li3": "Strong foundations in data architecture and systems",
    "about.expTitle": "Experience",
    "about.expText": "Summer internship at AKWA Group (Casablanca) — built an Odoo module for fixed/mobile subscription management.",
    "about.chip1": "Machine Learning",
    "about.chip2": "Deep Learning",
    "about.chip3": "Data Mining",
    "about.chip4": "SQL",

    "skills.title": "Skills",
    "skills.aiTitle": "AI / ML & GenAI",
    "skills.aiText": "Machine Learning, Deep Learning, Data Mining (EDA), Text/Web Mining, Prompt Engineering, RAG, Multi-agents.",
    "skills.dataTitle": "Data & Databases",
    "skills.dataText": "SQL (PL/SQL, T-SQL), Oracle, SQL Server, MySQL, MongoDB, Cassandra, Neo4j.",
    "skills.sysTitle": "Systems & Tools",
    "skills.sysText": "Docker, Linux (Red Hat), VMware, VirtualBox, Hadoop/HDFS (concepts), Git/GitHub, Jupyter/Anaconda, Google Colab.",

    "projects.title": "Projects",
    "projects.tabAll": "All",
    "projects.tabAI": "AI / Data",
    "projects.tabSys": "Systems",
    "projects.tabSoft": "Software",
    "projects.repoSoon": "Repository (coming soon)",

    "p1.title": "Building Energy Class Prediction",
    "p1.desc": "EDA, cleaning, training (SVM/Decision Tree/KNN), evaluation, and a web prediction app.",
    "p2.title": "Mini Data Center (Proxmox / pfSense)",
    "p2.desc": "3 VMs (Firewall/Web/DB), WAN/DMZ/LAN segmentation, NAT/port forwarding, firewall rules.",
    "p3.title": "Dental Clinic Management (Java Swing)",
    "p3.desc": "Team desktop app, 3-tier architecture (MVC/Service/DAO), appointments, patient records, billing, roles.",
    "p4.title": "Billiard Club Management (Django)",
    "p4.desc": "Web app: table reservations, tournaments, user roles, community space.",
    "p5.title": "AKWA Group Internship — Odoo Module",
    "p5.desc": "Designed and built an Odoo module for fixed/mobile subscription management.",

    "contact.title": "Contact",
    "contact.name": "Name",
    "contact.msg": "Message",
    "contact.send": "Send a message",
    "contact.note": "The button opens your email app (mailto).",
    "contact.quick": "Quick info",
    "contact.locLabel": "Location:",
    "contact.tip": "Tip: add your GitHub link in script.js (githubUrl)."
  }
};

let currentLang = "fr";
const langBtn = document.getElementById("langToggle");

function applyI18n(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = dict[lang]?.[key];
    if (val) el.textContent = val;
  });
}

langBtn?.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  applyI18n(currentLang);
});

// Init
applyI18n(currentLang);