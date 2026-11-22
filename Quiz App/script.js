const questions = [
    {
        question: "Какой язык работает в браузере?",
        options: ["Python", "Java", "JavaScript"],
        correctAnswer: "JavaScript",
    },
    {
        question: "Сколько будет 5 + 5?",
        options: ["8", "10", "12"],
        correctAnswer: "10",
    },
    {
        question: "Что такое HTML?",
        options: ["Язык разметки", "База данных", "Операционная система"],
        correctAnswer: "Язык разметки",
    },
];

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const result = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    answers.innerHTML = "";
    result.textContent = "";

    question.textContent = questions[currentQuestion].question;

    const correctAnswer = questions[currentQuestion].correctAnswer;

    questions[currentQuestion].options.forEach(function(option) {
        const button = document.createElement("button");
        button.textContent = option;
        answers.append(button);

        button.addEventListener("click", function() {
            const userAnswer = button.textContent;

            if(userAnswer === correctAnswer) {
                score++;
                console.log("Правильно!");
            } else{
                console.log("Неправильно!");
            }
            currentQuestion++;

            if(currentQuestion < questions.length){
                showQuestion();
            } else{
                question.textContent = "";
                answers.innerHTML = ""
                result.textContent = "Твой результат " + score + " из " + questions.length;
                console.log("Конец");
            }
        })
    })
}


showQuestion();