// 1 - Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

let title = document.querySelector("h1");

title.innerHTML = "Hora do Desafio";

// 2 - Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function pressionarConsole() {
  console.log("O botão foi clicado");
}

//3 - Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado
function pressionarAlerta() {
  alert("Eu amo JS!");
}

// 4 Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function pressionarPrompt() {
  let cidade = prompt("Qual a cidade do Brasil que você já visitou?");

  alert(`Estive em ${cidade} e lembrei de você!`);
}
// 5 - Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function soma() {
  let num1 = parseInt(prompt("Digite o primeiro número"));
  let num2 = parseInt(prompt("Digite o segundo número"));

  let resultado = num1 + num2;

  alert(`O reultado de ${num1} + ${num2} é ${resultado}`);
}
