fetch("../users.json").then((response) => {
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
    userPass1.style.borderColor = "#DB0000";
    userPass2.style.borderColor = "#DB0000";
}

function includeUser(inputMail, inputPass) {
    let userData;

    for (let user in users.registeredUsers) {
        userData = users.registeredUsers[user];
        if (userData.login === inputMail) {
            errorMessage("Usuário já existe.");
            return false;
        }
    }

    // Não consegui atualizar o arquivo JSON, pois pelo que vi precisaria de um servidor.
    return true;
}

function userRegister(event) {
    event.preventDefault();

    let userMail = document.getElementById("userMail");
    let userPass1 = document.getElementById("userPass1");
    let userPass2 = document.getElementById("userPass2");

    if (userMail.value == "" && userPass1.value == "" && userPass2.value == "") {
        errorMessage("Você não preencheu os campos de e-mail e senha.");
    } else if (userMail.value == "" || userPass1.value == "" || userPass2.value == "") {
        errorMessage("Você não preencheu todos os campos necessários.");
    } else {
        if (userPass1.value === userPass2.value) {
            if (includeUser(userMail.value, userPass1.value)) {
                window.alert("Cadastro realizado com sucesso.");
                loadLoginPage();
            }
        } else {
            errorMessage("As senhas não coincidem.");
        }
    }
}

function loadLoginPage() {
    window.location.href = "../index.html"
}
