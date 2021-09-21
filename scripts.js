const createTask = document.querySelector("input");
const buttonTask = document.querySelector("form button");
const addTarefa = document.querySelector("ul");

buttonTask.onclick = envio => {
    envio.preventDefault();
    if (createTask.value !== "") {
        //criando tarefa
        const textElement = document.createElement("span");
        textElement.innerHTML = createTask.value;
        const li = document.createElement("li");
        const buttonRemove = document.createElement("button");
        buttonRemove.innerHTML = 'Remover';
        //colocando tarefa no HTML
        li.appendChild(textElement);
        li.appendChild(buttonRemove);
        addTarefa.appendChild(li);
        //removendo tarefa
        buttonRemove.onclick = () => {
            addTarefa.removeChild(li);
        };
        //Limpa o campo do input, após o envio do mesmo
        createTask.value = "";
    }
}