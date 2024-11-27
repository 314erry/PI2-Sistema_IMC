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
    const caloriasCafe = document.getElementById('calorias-cafe');
    const caloriasAlmoco = document.getElementById('calorias-almoco');
    const caloriasJanta = document.getElementById('calorias-janta');
    const objetivo = document.getElementById('goal').value;

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

    resultElement.style.visibility = "visible";
    resultElement.innerHTML = `Seu IMC é <span class="${className}">${imc}</span>. ${category}`;

    let calculoMediaDiaria = 88.362 + (13.397 * weight) + (4.799 * (height * 100)) - (5.677 * 30);
    const caloriasDiarias = document.getElementById('media-calorias');
    const calculoCaloriasCafe = calculoMediaDiaria * 0.20;
    const calculoCaloriasAlmoco = calculoMediaDiaria * 0.40;
    const calculoCaloriasJanta = calculoMediaDiaria * 0.40;

    caloriasCafe.innerHTML = `Café: ${calculoCaloriasCafe.toFixed(2)} kcal`;
    caloriasAlmoco.innerHTML = `Almoço: ${calculoCaloriasAlmoco.toFixed(2)} kcal`;
    caloriasJanta.innerHTML = `Janta: ${calculoCaloriasJanta.toFixed(2)} kcal`;

    if (objetivo === 'emagrecer') {
        calculoMediaDiaria *= 0.7;
    } else {
        calculoMediaDiaria *= 1.3;
    }

    caloriasDiarias.innerHTML = `Sua média diária de calorias é ${calculoMediaDiaria.toFixed(2)} kcal.`;
}

