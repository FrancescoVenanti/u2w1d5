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

/* const mFader = function () {
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
}; */
//setInterval(mFader, 1000);

const mfader3 = function () {
  let g = document.querySelectorAll("g:nth-child(3n + 2)[opacity='1']");

  let gs = Array.from(g);
  gs.sort(() => Math.random() - 0.5);

  let i = 0;
  const removeM2 = setInterval(function () {
    if (i < gs.length) {
      gs[i].style.opacity = "0";
      i++;
    } else {
      clearInterval(removeM2);
      i = 0;
      const pushM2 = setInterval(function () {
        if (i < gs.length) {
          gs[i].style.opacity = "1";
          i++;
        } else {
          clearInterval(pushM2);
          mfader3();
        }
      }, 10);
    }
  }, 10);
};

mfader3();
