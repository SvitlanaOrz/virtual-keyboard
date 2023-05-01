let newElem = `<main class="container">
<h1 class="keyboard-name">Виртуальная клавиатура</h1>
<form>
  <textarea
    class="keyboard-screen"
    name=""
    id="keyboard-screen"
    rows="20"
  ></textarea>
</form>
<div class="keyboard">
  <div class="keyboard__row">
    <div class="button text-button Backquote">
      <span class="button__text-content ru-small">ё</span>
      <span class="button__text-content ru-big hidden">Ё</span>
      <span class="button__text-content unshift-en en-small hidden"
        >'</span
      >
      <span class="button__text-content unshift-en en-big hidden">'</span>
      <span class="button__text-content shift-en hidden">~</span>
    </div>
    <div class="button text-button Digit1">
      <span class="button__text-content unshift">1</span>
      <span class="button__text-content shift-ru hidden">!</span>
      <span class="button__text-content shift-en hidden">!</span>
    </div>
    <div class="button text-button Digit2">
      <span class="button__text-content unshift">2</span>
      <span class="button__text-content shift-ru hidden">"</span>
      <span class="button__text-content shift-en hidden">@</span>
    </div>
    <div class="button text-button Digit3">
      <span class="button__text-content unshift">3</span>
      <span class="button__text-content shift-ru hidden">№</span>
      <span class="button__text-content shift-en hidden">#</span>
    </div>
    <div class="button text-button Digit4">
      <span class="button__text-content unshift">4</span>
      <span class="button__text-content shift-ru hidden">;</span>
      <span class="button__text-content shift-en hidden">$</span>
    </div>
    <div class="button text-button Digit5">
      <span class="button__text-content unshift">5</span>
      <span class="button__text-content shift-ru hidden">%</span>
      <span class="button__text-content shift-en hidden">%</span>
    </div>
    <div class="button text-button Digit6">
      <span class="button__text-content unshift">6</span>
      <span class="button__text-content shift-ru hidden">:</span>
      <span class="button__text-content shift-en hidden">^</span>
    </div>
    <div class="button text-button Digit7">
      <span class="button__text-content unshift">7</span>
      <span class="button__text-content shift-ru hidden">?</span>
      <span class="button__text-content shift-en hidden">&</span>
    </div>
    <div class="button text-button Digit8">
      <span class="button__text-content unshift">8</span>
      <span class="button__text-content shift-ru hidden">*</span>
      <span class="button__text-content shift-en hidden">*</span>
    </div>
    <div class="button text-button Digit9">
      <span class="button__text-content unshift">9</span>
      <span class="button__text-content shift-ru hidden">(</span>
      <span class="button__text-content shift-en hidden">(</span>
    </div>
    <div class="button text-button Digit0">
      <span class="button__text-content unshift">0</span>
      <span class="button__text-content shift-ru hidden">)</span>
      <span class="button__text-content shift-en hidden">)</span>
    </div>
    <div class="button text-button Minus">
      <span class="button__text-content unshift">-</span>
      <span class="button__text-content shift-ru hidden">_</span>
      <span class="button__text-content shift-en hidden">_</span>
    </div>
    <div class="button text-button Equal">
      <span class="button__text-content unshift">=</span>
      <span class="button__text-content shift-ru hidden">+</span>
      <span class="button__text-content shift-en hidden">+</span>
    </div>
    <div class="button long-button special-button text-button Backspace">
      <span class="button__text-content">Backspace</span>
    </div>
  </div>
  <div class="keyboard__row">
    <div class="button text-button middle-button special-button tab">
      <span class="button__text-content">Tab</span>
    </div>
    <div class="button text-button KeyQ">
      <span class="button__text-content ru-small">й</span>
      <span class="button__text-content ru-big hidden">Й</span>
      <span class="button__text-content en-small hidden">q</span>
      <span class="button__text-content en-big hidden">Q</span>
    </div>
    <div class="button text-button KeyW">
      <span class="button__text-content ru-small">ц</span>
      <span class="button__text-content ru-big hidden">Ц</span>
      <span class="button__text-content en-small hidden">w</span>
      <span class="button__text-content en-big hidden">W</span>
    </div>
    <div class="button text-button KeyE">
      <span class="button__text-content ru-small">у</span>
      <span class="button__text-content ru-big hidden">У</span>
      <span class="button__text-content en-small hidden">e</span>
      <span class="button__text-content en-big hidden">E</span>
    </div>
    <div class="button text-button KeyR">
      <span class="button__text-content ru-small">к</span>
      <span class="button__text-content ru-big hidden">К</span>
      <span class="button__text-content en-small hidden">r</span>
      <span class="button__text-content en-big hidden">R</span>
    </div>
    <div class="button text-button KeyT">
      <span class="button__text-content ru-small">е</span>
      <span class="button__text-content ru-big hidden">Е</span>
      <span class="button__text-content en-small hidden">t</span>
      <span class="button__text-content en-big hidden">T</span>
    </div>
    <div class="button text-button KeyY">
      <span class="button__text-content ru-small">н</span>
      <span class="button__text-content ru-big hidden">Н</span>
      <span class="button__text-content en-small hidden">y</span>
      <span class="button__text-content en-big hidden">Y</span>
    </div>
    <div class="button text-button KeyU">
      <span class="button__text-content ru-small">г</span>
      <span class="button__text-content ru-big hidden">Г</span>
      <span class="button__text-content en-small hidden">u</span>
      <span class="button__text-content en-big hidden">U</span>
    </div>
    <div class="button text-button KeyI">
      <span class="button__text-content ru-small">ш</span>
      <span class="button__text-content ru-big hidden">Ш</span>
      <span class="button__text-content en-small hidden">i</span>
      <span class="button__text-content en-big hidden">I</span>
    </div>
    <div class="button text-button KeyO">
      <span class="button__text-content ru-small">щ</span>
      <span class="button__text-content ru-big hidden">Щ</span>
      <span class="button__text-content en-small hidden">o</span>
      <span class="button__text-content en-big hidden">O</span>
    </div>
    <div class="button text-button KeyP">
      <span class="button__text-content ru-small">з</span>
      <span class="button__text-content ru-big hidden">З</span>
      <span class="button__text-content en-small hidden">p</span>
      <span class="button__text-content en-big hidden">P</span>
    </div>
    <div class="button text-button BracketLeft">
      <span class="button__text-content ru-small">х</span>
      <span class="button__text-content ru-big hidden">Х</span>
      <span class="button__text-content unshift-en en-small hidden"
        >[</span
      >
      <span class="button__text-content unshift-en en-big hidden">[</span>
      <span class="button__text-content shift-en hidden">{</span>
    </div>
    <div class="button text-button BracketRight">
      <span class="button__text-content ru-small">ъ</span>
      <span class="button__text-content ru-big hidden">Ъ</span>
      <span class="button__text-content unshift-en en-small hidden"
        >]</span
      >
      <span class="button__text-content unshift-en en-big hidden">]</span>
      <span class="button__text-content shift-en hidden">}</span>
    </div>
    <div class="button text-button Backslash">
      <span class="button__text-content unshift">\\</span>
      <span class="button__text-content shift-ru hidden">/</span>
      <span class="button__text-content shift-en hidden">|</span>
    </div>
    <div class="button middle-button text-button special-button Delete">
      <span class="button__text-content">Del</span>
    </div>
  </div>
  <div class="keyboard__row">
    <div class="button long-button special-button CapsLock">
      <span class="button__text-content">CapsLock</span>
    </div>
    <div class="button text-button KeyA">
      <span class="button__text-content ru-small">ф</span>
      <span class="button__text-content ru-big hidden">Ф</span>
      <span class="button__text-content en-small hidden">a</span>
      <span class="button__text-content en-big hidden">A</span>
    </div>
    <div class="button text-button KeyS">
      <span class="button__text-content ru-small">ы</span>
      <span class="button__text-content ru-big hidden">Ы</span>
      <span class="button__text-content en-small hidden">s</span>
      <span class="button__text-content en-big hidden">S</span>
    </div>
    <div class="button text-button KeyD">
      <span class="button__text-content ru-small">в</span>
      <span class="button__text-content ru-big hidden">В</span>
      <span class="button__text-content en-small hidden">d</span>
      <span class="button__text-content en-big hidden">D</span>
    </div>
    <div class="button text-button KeyF">
      <span class="button__text-content ru-small">а</span>
      <span class="button__text-content ru-big hidden">А</span>
      <span class="button__text-content en-small hidden">f</span>
      <span class="button__text-content en-big hidden">F</span>
    </div>
    <div class="button text-button KeyG">
      <span class="button__text-content ru-small">п</span>
      <span class="button__text-content ru-big hidden">П</span>
      <span class="button__text-content en-small hidden">g</span>
      <span class="button__text-content en-big hidden">G</span>
    </div>
    <div class="button text-button KeyH">
      <span class="button__text-content ru-small">р</span>
      <span class="button__text-content ru-big hidden">Р</span>
      <span class="button__text-content en-small hidden">h</span>
      <span class="button__text-content en-big hidden">H</span>
    </div>
    <div class="button text-button KeyJ">
      <span class="button__text-content ru-small">о</span>
      <span class="button__text-content ru-big hidden">О</span>
      <span class="button__text-content en-small hidden">j</span>
      <span class="button__text-content en-big hidden">J</span>
    </div>
    <div class="button text-button KeyK">
      <span class="button__text-content ru-small">л</span>
      <span class="button__text-content ru-big hidden">Л</span>
      <span class="button__text-content en-small hidden">k</span>
      <span class="button__text-content en-big hidden">K</span>
    </div>
    <div class="button text-button KeyL">
      <span class="button__text-content ru-small">д</span>
      <span class="button__text-content ru-big hidden">Д</span>
      <span class="button__text-content en-small hidden">l</span>
      <span class="button__text-content en-big hidden">L</span>
    </div>
    <div class="button text-button Semicolon">
      <span class="button__text-content ru-small">ж</span>
      <span class="button__text-content ru-big hidden">Ж</span>
      <span class="button__text-content unshift-en en-small hidden"
        >;</span
      >
      <span class="button__text-content unshift-en en-big hidden">;</span>
      <span class="button__text-content shift-en hidden">:</span>
    </div>
    <div class="button text-button Quote">
      <span class="button__text-content ru-small">э</span>
      <span class="button__text-content ru-big hidden">Э</span>
      <span class="button__text-content unshift-en en-small hidden"
        >'</span
      >
      <span class="button__text-content unshift-en en-big hidden">'</span>
      <span class="button__text-content shift-en hidden">"</span>
    </div>
    <div class="button long-button text-button special-button Enter">
      <span class="button__text-content">Enter</span>
    </div>
  </div>
  <div class="keyboard__row">
    <div class="button long-button special-button ShiftLeft shift">
      <span class="button__text-content">Shift</span>
    </div>
    <div class="button text-button KeyZ">
      <span class="button__text-content ru-small">я</span>
      <span class="button__text-content ru-big hidden">Я</span>
      <span class="button__text-content en-small hidden">z</span>
      <span class="button__text-content en-big hidden">Z</span>
    </div>
    <div class="button text-button KeyX">
      <span class="button__text-content ru-small">ч</span>
      <span class="button__text-content ru-big hidden">Ч</span>
      <span class="button__text-content en-small hidden">x</span>
      <span class="button__text-content en-big hidden">X</span>
    </div>
    <div class="button text-button KeyC">
      <span class="button__text-content ru-small">с</span>
      <span class="button__text-content ru-big hidden">С</span>
      <span class="button__text-content en-small hidden">c</span>
      <span class="button__text-content en-big hidden">C</span>
    </div>
    <div class="button text-button KeyV">
      <span class="button__text-content ru-small">м</span>
      <span class="button__text-content ru-big hidden">М</span>
      <span class="button__text-content en-small hidden">v</span>
      <span class="button__text-content en-big hidden">V</span>
    </div>
    <div class="button text-button KeyB">
      <span class="button__text-content ru-small">и</span>
      <span class="button__text-content ru-big hidden">И</span>
      <span class="button__text-content en-small hidden">b</span>
      <span class="button__text-content en-big hidden">B</span>
    </div>
    <div class="button text-button KeyN">
      <span class="button__text-content ru-small">т</span>
      <span class="button__text-content ru-big hidden">Т</span>
      <span class="button__text-content en-small hidden">n</span>
      <span class="button__text-content en-big hidden">N</span>
    </div>
    <div class="button text-button KeyM">
      <span class="button__text-content ru-small">ь</span>
      <span class="button__text-content ru-big hidden">Ь</span>
      <span class="button__text-content en-small hidden">m</span>
      <span class="button__text-content en-big hidden">M</span>
    </div>
    <div class="button text-button Comma">
      <span class="button__text-content ru-small">б</span>
      <span class="button__text-content ru-big hidden">Б</span>
      <span class="button__text-content unshift-en en-small hidden"
        >,</span
      >
      <span class="button__text-content unshift-en en-big hidden">,</span>
      <span class="button__text-content shift-en hidden"><</span>
    </div>
    <div class="button text-button Period">
      <span class="button__text-content ru-small">ю</span>
      <span class="button__text-content ru-big hidden">Ю</span>
      <span class="button__text-content unshift-en en-small hidden"
        >.</span
      >
      <span class="button__text-content unshift-en en-big hidden">.</span>
      <span class="button__text-content shift-en hidden">></span>
    </div>
    <div class="button text-button Slash">
      <span class="button__text-content unshift-ru ru-small">.</span>
      <span class="button__text-content unshift-ru ru-big hidden">.</span>
      <span class="button__text-content unshift-en en-small hidden"
        >/</span
      >
      <span class="button__text-content unshift-en en-big hidden">/</span>
      <span class="button__text-content shift-ru hidden">,</span>
      <span class="button__text-content shift-en hidden">?</span>
    </div>
    <div class="button special-button text-button ArrowUp">
      <span class="button__text-content">▲</span>
    </div>
    <div class="button long-button special-button ShiftRight shift">
      <span class="button__text-content">Shift</span>
    </div>
  </div>
  <div class="keyboard__row">
    <div class="button special-button ControlLeft">
      <span class="button__text-content">Ctrl</span>
    </div>
    <div class="button special-button MetaLeft">
      <span class="button__text-content">Win</span>
    </div>
    <div class="button special-button AltLeft">
      <span class="button__text-content">Alt</span>
    </div>
    <div class="button space-button Space text-button">
      <span class="button__text-content"></span>
    </div>
    <div class="button special-button AltRight">
      <span class="button__text-content">Alt</span>
    </div>
    <div class="button special-button text-button ArrowLeft">
      <span class="button__text-content">◄</span>
    </div>
    <div class="button special-button text-button ArrowDown">
      <span class="button__text-content">▼</span>
    </div>
    <div class="button special-button text-button ArrowRight">
      <span class="button__text-content">►</span>
    </div>
    <div class="button special-button ControlRight">
      <span class="button__text-content">Ctrl</span>
    </div>
  </div>
</div>
<p class="additional-information">
  Клавиатура создана в операционной системе Windows
</p>
<p class="additional-information">
  Для переключения языка комбинация: левыe ctrl + alt
</p>
</main>`;

