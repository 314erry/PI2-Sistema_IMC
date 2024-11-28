document.getElementById("formLogin").addEventListener("submit", async function(event){
    event.preventDefault();

    let email = document.getElementById("emailLogin").value;
    let senha = document.getElementById("passwordLogin").value;

    let reqBody = {email, senha}

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody)
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message);
            window.location.href = '/index';
        } else {
            const error = await response.json();
            alert(`Erro ao fazer login: ${error.message}`);
        }
    } catch (err) {
        console.error('Erro na requisição:', err);
        alert('Erro ao enviar os dados. Tente novamente mais tarde.');
    }
});
