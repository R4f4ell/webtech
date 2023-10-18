document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obter os valores dos campos do formulário
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Validar se os campos estão preenchidos
        if (username === "" || password === "") {
            loginMessage.textContent = "Por favor, preencha todos os campos.";
        } else {
            // Aqui, você pode adicionar a lógica de autenticação, como enviar os dados para um servidor ou verificar em um banco de dados.
            // Por enquanto, apenas exibirei uma mensagem de sucesso.
            loginMessage.textContent = "Login bem-sucedido!";
        }
    });
});
