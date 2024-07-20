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
const heroMainImg = document.querySelector(".img-type img");
const asideImgs = document.querySelectorAll(".hero-id img");

asideImgs.forEach((item) => {
  item.addEventListener("click", (e) => {
    const firstAtt = heroMainImg.getAttribute("src");
    const secondAtt = item.getAttribute("src");
    heroMainImg.setAttribute("src", secondAtt);
    item.setAttribute("src", firstAtt);
    item.style.Height = "404px"
  });
});


