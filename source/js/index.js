(() => {
  const location = document.querySelector('.location');

  if (!location) return;

  if (window.location.pathname == '/index.html' || window.location.pathname == '/' || window.location.pathname == '/2009235-cat-energy-26/index.html' || window.location.pathname == '/2009235-cat-energy-26/') {
    location.classList.add('location--index');
  }
})();

(() => {
  const header = document.querySelector('.header');

  if (!header) return;

  if (window.location.pathname == '/index.html' || window.location.pathname == '/' || window.location.pathname == '/2009235-cat-energy-26/index.html' || window.location.pathname == '/2009235-cat-energy-26/') {
    header.classList.add('header--index');
  }
})();

(() => {
  const site_list = document.querySelector('.site-list');

  if (!site_list) return;

  if (window.location.pathname == '/index.html' || window.location.pathname == '/' || window.location.pathname == '/2009235-cat-energy-26/index.html' || window.location.pathname == '/2009235-cat-energy-26/') {
    site_list.classList.add('site-list--index');
  }
})();
