// start pre-loader
let preLoader = document.querySelector("#pre-loader");

window.addEventListener("load" , () => {
  preLoader.style.display = "none";
})

// ******************************************************* //

// navbar back-ground --- on scrolling
let nav = document.querySelector(".navbar");

// Counter section
let sectionCounter = document.querySelector(".counter");
let spanCounterNum = document.querySelectorAll(".number-span-js");
let started = false;

window.onscroll = function () {
    // navbar back-ground --- on scrolling
    if (window.scrollY >= 10) {
        nav.style.cssText = "background-color: #101f2ed7 !important;"
    } else {
        nav.style.cssText = "background-color: #18243071 !important;"
    }
    
    // scroll stats numbers increase number in section Counter stats
    if (window.scrollY >= sectionCounter.offsetTop - 300) {
        if (!started) {
            spanCounterNum.forEach((awe) => startCountNumber(awe));
        }
        started = true;
    };
};

// function increase number in section Counter
function startCountNumber(element) {
    let goal = element.dataset.goal;
    let CounterNumber = setInterval ( ()=> {
        element.textContent++
        if (element.textContent == goal) {
            clearInterval(CounterNumber)
        }
    }, 1000 / goal);
};

// *****************************************************//
// Start btn-up scroll to top

let btnUp = document.querySelector(".btn-up");

let btnUpScroll = () => {
  // btn-up scroll to top
  if (window.scrollY >= 250) {
    btnUp.classList.add("show");
  } else {
    btnUp.classList.remove("show");
  }
};

btnUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", btnUpScroll);

// End btn-up scroll to top