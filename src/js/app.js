// app.js

// Função para criar o conteúdo do corpo
function createPage() {
    const body = document.querySelector('body');
    
    // Criar título
    const title = document.createElement('h1');
    title.textContent = 'Conversor Luzofonema';
    body.appendChild(title);

    // Criar área de input
    const inputLabel = document.createElement('label');
    inputLabel.textContent = 'Digite o texto: ';
    body.appendChild(inputLabel);
    
    const inputText = document.createElement('textarea');
    inputText.id = 'inputText';
    inputText.placeholder = 'Digite seu texto aqui';
    body.appendChild(inputText);

    // Criar botão para conversão
    const convertButton = document.createElement('button');
    convertButton.id = 'convertButton';
    convertButton.textContent = 'Converter';
    body.appendChild(convertButton);

    // Criar área de resultado
    const outputLabel = document.createElement('label');
    outputLabel.textContent = 'Texto convertido: ';
    body.appendChild(outputLabel);
    
    const outputText = document.createElement('div');
    outputText.id = 'outputText';
    body.appendChild(outputText);

    // Adicionar evento ao botão
    convertButton.addEventListener('click', convertText);
}

// Função para capturar o texto do input e aplicar a conversão
function convertText() {
    const inputText = document.getElementById('inputText').value; // Captura o texto
    const convertedText = convertToLuzofonema(inputText); // Aplica as regras
    document.getElementById('outputText').textContent = convertedText; // Exibe o texto convertido
}

// Chama a função para construir a página quando o script é carregado
createPage();