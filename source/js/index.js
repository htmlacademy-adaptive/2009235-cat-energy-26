(() => {
  const location = document.querySelector('.location');

  if (!location) return;

  if (window.location.pathname == '/index.html' || window.location.pathname == '/') {
    location.classList.add('location--index');
  }
})();

(() => {
  const header = document.querySelector('.header');

  if (!header) return;
  console.log( window.location.pathname);
  if (window.location.pathname == '/index.html' || window.location.pathname == '/') {
    header.classList.add('header--index');
  }
})();

(() => {
  const site_list = document.querySelector('.site-list');

  if (!site_list) return;

  if (window.location.pathname == '/index.html' || window.location.pathname == '/') {
    site_list.classList.add('site-list--index');
  }
})();
