var desperates = document.querySelectorAll(".desperate");
// console.log(desperate);

desperates.forEach(d => {
    var slackMessages = d.querySelector(".info-slack-message").textContent;
    var callByDay = d.querySelector(".info-calls-by-day").textContent;
    var desperateIndex = d.querySelector(".info-desperate-index");
    desperateIndex.textContent = desperateEquation(slackMessages, callByDay);
});

function desperateEquation(slackMessages, callByDay){
    return slackMessages * callByDay;
}