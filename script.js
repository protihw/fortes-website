// Objeto JS que armazena dados fictícios para testar as funcionalidades da tela.
const users = {
    "registeredUsers": {
        "admin": {
            "login": "admin@fortes.ind.br",
            "password": "admin"    
        },
        "user1": {
            "login": "user1@gmail.com",
            "password": "user1"
        }
    }
};

function errorMessage(message) {
    let errorBox = document.getElementById("errorBox");
    let errorMessage = errorBox.querySelector("p");

    errorMessage.innerText = message;
    errorBox.style.display = "block";

    userMail.style.borderColor = "#DB0000";
    userPass.style.borderColor = "#DB0000";
}

function authenticateUser(inputMail, inputPass) {
    const registeredUsers = users.registeredUsers;

    for (let user in registeredUsers) {
        if (registeredUsers[user].login === inputMail && registeredUsers[user].password === inputPass) {
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