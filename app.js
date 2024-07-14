const barss = document.querySelector('.bars-y');
const exits = document.querySelector('.exits');







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