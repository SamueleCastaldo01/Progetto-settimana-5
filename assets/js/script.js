window.addEventListener("scroll", function () {
    var header = document.getElementById("myHeader");
    var getS = document.getElementById("getS")
    if (window.scrollY > 380) {
              header.style.backgroundColor = "#fff"; // Colore di sfondo bianco
        getS.style.backgroundColor = "#1a8917"
    } else {
        header.style.backgroundColor = "#ffc017"; // sfondo originale
        getS.style.backgroundColor = "#181919"
    }
  });

  
// animazione
const gElements = document.getElementsByTagName("g");
const gElementsFiltered = Array.from(gElements).filter(
  (element) => element.getAttribute("opacity") === "0"
);
gElementsFiltered.shift();

const gAnimation = setInterval(() => {
  const randomNum = Math.floor(Math.random() * gElementsFiltered.length);
  const currentElement = gElementsFiltered[randomNum];
  const currentOpacity = currentElement.getAttribute("opacity");
  if (currentOpacity === "0") {
    currentElement.setAttribute("opacity", 1);
  } else if (currentOpacity === "1") {
    currentElement.setAttribute("opacity", 0);
  }
}, 50);