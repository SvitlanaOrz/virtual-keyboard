let buttons = document.querySelectorAll(".button");
let spetialButtons = document.querySelectorAll(".special-button");
let textButtons = document.querySelectorAll(".text-button");
let keyboardScreen = document.querySelector("#keyboard-screen");
let capsLock = document.querySelector(".CapsLock");
let pressed = new Set();
let changeSizeCombination = ["ControlLeft", "AltLeft"];

let ruSmall = document.querySelectorAll(".ru-small");
let ruBig = document.querySelectorAll(".ru-big");
let enSmall = document.querySelectorAll(".en-small");
let enBig = document.querySelectorAll(".en-big");

function showNumber(event) {
  keyboardScreen.innerHTML =
    keyboardScreen.innerHTML + event.srcElement.innerText;
}

function changeTextSize() {
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

function changeLanguageOnEn() {
  if (ruBig[0].classList.contains("hidden")) {
    enSmall.forEach((elem) => {
      elem.classList.remove("hidden");
    });

    ruSmall.forEach((elem) => {
      elem.classList.add("hidden");
    });
  } else if (ruSmall[0].classList.contains("hidden")) {
    enBig.forEach((elem) => {
      elem.classList.remove("hidden");
    });

    ruBig.forEach((elem) => {
      elem.classList.add("hidden");
    });
  }
}

function changeLanguageOnRu() {
  if (enBig[0].classList.contains("hidden")) {
    ruSmall.forEach((elem) => {
      elem.classList.remove("hidden");
    });

    enSmall.forEach((elem) => {
      elem.classList.add("hidden");
    });
  } else if (enSmall[0].classList.contains("hidden")) {
    ruBig.forEach((elem) => {
      elem.classList.remove("hidden");
    });

    enBig.forEach((elem) => {
      elem.classList.add("hidden");
    });
  }
}

function changeLanguage() {
  if (
    enBig[0].classList.contains("hidden") &&
    enSmall[0].classList.contains("hidden")
  ) {
    changeLanguageOnEn();
  } else {
    changeLanguageOnRu();
  }

  //   if (
  //     //с русского маленький шрифт на английский
  //     enBig[0].classList.contains("hidden") &&
  //     enSmall[0].classList.contains("hidden") &&
  //     ruBig[0].classList.contains("hidden")
  //   ) {
  //     enSmall.forEach((elem) => {
  //       elem.classList.remove("hidden");
  //     });

  //     ruSmall.forEach((elem) => {
  //       elem.classList.add("hidden");
  //     });
  //   } else if (
  //     //с русского большой шрифт на английский
  //     enBig[0].classList.contains("hidden") &&
  //     enSmall[0].classList.contains("hidden") &&
  //     ruSmall[0].classList.contains("hidden")
  //   ) {
  //     enBig.forEach((elem) => {
  //       elem.classList.remove("hidden");
  //     });

  //     ruBig.forEach((elem) => {
  //       elem.classList.add("hidden");
  //     });
  //   } else if (
  //     //с английского маленький шрифт на русский
  //     ruBig[0].classList.contains("hidden") &&
  //     ruSmall[0].classList.contains("hidden") &&
  //     enBig[0].classList.contains("hidden")
  //   ) {
  //     ruSmall.forEach((elem) => {
  //       elem.classList.remove("hidden");
  //     });

  //     enSmall.forEach((elem) => {
  //       elem.classList.add("hidden");
  //     });
  //   } else {
  //     //с английского большой шрифт на русский
  //     ruBig.forEach((elem) => {
  //       elem.classList.remove("hidden");
  //     });

  //     enBig.forEach((elem) => {
  //       elem.classList.add("hidden");
  //     });
  //   }
}

function openShiftContent() {}

function closeShiftContent() {}

function showKeyboarContent(event) {
  pressed.add(event.code);
  console.log(event.code);
  // если нажат CapsLock
  if (event.code === "CapsLock") {
    changeTextSize();
    // если нажат Shift
  } else if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    openShiftContent();
  } else if (pressed.has("ControlLeft") && pressed.has("AltLeft")) {
    // если нажат Ctrl+Alt
    changeLanguage();
  } else {
    //вывести в екран значение при клике на клавиатуре стандартные клавиши
    buttons.forEach((elem) => {
      if (elem.classList.contains(event.code)) {
        for (children of elem.children) {
          if (!children.classList.contains("hidden")) {
            keyboardScreen.innerHTML =
              keyboardScreen.innerHTML + children.innerHTML;
          }
        }
      }
    });
  }

  //стили в момент нажатия
  buttons.forEach((elem) => {
    if (elem.classList.contains(event.code)) {
      elem.style.backgroundColor = "#7250c0";
      elem.style.transition = "all 0.2s";
      elem.style.borderRadius = "50%";
    }
  });
}

function removeKeyboardStyle(event) {
  pressed.delete(event.code);
  let btn = document.querySelector(`.${event.code}`);
  btn.removeAttribute("style");
  closeShiftContent();
}

textButtons.forEach((elem) => {
  elem.addEventListener("click", showNumber);
});

capsLock.addEventListener("click", changeTextSize);

document.addEventListener("keydown", showKeyboarContent);
document.addEventListener("keyup", removeKeyboardStyle);
