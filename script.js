const light = document.querySelector(".light");

document.addEventListener("mousemove",(e)=>{

light.style.left = e.clientX + "px";
light.style.top = e.clientY + "px";

});

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

reveals.forEach((el)=>{

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

el.classList.add("active");

}

});

}

window.addEventListener("scroll",revealElements);

revealElements();

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("scroll",()=>{

const scroll = window.scrollY;

heroImage.style.transform =
`
translateY(${scroll * 0.15}px)
rotate(${scroll * 0.01}deg)
`;

});
const products = document.querySelectorAll(".product img");

window.addEventListener("scroll", () => {

products.forEach((img) => {

const rect = img.getBoundingClientRect();

const visible = 1 - (Math.abs(rect.top) / window.innerHeight);

const scale = 1 + (visible * 0.08);

img.style.transform = `scale(${scale})`;

});

});
document.querySelectorAll(".split").forEach(title=>{

const text = title.textContent;

title.innerHTML = text
.split("")
.map(letter=>`<span>${letter}</span>`)
.join("");

});
const footerTitle = document.querySelector("footer h1");

window.addEventListener("scroll",()=>{

const rect = footerTitle.getBoundingClientRect();

if(rect.top < window.innerHeight){

footerTitle.style.opacity = ".2";
footerTitle.style.transform = "translateY(-30px)";

}

});