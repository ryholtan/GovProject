const categories = [
    "Executive Powers",
    "Congress' Role",
    "Judicial Actions",
    "Media Influence",
    "Party Politics",
    "Public Opinion"
];

const questions = [
    "What does Article 2 say about executive orders?",
    "How has Congress reacted to Trump's executive orders?",
    "What legal challenges have been made against Trump's orders?",
    "How has the media influenced public perception of executive orders?",
    "What is the Republican vs Democrat stance on executive orders?",
    "What do current polls say about Trump's executive actions?"
];

const board = document.getElementById("board");

categories.forEach((category, index) => {
    cellCreator(category, index, header);
    Array.from({length: 5}, (_, i) => (i + 1) * 100).forEach(num => {
        cellCreator(num);
    })
});


function cellCreator(cellName, index=-1, appendArea=board) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = cellName;
    cell.onclick = () => showQuestion(index);
    appendArea.appendChild(cell);
}

function showQuestion(index) {
    if (index in questions) {
        document.getElementById("question-text").textContent = questions[index];
    } else {
        document.getElementById("question-text").textContent = "This is a demo of the question/answer system.";
    }
    document.getElementById("overlay").style.display = "block";
    document.getElementById("question-box").style.display = "block";
}

function closeQuestion() {
    document.getElementById("question-box").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
