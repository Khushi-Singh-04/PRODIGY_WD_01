window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  const placeholder = document.querySelector('.nav-placeholder');
  const placeholderTop = placeholder.offsetTop;

  if (window.scrollY >= placeholderTop) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
