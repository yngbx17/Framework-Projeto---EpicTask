console.log("Carregar dados")

const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [] 

console.log(tarefas)

tarefas.forEach((tarefa) => {

    const card = document.createElement("div")
    card.id = tarefa.titulo
    card.classList.add("nes-container", "with-title", "is-centered")
    card.innerHTML = ` 
    <p class="title">${tarefa.titulo}</p>
    <p>${tarefa.descricao}</p>

    <a href="#" class="nes-badge is-icon">
        <span class="is-warning"><i class="nes-icon coin is-small"></i></span>
        <span class="is-warning">${tarefa.pontos}</span>
      </a>
      <progress class="nes-progress" value="${tarefa.status}" max="100"></progress>
      <details>

        <summary>Ações</summary>
        <button onClick="apagar('${tarefa.titulo}')" type="button" class="nes-btn is-warning">apagar</button>
    </details>
      <button onClick="dec('${tarefa.titulo}')"  type="button" class="nes-btn is-warning">-</button>
      <button onClick="inc('${tarefa.titulo}')"  type="button" class="nes-btn is-warning">+</button>`

    document.querySelector("#lista-de-tarefas").appendChild(card)
    
})

atualizar()