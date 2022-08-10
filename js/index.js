let entradaTexto = document.getElementById("entradaTexto");
let codificar = document.getElementById("botaoCodifica");
let descodificar = document.getElementById("botaoDescodifica");
let resultado = document.getElementById("saida");
let botaoCopia = document.getElementById("copiar");

function criptografa() {
  let textoCriptografado = entradaTexto.value;
  let resultadoTexto = textoCriptografado
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  resultado.value = resultadoTexto;

  document.getElementById("ativo").style.display = "none";
  document.getElementById("texto1").style.display = "none";
  document.getElementById("texto2").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
  document.getElementById("saida").style.display = "show";
  document.getElementById("saida").style.display = "inherit";
}

codificar.onclick = criptografa;

function descriptografa() {
  let textoDescriptografado = entradaTexto.value;
  let resultadoTexto = textoDescriptografado
    .replace(/ufat/g, "u")
    .replace(/ober/g, "o")
    .replace(/ai/g, "a")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e");
  resultado.value = resultadoTexto;

  document.getElementById("ativo").style.display = "none";
  document.getElementById("texto1").style.display = "none";
  document.getElementById("texto2").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
  document.getElementById("saida").style.display = "show";
  document.getElementById("saida").style.display = "inherit";
}

descodificar.onclick = descriptografa;

function copy() {
  if (resultado.value !== "") {
    resultado.select();
    resultado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(resultado.value);

    alert(resultado.value + " foi copiado!");
  }
}

botaoCopia.onclick = copy;
