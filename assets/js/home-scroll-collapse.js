(function () {
  const root = document.documentElement;
  const hero = document.querySelector(".home-hero");
  const intro = document.querySelector(".home-intro");
  const researchGrid = document.querySelector(".selected-research-grid");

  if (!hero || !intro) {
    return;
  }

  const finalGap = 40;
  const collapseRate = 0.45;
  let landingBottomSpace = 0;
  let maxCollapse = 0;
  let ticking = false;

  function setScrollSpacing() {
    const collapse = Math.min(maxCollapse, Math.max(0, window.scrollY * collapseRate));
    const currentBottomSpace = landingBottomSpace - collapse;
    hero.style.setProperty("--home-current-bottom-space", currentBottomSpace + "px");
    ticking = false;
  }

  function requestSpacingUpdate() {
    if (!ticking) {
      window.requestAnimationFrame(setScrollSpacing);
      ticking = true;
    }
  }

  function syncPublicationHeights() {
    if (!researchGrid || window.innerWidth <= 900) {
      if (researchGrid) {
        researchGrid.style.removeProperty("--selected-publications-height");
      }
      return;
    }

    const publicationSections = Array.from(
      researchGrid.querySelectorAll(".selected-publications")
    );

    researchGrid.style.removeProperty("--selected-publications-height");

    const tallest = publicationSections.reduce(function (maxHeight, section) {
      return Math.max(maxHeight, section.scrollHeight);
    }, 0);

    if (tallest > 0) {
      const publicationBottomSpace = 14;
      researchGrid.style.setProperty(
        "--selected-publications-height",
        (tallest + publicationBottomSpace) + "px"
      );
    }
  }

  function measureLanding() {
    root.classList.remove("home-scroll-ready");
    hero.style.removeProperty("--home-landing-top-space");
    hero.style.removeProperty("--home-current-bottom-space");

    const heroRect = hero.getBoundingClientRect();
    const introRect = intro.getBoundingClientRect();

    const topSpace = Math.max(0, introRect.top - heroRect.top);
    landingBottomSpace = Math.max(finalGap, heroRect.bottom - introRect.bottom);
    maxCollapse = Math.max(0, landingBottomSpace - finalGap);

    hero.style.setProperty("--home-landing-top-space", topSpace + "px");
    hero.style.setProperty("--home-current-bottom-space", landingBottomSpace + "px");
    root.classList.add("home-scroll-ready");

    setScrollSpacing();
    syncPublicationHeights();
  }

  window.addEventListener("scroll", requestSpacingUpdate, { passive: true });
  window.addEventListener("resize", function () {
    window.requestAnimationFrame(function () {
      measureLanding();
      syncPublicationHeights();
    });
  });

  if (document.readyState === "complete") {
    measureLanding();
  } else {
    window.addEventListener("load", measureLanding, { once: true });
  }
})();
