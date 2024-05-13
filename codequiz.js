const initials = document.querySelector("#initials")
const Btn = document.querySelector(".Btn")

function handleStartBtn() {
    //step 1 get text from initial box, Step2 Save text input from box, Step 3 clear quiz container so we have room for quiz q's. Step 4 Start timer.
    const quizContainer = document.querySelector(".Quiz-container");
    const initialsText = initials.value;
    localStorage.setItem("initials", initialsText);
    quizContainer.innerHTML = "";
    //startTimer();
}
console.log("here");
Btn.addEventListener("click", handleStartBtn)