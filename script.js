function toggleAnswer(question) {
  var answer = question.nextElementSibling;
  var imgTag = question.querySelector("img");
  if (answer.style.display === "flex") {
    answer.style.display = "none";
    imgTag.src = "assets/icon-plus.svg";
  } else {
    answer.style.display = "flex";
    imgTag.src = "assets/icon-minus.svg";
  }
}
