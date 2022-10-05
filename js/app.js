const keys = document.querySelectorAll(".keys");
const spaceKey = document.querySelector(".space_key");
const capsLockKey = document.querySelector(".capsLock_key");
const enterKey = document.querySelector(".enter_key");
const backSpaceKey = document.querySelector(".backspace_key");
const shiftLeft = document.querySelector(".shift_key_left");
const shiftRight = document.querySelector(".shift_key_right");
const ctrlRight = document.querySelector(".ctrl_right");
const altRight = document.querySelector(".alt_right");
const altLeft = document.querySelector(".alt_left");
const ctrlLeft = document.querySelector(".ctrl_left");
const winLeft = document.querySelector(".win_key");
const tabKey = document.querySelector(".tab_key");

for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute("keyname", keys[i].innerText);
  keys[i].setAttribute("lowerCaseName", keys[i].innerText.toLowerCase());
}

window.addEventListener("keydown", (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (
      e.key == keys[i].getAttribute("keyname") ||
      e.key == keys[i].getAttribute("lowerCaseName")
    ) {
      keys[i].classList.add("active");
    }
    if (e.code == "Space") {
      spaceKey.classList.add("active");
    }
    if (e.key == "ShiftLeft") {
      shiftLeft.classList.add("active");
    }
    if (e.key == "ShiftRight") {
      shiftRight.classList.add("active");
    }
    if (e.key == "CapsLock") {
      capsLockKey.classList.add("active");
    }
    if (e.key == "Control") {
      ctrlLeft.classList.add("active");
    }
    if (e.key == "Meta") {
      winLeft.classList.add("active");
    }
    if (e.key == "Backspace") {
      backSpaceKey.classList.add("active");
    }
  }
});

window.addEventListener("keyup", (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (
      e.key == keys[i].getAttribute("keyname") ||
      e.key == keys[i].getAttribute("lowerCaseName")
    ) {
      keys[i].classList.remove("active");
    }
    if (e.code == "Space") {
      spaceKey.classList.remove("active");
    }
    if (e.key == "ShiftLeft") {
      shiftLeft.classList.remove("active");
    }
    if (e.key == "ShiftRight") {
      shiftRight.classList.remove("active");
    }
    if (e.key == "CapsLock") {
      capsLockKey.classList.remove("active");
    }
    if (e.key == "Control") {
      ctrlLeft.classList.remove("active");
    }
    if (e.key == "Meta") {
      winLeft.classList.remove("active");
    }
    if (e.key == "Backspace") {
      backSpaceKey.classList.remove("active");
    }
  }
});

