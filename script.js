// Objeto JS que armazena dados fictícios para testar as funcionalidades da tela.

fetch("users.json").then((response) => {
    response.json().then((registeredUsers) => {
        window.users = registeredUsers;
    })
})

function errorMessage(message) {
    let errorBox = document.getElementById("errorBox");
    let errorMessage = errorBox.querySelector("p");

    errorMessage.innerText = message;
    errorBox.style.display = "block";

    userMail.style.borderColor = "#DB0000";
    userPass.style.borderColor = "#DB0000";
}

function authenticateUser(inputMail, inputPass) {
    for (let user in users.registeredUsers) {
        const userData = users.registeredUsers[user];
        if (userData.login === inputMail && userData.password === inputPass) {
            return true;
        }
    }

    return false;
}

function userLogin(event) {
    event.preventDefault();

    let userMail = document.getElementById("userMail");
    let userPass = document.getElementById("userPass");

    // Autenticação de entrada.
    if (authenticateUser(userMail.value, userPass.value)) {
        window.alert("Login realizado com sucesso.");
    } else {
        // Verificação de possíveis erros.
        if (userMail.value == "" && userPass.value == "") {
            errorMessage("Você não preencheu os campos de e-mail e senha.");
        } else if (userMail.value == "" || userPass.value == "") {
            errorMessage("Você não preencheu todos os campos necessários.");
        } else {
            window.alert("Login fracassou.")
        }
    }
}

function loadRegisterPage() {
    window.location.href = "Pages/registration.html"
}