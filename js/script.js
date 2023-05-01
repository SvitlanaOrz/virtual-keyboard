let buttons = document.querySelectorAll(".button");
let spetialButtons = document.querySelectorAll(".special-button");
let textButtons = document.querySelectorAll(".text-button");
let keyboardScreen = document.querySelector("#keyboard-screen");
let capsLock = document.querySelector(".CapsLock");
let shift = document.querySelectorAll(".shift");
let tab = document.querySelectorAll(".tab");

let ruSmall = document.querySelectorAll(".ru-small");
let ruBig = document.querySelectorAll(".ru-big");
let enSmall = document.querySelectorAll(".en-small");
let enBig = document.querySelectorAll(".en-big");
let enshift = document.querySelectorAll(".shift-en");
let rushift = document.querySelectorAll(".shift-ru");

let unShift = document.querySelectorAll(".unshift");
let unshiftEn = document.querySelectorAll(".unshift-en");
let unshiftRu = document.querySelectorAll(".unshift-ru");

let language = "ru";
let wordsSize = "small";
let pressed = new Set();

function showContent(event) {
  if (event.srcElement.innerText === "Tab") {
    keyboardScreen.innerHTML = keyboardScreen.innerHTML + "    ";
  } else if (event.srcElement.innerText === "Del") {
  } else if (event.srcElement.innerText === "Backspace") {
    keyboardScreen.innerHTML = keyboardScreen.innerHTML.slice(
      0,
      keyboardScreen.innerHTML.length - 1
    );
  } else if (event.srcElement.innerText === "") {
    keyboardScreen.innerHTML = keyboardScreen.innerHTML + " ";
  } else {
    keyboardScreen.innerHTML =
      keyboardScreen.innerHTML + event.srcElement.innerText;
  }
}

function showKeyboarContent(event) {
  pressed.add(event.code);
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

function changeTextSize() {
  if (wordsSize === "small") {
    if (language === "ru") {
      ruBig.forEach((elem) => {
        elem.classList.remove("hidden");
      });
      ruSmall.forEach((elem) => {
        elem.classList.add("hidden");
      });
    } else if (language === "en") {
      enBig.forEach((elem) => {
        elem.classList.remove("hidden");
      });
      enSmall.forEach((elem) => {
        elem.classList.add("hidden");
      });
    }

    wordsSize = "big";
  } else if (wordsSize === "big") {
    if (language === "ru") {
      ruSmall.forEach((elem) => {
        elem.classList.remove("hidden");
      });

      ruBig.forEach((elem) => {
        elem.classList.add("hidden");
      });
    } else if (language === "en") {
      enSmall.forEach((elem) => {
        elem.classList.remove("hidden");
      });

      enBig.forEach((elem) => {
        elem.classList.add("hidden");
      });
    }

    wordsSize = "small";
  }
}

function changeLanguageOnEn() {
  if (wordsSize === "small") {
    enSmall.forEach((elem) => {
      elem.classList.remove("hidden");
    });
    ruSmall.forEach((elem) => {
      elem.classList.add("hidden");
    });
  } else if (wordsSize === "big") {
    enBig.forEach((elem) => {
      elem.classList.remove("hidden");
    });
    ruBig.forEach((elem) => {
      elem.classList.add("hidden");
    });
  }
  console.log(language);
  language = "en";
}

function changeLanguageOnRu() {
  if (wordsSize === "small") {
    ruSmall.forEach((elem) => {
      elem.classList.remove("hidden");
    });

    enSmall.forEach((elem) => {
      elem.classList.add("hidden");
    });
  } else if (wordsSize === "big") {
    ruBig.forEach((elem) => {
      elem.classList.remove("hidden");
    });

    enBig.forEach((elem) => {
      elem.classList.add("hidden");
    });
  }
  console.log(language);
  language = "ru";
}

function changeLanguage() {
  if (language === "ru") {
    changeLanguageOnEn();
  } else {
    changeLanguageOnRu();
  }
}

function openShiftContent() {
  changeTextSize();
  if (language === "ru") {
    rushift.forEach((elem) => {
      elem.classList.remove("hidden");
    });
    unShift.forEach((elem) => {
      elem.classList.add("hidden");
    });
    unshiftRu.forEach((elem) => {
      elem.classList.add("hidden");
    });
  } else if (language === "en") {
    enshift.forEach((elem) => {
      elem.classList.remove("hidden");
    });
    unShift.forEach((elem) => {
      elem.classList.add("hidden");
    });
    unshiftEn.forEach((elem) => {
      elem.classList.add("hidden");
    });
  }
}

function closeShiftContent() {
  rushift.forEach((elem) => {
    elem.classList.add("hidden");
  });
  enshift.forEach((elem) => {
    elem.classList.add("hidden");
  });
  unShift.forEach((elem) => {
    elem.classList.remove("hidden");
  });

  changeTextSize();
}

function removeKeyboardStyle(event) {
  pressed.delete(event.code);

  let btn = document.querySelector(`.${event.code}`);
  btn.removeAttribute("style");
  if (event.code === "ShiftRight" || event.code === "ShiftLeft") {
    closeShiftContent();
  }
}

textButtons.forEach((elem) => {
  elem.addEventListener("click", showContent);
});

shift.forEach((elem) => {
  elem.addEventListener("mousedown", openShiftContent);
});

shift.forEach((elem) => {
  elem.addEventListener("mouseup", closeShiftContent);
});

capsLock.addEventListener("click", changeTextSize);

document.addEventListener("keydown", showKeyboarContent);
document.addEventListener("keyup", removeKeyboardStyle);

function setLocalStorage() {
  localStorage.setItem("language", language);
}

function getLocalStorage() {
  console.log(language);
  if (localStorage.getItem("language")) {
    language = localStorage.getItem("language");
    changeLanguage();
  }
}

window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);
