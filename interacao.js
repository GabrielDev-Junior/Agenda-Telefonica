const form = document.getElementById("form");
const inputNome = document.getElementById("nome");
const inputTelefone = document.getElementById("telefone");
const btnAdd = document.getElementById("btnEnviar");
const btnMaisContatos = document.getElementById("btnMaisContatos");
const footer = document.getElementById("footer");

let numeros = [];
let linhas = "";

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const botaoClicado = e.submitter.id;

  const telefoneLimpo = Number(inputTelefone.value.trim());
  
  let linha = "<tr>";
  linha += `<td>${inputNome.value}</td>`;
  linha += `<td>${telefoneLimpo}</td>`;
  linha += "</tr>"

  linhas += linha;

  if (botaoClicado === "btnEnviar") {

    if (numeros.includes(telefoneLimpo)) {
      alert(`O número: ${telefoneLimpo} já consta na agenda! Insira outro válido!`);
      inputTelefone.value = "";
    }
    else {
      numeros.push(telefoneLimpo);
      const table = document.querySelector("tbody");
      table.innerHTML = "";
      numeros.forEach(num => {
        table.innerHTML += `<tr><td>${inputNome.value}</td><td>${num}</td></tr>`;
      });
      inputNome.value = "";
      inputTelefone.value = "";
      console.log("Botão Add Clicado");
    }
  }
  if (botaoClicado === "btnMaisContatos") {

    if (numeros.includes(telefoneLimpo)) {
      alert(`O número: ${telefoneLimpo} já consta na agenda! Insira outro válido!` );
    }
    else {
      numeros.push(telefoneLimpo);
      const table = document.querySelector("tbody");
      table.innerHTML = "";
      numeros.forEach(num => {
        table.innerHTML += `<tr><td>${inputNome.value}</td><td>${num}</td></tr>`;
      });
      inputTelefone.value = "";
      console.log("Botão Mais Contatos Clicado");
    }
  }
});
footer.innerHTML += `&copy; ${new Date().getUTCFullYear()} Todos os direitos reservados.`;