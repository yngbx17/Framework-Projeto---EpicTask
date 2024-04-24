function inc(titulo){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [] 
    const tarefa = tarefas.find(t => t.titulo == titulo)
    tarefa.status += 10
    if(tarefa.status > 100) tarefa.status = 100
    

    localStorage.setItem("tarefas", JSON.stringify(tarefas))


    const card = document.querySelector(`#${titulo}`)
    const status = 10
    card.querySelector("progress").value = tarefa.status

}

function dec(titulo){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [] 
    const tarefa = tarefas.find(t => t.titulo == titulo)
    tarefa.status = 10
    if(tarefa.status < 0) tarefa.status = 0
    
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    const card = document.querySelector(`#${titulo}`)
    const status = 10
    card.querySelector("progress").value = tarefa.status

    atualizar()

}