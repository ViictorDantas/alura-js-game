alert("Bem vindo ao jogo");
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
let chute = 0;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)
    
    if (chute == numeroSecreto) {
        break
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(` O número secreto é maior que ${chute}`);
        }
    }
    tentativas ++
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Parabéns, você acertou o número secreto ${numeroSecreto} e usou ${tentativas} ${palavraTentativa}`);
