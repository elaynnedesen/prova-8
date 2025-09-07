// Definição do objeto literal
const aluno = {
  nome: "Maria",
  notas: [8, 7.5, 9],
  calcularMedia() {
    const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
    return soma / this.notas.length;
  }
};

// Desestruturação para acessar o nome
const { nome } = aluno;
console.log("Nome do aluno:", nome);

// Spread operator para adicionar uma nova nota
const novasNotas = [...aluno.notas, 10];
console.log("Notas originais:", aluno.notas);
console.log("Notas com nova nota:", novasNotas);

// Usando o método calcularMedia
console.log("Média das notas:", aluno.calcularMedia());