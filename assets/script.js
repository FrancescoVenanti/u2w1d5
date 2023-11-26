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

const mFader = function () {
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
};
setInterval(mFader, 1000);

//ancora non funziona

/* const scambio2 = [];
const mFader2 = function () {
  let m = document.querySelectorAll("svg g");

  for (let i = 0; i < m.length / 2; i++) {
    const deleteM = setTimeout(function () {
      scambio2[i] = m[i].innerHTML;
      m[i].innerHTML = "";
    }, 500);
  }

  for (let i = 0; i < m.length / 2; i++) {
    const pushM = setTimeout(function () {
      m[i].innerHTML = scambio2[i];
    }, 1000);
  }
};
mFader2(); */
