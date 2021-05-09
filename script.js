let btns = document.getElementsByClassName("port-btn");
let tabs = document.getElementsByClassName("tab");
let activeIndex = 0;
let clickedIndex;
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    change(i);
  });
}
function change(item) {
  clickedIndex = item;
  if (clickedIndex == activeIndex) {
    return;
  } else {
    btns[activeIndex].classList.remove("active-btn");
    btns[clickedIndex].classList.add("active-btn");
    tabs[activeIndex].classList.add("disappear");
    tabs[activeIndex].classList.remove("appear");
    setTimeout(function () {
      tabs[activeIndex].classList.remove("is-active");
      // tabs[clickedIndex].classList.remove('disappear');
      tabs[clickedIndex].classList.add("is-active");
      setTimeout(function () {
        tabs[clickedIndex].classList.add("appear");
        activeIndex = clickedIndex;
      }, 10);
    }, 500);
  }
}
//кнопка под слайдером должна добавлять по одному диву с картинками на каждый таб. Пусть она будет работать только один раз и потом пропадать
let counter = 0;
function more() {
  counter = counter + 1;
  console.log(counter);
  if (counter > 1) {
    let btn = document.getElementById("more-btn");
    btn.classList.add("disappear");
    setTimeout(function () {
      document.getElementById;
      btn.classList.add("donothing");
    }, 500);
  }
  if (counter > 2) {
    return;
  }
  myTab1 = document.getElementById("tab1");
  myTab2 = document.getElementById("tab2");
  myTab3 = document.getElementById("tab3");
  myTab4 = document.getElementById("tab4");

  let newCard1 = document.createElement("div");
  newCard1.classList.add("port-imges-div");
  newCard1.classList.add("disappear");

  let cardImg1 = document.createElement("img");
  cardImg1.classList.add("port-img");
  cardImg1.setAttribute("src", "./images/1@1X.png");

  let cardH11 = document.createElement("h3");
  cardH11.classList.add("port-img-heading");
  cardH11.innerHTML = "Mock-Up";

  newCard1.appendChild(cardImg1);
  newCard1.appendChild(cardH11);

  setTimeout(function () {
    newCard1.classList.add("appear");
  }, 10);
  myTab1.appendChild(newCard1);

  let newCard2 = document.createElement("div");
  newCard2.classList.add("port-imges-div");
  newCard2.classList.add("disappear");

  let cardImg2 = document.createElement("img");
  cardImg2.classList.add("port-img");
  cardImg2.setAttribute("src", "./images/2@1X.png");

  let cardH12 = document.createElement("h3");
  cardH12.classList.add("port-img-heading");
  cardH12.innerHTML = "Web-Apps";

  newCard2.appendChild(cardImg2);
  newCard2.appendChild(cardH12);

  setTimeout(function () {
    newCard2.classList.add("appear");
  }, 10);
  myTab2.appendChild(newCard2);
  let newCard3 = document.createElement("div");
  newCard3.classList.add("port-imges-div");

  let cardImg3 = document.createElement("img");
  cardImg3.classList.add("port-img");
  cardImg3.setAttribute("src", "./images/3@1X.png");

  let cardH13 = document.createElement("h3");
  cardH13.classList.add("port-img-heading");
  cardH13.innerHTML = "Apps";

  newCard3.appendChild(cardImg3);
  newCard3.appendChild(cardH13);

  myTab3.appendChild(newCard3);

  let newCard4 = document.createElement("div");
  newCard4.classList.add("port-imges-div");
  
  let cardImg4 = document.createElement("img");
  cardImg4.classList.add("port-img");
  cardImg4.setAttribute("src", "./images/4@1X.png");
  
  let cardH14 = document.createElement("h3");
  cardH14.classList.add("port-img-heading");
  cardH14.innerHTML = "Nice Icons";
  
  newCard4.appendChild(cardImg4);
  newCard4.appendChild(cardH14);
  
  myTab4.appendChild(newCard4);
}
let ham = document.querySelector(".hamburger");
let ul = document.querySelector(".nav-links");
let ulLinks = document.querySelectorAll(".top-nav-li");

let switcher = false;

ham.addEventListener("click", function () {
  ul.classList.toggle("open");
  ulLinks.forEach((item) => item.classList.toggle("fade"));
  
  if (!switcher) {
    document.querySelector(".hamburger").classList.toggle("fix");
    setTimeout(function () {
      document.querySelector("html").classList.toggle("overflowY");
      document.querySelector(".hamburger").classList.toggle("totheright");
    }, 400);
  } else if (switcher) {
    document.querySelector("html").classList.toggle("overflowY");
    ham.classList.toggle("totheright");
    ham.classList.toggle("fix");
  }
  switcher = !switcher;
});

// добавть тоггл оферфлоу хидден класс на клике
let popup = document.querySelector('.popup');
let popupHeight = popup.offsetHeight;
let openBtn = document.querySelector('.openBtn');
let closeBtn = document.querySelector('.close-button');
let overlay = document.querySelector('.overlay');

closeBtn.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.add('swoop');
})
overlay.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.add('swoop');
    setTimeout(() => {    
      popup.style.display = 'none'
    }, 400);
})
openBtn.addEventListener('click', function(){
  popup.style.display = 'block';
  closeBtn.focus();
  setTimeout(() => {      
    overlay.classList.add('active');
    popup.classList.remove('swoop');
    closeBtn.classList.add('focused')
  }, 50);
})


document.querySelectorAll('a').forEach(element => element.setAttribute('tabintex', '0'));
document.querySelectorAll('button').forEach(element => element.setAttribute('tabintex', '0'));

if (screen.width <= 820){
  document.querySelectorAll('.top-nav-li a').forEach(element => {
    element.setAttribute('tabindex','-1');
  });
}