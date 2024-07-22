const barss = document.querySelector('.bars-y');
const exits = document.querySelector('.exits');



// Nomber
const Mic = document.querySelector('.Mic');
const nol = document.querySelector('.value');
const Mix = document.querySelector('.Mix');
const span = document.querySelector('.spans');

nol.addEventListener("click", () => {
  nol.innerText = 1;
  Mic.style.display = 'inline-block'
  Mix.style.display = 'inline-block'
})
Mic.addEventListener("click", () => {
  if (nol.innerText < -1) {
       alert('Xatolik yuzberdi')
  } else {
    nol.innerText = nol.innerText - 1;
  }
});

Mix.addEventListener("click", () => {
  nol.innerText = +(nol.innerText) + +1
});


let count = 199.00;
Mix.addEventListener('click', ()=>{
  const cl = span.classList;
  const c = 'animated'
  count = count + 199.00
     span.innerText = count;
     cl.remove(c , cl.span(c));
      setTimeout(()=>
      span.classList.add('animated')
 ,300)
})
Mic.addEventListener('click', ()=>{
  const cl = span.classList;
  const c = 'an'
  count = count - 199.00

     span.innerText = count;
     cl.remove(c , cl.span(c));
      setTimeout(()=>
      span.classList.add('an')
 ,300)
})


// Shop / rasm
const id = document.querySelector(".img-id");
const hero = document.querySelector(".img-type img");
const aside = document.querySelectorAll(".hero-id img");
aside.forEach((item) => {
  item.addEventListener("click", (e) => {
    const firstAtt = hero.getAttribute("src");
    const secondAtt = item.getAttribute("src");
    hero.setAttribute("src", secondAtt);
    item.setAttribute("src", firstAtt);
  });
});


// cart-sespansiv
const cartshowul = document.querySelector('.cart-show-ul');
const showcart1 = document.querySelector('.btn-rrr');
const tugmacha = document.getElementById('a-tugmacha')

showcart1.addEventListener('click' , ()=>{
  cartshowul.classList.toggle('active')
})






// Yangi narsa
const valueimg = document.querySelector('.hero-s');

valueimg.addEventListener('click' , ()=>{
 console.log('Salom')
})