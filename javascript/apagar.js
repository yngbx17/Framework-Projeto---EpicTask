function apagar(titulo) {
    // Verifica se o título é uma string não vazia
    if (typeof titulo !== 'string' || titulo.trim() === '') {
        console.error('O título da tarefa não é válido.');
        return; // Encerra a função se o título não for válido
    }

    const card = document.getElementById(titulo);

    if (!card) {
        console.error('Elemento com o ID especificado não encontrado:', titulo);
        return; // Encerra a função se o elemento não for encontrado
    }

    // Adiciona a classe 'apagando' para iniciar a animação de remoção
    card.classList.add("apagando");

    // Remove o elemento após o término da animação
    card.addEventListener("animationend", () => card.remove());

    // Remove a tarefa do localStorage
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    const tarefasFiltradas = tarefas.filter(tarefa => tarefa.titulo !== titulo);
    localStorage.setItem("tarefas", JSON.stringify(tarefasFiltradas));

    // Atualiza a interface
    atualizar();
}
