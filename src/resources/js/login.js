document.getElementById("formLogin").addEventListener("submit", function(event){
    event.preventDefault();

    let email = document.getElementById("emailLogin").value;
    let senha = document.getElementById("passwordLogin").value;

    let emailCorreto = "usuario@teste.com";
    let senhaCorreta = "senha123";

    if(email === emailCorreto && senha === senhaCorreta) {
        alert("Login bem-sucedido!");
    } else {
        document.getElementById("erroLogin").innerText = "Email ou senha incorretos!";
    }
});
