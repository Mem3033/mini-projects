const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const form = document.getElementById("form");
const btn = document.querySelector(".btn");
const result = document.getElementById("result");


form.addEventListener("submit", function(event){
    event.preventDefault();

    if(nameInput.value === "" || emailInput.value === "" || passwordInput.value === ""){
        result.style.color = "red";
        result.textContent = "Поля не должны быть пустыми!";
    } else if(passwordInput.value.length < 8){
        result.style.color = "red";
        result.textContent = "Пароль должен содержать минимум 8\n символов";
    } else{
        result.textContent = "Успешно!";
        result.style.color = "green";
        form.reset();
    }

    setTimeout(function(){
        result.textContent = "";
    }, 3000);
})
