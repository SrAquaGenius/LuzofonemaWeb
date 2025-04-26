// rules.js
// Regras fonéticas para a conversão Luzofonema

/** Lista de regras de substituição fonética.
 *  Cada regra é um objeto com 'pattern' (regex) e 'replacement'. */
const luzofonemaRules = [

	// /z/ é sempre "z"
	{ pattern: /(?<=[aeiou])s(?=[aeiou])/gi, replacement: "z" },

	// /s/ é sempre "s"
	{ pattern: /ç/gi, replacement: "s" },
	{ pattern: /ss/gi, replacement: "s" },
	{ pattern: /c(?=[e,i])/gi, replacement: "s" },

	// /k/ é sempre "c"
	{ pattern: /qu(?=[ei])/gi, replacement: "c" },
	{ pattern: /q(?=u[ao])/gi, replacement: "c" },
	{ pattern: /k/gi, replacement: "c" },

	// /ʃ/ é sempre "x"
	{ pattern: /ch/gi, replacement: "x" },

	// /ks/ é sempre "ç"
	//{ pattern: /x/gi, replacement: "ç" },

	// /ʒ/ é sempre "j"
	{ pattern: /g(?=[e,i])/gi, replacement: "j" },

	// Remover "u" não pronunciado (ex: "guerra" → "gerra")
	{ pattern: /(?<=[g])u(?=[e,i])/gi, replacement: "" },

	// Queda do "h" se não for antecedido por "l" ou "n"
	{ pattern: /(?<![ln])h/gi, replacement: "" },

	// Som nasal com "m" passar para som nasal com "n"
	{ pattern: /(?<=[aeiou])m(?=[ pb])/gi, replacement: "n" }
];

/** Aplica todas as regras Luzofonema a um texto,
 *  ignorando nomes próprios (palavras com maiúscula no meio da frase).
 *  @param {string} text - Texto original em português.
 *  @return {string} - Texto convertido para Luzofonema. */
export function convertToLuzofonema(text) {
	// Expressão para dividir por palavras mantendo pontuação e espaços
	const parts = text.split(/(\s+|[.,!?]+)/);

	let result = '';
	let isStartOfSentence = true;

	parts.forEach(part => {
		// Verifica se é palavra (não espaço nem pontuação)
		if (/^\w/.test(part)) {
			// Se for início de frase ou tudo minúsculo, aplica regras
			const isName = /^[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÄËÏÖÜ]/.test(part);
			if (isStartOfSentence || !isName) {
				let converted = part;
				luzofonemaRules.forEach(rule => {
					converted = converted.replace(rule.pattern, rule.replacement);
				});
				result += converted;
			} else {
				result += part; // Mantém nome próprio
			}
			isStartOfSentence = false;
		} else {
			result += part;

			// Se termina frase, a próxima palavra pode ser início de frase
			if (/[.!?]\s*$/.test(part)) {
				isStartOfSentence = true;
			}
		}
	});

	return result;
}

export function convertToPhonetic(word) {
	// Simulação de conversão fonética (exemplo simples)
	// Isso deve ser substituído pela lógica fonética real
	if (word === 'quarto') return 'kwˈaɾ.tu';  // Exemplo para "quarto"
	// Adicione mais regras fonéticas conforme necessário
	return word;  // Retorna a palavra sem alteração caso não tenha regra fonética definida
  }
