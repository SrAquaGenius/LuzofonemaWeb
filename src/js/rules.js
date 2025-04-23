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
	{ pattern: /(?<![ln])h/gi, replacement: "" }
];

/** Aplica todas as regras Luzofonema a um texto.
 *  @param {string} text - Texto original em português.
 *  @return {string} - Texto convertido para Luzofonema. */
function convertToLuzofonema(text) {
	let converted = text;
	luzofonemaRules.forEach(rule => {
		converted = converted.replace(rule.pattern, rule.replacement);
	});
	return converted;
}
