// MOBILE NAV TOGGLE
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// THEME TOGGLER
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// COUNTER ANIMATION
const counters = document.querySelectorAll(".count");
counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// TIMELINE ANIMATION ON SCROLL
const timelineItems = document.querySelectorAll(".timeline-item");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateX(0)";
      }
    });
  },
  { threshold: 0.5 }
);
timelineItems.forEach((item) => observer.observe(item));

// SKILL BAR ANIMATION
const skills = document.querySelectorAll(".skill-bar");
skills.forEach((skill) => {
  skill.style.width = skill.getAttribute("data-skill");
});

// REVIEW SLIDER
let currentReview = 0;
const reviews = document.querySelectorAll(".review-item");
setInterval(() => {
  reviews[currentReview].classList.remove("active");
  currentReview = (currentReview + 1) % reviews.length;
  reviews[currentReview].classList.add("active");
}, 4000);

// CONTACT FORM VALIDATION
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! (placeholder)");
});
