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
  //escludo i primi due g perche facevano scomparire tutto
  let g = document.querySelectorAll("g:nth-child(n + 2)[opacity='1']");
  //creo un array in ordine casuale
  let gs = Array.from(g);
  gs.sort(() => Math.random() - 0.5);

  let i = 0;
  // imposto l'opacita' a zero per un quarto degli elementi cosi da avere lo stesso effetto del mockup con un piccolo intervallo di tempo tra uno e laltro
  const removeM2 = setInterval(function () {
    if (i < gs.length / 4) {
      gs[i].style.opacity = "0";
      i++;
    } else {
      //finiti gli elementi interrompo l'intervallo, rinizializzo i e imposto l'opacita' a uno agli elementi allo stesso modo di prima
      clearInterval(removeM2);
      i = 0;
      const pushM2 = setInterval(function () {
        if (i < gs.length / 4) {
          gs[i].style.opacity = "1";
          i++;
        } else {
          //finiti gli elementi interrompo l'intervallo e rifaccio partire la funzione da capo
          clearInterval(pushM2);
          mfader3();
        }
      }, 50);
    }
  }, 50);
};

mfader3();
