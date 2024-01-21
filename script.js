const page3 = document.querySelector(".elem-container");
const fixedimg = document.querySelector(".fixed-img");
const headscroll = document.querySelectorAll(".p4-h");
const p4img = document.querySelector(".p4-right");
const menu=document.querySelector(".h3");
const fullscr=document.querySelector(".full-scr");
const navimg=document.querySelector(".nav-img");
const swiper_wrapper=document.querySelector(".swiper-wrapper")
const loader=document.querySelector(".loader")


setTimeout(()=>{
loader.style.top="-120%";
},3000)
const nav=document.querySelector("nav");

let navlinks=document.querySelector(".nav-part2")
let flag=0;
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let data = [
  {
    name: "Play New Game",
    img: "https://images.unsplash.com/photo-1535868463750-c78d9543614f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "SHOP",
    img: "https://images.unsplash.com/photo-1538113300105-e51e4560b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "2024",
    img: "https://images.unsplash.com/photo-1705648265844-289eeb49d1f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "STORE",
    img: "https://plus.unsplash.com/premium_photo-1675337260939-88799ada0f77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "GALLERY",
    img: "https://images.unsplash.com/photo-1705522409239-87c3c13496e8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let data2=[
  {
    img:"https://cdn.freebiesupply.com/logos/large/2x/nike-3-logo-png-transparent.png",
    Descrption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio et quos harum inventore? Quae."
  },
  {
    img:"https://www.packagesmall.com/wp-content/uploads/2020/11/L-39.jpg",
    Descrption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio et quos harum inventore? Quae."
  },
  {
    img:"https://kingsmall.pk/wp-content/uploads/2023/05/16.png",
    Descrption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio et quos harum inventore? Quae."
  },
  {
    img:"",
    Descrption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio et quos harum inventore? Quae."
  },
  {
    img:"https://www.packagesmall.com/wp-content/uploads/2020/11/L-39.jpg",
    Descrption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio et quos harum inventore? Quae."
  },
  {
    img:"https://cdn.freebiesupply.com/logos/large/2x/nike-3-logo-png-transparent.png",
    Descrption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio et quos harum inventore? Quae."
  },
  {
    img:"https://www.packagesmall.com/wp-content/uploads/2020/11/L-39.jpg",
    Descrption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio et quos harum inventore? Quae."
  },
  {
    img:"https://cdn.freebiesupply.com/logos/large/2x/nike-3-logo-png-transparent.png",
    Descrption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio et quos harum inventore? Quae."}
]
data.map((item, index) => {
  let html = ` 
  <div class="elem" data-img=${item.img}>
        <div class="overlay" id="overlay-${index}"></div>
        <h1>${item.name}</h1>
</div>`;
  let template = document.createElement("template");
  html = html.trim(); // Never forget to do this
  template.innerHTML = html;
  page3.appendChild(template.content.firstChild);
});

data2.map((item) => {
  let html = `<div class="swiper-slide">
  <img src="${item.img}" alt="">
  <p>${item.Descrption}</p>
</div>`;
  let template = document.createElement("template");
  html = html.trim(); // Never forget to do this
  template.innerHTML=html;
  swiper_wrapper.appendChild(template.content.firstChild);
});


page3.addEventListener("mouseenter", () => {
  fixedimg.style.display = "block";
});

page3.addEventListener("mouseleave", () => {
  fixedimg.style.display = "none";
});

const element = document.querySelectorAll(".elem");
element.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    fixedimg.style.backgroundImage = `url(${elem.getAttribute("data-img")})`;
  });
  elem.addEventListener("mouseleave", () => {
    fixedimg.style.backgroundImage = `url()`;
  });
});

fixedimg.addEventListener("mouseenter", () => {
  fixedimg.style.display = "block";
});

headscroll.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    elem.querySelectorAll("span").forEach((child) => {
      child.style.background = "rgb(247, 92, 92)";
    });
    p4img.style.backgroundImage = `url(${elem.getAttribute("data-imgs")})`;
    elem.style.color = "white";
  });
  elem.addEventListener("mouseleave", () => {
    elem.querySelectorAll("span").forEach((child) => {
      child.style.background = "gray";
    });
    p4img.style.backgroundImage = `url(https://plus.unsplash.com/premium_photo-1667238366148-24c135c28c6b?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`;
    elem.style.color = "gray";
  });
});

menu.addEventListener("click",()=>{
    if(flag==0){
      fullscr.style.top=0;
    navimg.style.opacity=0;
    nav.classList.add("nav-active");
    navlinks.classList.add("nav-part2-active");
    menu.textContent="❌Close"
    flag=1;
    }
    else{
      fullscr.style.top="-120%";
      navimg.style.opacity=1;
      nav.classList.remove("nav-active");
      navlinks.classList.remove("nav-part2-active");
      menu.textContent="→ Menu";
      flag=0;
    }
})



