let buttons = document.querySelectorAll(".button");
let textButtons = document.querySelectorAll(".text-button");
let keyboardScreen = document.querySelector("#keyboard-screen");
let capsLock = document.querySelector(".CapsLock");

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

function showKeyboardNumber(event) {
  keyboardScreen.innerHTML = keyboardScreen.innerHTML + event.key;
  console.log(event.code);
  buttons.forEach((elem) => {
    if (elem.classList.contains(event.code)) {
      elem.style.backgroundColor = "#7250c0";
      elem.style.transition = "all 0.2s";
      elem.style.borderRadius = "50%";
    }
  });
}

function removeKeyboardStyle(event) {
  buttons.forEach((elem) => {
    if (elem.classList.contains(event.code)) {
      elem.style.backgroundColor = "#545454";
      elem.style.borderRadius = "0%";
    }
  });
}
document.addEventListener("keydown", showKeyboardNumber);
document.addEventListener("keyup", removeKeyboardStyle);
