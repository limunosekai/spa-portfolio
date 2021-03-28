window.onload = () => {
  window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > 100) {
      document.querySelector('header').classList.add('is-scrolling');
    } else {
      document.querySelector('header').classList.remove('is-scrolling');
    }
  });
};
