function calculatePercentage(percentage) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = percentage;

    if (isNaN(num1)) {
        alert('Por favor, insira um número válido.');
        return;
    }

    const result = (num1 * num2) / 100;  // Calcular a porcentagem

    const resultado = document.getElementById('resultado');
    resultado.innerHTML += `<li>${num1} %${num2} = ${result}</li>`;

    // Perguntar se deseja adicionar gorjeta
    const addTip = confirm('Deseja adicionar uma gorjeta ao resultado final?');
    if (addTip) {
        const tip = parseFloat(prompt('Digite o valor da gorjeta:'));
        if (!isNaN(tip)) {
            const totalWithTip = result + tip;
            resultado.innerHTML += `<li>Valor total com gorjeta: ${totalWithTip}</li>`;
        } else {
            alert('Por favor, insira um valor de gorjeta válido.');
        }
    }
}

document.getElementById('calculadora').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os valores dos campos
    const num1 = parseFloat(document.getElementById('num1').value);
    const operator = document.getElementById('operador').value;
    const num2 = parseFloat(document.getElementById('num2').value);

    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, insira números válidos.');
        return;
    }

    // Calcular com base no operador
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Não é possível dividir por zero.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Operador inválido. Use +, -, *, ou /.');
            return;
    }

    // Exibir o resultado na lista
    const resultado = document.getElementById('resultado');
    resultado.innerHTML += `<li>${num1} ${operator} ${num2} = ${result}</li>`;
});