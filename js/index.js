const navMenu = document.getElementById("nav-menu");
const toggle = document.getElementById("toggle");
const toggleIcon = document.getElementById("toggleIcon");

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
