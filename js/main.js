const toggleNav = document.querySelector('.toggle-icon');
const linkItems = document.querySelector('.menu-hamburger');

toggleNav.addEventListener('click', () => {
  if(linkItems.classList.contains('display-links')){
    linkItems.classList.remove('display-links');
  } else {
    linkItems.classList.add('display-links');
  }
})