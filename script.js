const questionElement = document.querySelectorAll(".top-side");
const questionPElement = document.querySelectorAll(".question-container p");
const iconElement = document.querySelectorAll(".icon-container img");

questionElement.forEach((questionElement, i) => {
  questionElement.addEventListener("click", () => {

    const questionElementH2 = questionElement.querySelector("h2");

    if ( questionPElement[i].style.display == "none" || questionPElement[i].style.display == "" ) {
      questionElement.style.borderBottom = "1px solid #e6e3f1";
      questionElementH2.style.color = "#00f";
      questionPElement[i].style.display = "block";
      iconElement[i].src = "./assets/icons/minus.svg";
    } else {
      questionElement.style.borderBottom = "";
      questionElementH2.style.color = "#000";
      questionPElement[i].style.display = "none";
      iconElement[i].src = "./assets/icons/plus.svg";
    }

  });
});
