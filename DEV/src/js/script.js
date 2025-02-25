document.addEventListener("DOMContentLoaded", () => {
  // ? === MOBILE BTN MENUE ===
  const menueBtn = document.querySelector(".menue-btn");
  menueBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const menueList = document.querySelector(".menue-list");
    menueList.classList.toggle("menue-list-visible");

    window.addEventListener("click", (e) => {
      if (!menueList.contains(e.target) && e.target !== menueBtn) {
        menueList.classList.remove("menue-list-visible");
      }
    });
  });

  // ? === HERO SECTION IMG SLIDER ===

  let slides = document.querySelectorAll(".slide");
  let btns = document.querySelectorAll(".btn");
  let currentSlide = 1;

  const manualNav = function (manual) {
    slides.forEach((slide) => {
      slide.classList.remove("active");

      btns.forEach((btn) => {
        btn.classList.remove("active");
      });
    });
    slides[manual].classList.add("active");
    btns[manual].classList.add("active");
  };

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      manualNav(i);
      currentSlide = i;
    });
  });

  const repeat = function (activeClass) {
    let active = document.getElementsByClassName("active");
    let i = 1;

    const repeater = () => {
      setTimeout(function () {
        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove("active");
        });

        slides[i].classList.add("active");
        btns[i].classList.add("active");
        i++;

        if (slides.length == i) {
          i = 0;
        }
        if (i >= slides.length) {
          return;
        }
        repeater();
      }, 10000);
    };
    repeater();
  };
  repeat();

  // ? === TRAINING SECTION SCROLLER ===
  // ?

  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
  const openScrollers = document.querySelectorAll(".open_scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addOpeningAnimation();
  }
  function addOpeningAnimation() {
    openScrollers.forEach((openScroller) => {
      openScroller.setAttribute("data-animated", true);

      const openScrollerInner = openScroller.querySelector(".open_scroller__inner");
      const openScrollerContent = Array.from(openScrollerInner.children);

      openScrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        openScrollerInner.appendChild(duplicatedItem);
      });
    });
  }
});