let body = document.querySelector("#body");

body.insertAdjacentHTML("beforeend", newElem);

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

let language = localStorage.getItem("language") || "ru";
let wordsSize = "small";
let pressed = new Set();

function showContent(event) {
  event.preventDefault();
  let cursor = keyboardScreen.selectionStart;

  if (event.srcElement.innerText === "Tab") {
    keyboardScreen.innerHTML =
      keyboardScreen.value.slice(0, cursor) +
      "    " +
      keyboardScreen.value.slice(cursor);
    keyboardScreen.selectionStart = cursor + 4;
  } else if (event.srcElement.innerText === "Del") {
    keyboardScreen.innerHTML =
      keyboardScreen.value.slice(0, cursor) +
      keyboardScreen.value.slice(cursor + 1);
    keyboardScreen.selectionStart = cursor;
  } else if (event.srcElement.innerText === "Backspace") {
    keyboardScreen.innerHTML =
      keyboardScreen.value.slice(0, cursor - 1) +
      keyboardScreen.value.slice(cursor);
    keyboardScreen.selectionStart = cursor - 1;
  } else if (event.srcElement.innerText === "") {
    keyboardScreen.innerHTML =
      keyboardScreen.value.slice(0, cursor) +
      " " +
      keyboardScreen.value.slice(cursor);
    keyboardScreen.selectionStart = cursor + 1;
  } else if (event.srcElement.innerText === "Enter") {
    keyboardScreen.innerHTML =
      keyboardScreen.value.slice(0, cursor) +
      "\n" +
      keyboardScreen.value.slice(cursor);
    keyboardScreen.selectionStart = cursor + 1;
  } else {
    keyboardScreen.innerHTML =
      keyboardScreen.value.slice(0, cursor) +
      event.srcElement.innerText +
      keyboardScreen.value.slice(cursor);
    keyboardScreen.selectionStart = cursor + 1;
  }
}

