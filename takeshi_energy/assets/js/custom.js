document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".scroll-link");
  const observed = document.querySelectorAll("main .te-hero[id], main .te-section[id]");
  const panel = document.getElementById("te-nav-panel");
  const toggle = document.querySelector(".te-nav__toggle");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function setActive(id) {
    const navIds = { solutions: true, serve: true, process: true, contact: true };
    navLinks.forEach((link) => {
      const on = Boolean(navIds[id]) && link.getAttribute("href") === "#" + id;
      link.classList.toggle("active", on);
      if (on) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && observed.length) {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible && visible.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    observed.forEach((section) => io.observe(section));
  }

  if (panel) {
    panel.addEventListener("show.bs.offcanvas", () => {
      panel.removeAttribute("inert");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "Close menu");
      }
    });
    panel.addEventListener("hidden.bs.offcanvas", () => {
      panel.setAttribute("inert", "");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !panel || !panel.classList.contains("show")) return;
    const instance = window.bootstrap && window.bootstrap.Offcanvas.getInstance(panel);
    if (instance) instance.hide();
  });

  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    let ticking = false;
    const toggleTop = () => {
      backToTop.hidden = window.scrollY < 600;
      ticking = false;
    };
    toggleTop();
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(toggleTop);
      },
      { passive: true }
    );
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
    });
  }
});
