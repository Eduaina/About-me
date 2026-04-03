// --- PROJECT DATA ARRAY (Easily Scalable) ---
const allProjects = [
  {
    id: 1,
    title: "Blooms E-commerce Platform",
    description:
      "Developed a responsive e-commerce front-end, integrating product display and a seamless user checkout flow using React and CSS Grid.",
    image: "assets/images/Screenshot (358).png",
    tags: ["React", "CSS Grid", "UX", "Responsive"],
    liveUrl: "https://project-bloom-ten.vercel.app/",
    category: "html-css-js",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Task Manager",
    description:
      "Built an intuitive task management application with a focus on drag-and-drop functionality and local storage persistence, leveraging vanilla JavaScript and incorporates AI.",
    image: "assets/images/Screenshot (359).png",
    tags: ["JavaScript", "HTML", "CSS", "Local Storage"],
    liveUrl: "https://task-app-neon-nine.vercel.app/",
    category: "html-css-js",
    featured: true,
  },
  {
    id: 3,
    title: "Calculator",
    description: "Interactive calculator app with memory",
    image: "assets/images/0.calc.png",
    tags: ["UX/UI", "Prototyping", "Information Architecture", "JS"],
    liveUrl: "https://calculator-delta-six-74.vercel.app/",
    category: "html-css-js",
    featured: true,
  },
  {
    id: 4,
    title: "Food landing page",
    description: "A clean simple HTML & CSS landing page",
    image:"assets/images/Screenshot (361).png",
    tags: ["Css", "Html", "Serverless", "UI"],
    liveUrl: "https://food-page-rho.vercel.app/",
    category: "html-css",
    featured: false,
  },
  {
    id: 5,
    title: "Vanilla CSS & HTML landing Page",
    description:
      "A clean, modern static brochure website built using only semantic HTML5 and custom CSS for a lightweight, performant result.",
    image: "assets/images/Screenshot (362).png",
    tags: ["HTML5", "CSS3", "Responsive", "Accessibility"],
    liveUrl: "https://pixel-gang-month1-assessment.vercel.app/",
    category: "html-css",
    featured: false,
  },
  {
    id: 6,
    title: "Palindrome checker",
    description: "A simple palindrome checker.",
    image: "assets/images/Screenshot (363).png",
    tags: ["UX/UI", "Prototyping", "Information Architecture", "JS"],
    liveUrl: "https://building-a-palindrome-checker.vercel.app/",
    category: "html-css-js",
    featured: false,
  },
  {
    id: 7,
    title: "Animated Login Page",
    description: "A non interactive but dynamic and beaautifully designed login page",
    image: "assets/images/Screenshot (364).png",
    tags: ["UX/UI", "Prototyping", "Information Architecture"],
    liveUrl: "https://forms-login-page.vercel.app/",
    category: "html-css",
    featured: false,
  },
  {
    id: 8,
    title: "Fashion link App(Static)",
    description:
      "FashionLink is a role based web application that streamlines fashion business operations by replacing manual workflows with a centralized digital system. It enables designers to manage clients, measurements and order history, collaborate with artisans through structured task assignments, and give clients real time visibility into their orders, all in one unified platform.",
    image: "assets/images/FashionLink.png",
    tags: ["RxJS", "SCSS","UX/UI", "Prototyping", "Information Architecture", "JS", "Dual Entry"],
    liveUrl: "https://fashion-link-site.vercel.app/artisan/orders",
    category: "react",
    featured: false,
  },
  {
    id: 9,
    title: "FashionLink(Live)",
    description:
      "FashionLink is a role based web application that streamlines fashion business operations by replacing manual workflows with a centralized digital system. It enables designers to manage clients, measurements and order history, collaborate with artisans through structured task assignments, and give clients real time visibility into their orders, all in one unified platform.",
    image: "assets/images/fl live.png",
    tags: ["AI", "RxJS", "SCSS","UX/UI", "Prototyping", "Information Architecture", "JS", "Dual Entry", "API"],
    liveUrl: "https://fashionlin.vercel.app/",
    category: "react",
    featured: false,
  },
  {
    id: 10,
    title: "Recommendation Generator",
    description: "A lightweight AI powered book recommender that integrates with Gemini to generate personalized reading suggestions based on user input. It processes prompts in real time and returns context aware recommendations with brief insights.",
    image:"assets/images/gen.png",
    tags: ["AI", "RxJS", "SCSS", "UX/UI", "Prototyping", "Information Architecture"],
    liveUrl: "https://react-hooks-psi-one.vercel.app/",
    category: "react",
    featured: false,
  },
  {
    id: 11,
    title: "Portfolio + Weather API",
    description: "A dynamic portfolio that pulls project data directly from GitHub using its API, ensuring content stays automatically updated. Includes a dedicated weather page powered by a weather API, showcasing real time data handling and multi page app structure.",
    image:"assets/images/port.png",
    tags: ["Javascript", "Css", "Html", "API", "UI/UX"],
    liveUrl: "https://eduaina-ighalo-intro-v6-pilot.vercel.app/",
    category: "html-css-js",
    featured: false,
  },
  {
    id: 12,
    title: "Movie App",
    description: "A clean simple Vue & CSS movie page",
    image:"assets/images/movie.png",
    tags: ["Vue", "Css", "Serverless", "UI/UX"],
    liveUrl: "https://router-khaki.vercel.app/",
    category: "vue",
    featured: false,
  },
];

