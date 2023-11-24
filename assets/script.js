const scrollChange = function () {
  let header = document.querySelector("header");
  let distance = header.offsetTop;

  let button = document.getElementById("getStarted");
  if (distance > 350) {
    header.classList.add("whiteHeader");
    button.classList.add("greenButton");
  } else {
    header.classList.remove("whiteHeader");
    button.classList.remove("greenButton");
  }
};

window.onscroll = function () {
  scrollChange();
};

//non funzionera' mai
//non e'perfetto ma fa qualcosa

const mFader = setInterval(function () {
  let m = document.querySelectorAll("g");
  m.forEach((el) => {
    let random = Math.round(Math.random() * 200);
    if (random == 2) {
      var scambio = el.innerHTML;
      el.innerHTML = "";
      const rimetti = setInterval(function () {
        el.innerHTML = scambio;
      }, 1000);
    }
  });
}, 500);
mFader;
