# 🛒 Catálogo de Produtos

> Uma interface web simples, leve e responsiva para consultar um catálogo de produtos, filtrando os itens por categoria, fornecedor ou faixa de preço.

![JavaScript](https://img.shields.io/badge/JavaScript-67.4%25-f7df1e?logo=javascript&logoColor=000)
![CSS](https://img.shields.io/badge/CSS-20.9%25-1572B6?logo=css3&logoColor=fff)
![HTML](https://img.shields.io/badge/HTML-11.7%25-e34f26?logo=html5&logoColor=fff)

## ✨ Sobre o projeto

O **Catálogo de Produtos** é uma aplicação front-end desenvolvida com HTML, CSS e JavaScript puro. O projeto apresenta produtos em uma tabela organizada e permite explorar os dados de forma prática por meio de filtros e pesquisa de preços.

A aplicação foi estruturada com classes para representar **produtos**, **categorias** e **fornecedores**, além de uma camada de interface responsável por renderizar os dados dinamicamente no navegador.

## 🚀 Funcionalidades

- 📋 Listagem dinâmica de produtos em tabela;
- 🏷️ Filtro por categoria;
- 🏢 Filtro por fornecedor;
- 💰 Pesquisa por preço;
- 📦 Exibição de estoque, categoria e fornecedor de cada produto;
- 📱 Layout adaptado para telas menores;
- 🧩 Gerenciamento em memória de produtos, categorias e fornecedores;
- 📄 Catálogo em PDF incluído no repositório.

## 🖥️ Visualização

A tabela apresenta as seguintes informações:

| Campo | Descrição |
| --- | --- |
| ID | Identificador do produto |
| Nome | Nome do produto |
| Preço | Valor formatado em reais |
| Estoque | Quantidade disponível |
| Categoria | Grupo ao qual o produto pertence |
| Fornecedor | Empresa responsável pelo fornecimento |

## 🗂️ Estrutura do projeto

```text
catalogo_produtos/
├── index.html                 # Estrutura da página
├── style.css                  # Estilos e responsividade
├── script.js                  # Dados, filtros e lógica da aplicação
├── Catálogo de Produtos.pdf   # Material complementar do catálogo
└── README.md                  # Documentação do projeto
```

## ▶️ Como executar

Como este é um projeto front-end sem dependências externas, não é necessário instalar nada.

### Opção 1: abrir diretamente no navegador

1. Faça o download ou clone este repositório:

   ```bash
   git clone https://github.com/RomasRG/catalogo_produtos.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd catalogo_produtos
   ```

3. Abra o arquivo `index.html` no navegador.

### Opção 2: usar um servidor local

Para uma experiência melhor durante o desenvolvimento, execute o projeto com uma extensão como **Live Server** no VS Code ou utilize qualquer servidor HTTP local.

## 🧪 Dados disponíveis

Os dados utilizados atualmente são definidos no próprio arquivo `script.js`, incluindo produtos de categorias como:

- Limpeza;
- Bebidas;
- Padaria;
- Escritório;
- Tecnologia.

Para adicionar ou alterar produtos, categorias e fornecedores, edite o conjunto de dados no arquivo `script.js`.

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura semântica da aplicação;
- **CSS3** — estilização, variáveis de cor e layout responsivo;
- **JavaScript** — renderização dinâmica, filtros e gerenciamento dos dados;
- **GitHub** — versionamento e hospedagem do projeto.

## 🔮 Ideias para evolução

- Persistir os dados em `localStorage` ou em uma API;
- Adicionar ordenação por nome, preço e estoque;
- Criar um formulário para cadastrar produtos;
- Implementar edição e exclusão pela interface;
- Melhorar a acessibilidade e a navegação por teclado;
- Adicionar testes automatizados;
- Publicar a aplicação com GitHub Pages.

## 👤 Autor

Desenvolvido por **RomasRG**.

- GitHub: [@RomasRG](https://github.com/RomasRG)
- Repositório: [catalogo_produtos](https://github.com/RomasRG/catalogo_produtos)

## 📄 Licença

Este projeto não possui uma licença definida no momento. Caso queira permitir oficialmente o uso, modificação e distribuição do código, considere adicionar uma licença — como MIT — ao repositório.
