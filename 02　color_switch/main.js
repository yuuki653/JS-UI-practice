const bodyEle = document.querySelector("body");
const bgColor = document.querySelector(".bg-color");
const color = document.querySelector(".color");
const pEle = document.querySelector("p");

bgColor.addEventListener("click", () => {
  if (bodyEle.classList.contains("bg-yellow")) {
    bodyEle.classList.remove("bg-yellow");
    bodyEle.classList.add("bg-pink");
  } else if (bodyEle.classList.contains("bg-pink")) {
    bodyEle.classList.remove("bg-pink");
    bodyEle.classList.add("bg-blue");
  } else if (bodyEle.classList.contains("bg-blue")) {
    bodyEle.classList.remove("bg-blue");
    bodyEle.classList.add("bg-yellow");
  }
});

color.addEventListener("click", () => {
  if (bodyEle.classList.contains("orange")) {
    bodyEle.classList.remove("orange");
    bodyEle.classList.add("green");
  } else if (bodyEle.classList.contains("green")) {
    bodyEle.classList.remove("green");
    bodyEle.classList.add("purple");
  } else if (bodyEle.classList.contains("purple")) {
    bodyEle.classList.remove("purple");
    bodyEle.classList.add("orange");
  }
});
