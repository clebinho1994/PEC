//MENSAGEM AO CLICAR NO BOTÃO "ENVIAR"

const aluno = document.getElementById('nome');
const btn = document.getElementById('btn');

btn.onclick = function() {
  const inputAluno = aluno.value;
  alert(`Bem vindo, ${inputAluno}! Pré-Cadastro realizado! Compareça ao PEC para finalizar o cadastro e entregar os documentos.`);
};


