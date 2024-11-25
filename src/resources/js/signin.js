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

document.getElementById("formCadastro").addEventListener("submit", async function(event){
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

    let user = {nome, sobrenome, celular, genero, email, senha};

    try {
        const response = await fetch('/api/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message);
            window.location.href = '/login';
        } else {
            const error = await response.json();
            alert(`Erro ao criar usuário: ${error.message}`);
        }
    } catch (err) {
        console.error('Erro na requisição:', err);
        alert('Erro ao enviar os dados. Tente novamente mais tarde.');
    }
});
