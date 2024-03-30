let colorOption = localStorage.getItem("color_option");
if (colorOption !== null) {
  document.documentElement.style.setProperty("--main-color", colorOption);
  document.querySelectorAll(".colors-list li").forEach((Element) => {
    Element.classList.remove("active");
    if (Element.dataset.color === colorOption) {
      Element.classList.add("active");
    }
  });
}

//Random backgrond changing
const randomBc = document.querySelectorAll(".backgrounds span");
randomBc.forEach((span) => {
  span.addEventListener("click", (e) => {
    handelactive(e);
    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizImee();
      localStorage.setItem("background", true);
    } else {
      backgroundOption = false;
      clearInterval(backgrondInterval);
      localStorage.setItem("background", false);
    }
  });
});

let backgroundOption = true;
let backgrondInterval;

let backgroundLocalItem = localStorage.getItem("background");
if (backgroundLocalItem !== null) {
  randomBc.forEach((span) => {
    span.classList.remove("active");
  });
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }

  document.querySelectorAll("backgrounds span").forEach((Element) => {
    Element.classList.remove("active");
  });
  if (backgroundLocalItem === "true") {
    document.querySelector(".backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".backgrounds .no").classList.add("active");
  }
}

document.querySelector(".icon .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting-Box").classList.toggle("open");
};

const colorli = document.querySelectorAll(".colors-list li");
colorli.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color_option", e.target.dataset.color);
    handelactive(e);
  });
});

let landingPage = document.querySelector(".landing-Page");
let img = ["7.jpg", "10.jpg", "08 .png"];
function randomizImee() {
  if (backgroundOption === true) {
    backgrondInterval = setInterval(() => {
      //get random number
      let random = Math.floor(Math.random() * img.length);
      // chang Back
      landingPage.style.backgroundImage = "url(img/" + img[random] + ")";
    }, 1000);
  }
}
randomizImee();

let ourskills = document.querySelector(".skills");
window.onscroll = function () {
  let skillsOffSetTop = ourskills.offsetTop;

  let skillsouterheoght = ourskills.offsetHeight;

  let windowheight = this.innerHeight;

  let windowScrool = this.pageYOffset;

  if (windowScrool > skillsOffSetTop + skillsouterheoght - windowheight) {
    let allsklls = document.querySelectorAll(".skill-progres span");

    allsklls.forEach((sk) => {
      sk.style.width = sk.dataset.progres;
    });
  }
};

let ourgallery = document.querySelectorAll(".img-box img");

ourgallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);

    let popupbox = document.createElement("div");
    popupbox.className = "popup-box";

    if (img.alt !== null) {
      let imgHeading = document.createElement("h3");
      let imgText = document.createTextNode(img.alt);
      imgHeading.appendChild(imgText);

      popupbox.appendChild(imgHeading);
    }

    let popupimg = document.createElement("img");
    popupimg.src = img.src;

    popupbox.appendChild(popupimg);

    document.body.appendChild(popupbox);

    let closeSpan = document.createElement("span");
    let closetext = document.createTextNode("x");
    closeSpan.appendChild(closetext);
    closeSpan.className = "close-buttun";
    popupbox.appendChild(closeSpan);
  });
});

document.addEventListener("click", (e) => {
  if (e.target.className === "close-buttun") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});

const allbulets = document.querySelectorAll(".nav-bullet .bullet");
const alllinks = document.querySelectorAll(".links a");

function scrolltosomewere(Element) {
  Element.forEach((bullet) => {
    bullet.addEventListener("click", (e) => {
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrolltosomewere(alllinks);
scrolltosomewere(allbulets);

function handelactive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach((Element) => {
    Element.classList.remove("active");
  });

  ev.target.classList.add("active");
}

let bulletspan = document.querySelectorAll(".bullets-option span");
let bulletcontainer = document.querySelector(".nav-bullet");
let buletLocal = localStorage.getItem("billet-option");
if (buletLocal !== null) {
  bulletspan.forEach((span) => {
    span.classList.remove("active");
  });
  if (buletLocal === "block") {
    bulletcontainer.style.display = "block";
    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletcontainer.style.display = "none";
    document.querySelector(".bullets-option .no").classList.add("active");
  }
}
bulletspan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      bulletcontainer.style.display = "block";
      localStorage.setItem("billet-option", "block");
    } else {
      bulletcontainer.style.display = "none";
      localStorage.setItem("billet-option", "none");
    }
    handelactive(e);
  });
});

document.querySelector(".reset-option").onclick = function () {
  // localStorage.clear()
  localStorage.removeItem("billet-option");
  localStorage.removeItem("background");
  localStorage.removeItem("color_option");
  window.location.reload();
};

let links = document.querySelector(".header-area .links");
let togg = document.querySelector(".toggel-menu");
togg.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  links.classList.toggle("open");
};

document.addEventListener("click", (e) => {
  if (e.target !== togg && e.target !== links) {
    if (links.classList.contains("open")) {
      togg.classList.toggle("menu-active");
      links.classList.toggle("open");
    }
  }
});

links.onclick = function (e) {
  e.stopPropagation();
};

