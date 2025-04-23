# Luzofonema Web

Luzofonema Web é uma aplicação web criada para explorar e aplicar
as regras fonéticas propostas pela reforma "Luzofonema", que visa tornar
a escrita do português mais coerente com a sua pronúncia.

## Objetivos do Projeto

- Permitir a conversão de textos em português padrão para Luzofonema
- Aplicar regras fonéticas definidas pelo usuário
- Oferecer uma interface simples e interativa no browser

## Estrutura do Projeto

```
luzofonema-web/
├── public/			# Ficheiros estáticos (index.html, imagens)
├── src/			# Código-fonte da aplicação
│   ├── css/		# Estilos CSS
│   ├── js/			# Scripts JavaScript
│   └── data/		# Dados auxiliares (regras, exemplos)
├── tests/			# Testes e experimentos
├── .gitignore		# Regras para o Git ignorar ficheiros
├── README.md		# Este ficheiro de documentação
└── package.json	# Configuração npm (se aplicável)
```

## Como Correr o Projeto

1. Abre o terminal no WSL
2. Navega até à pasta do projeto:
	```bash
	cd ~/caminho/para/luzofonema-web
	```
3. Abre o ficheiro `public/index.html` num browser:
	```bash
	firefox public/index.html
	```

## Futuras Funcionalidades

- Suporte a regras personalizadas
- Conversão reversa (de Luzofonema para Português padrão)
- Destaque de transformações passo a passo
- Exportação dos textos convertidos

## Licença

Este projeto é livre para uso pessoal e educativo.

