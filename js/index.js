const navMenu = document.getElementById("nav-menu");
const toggle = document.getElementById("toggle");
const toggleIcon = document.getElementById("toggleIcon");
const navLinks = navMenu.querySelectorAll('a.nav-link');

toggle.addEventListener("click", () => {
  const visible = navMenu.getAttribute("data-visible");
  if (visible === 'false') {
    navMenu.setAttribute('data-visible', true);
    toggleIcon.classList.replace('fa-border-all','fa-x')
}else{
    navMenu.setAttribute('data-visible', false);
    toggleIcon.classList.replace('fa-x' , 'fa-border-all')
  }
});
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.setAttribute('data-visible', 'false');
    toggleIcon.classList.replace('fa-x', 'fa-border-all');
  });
});


// animation

const container =ScrollReveal({
  distance: '120px',
  duration: '2500',
  delay:'100',
  reset:true
})
const title =ScrollReveal({
  distance: '60px',
  duration: '1500',
  reset:true
})

container.reveal(`.home-content-container`);
container.reveal(`.home-img, .case-content, .product-content` , {origin:'top'});
container.reveal(`.specs-img, .discount-img` , {origin:'right'});
container.reveal(`.specs-content, .discount-content` , {origin:'left'});
container.reveal(`.case-img, footer` , {origin:'bottom'});
title.reveal(`.title`);
