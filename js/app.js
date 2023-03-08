
// get ul element
const navList = document.getElementById("nav-list");

const sections = document.querySelectorAll('section');

//loop over sections
// document.querySelectorAll('section').forEach(section => {

// another way to loop
for(const section of sections) {
    const title = section.querySelector('h1').innerText;
    const li = `<li><a class="nav" href="#${section.id}">${title}</a></li>`;

    navList.insertAdjacentHTML('beforeend', li);
}

// });
// the same as normal loop
// for(let i=0; i < sections.length; i++) {
//     sections[i]
// }


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('a').forEach(a => {
            a.classList.remove('active');
        });
        anchor.classList.add('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = () => {
    let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector("a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
  };
  let isActive = false;
  const burgerBtn = document.querySelector('.burger');
  burgerBtn.addEventListener('click', ()=>{
    if(!isActive){
      navList.style.display='flex'
    }else{
      navList.style.display='none'
    }
    isActive=!isActive
  })