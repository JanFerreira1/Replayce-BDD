# RePlayce - Testes BDD (Cypress + Cucumber)

Este projeto contém a implementação da técnica BDD para o RePlayce, focada na funcionalidade de busca de produtos.

## História de Usuário

**Como** visitante ou usuário  
**Quero** usar a barra de busca para encontrar produtos  
**Para que** eu encontre rapidamente itens por nome, artista ou gênero.

---

## Cenário implementado

### **Busca por nome retorna resultados**

Descrito em Gherkin no arquivo: `cypress/e2e/features/busca_produto.feature`

---

## Como rodar os testes

### 1. Instalar dependências
```bash
npm install
```
---

### 2. Rodar o RePlayce (projeto original)
```bash
npm run dev
```
---

### 3. Abrir Cypress
```bash
npm run cy:open
```

---

### 4. Executar o cenário
Clique na feature:
`busca_produto.feature.`

---

## Estrutura do Projeto

- /cypress/e2e/features → arquivos Gherkin

- /cypress/e2e/step_definitions → implementação dos testes

- /cypress/fixtures → mocks de produtos

- cypress.config.js → configuração do Cypress/Cucumber

