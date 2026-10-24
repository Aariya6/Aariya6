const typedText = document.querySelector("#typed-text");
const year = document.querySelector("#year");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const projects = [...document.querySelectorAll(".project")];
const filterStatus = document.querySelector(".filter-status");
const mobileNav = document.querySelector(".mobile-nav");
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

year.textContent = String(new Date().getFullYear());

const phrases = [
  "evidence, intention, imagination",
  "systems that stay accountable",
  "tools that leave room for people",
];

if (typedText && !motionPreference.matches) {
  let phraseIndex = 0;
  let characterIndex = phrases[0].length;
  let deleting = false;

  const typeNextCharacter = () => {
    const phrase = phrases[phraseIndex];

    if (deleting) {
      characterIndex -= 1;
    } else {
      characterIndex += 1;
    }

    typedText.textContent = phrase.slice(0, characterIndex);

    if (!deleting && characterIndex === phrase.length) {
      deleting = true;
      window.setTimeout(typeNextCharacter, 1500);
      return;
    }

    if (deleting && characterIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    window.setTimeout(typeNextCharacter, deleting ? 28 : 48);
  };

  window.setTimeout(typeNextCharacter, 1200);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    projects.forEach((project) => {
      const isVisible =
        selectedFilter === "all" || project.dataset.category === selectedFilter;
      project.hidden = !isVisible;
      visibleCount += Number(isVisible);
    });

    filterStatus.textContent = `${visibleCount} ${
      visibleCount === 1 ? "project" : "projects"
    } shown.`;
  });
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.open = false;
  });
});
