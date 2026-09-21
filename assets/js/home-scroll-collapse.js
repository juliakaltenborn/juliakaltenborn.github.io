(function () {
  const root = document.documentElement;
  const hero = document.querySelector(".home-hero");
  const intro = document.querySelector(".home-intro");

  if (!hero || !intro) {
    return;
  }

  let collapsed = false;
  let touchStartY = null;

  function collapseLandingSpace() {
    if (collapsed) {
      return;
    }

    const heroRect = hero.getBoundingClientRect();
    const introRect = intro.getBoundingClientRect();
    const topSpace = Math.max(0, introRect.top - heroRect.top);

    hero.style.setProperty("--home-reading-top-space", topSpace + "px");
    root.classList.add("home-reading-mode");
    collapsed = true;
  }

  if (window.scrollY > 1) {
    collapseLandingSpace();
  }

  window.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
      collapseLandingSpace();
    }
  }, { passive: true });

  window.addEventListener("touchstart", function (event) {
    if (event.touches.length) {
      touchStartY = event.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener("touchmove", function (event) {
    if (touchStartY === null || !event.touches.length) {
      return;
    }

    if (touchStartY - event.touches[0].clientY > 4) {
      collapseLandingSpace();
    }
  }, { passive: true });

  window.addEventListener("keydown", function (event) {
    if (["ArrowDown", "PageDown", " ", "End"].includes(event.key)) {
      collapseLandingSpace();
    }
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 1) {
      collapseLandingSpace();
    }
  }, { passive: true });
})();
