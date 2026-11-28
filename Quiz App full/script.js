const questions = [
    {
        question: "Какой язык работает в браузере?",
        options: ["Python", "Java", "JavaScript"],
        correctAnswer: "JavaScript",
    },
    {
        question: "Что делает console.log?",
        options: ["Создает переменную", "Выводит информацию в консоль", "Удаляет элемент", "Запускает сайт"],
        correctAnswer: "Выводит информацию в консоль",
    },
    {
        question: "Что такое HTML?",
        options: ["Язык разметки", "База данных", "Операционная система"],
        correctAnswer: "Язык разметки",
    },
    {
        question: "Как объявить переменную, значение которой нельзя изменить?",
        options: ["const", "var", "let"],
        correctAnswer: "const",
    },
    {
        question: "Какой HTML тег изпользуеться для сооздания ссылки?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: "<a>",
    },
    {
        question: "Что возвращает метод pop()?",
        options: ["Первый элемент массива", "Удаленный последний элемент массива", "Длинну массива", "Новый массив"],
        correctAnswer: "Удаленный последний элемент массива",
    },
    {
        question: "Для чего нужен CSS?",
        options: ["Для создания базы данных", "Для стилизации страницы", "Для хранения данных", "Для запуска сервера"],
        correctAnswer: "Для стилизации страницы",
    },
    {
        question: "Какой оператор проверяет строгое равенство в JavaScript?",
        options: ["=", "==", "===", "!="],
        correctAnswer: "===",
    },
    {
        question: "Что такое DOM?",
        options: ["Язые програмирования", "Структура HTML-документа в виде объектов", "База данных", "Редактор кода"],
        correctAnswer: "Структура HTML-документа в виде объектов",
    },
    {
        question: "Что такое GitHub?",
        options: ["Браузер", "Операционная система", "Платформа для хранения и совместной работай над кодом", "Язык програмирования"],
        correctAnswer: "Платформа для хранения и совместной работай над кодом",
    },
    {
        question: "Как правильно написать условие в JavaScript?",
        options: ["if x > 5{}", "if (x > 5){}", "when (x > 5){}", "for (x > 5){}"],
        correctAnswer: "if (x > 5){}",
    },
    {
        question: "Что такое backend?",
        options: ["HTML-разметка", "Анимация страницы", "Серверная часть приложения", "Оформление кнопок"],
        correctAnswer: "Серверная часть приложения",
    },
    {
        question: "Какое значение вернет typeof 'Hello'?",
        options: ["string", "number", "boolean", "object"],
        correctAnswer: "string",
    },
    {
        question: "Что такое API?",
        options: ["Способ взаимодействия между программами", "Тип переменной", "CSS-свойсто", "Вид цикла"],
        correctAnswer: "Способ взаимодействия между программами",
    },
    {
        question: "Что означает frontend?",
        options: ["Серверная часть сайта", "База данных", "Система управления файлами", "Видимая пользователю часть сайта"],
        correctAnswer: "Видимая пользователю часть сайта",
    },
];

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const result = document.getElementById("result");

//Дополнение к квизу
const restartButton = document.getElementById("restart");
const progress = document.getElementById("progress");
const progressFill = document.getElementById("progress-fill");


let currentQuestion = 0;
let score = 0;

function showQuestion() {
    answers.innerHTML = "";
    result.textContent = "";

    question.textContent = questions[currentQuestion].question;

    //Таблица заполнения 
    progress.textContent = "Вопрос " + (currentQuestion + 1)  + " из " + questions.length; 
    const percent = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = percent + "%";

    const correctAnswer = questions[currentQuestion].correctAnswer;

    questions[currentQuestion].options.forEach(function(option) {
        const button = document.createElement("button");
        button.textContent = option;
        answers.append(button);

        restartButton.style.display = "none";

        button.addEventListener("click", function() {
            const userAnswer = button.textContent;

            if(userAnswer === correctAnswer) {
                score++;
                button.classList.add("correct");
                console.log("Правильно!");
            } else{
                button.classList.add("wrong");
                console.log("Неправильно!");
            }
                setTimeout(function() {
                    currentQuestion++;

            if(currentQuestion < questions.length){
                showQuestion();
            } else{
                question.textContent = "";
                answers.innerHTML = ""
                result.textContent = "Твой результат " + score + " из " + questions.length;
                console.log("Конец");
                restartButton.style.display = "block";
            }
                }, 800);
        })
    })
}


showQuestion();

restartButton.addEventListener("click", function() {
    score = 0;
    currentQuestion = 0;
    showQuestion();
})
