function randomColor() {
  color = "#";
  colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color += colorCode[Math.floor(Math.random() * 16)];
  }
  return color;
}
document.querySelector("#colorCode").setAttribute("hidden", "hidden");
document.querySelector(".apply").setAttribute("hidden", "hidden");
document.querySelector("#time").setAttribute("hidden", "hidden");
document.querySelector(".applyTime").setAttribute("hidden", "hidden");
document.querySelector("#displayCodeHere").setAttribute("hidden", "hidden");
let intervalId;
let TIMER = 1000;
const startChangingColor = function () {
  document.querySelector("#reset").setAttribute("hidden", "hidden");
  document.querySelector("#userColorButton").setAttribute("hidden", "hidden");
  document.querySelector("#userTimeButton").setAttribute("hidden", "hidden");
  document.querySelector("#colorCode").setAttribute("hidden", "hidden");
  document.querySelector(".apply").setAttribute("hidden", "hidden");
  document.querySelector("#time").setAttribute("hidden", "hidden");
  document.querySelector(".applyTime").setAttribute("hidden", "hidden");
  document.querySelector("#displayCodeHere").setAttribute("hidden", "hidden");
  document
    .querySelector("#currentColorButton")
    .setAttribute("hidden", "hidden");
  if (!intervalId) {
    intervalId = setInterval(changeBg, TIMER);
  }

  function changeBg() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  document.querySelector("#reset").removeAttribute("hidden");
  document.querySelector("#userColorButton").removeAttribute("hidden");
  document.querySelector("#userTimeButton").removeAttribute("hidden");
  document.querySelector("#currentColorButton").removeAttribute("hidden");
  // document.querySelector("#colorCode").removeAttribute("hidden");
  // document.querySelector(".apply").removeAttribute("hidden");
  clearInterval(intervalId);
  intervalId = null;
};

document
  .querySelector("#start")
  .addEventListener("click", startChangingColor, false);

document
  .querySelector("#stop")
  .addEventListener("click", stopChangingColor, false);

document.querySelector("#reset").addEventListener(
  "click",
  () => {
    document.body.style.backgroundColor = "#ffffff";
    document.querySelector("#colorCode").setAttribute("hidden", "hidden");
    document.querySelector(".apply").setAttribute("hidden", "hidden");
    document.querySelector("#time").setAttribute("hidden", "hidden");
    document.querySelector(".applyTime").setAttribute("hidden", "hidden");
    document.querySelector("#displayCodeHere").setAttribute("hidden", "hidden");
    TIMER = 1000;
    document.querySelector(
      "h1"
    ).innerHTML = `The Background changes every 1 second when clicked on start`;
  },
  false
);

document.querySelector("#userColorButton").addEventListener(
  "click",
  function () {
    if (document.querySelector("#colorCode").hasAttribute("hidden")) {
      document.querySelector("#colorCode").removeAttribute("hidden");
      document.querySelector(".apply").removeAttribute("hidden");
    } else {
      document.querySelector("#colorCode").setAttribute("hidden", "hidden");
      document.querySelector(".apply").setAttribute("hidden", "hidden");
    }
  },
  false
);

// document.querySelector("#userColorButton").addEventListener(
//   "dblclick",
//   function () {
//     document.querySelector("#colorCode").removeAttribute("hidden");
//     document.querySelector(".apply").removeAttribute("hidden");
//   },
//   false
// );

document.querySelector(".apply").addEventListener(
  "click",
  function () {
    let colorCode = "#";
    const Code = document.querySelector("#colorCode").value;
    document.querySelector("#colorCode").value = "";
    document.querySelector("#displayCodeHere").setAttribute("hidden", "hidden");
    if (Code.length === 6) {
      console.log(Code);
      colorCode += Code;
      document.body.style.backgroundColor = colorCode;
    }
  },
  false
);

document.querySelector("#userTimeButton").addEventListener(
  "click",
  function () {
    if (document.querySelector(".applyTime").hasAttribute("hidden")) {
      document.querySelector("#time").removeAttribute("hidden");
      document.querySelector(".applyTime").removeAttribute("hidden");
    } else {
      document.querySelector("#time").setAttribute("hidden", "hidden");
      document.querySelector(".applyTime").setAttribute("hidden", "hidden");
    }
  },
  false
);

document.querySelector(".applyTime").addEventListener(
  "click",
  function () {
    const seconds = parseInt(document.querySelector("#time").value);
    document.querySelector("#time").value = "";
    if (!(seconds <= 0 || seconds > 100)) {
      // console.log(seconds);
      if (seconds === 1) {
        document.querySelector(
          "h1"
        ).innerHTML = `The Background changes every ${seconds} second when clicked on start`;
        TIMER = seconds * 1000;
      } else {
        document.querySelector(
          "h1"
        ).innerHTML = `The Background changes every ${seconds} seconds when clicked on start`;
        TIMER = seconds * 1000;
      }
    }
  },
  false
);

document.querySelector("#currentColorButton").addEventListener(
  "click",
  function () {
    if (document.querySelector("#displayCodeHere").hasAttribute("hidden")) {
      document.querySelector("#displayCodeHere").removeAttribute("hidden");
      document.querySelector("#displayCodeHere").innerHTML =
        document.body.style.backgroundColor;
    } else {
      document
        .querySelector("#displayCodeHere")
        .setAttribute("hidden", "hidden");
    }
  },
  false
);