function showKeyboarContent(event) {
  event.preventDefault();

  let cursor = keyboardScreen.selectionStart;
  console.log(event.code);
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
  } else if (event.code === "Backspace") {
    keyboardScreen.innerHTML =
      keyboardScreen.value.slice(0, cursor - 1) +
      keyboardScreen.value.slice(cursor);
    keyboardScreen.selectionStart = cursor - 1;
  } else if (event.code === "Delete") {
    keyboardScreen.innerHTML =
      keyboardScreen.value.slice(0, cursor) +
      keyboardScreen.value.slice(cursor + 1);
    keyboardScreen.selectionStart = cursor;
  } else if (event.code === "Tab") {
    keyboardScreen.innerHTML =
      keyboardScreen.value.slice(0, cursor) +
      "    " +
      keyboardScreen.value.slice(cursor);
    keyboardScreen.selectionStart = cursor + 4;
  } else if (event.code === "Enter") {
    keyboardScreen.innerHTML =
      keyboardScreen.value.slice(0, cursor) +
      "\n" +
      keyboardScreen.value.slice(cursor);
    keyboardScreen.selectionStart = cursor + 1;
  } else if (event.code === "Space") {
    keyboardScreen.innerHTML =
      keyboardScreen.value.slice(0, cursor) +
      " " +
      keyboardScreen.value.slice(cursor);
    keyboardScreen.selectionStart = cursor + 1;
  } else {
    //вывести в екран значение при клике на клавиатуре стандартные клавиши
    buttons.forEach((elem) => {
      if (elem.classList.contains(event.code)) {
        for (child of elem.children) {
          if (
            child.innerHTML === "Ctrl" ||
            child.innerHTML === "Alt" ||
            child.innerHTML === "Del"
          ) {
          } else if (!child.classList.contains("hidden")) {
            keyboardScreen.innerHTML =
              keyboardScreen.value.slice(0, cursor) +
              child.innerHTML +
              keyboardScreen.value.slice(cursor);

            keyboardScreen.selectionStart = cursor + 1;
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
  //   window.addEventListener("beforeunload", () => {
  //     localStorage.setItem("language", language);
  //   });
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
  //   window.addEventListener("beforeunload", () => {
  //     localStorage.setItem("language", language);
  //   });
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
