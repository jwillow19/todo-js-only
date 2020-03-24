const todos = getSavedTODOS()

const filter = {
    searchText:'',
    boxChecked: false
}

renderTODOs(todos, filter)

document.querySelector('#todo-form').addEventListener('submit', function(e){
    e.preventDefault()
    let formValue = e.target.elements.newTODO.value
    todos.push({
        id:uuidv4(),
        text: formValue,
        completed: false
    })
    // Store the pushed item
    saveTODOS(todos)
    renderTODOs(todos, filter)
    e.target.elements.newTODO.value = ''
})

document.querySelector('#hide-complete').addEventListener('change', function(e){
    // if the checkbox is checked: set 
    filter.boxChecked = e.target.checked
    renderTODOs(todos, filter)
})


document.querySelector('#filter-todo').addEventListener('input', function(e){
    filter.searchText = e.target.value
    renderTODOs(todos, filter)
    console.log(e.target.value)
})
