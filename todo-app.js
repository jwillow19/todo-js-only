const todos = getSavedTODOS()

// *****************************************************
// [*] Input Filter Search challenge 
    // 1. add <div> container for todos
    // 2. Setup filter[searchText] and wire up a new filter input to change it
    // 3. Create a renderTODOs function to render and rerender the latest filtered data
// *****************************************************
const filter = {
    searchText:'',
    boxChecked: false
}

renderTODOs(todos, filter)

// *****************************************************
// [*] Remove challenge - remove words with 'the'
    // const thes = document.querySelectorAll('p')
    // console.log(thes)

    // thes.forEach(function(arg){
    //     if (arg.textContent.toLowerCase().includes('the')){
    //         arg.remove()
    //     }
    // })


// **********************************************************
// [*] Form Challenge - Add new TODO
//  1. create form with single input for todo list
//  2. setup submit handler, prevent default action, clear input value
//  3. add new item to todos array with submitted text data (completed = false)
//  4. rerender application 
// **********************************************************
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
// **********************************************************
// [*] Checkbox challenge - Hide Complete
//  1. Create a checkbox and setup event listener -> 'Hide Completed'
//  2. Create new hideCompleted filter (default false)
//  3. Update hideCompleted and rerender list on checkbox change
//  4. Setup renderToDos to remove completed items
// **********************************************************
document.querySelector('#hide-complete').addEventListener('change', function(e){
    // if the checkbox is checked: set 
    filter.boxChecked = e.target.checked
    renderTODOs(todos, filter)
})

// **********************************************************
// [*] Input Filter Search challenge - Filter by Search Text
// 1. add <div> container for todos
// 2. Setup filter[searchText] and wire up a new filter input to change it
// 3. Create a renderTODOs function to render and rerender the latest filtered data
// **********************************************************
document.querySelector('#filter-todo').addEventListener('input', function(e){
    filter.searchText = e.target.value
    renderTODOs(todos, filter)
    console.log(e.target.value)
})