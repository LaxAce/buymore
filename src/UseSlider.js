const useSlider = (slideContainer, slideBack, slideForward) => {
  const box = document.querySelector(`.${slideContainer}`);

  let scrollAmount = 0;
  let maxWidth = box?.scrollWidth - box?.clientWidth - 30;

  if (scrollAmount === 0) {
    document.querySelector(`.${slideBack}`)?.classList.add('end-effect');
  }

  document.querySelector(`.${slideForward}`)?.classList.add('end-effect');

  if (maxWidth > 0) {
    document.querySelector(`.${slideForward}`)?.classList.remove('end-effect');
  }

  // Previous Click
  const previous = () => {
    document.querySelector(`.${slideContainer}`)?.scrollBy({
      top: 0,
      left: -672,
      behavior: 'smooth',
    });

    if (scrollAmount > 0) scrollAmount -= 672;

    if (maxWidth !== 0) {
      document
        .querySelector(`.${slideForward}`)
        ?.classList.remove('end-effect');
    }

    if (scrollAmount <= 0) {
      document.querySelector(`.${slideBack}`)?.classList.add('end-effect');
    }
    if (maxWidth < 0) {
      document.querySelector(`.${slideForward}`)?.classList.add('end-effect');
    }
    console.log(scrollAmount, maxWidth);
  };

  // Next Click
  const next = () => {
    document.querySelector(`.${slideContainer}`)?.scrollBy({
      top: 0,
      left: 672,
      // left: Math.max((scrollAmount += 655.8), scrollMax),
      behavior: 'smooth',
    });

    if (scrollAmount <= maxWidth) {
      scrollAmount += 672;
    }

    if (maxWidth !== 0) {
      document.querySelector(`.${slideBack}`)?.classList.remove('end-effect');
    }

    if (scrollAmount > maxWidth) {
      document.querySelector(`.${slideForward}`)?.classList.add('end-effect');
    }

    if (maxWidth < 0) {
      document.querySelector(`.${slideBack}`)?.classList.add('end-effect');
    }
    console.log(scrollAmount, maxWidth);
  };
  return { previous, next };
};

export default useSlider;
