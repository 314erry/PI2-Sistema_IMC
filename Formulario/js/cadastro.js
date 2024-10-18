function baixarArquivo(dados, nomeArquivo) {
    const blob = new Blob([dados], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = nomeArquivo;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}

document.getElementById("formCadastro").addEventListener("submit", function(event){
    event.preventDefault();

    let nome = document.getElementById("firstname").value;
    let sobrenome = document.getElementById("lastname").value;
    let celular = document.getElementById("number").value;
    let genero = document.querySelector('input[name="gender"]:checked').value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;
    let confirmSenha = document.getElementById("confirmPassword").value;

    if (senha !== confirmSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    let dadosCadastro = `Nome: ${nome}\\Sobrenome: ${sobrenome}\\Celular: ${celular}\\Gênero: ${genero}\\Email: ${email}\\Senha: ${senha}`;

    baixarArquivo(dadosCadastro, 'dados_cadastro.txt');
});
