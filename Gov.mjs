export class JeopardyButton {
    constructor(value, category=null) {
        this.value = value;
        this.category = category;
        this.question = jeopardyData[category][value].question;
        this.answer = jeopardyData[category][value].answer;
    }

    showQuestion() {
        if (this.category in jeopardyData) {
            document.getElementById("question-text").textContent = this.question;
        } else {
            document.getElementById("question-text").textContent = "This is a demo of the question/answer system.";
        }
        document.getElementById("overlay").style.display = "block";
        document.getElementById("question-box").style.display = "block";

        const showAnswer = () => {
            if (this.category in jeopardyData) {
                document.getElementById("question-text").textContent = this.answer;
            } 
        };

        document.querySelector(".question-box").addEventListener("click", showAnswer);
    }

    cellCreator() {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = this.value;
        cell.onclick = () => this.showQuestion();
        board.appendChild(cell);
    } 

}

export const jeopardyData = {
    "Executive Powers": {
        100: { question: "What is the power to veto legislation?", answer: "The President's veto power." },
        200: { question: "Who appoints federal judges?", answer: "The President." },
        300: { question: "What is the role of the Commander in Chief?", answer: "The President commands the military." },
        400: { question: "What is an executive order?", answer: "A directive issued by the President that has the force of law." },
        500: { question: "What is the power to grant pardons?", answer: "The President can forgive criminal offenses." }
    },
    "Congress' Role": {
        100: { question: "What is the primary function of Congress?", answer: "To make laws." },
        200: { question: "How many senators does each state have?", answer: "Two senators." },
        300: { question: "What is the House of Representatives responsible for?", answer: "It introduces bills and resolutions." },
        400: { question: "What is the process for impeaching the President?", answer: "The House of Representatives votes to impeach, and the Senate holds the trial." },
        500: { question: "How is Congress funded?", answer: "Through taxes and borrowing." }
    },
    "Judicial Actions": {
        100: { question: "What is the function of the judicial branch?", answer: "To interpret the law." },
        200: { question: "Who appoints federal judges?", answer: "The President, with Senate approval." },
        300: { question: "What is judicial review?", answer: "The power of courts to review the constitutionality of laws." },
        400: { question: "How long do Supreme Court justices serve?", answer: "They serve for life, or until retirement." },
        500: { question: "What case established judicial review?", answer: "Marbury v. Madison (1803)." }
    },
    "Media Influence": {
        100: { question: "How do media influence public opinion?", answer: "By shaping how people view events and policies." },
        200: { question: "What is the role of journalists in democracy?", answer: "To inform the public and hold officials accountable." },
        300: { question: "What is the Fairness Doctrine?", answer: "A policy that required broadcasters to present controversial issues in a balanced manner." },
        400: { question: "What is a soundbite?", answer: "A brief excerpt from a speech or interview." },
        500: { question: "What is the role of social media in political campaigns?", answer: "It allows candidates to directly reach voters." }
    },
    "Party Politics": {
        100: { question: "What is a political party?", answer: "An organization that seeks to influence government policy and gain control of government offices." },
        200: { question: "What is the difference between Democrats and Republicans?", answer: "Democrats typically favor more government involvement, while Republicans advocate for less." },
        300: { question: "What is a third party?", answer: "A political party that is not one of the two major parties." },
        400: { question: "What is the role of party conventions?", answer: "To nominate candidates and set party platforms." },
        500: { question: "What is gerrymandering?", answer: "The manipulation of electoral district boundaries for political advantage." }
    },
    "Public Opinion": {
        100: { question: "How is public opinion measured?", answer: "Through polling and surveys." },
        200: { question: "What is a political poll?", answer: "A survey of public opinion on political issues." },
        300: { question: "What is a margin of error?", answer: "The degree to which poll results might differ from the actual population." },
        400: { question: "What is the role of focus groups in public opinion?", answer: "To gather detailed insights on public attitudes about specific issues." },
        500: { question: "What factors influence public opinion?", answer: "Media, family, education, and personal experiences." }
    }
};


