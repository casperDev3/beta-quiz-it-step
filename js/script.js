const DISCONT = 10;
const COUNT_QUESTIONS = 4;
let countDiscontNow = 0;

function calcAndDisplayDiscont(direction) {
  if (direction == "next") {
    countDiscontNow += DISCONT / COUNT_QUESTIONS;
  } else if ((direction = "prev")) {
    countDiscontNow -= DISCONT / COUNT_QUESTIONS;
  }
  console.log(countDiscontNow);
  document.querySelector(".step2__item-block").innerHTML = "";
  document.querySelector(
    ".step2__item-block"
  ).innerHTML = `${countDiscontNow}%`;
}

function switcherQuiz(id, direction) {
  console.log(id);
  // 1. Get data attribute from button
  let sectionAttr = Number(
    document.getElementById(`${id}`).getAttribute("data-section")
  );
  document
    .querySelector(`section[data-section="${sectionAttr}"]`)
    .classList.add("d-none");
  if (direction == "next") {
    // 2.1. Switch visible section by data attributes
    calcAndDisplayDiscont(direction);
    document
      .querySelector(`section[data-section="${sectionAttr + 1}"]`)
      .classList.remove("d-none");
  } else if (direction == "prev") {
    // 2.1. Switch visible section by data attributes
    calcAndDisplayDiscont(direction);
    document
      .querySelector(`section[data-section="${sectionAttr - 1}"]`)
      .classList.remove("d-none");
  } else if (direction == "end-quiz") {
    document.querySelector(`.last_question`).classList.add("d-none");
    // 2.2. Switch visible section by data attributes to end form
    document
      .querySelector(`section[data-section="-1"]`)
      .classList.remove("d-none");
  } else if (direction == "end-form") {
    document.querySelector(`.thanks_window `).classList.add("d-none");
    // 2.2. Switch visible section by data attributes to end form
    document
      .querySelector(`section[data-section="-2"]`)
      .classList.remove("d-none");
  }
}

function getTargetId(e) {
  try {
    // get id from child element svg
    let childElement = e.target.childNodes;
    let idChildElement = Object.values(childElement).find((el) => {
      return el.id ? el : null;
    })?.id;

    if (!idChildElement) {
      childElement = Object.values(childElement);
      childElement = childElement.filter((el) => {
        if (el.children?.length > 0 && el.children) {
          return el;
        }
      });
      return childElement[0].firstChild.id;
    }
    return idChildElement;
  } catch (e) {
    console.log(e);
  }
}

// Hero section

document.querySelectorAll(".target__btn_next").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = getTargetId(e);
    if (id === "last_question") {
      switcherQuiz(getTargetId(e), "end-quiz");
    } else if (id === "end-quiz") {
      switcherQuiz(getTargetId(e), "end-form");
    } else {
      switcherQuiz(getTargetId(e), "next");
    }
  });
});
// document
//   .querySelectorAll(".target__btn_next")
//   .addEventListener("click", (e) => {
//     switcherQuiz(getTargetId(e), "next");
//   });
// document.getElementsByClassName('target__btn_next').addEventListener("click", (e) => {
//     alert('Hello');
//     // switcherQuiz(e.srcElement.id, 'next');
// })
// document.getElementById("next-1").addEventListener("click", (e) => {
//   switcherQuiz(e.srcElement.id, "next");
// });
// document.getElementById("next-2").addEventListener("click", (e) => {
//   switcherQuiz(e.srcElement.id, "next");
// });
// document.getElementById("next-3").addEventListener("click", (e) => {
//   switcherQuiz(e.srcElement.id, "next");
// });
// document.getElementById("next-4").addEventListener("click", (e) => {
//   switcherQuiz(e.srcElement.id, "end-quiz");
// });
// document.getElementById("end-quiz").addEventListener("click", (e) => {
//   switcherQuiz(e.srcElement.id, "end-form");
// });
// document.getElementById('end-quiz').addEventListener("click", (e) => {
//     switcherQuiz(e.srcElement.id, 'end-quiz');
// })
// prev
document.getElementById("prev-1").addEventListener("click", (e) => {
  switcherQuiz("prev-1", "prev");
});
document.getElementById("prev-2").addEventListener("click", (e) => {
  switcherQuiz("prev-2", "prev");
});
document.getElementById("prev-3").addEventListener("click", (e) => {
  switcherQuiz("prev-3", "prev");
});
document.getElementById("prev-4").addEventListener("click", (e) => {
  switcherQuiz("prev-4", "prev");
});
