/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Nếu navToggle tồn tại thêm .show-menu ở navbar */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Nếu navClose tồn tại xóa .show-menu ở navbar */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // khi bấm vào mỗi cái nav__link, sẽ xóa .show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // khi mà kéo hết 100 viewport height đầu tiên, thêm .scroll-header (đổi màu header )
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // khí kéo hết 200 viewport height đầu tiên, hiện croll up
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* =================== SHOW MORE ==================== */

const readMoreBtn = document.querySelector(".more__button");
const more = document.querySelector(".more");

readMoreBtn.addEventListener("click", (e) => {
  more.classList.add("show-more");
  if (readMoreBtn.innerText === "Ẩn") {
    readMoreBtn.innerText = "Xem Thêm";
    more.classList.remove("show-more");

  } else {
    readMoreBtn.innerText = "Ẩn";
  }
});