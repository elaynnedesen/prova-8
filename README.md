# Atividade: Objetos Literais em JavaScript

## O que foi feito

Esta atividade consiste em criar e explicar o uso de objetos literais em JavaScript. Foi desenvolvido um exemplo prático de um objeto chamado `aluno`, contendo:
- Propriedade `nome` (string)
- Propriedade `notas` (array de números)
- Método `calcularMedia()` que retorna a média das notas

Também foi demonstrado:
- Como acessar o nome do aluno usando desestruturação
- Como adicionar uma nova nota ao array original usando o spread operator

## O que são objetos literais?

Objetos literais em JavaScript são estruturas que permitem agrupar dados e comportamentos relacionados em uma única variável, usando a sintaxe de chave e valor. Eles são muito utilizados para representar entidades do mundo real, como pessoas, produtos, etc.

Exemplo prático:

```javascript
const aluno = {
  nome: "Maria",
  notas: [8, 7.5, 9],
  calcularMedia() {
    const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
    return soma / this.notas.length;
  }
};

// Desestruturação
const { nome } = aluno;
console.log("Nome do aluno:", nome);

// Spread operator
const novasNotas = [...aluno.notas, 10];
console.log("Notas originais:", aluno.notas);
console.log("Notas com nova nota:", novasNotas);

// Usando o método
console.log("Média das notas:", aluno.calcularMedia());
```
