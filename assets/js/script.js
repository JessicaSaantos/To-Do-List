function drag (event) {
    event.dataTransfer.setData("card" , event.target.id)
}
function drop (event , id) {
    event.preventDefault()
    const target = document.getElementById(id)
    const data = event.dataTransfer.getData("card")

    const card = document.getElementById(data)
    target.appendChild(card)
    event.dataTransfer.clearData()
}
function over (event) {
    event.preventDefault()
}

function addCard (elemento) {
   const ulId = elemento.previousElementSibling.id
   const text = prompt("Qual é a tarefa?") 
   const board = document.getElementById(ulId)
  

   const template = `
        <li id=${new Date().getTime()}
         draggable="true" 
         ondragstart="drag(event)">
            <p>${text}</p>
            <p class="remove" onclick="removeCard(this)">X</p>
        </li>
   `
    if (text.value === false) {
        board.innerHTML = board.innerHTML
    } else {
        board.innerHTML = board.innerHTML + template
    }
   
}

function removeCard (elemento) {
    document.getElementById(elemento.parentElement.id).remove()
}