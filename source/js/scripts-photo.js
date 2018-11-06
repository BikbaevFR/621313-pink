var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeader = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened', 'main-nav--opened-inner');
    pageHeader.classList.add('page-header--bg-photo');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened', 'main-nav--opened-inner');
    pageHeader.classList.remove('page-header--bg-photo');
  }
});
