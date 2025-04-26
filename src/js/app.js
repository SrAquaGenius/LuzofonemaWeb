import { convertToLuzofonema, convertToPhonetic } from './rules.js';

document.addEventListener('DOMContentLoaded', () => {
	const app = document.getElementById('app') || document.body;

	// Criação das duas páginas
	function criarPaginaInicial() {
		app.innerHTML = '';

		const title = document.createElement('h1');
		title.textContent = 'Conversor Luzofonema';

		const input = document.createElement('textarea');
		input.placeholder = 'Escreve aqui o teu texto...';

		const convertButton = document.createElement('button');
		convertButton.textContent = 'Converter';

		convertButton.addEventListener('click', () => {
			const textoOriginal = input.value;
			const textoConvertido = convertToLuzofonema(textoOriginal);
			criarPaginaResultado(textoOriginal, textoConvertido);
		});

		app.appendChild(title);
		app.appendChild(input);
		app.appendChild(convertButton);

		// Estilo básico
		app.style.display = 'flex';
		app.style.flexDirection = 'column';
		app.style.gap = '1rem';
	}

	function criarPaginaResultado(textoOriginal, textoConvertido) {
		app.innerHTML = '';

		const title = document.createElement('h1');
		title.textContent = 'Resultado da Conversão';

		const originalDiv = document.createElement('div');
		originalDiv.innerHTML = `<strong>Texto original:</strong><br>${textoOriginal}`;

		const convertidoDiv = document.createElement('div');
		convertidoDiv.innerHTML = `<strong>Texto Luzofonema:</strong><br>${textoConvertido}`;

		const voltarBtn = document.createElement('button');
		voltarBtn.textContent = 'Nova conversão';
		voltarBtn.addEventListener('click', criarPaginaInicial);

		// Função para exibir a caixa de tooltip com a palavra fonética
		function showTooltip(wordElement, foneticWord, event) {
			let tooltip = document.createElement('div');
			tooltip.textContent = foneticWord;
			tooltip.style.position = 'absolute';
			tooltip.style.backgroundColor = '#f7f7f7';
			tooltip.style.border = '1px solid #ccc';
			tooltip.style.padding = '5px';
			tooltip.style.fontSize = '1rem';
			tooltip.style.zIndex = '9999';
			tooltip.style.top = `${event.clientY + 10}px`;
			tooltip.style.left = `${event.clientX + 10}px`;
			tooltip.style.maxWidth = '100px';

			document.body.appendChild(tooltip);

			// Remover o tooltip quando o mouse sai da palavra
			const hideTooltip = () => {
				tooltip.remove();
				wordElement.removeEventListener('mouseout', hideTooltip);
			};
			wordElement.addEventListener('mouseout', hideTooltip);
		}

		// Função para gerar a versão fonética de uma palavra
		function getFoneticWord(word) {
			// Aqui você chama a função de conversão fonética
			return convertToPhonetic(word);  // Supondo que você tenha a função convertToPhonetic
		}

		// Função para gerar as palavras com a conversão e fonética
		function getWordsWithPhonetic(textoOriginal) {
			const words = textoOriginal.split(' ');
			return words.map(word => {
				const wordElement = document.createElement('span');
				wordElement.textContent = word + ' ';
				wordElement.style.cursor = 'pointer';
				const foneticWord = getFoneticWord(word); // Obtém a versão fonética da palavra
				wordElement.addEventListener('mouseover', (event) => {
					showTooltip(wordElement, foneticWord, event); // Exibe a tooltip com a fonética
				});
				return wordElement;
			});
		}

		// Criar as palavras com o evento de mouseover no texto original
		const originalTextWithWords = getWordsWithPhonetic(textoOriginal);

		// Adicionar as palavras ao div de texto original
		originalDiv.innerHTML = `<strong>Texto original:</strong><br>`;
		originalTextWithWords.forEach(wordElement => {
			originalDiv.appendChild(wordElement);
		});

		// Adicionar ao app
		app.appendChild(title);
		app.appendChild(originalDiv);
		app.appendChild(convertidoDiv);
		app.appendChild(voltarBtn);

		// Estilo básico
		app.style.display = 'flex';
		app.style.flexDirection = 'column';
		app.style.gap = '1rem';
	}

	// Carrega a página inicial ao abrir
	criarPaginaInicial();
});
