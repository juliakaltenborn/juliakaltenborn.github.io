(function () {
  const root = document.documentElement;
  const hero = document.querySelector(".home-hero");
  const intro = document.querySelector(".home-intro");

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
  }

  window.addEventListener("scroll", requestSpacingUpdate, { passive: true });
  window.addEventListener("resize", function () {
    window.requestAnimationFrame(measureLanding);
  });

  if (document.readyState === "complete") {
    measureLanding();
  } else {
    window.addEventListener("load", measureLanding, { once: true });
  }
})();
