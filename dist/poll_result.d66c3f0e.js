let yes_count = 0;
let no_count = 0;
let thePic = 0;
var QuestionImages = new Array("img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg");
let theTitle = 0;
var QuestionTitles = new Array("Do you feel a tenny, tiny bit strange seeing it?", "Have you heard of this movie?", "Does this feel a little inappropriate?", "Find it odd if seeing this at the airport today?", "Find it weird if this is a NYU student club photo?", " Be shocked if received this ring as a gift?");
let currentQuestionId = 0;
window.addEventListener("load", ()=>{
    displayCount();
    document.getElementById("yes-b").addEventListener("click", ()=>{
        changeTitle();
        changeImage();
        assignYesCount(yes_count + 1);
        saveToDb();
        displayCount();
        result();
    });
    document.getElementById("no-b").addEventListener("click", ()=>{
        changeTitle();
        changeImage();
        assignNoCount(no_count + 1);
        saveToDb();
        displayCount();
        result();
    });
    document.getElementById("get-tracker").addEventListener("click", ()=>{
        displayCount();
    });
    console.log(currentQuestionId);
});
function displayCount() {
    fetch("/counts").then((resp)=>resp.json()).then((data)=>{
        document.getElementById("total-info").innerHTML = "";
        const createdAt = data.data[0].created_at;
        const yesCount = data.data[0].yes_count;
        const noCount = data.data[0].no_count;
        const currentQuestion = data.data[0].currentQuestionId;
        assignYesCount(yesCount);
        assignNoCount(noCount);
        let elt = document.createElement("p");
        elt.innerHTML = `${createdAt}: Question-Number: ${currentQuestion} Yes: ${yesCount} NO: ${noCount}`;
        document.getElementById("total-info").appendChild(elt);
    });
}
function saveToDb() {
    fetch("/counts", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            currentQuestionId,
            yes_count,
            no_count
        })
    }).then((response)=>response.json()).then(console.log).catch(console.log);
}
function assignYesCount(count) {
    yes_count = count;
    document.getElementById("yes-counter").innerHTML = yes_count;
}
function assignNoCount(count) {
    no_count = count;
    document.getElementById("no-counter").innerHTML = no_count;
}
function changeImage() {
    thePic++;
    if (thePic == QuestionImages.length) thePic = 0;
    document.getElementById("pic").src = QuestionImages[thePic];
}
function changeTitle() {
    theTitle++;
    if (theTitle == QuestionTitles.length) theTitle = 0;
    document.getElementById("Q-title").innerHTML = QuestionTitles[theTitle];
    currentQuestionId = theTitle;
}
function result() {
    if (currentQuestionId == 5) window.location.href = "poll_result.html";
}

//# sourceMappingURL=poll_result.d66c3f0e.js.map
