document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const signupMessage = document.getElementById("signupMessage");

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obter os valores dos campos do formulário
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const street = document.getElementById("street").value;
        const city = document.getElementById("city").value;
        const cep = document.getElementById("cep").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Validar se todos os campos estão preenchidos
        if (name === "" || email === "" || street === "" || city === "" || cep === "" || newPassword === "" || confirmPassword === "") {
            signupMessage.textContent = "Por favor, preencha todos os campos.";
        } else if (newPassword !== confirmPassword) {
            signupMessage.textContent = "As senhas não coincidem. Tente novamente.";
        } else {
            // Se todos os campos estão preenchidos e as senhas coincidem, você pode prosseguir com a lógica de cadastro.
            // Por enquanto, apenas exibirei uma mensagem de sucesso.
            signupMessage.textContent = "Cadastro bem-sucedido!";
        }
    });
});
