// TODO traduzir para o inglês
tela = document.getElementById('conta')
tela.value = ""

function escreveConta(caracter){
    tela.value += caracter
}

function apagaConta(){
    tela.value = ""
}

function conta() {
    try {
        let expressao = tela.value;

        expressao = expressao.replaceAll("X", "*");
        expressao = expressao.replaceAll(",", ".");
        expressao = expressao.replaceAll("%", "/100");

        let resultado = eval(expressao);

        tela.value = resultado;
    }
    catch {
        tela.value = "Erro";
    }
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    conta();
  }
});