const menuData = {
    "Café da Manhã": [
        { name: "Tapioca 1 un., ~50 g", cal: "70kcal", img: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/318/318411/brazilian-tapioca-with-cheese.jpg?w=1155&h=1541' },
        { name: "Pão Integral 1 un., ~50 g", cal: "67kcal", img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._v6l7Xa1diQEClFhFURrIAHaE8%26pid%3DApi&f=1&ipt=b878aa2e2f541f9fde165ef41cfdae64df7332cb1a3e5810ca5a4a10db643054&ipo=images' },
        { name: "Ovos Cozidos 2 un., 100 g", cal: "155kcal", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.e-konomista.pt%2Fuploads%2F2019%2F07%2F100279-two-halves-of-boiled-eggs-on-wooden-rustic-background_1537270607.jpg&f=1&nofb=1&ipt=0002e96e71e7d3009ee06113e80ddc00708fe33ff07758fb5b7bbb2343dd690e&ipo=images" },
        { name: "Suco de laranja 200 ml", cal: "86kcal", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mundoboaforma.com.br%2Fwp-content%2Fuploads%2F2018%2F06%2Fsuco-de-laranja-capa.jpg&f=1&nofb=1&ipt=05ab1de51460eb20d0c23add5f8179cbea352277c216740fa070d38ab1f893e6&ipo=images" },
        { name: "Café sem açúcar, 1 xícara", cal: "2kcal", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs2.glbimg.com%2FpGTd3kAbZCgJBM4vEDJmVD806Xo%3D%2Fe.glbimg.com%2Fog%2Fed%2Ff%2Foriginal%2F2015%2F03%2F03%2Fcafezinho.jpg&f=1&nofb=1&ipt=dc9b3f8cd143438b489d29617f7eee50acb981ac6735149b77584442ce1273f5&ipo=images" },
        { name: "Queijo 1 fatia, ~30 g", cal: "90kcal", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Freceitatodahora.com.br%2Fwp-content%2Fuploads%2F2022%2F12%2Fqueijo-caseiro-facil-receita-toda-hora.jpg&f=1&nofb=1&ipt=313a3cc7e854ecbb4a6f2a93f2f774efeaad5694c43b571d2820dbe13abfcfcf&ipo=images" },
        { name: "Melão 1 fatia média, ~150 g", cal: "50kcal", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Ffiles.agro20.com.br%2Fuploads%2F2020%2F05%2FMel%25C3%25A3o-amarelo-2.jpg%3Fresize%3D1024%252C682%26ssl%3D1&f=1&nofb=1&ipt=0737006884ed4dc1c9aa2c84954d08b0da3ad8cce33fd56f64abd280a4e2a9d4&ipo=images" },
        { name: "Banana 1 unidade média, ~100 g", cal: "89kcal", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreyaproduce.com%2Fwp-content%2Fuploads%2Fbunch-of-bananas.jpg&f=1&nofb=1&ipt=36436546c91bdca70e0877c6e521ac5c5f41151d1138a51bcbd1add2b0b49f2a&ipo=images" },
    ],
    "Almoço": [
        { name: "Filé de frango 1 unidade média, ~120 g", cal: "120kcal", img: "https://vocegastro.com.br/app/uploads/2021/11/receita-de-file-de-frango.jpg" },
        { name: "Peixe frito 1 filé médio, ~100 g", cal: "180kcal", img: "https://receitatodahora.com.br/wp-content/uploads/2024/08/peixe-frito-0808-1024x683.jpg" },
        { name: "Feijão 1 concha média, ~150 g", cal: "95kcal", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmuNOqiXm-AQAdYuUJ7i-qjCs3IV7Dkxc0A&s" },
        { name: "Bife 1 unidade média, ~120 g", cal: "250kcal", img: "https://i0.wp.com/qereceitas.com/wp-content/uploads/2024/03/AnyConv.com__Design-sem-nome-4-1.webp" },
        { name: "Purê de batata 1 porção média, ~100 g", cal: "120kcal", img: "https://receitadaboa.com.br/wp-content/uploads/2024/04/iStock-149049164.jpg" },
        { name: "Abóbora cozida 1 concha média, ~150 g", cal: "50kcal", img: "https://www.receiteria.com.br/wp-content/uploads/abobora-refogada-capa.jpeg" },
        { name: "Salada mix de folhas com tomate, ~100 g", cal: "25kcal", img: "https://jeffersondealmeida.com.br/wp-content/uploads/2023/01/unnamed-2023-01-27T172651.115.jpg" }
    ],
    "Janta": [
        { name: "Ovo cozido 1 unidade média, ~50 g", cal: "78kcal", img: "https://marmitexdesucesso.com.br/wp-content/uploads/2024/10/como-conservar-ovo-cozido-1200x857.jpg" },
        { name: "Filé de frango 1 unidade média, ~120 g", cal: "120kcal", img: "https://vocegastro.com.br/app/uploads/2021/11/receita-de-file-de-frango.jpg" },
        { name: "Feijão 1 concha média, ~150 g", cal: "95kcal", img: "https://saude.mpu.mp.br/nutricao/receitas/imagens/Feijaonutritivo.png" },
        { name: "Bife 1 unidade média, ~120 g", cal: "250kcal", img: "https://marmoreio.com.br/wp-content/uploads/2020/06/bife-ancho-1200x738-2.jpg" },
        { name: "Macarrão 1 porção média, ~100 g, cozido, sem molho", cal: "150kcal", img: "https://receitatodahora.com.br/wp-content/uploads/2024/07/macarrao-na-manteiga-1507.jpg" },
        { name: "Sopa 1 prato fundo, ~300 ml - base de legumes", cal: "120kcal", img: "https://s2-receitas.glbimg.com/ebymlDcLs-wsYgaZz2lyEA0ZMz4=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/U/r/l6uJf6Sf6HSyV8WrWSTA/sopa-de-legumes-com-frango-receita.jpg" },
        { name: "Carne moída 1 porção média, ~100 g", cal: "250kcal", img: "https://www.kitano.com.br/wp-content/uploads/2019/07/SSP_2642-Carne-moi%E2%95%A0%C3%BCda-com-vegetais-louro-e-pimenta.jpg" }
    ]

};


const categories = Object.keys(menuData);
let currentCategoryIndex = 0;

const menuTitle = document.getElementById("menu-title");
const menuItems = document.getElementById("food-options");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

const selectedItems = {}; // Objeto para armazenar itens selecionados por categoria

function addFoodItemListeners() {
    const foodItems = document.querySelectorAll(".food-item");
    foodItems.forEach((item) => {
        item.addEventListener("click", () => {
            const category = categories[currentCategoryIndex];
            const itemName = item.querySelector('p').textContent.trim();

            // Inicializa a categoria no objeto de seleção, se não existir
            if (!selectedItems[category]) {
                selectedItems[category] = new Set();
            }

            // Alterna a seleção do item
            if (selectedItems[category].has(itemName)) {
                selectedItems[category].delete(itemName); // Remove da seleção
                item.style.backgroundColor = "#DDDADA"; // Reset to default color
            } else {
                selectedItems[category].add(itemName); // Adiciona à seleção
                item.style.backgroundColor = "#A5B95E"; // Selection color
            }

                calculateTotalCalories();
        });
    });
}

function calculateTotalCalories() {
    let totalCalories = 0;

    // Itera sobre cada categoria de itens selecionados
    for (const category in selectedItems) {
        selectedItems[category].forEach((itemName) => {
            // Encontra o item no menuData para obter as calorias
            const item = menuData[category].find(food => food.name === itemName);
            if (item) {
                // Remove "kcal" e converte para número
                const calories = parseInt(item.cal.replace("kcal", "").trim());
                totalCalories += calories;
            }
        });
    }

    // Atualiza o elemento de total de calorias
    const totalCaloriesElement = document.getElementById("total-calories");
    totalCaloriesElement.textContent = `Total de Calorias: ${totalCalories} kcal`;
}

function renderMenu() {
    const category = categories[currentCategoryIndex];
    menuTitle.textContent = category;
    menuItems.innerHTML = ""; // Limpa os itens anteriores

    menuData[category].forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "food-item";
        itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <p>${item.name}</p> 
            <p>${item.cal}</p>
        `;

        // Aplica a seleção visual se o item estiver selecionado
        if (selectedItems[category] && selectedItems[category].has(item.name)) {
            itemDiv.style.backgroundColor = "#A5B95E";
        } else {
            itemDiv.style.backgroundColor = "#DDDADA";
        }

        menuItems.appendChild(itemDiv);
    });

    addFoodItemListeners();
}

// Event Listeners para alternar categorias
btnPrev.addEventListener("click", () => {
    if (currentCategoryIndex > 0) {
        currentCategoryIndex--;
        renderMenu();
    }
});

btnNext.addEventListener("click", () => {
    if (currentCategoryIndex < categories.length - 1) {
        currentCategoryIndex++;
        renderMenu();
    }
});

// Initialize with first category
document.addEventListener("DOMContentLoaded", () => {
    renderMenu();
});

