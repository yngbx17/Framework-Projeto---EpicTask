function atualizar(){

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [] 

    const totalPendentes = tarefas.filter(t => t.status < 100).length
    document.querySelector("#total-pendentes").innerText = totalPendentes

    const totalConcluidas = tarefas.filter(t => t.status == 100).length
    document.querySelector("#total-concluidas").innerText = totalConcluidas

    const totalPontos = tarefas.filter(t => t.status == 100)
                                        .reduce((total, t) => total += Number(t.pontos), 0)
    document.querySelector("#total-pontos").innerText = totalPontos

}