// --- PROJECT CARD TEMPLATE FUNCTION ---
const createProjectCard = (project) => {
  // Generates the HTML string for a single project card
  const tagsHtml = project.tags.map((tag) => `<span>${tag}</span>`).join("");

  return `
        <div class="project-card animate-slide-up" data-category="${project.category}">
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="Project Thumbnail: ${project.title}">
                <div class="project-overlay">
                    <a href="${project.liveUrl}" target="_blank" class="btn btn-live-preview" aria-label="View Live Project: ${project.title}">
                        <i class="fas fa-external-link-alt"></i> View Live
                    </a>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">${tagsHtml}</div>
            </div>
        </div>
    `;
};

// --- INITIALIZATION FUNCTION ---
document.addEventListener("DOMContentLoaded", () => {
  const isFullProjectsPage = document.getElementById("full-projects-container");

  if (isFullProjectsPage) {
    // --- Logic for projects-full.html (All projects & filtering) ---
    const container = isFullProjectsPage;
    const categoryButtons = document.querySelectorAll(".category-btn");

    // Initial render: show all projects
    renderProjects(allProjects, container);
    setupCategoryFiltering(categoryButtons, container);
  } else {
    // --- Logic for index.html (Featured projects) ---
    const container = document.querySelector("#projects .projects-grid");
    if (container) {
      // Show top 4 featured projects
      const featuredProjects = allProjects
        .filter((p) => p.featured)
        .slice(0, 4);
      renderProjects(featuredProjects, container);
    }
  }
});

// --- RENDER AND FILTER FUNCTIONS ---

function renderProjects(projectsToRender, container) {
  container.innerHTML = projectsToRender.map(createProjectCard).join("");
  // Re-apply intersection observer to new elements
  applyScrollAnimations(container.querySelectorAll(".animate-slide-up"));
}

function setupCategoryFiltering(buttons, container) {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const category = e.target.dataset.category;

      // Update active button
      buttons.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");

      // Filter projects
      const filteredProjects =
        category === "all"
          ? allProjects
          : allProjects.filter((p) => p.category === category);

      // Render filtered projects
      renderProjects(filteredProjects, container);
    });
  });
}

// This is a helper function used on the full projects page to re-apply animations
const applyScrollAnimations = (elements) => {
  if (!elements.length) return;
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { root: null, threshold: 0.1 }
  );
  elements.forEach((el) => observer.observe(el));
};
