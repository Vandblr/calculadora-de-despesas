let despesas = [];
let total = 0;

function adicionarDespesa() {
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if (descricao === '' || isNaN(valor) || valor <= 0) {
        alert('Por favor, insira uma descrição e um valor válido!');
        return;
    }
   
    despesas.push({ descricao, valor });

    total += valor;

    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = '';

    atualizarLista();
    atualizarTotal();
}

function atualizarLista() {
    const listaDespesas = document.getElementById('listaDespesas');
    listaDespesas.innerHTML = '';

    despesas.forEach((despesa, index) => {
        const li = document.createElement('li');
        li.textContent = `${despesa.descricao} - R$ ${despesa.valor.toFixed(2)}`;
        li.appendChild(criarBotaoRemover(index));
        listaDespesas.appendChild(li);
    });
}

function criarBotaoRemover(index) {
    const botao = document.createElement('button');
    botao.textContent = 'Remover';
    botao.style.marginLeft = '10px';
    botao.style.backgroundColor = '#dc3545';
    botao.style.color = 'white';
    botao.style.border = 'none';
    botao.style.borderRadius = '5px';
    botao.style.cursor = 'pointer';

    botao.onclick = function () {
        removerDespesa(index);
    };

    return botao;
}

function removerDespesa(index) {
    total -= despesas[index].valor; 
    despesas.splice(index, 1); 
    atualizarTotal();
}

function atualizarTotal() {
    document.getElementById('total').textContent = total.toFixed(2);
}
