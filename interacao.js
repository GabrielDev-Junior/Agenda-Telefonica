const form = document.getElementById("form");
const inputNome = document.getElementById("nome");
const inputTelefone = document.getElementById("telefone");
const btnAdd = document.getElementById("btnEnviar");
const btnMaisContatos = document.getElementById("btnMaisContatos");
const footer = document.getElementById("footer");



let contatos = [];
let linhas = "";
let qtdCaracter = 0;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let telefoneLimpo = Number(inputTelefone.value.trim());
  const botaoClicado = e.submitter.id;

  let linha = "<tr>";
  linha += `<td>${inputNome.value}</td>`;
  linha += `<td>${telefoneLimpo}</td>`;
  linha += "</tr>"

  linhas += linha;

  if (botaoClicado === "btnEnviar") {

    if (contatos.some(contato => contato.telefone === telefoneLimpo)) {
      alert(`O número: ${telefoneLimpo} já consta na agenda! Insira outro válido!`);
      inputTelefone.value = "";
    }
    else {
      contatos.push({ nome: inputNome.value, telefone: telefoneLimpo});
      const table = document.querySelector("tbody");
      table.innerHTML = "";
      contatos.forEach(contato => {
        table.innerHTML += `<tr><td>${contato.nome}</td><td>${contato.telefone}</td></tr>`;
      });
      inputNome.value = "";
      inputTelefone.value = "";
      const bemAceito = document.querySelector(".bem-aceito").style.display = "none";
      const aceitavel = document.querySelector(".aceitavel").style.display = "none";
    }
  }
  if (botaoClicado === "btnMaisContatos") {

    if (contatos.some(contato => contato.telefone === telefoneLimpo)) {
      alert(`O número: ${telefoneLimpo} já consta na agenda! Insira outro válido!` );
    }
    else {
      contatos.push({ nome: inputNome.value, telefone: telefoneLimpo});
      const table = document.querySelector("tbody");
      table.innerHTML = "";
      contatos.forEach(contato => {
        table.innerHTML += `<tr><td>${contato.nome}</td><td>${contato.telefone}</td></tr>`;
      });
      inputTelefone.value = "";
      inputTelefone.focus();
      const bemAceito = document.querySelector(".bem-aceito").style.display = "none";
      const aceitavel = document.querySelector(".aceitavel").style.display = "none";
    }
  }
});
inputTelefone.addEventListener('input', function (e) {
  // Remove qualquer caractere que não seja número
  qtdCaracter = e.target.value.replace(/\D/g, '');
  let mensagem = "";
  const bemAceito = document.querySelector(".bem-aceito");
  const aceitavel = document.querySelector(".aceitavel");
  const naoAceito = document.querySelector(".nao-aceito");

  //Aceitando apenas 11 digitos
  if (qtdCaracter.length > 11) {
    qtdCaracter = qtdCaracter.slice(0, 11); // limita o numero até 11
  }
  // Atualiza o campo de entrada com o valor filtrado
  e.target.value = qtdCaracter;
  if (qtdCaracter.length < 9) {
    let mensagem = `${e.target.value} => Icompleto...! `;
    naoAceito.innerHTML = mensagem;
    naoAceito.style.display = "block";
  }
  else{
    naoAceito.style.display = "none";
  }
  if (qtdCaracter.length >= 9 && qtdCaracter.length < 11) {
    mensagem = `${e.target.value} => Aceitável...! `;
    aceitavel.innerHTML = mensagem;
    aceitavel.style.display = "block";
    naoAceito.style.display = "none";
  }
  else {
    aceitavel.style.display = "none";
  }
  if(qtdCaracter.length == 11){
    mensagem = `${e.target.value} => Excelente...! `;
    bemAceito.innerHTML = mensagem;
    bemAceito.style.display = "block";
    aceitavel.style.display = "none";
    naoAceito.style.display = "none";
  }
  else {
    bemAceito.style.display = "none";
  }
  if (qtdCaracter.length < 1) {
    naoAceito.style.display = "none";
  }
})


footer.innerHTML += `&copy; ${new Date().getUTCFullYear()} Todos os direitos reservados.`;