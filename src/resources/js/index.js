function formatHeight(input) {
    let value = input.value.replace('.', ''); // Remove qualquer ponto existente
    if (value.length >= 2) {
        input.value = value.slice(0, 1) + '.' + value.slice(1, 3); // Adiciona o ponto após o primeiro dígito
    } else {
        input.value = value; // Caso tenha menos de dois dígitos, deixa sem formatação
    }
}

function formatHeight(input) {
    let value = input.value.replace('.', ''); // Remove qualquer ponto existente
    if (value.length >= 2) {
        input.value = value.slice(0, 1) + '.' + value.slice(1, 3); // Adiciona o ponto após o primeiro dígito
    } else {
        input.value = value; // Caso tenha menos de dois dígitos, deixa sem formatação
    }
}

function calculateIMC() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const resultElement = document.getElementById('result');

    if (isNaN(height) || isNaN(weight)) {
        resultElement.textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);
    let category = '';
    let className = '';

    if (imc < 18.5) {
        category = 'Você está abaixo do peso.';
        className = 'underweight'; // Classe para abaixo do peso
    } else if (imc >= 18.5 && imc <= 24.9) {
        category = 'Você está com peso normal.';
        className = 'normal'; // Classe para peso normal
    } else if (imc >= 25 && imc <= 29.9) {
        category = 'Você está com sobrepeso.';
        className = 'overweight'; // Classe para sobrepeso
    } else {
        category = 'Você está com obesidade.';
        className = 'obesity'; // Classe para obesidade
    }

    resultElement.innerHTML = `Seu IMC é <span class="${className}">${imc}</span>. ${category}`;
}
