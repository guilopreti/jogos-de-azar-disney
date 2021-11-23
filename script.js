document.querySelector("#joquempo").addEventListener("click", function () {
    document.querySelector(".rockPaperScissors").style.display = "block";
    document.querySelector("#teste").style.display = "none";
});
document.querySelector("#teste").addEventListener("click", function () {
    document.querySelector(".teste1").style.display = "block";
    document.querySelector("#joquempo").style.display = "none";
});