let buttons = document.querySelectorAll(".button");
let spetialButtons = document.querySelectorAll(".special-button");
let textButtons = document.querySelectorAll(".text-button");
let keyboardScreen = document.querySelector("#keyboard-screen");
let capsLock = document.querySelector(".CapsLock");
let pressSpace = [];
function showNumber(event) {
  keyboardScreen.innerHTML =
    keyboardScreen.innerHTML + event.srcElement.innerText;
}

textButtons.forEach((elem) => {
  elem.addEventListener("click", showNumber);
});

function changeTextSize() {
  let ruSmall = document.querySelectorAll(".ru-small");
  let ruBig = document.querySelectorAll(".ru-big");

  if (ruBig[0].classList.contains("hidden")) {
    ruBig.forEach((elem) => {
      elem.classList.remove("hidden");
    });

    ruSmall.forEach((elem) => {
      elem.classList.add("hidden");
    });
  } else {
    ruSmall.forEach((elem) => {
      elem.classList.remove("hidden");
    });

    ruBig.forEach((elem) => {
      elem.classList.add("hidden");
    });
  }
}

capsLock.addEventListener("click", changeTextSize);

function changeLanguage(event) {
  console.log(event.code);
}

function showKeyboardNumber(event) {
  // если нажат CapsLock
  if (event.code === "CapsLock") {
    changeTextSize();
  }

  buttons.forEach((elem) => {
    //находим елемент, на который нажали
    if (elem.classList.contains(event.code)) {
      elem.style.backgroundColor = "#7250c0";
      elem.style.transition = "all 0.2s";
      elem.style.borderRadius = "50%";
      //вывести в екран значение при клике на клавиатуре
      for (children of elem.children) {
        if (!children.classList.contains("hidden")) {
          console.log(children);
          keyboardScreen.innerHTML =
            keyboardScreen.innerHTML + children.innerHTML;
        }
      }
    }
  });
}

function removeKeyboardStyle() {
  buttons.forEach((elem) => {
    elem.removeAttribute("style");
  });
}

document.addEventListener("keydown", showKeyboardNumber);
document.addEventListener("keyup", removeKeyboardStyle);
