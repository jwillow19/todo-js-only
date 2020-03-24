const getSavedTODOS = function(){
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null){
        return JSON.parse(todosJSON)
    } else{
        return []
    }
}

const saveTODOS = function(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

const removeTODO = function(id){
    const ind = todos.findIndex(function(todo){
        return todo.id === id
    })
    if (ind > -1){
        todos.splice(ind,1)
    }
}

const checkTODO = function(e, id){
    const ind = todos.findIndex(function(todo){
        return todo.id === id
    })
    if (ind > -1){
        todos[ind].completed = e.target.checked
    }
}

const generateTodoDOM = function(todo){
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')
    
    // Setup checkbox attribute
    checkbox.setAttribute('type', 'checkbox')
    // adding functionality of the checkbox - change complete status of todo when checked
    checkbox.addEventListener('change', function(e){
        checkTODO(e, todo.id)
        saveTODOS(todos)
        renderTODOs(todos,filter)
        // filter.boxChecked = e.target.checked
    })
    // set the check mark to be whether todo is completed
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)

    // Setup todo text content
    textEl.textContent = todo.text
    todoEl.appendChild(textEl)

    // Setup remvoe button 
    button.textContent = 'x'
    button.addEventListener('click', function(e){
        removeTODO(todo.id)
        saveTODOS(todos)
        renderTODOs(todos, filter)
    })
    todoEl.appendChild(button)

    return todoEl
}


const getSummaryDOM = function(incompleteTODOS){
    let reminder = document.createElement('h4')
    reminder.textContent = `You have ${incompleteTODOS.length} TODOS left`
    return reminder
}


const renderTODOs = function(todos, filter){
        const filteredList = todos.filter(function(todo){
        const searchtextMatch = todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
        const boxCheckedMatch = !filter.boxChecked || !todo.completed
        return searchtextMatch && boxCheckedMatch
    })

    const incompleteTODOS = filteredList.filter(function(arg){
        return !arg.completed
    })

    document.querySelector('#todos').innerHTML = ''
    
    let reminder = getSummaryDOM(incompleteTODOS)
    document.querySelector('#todos').appendChild(reminder)
    
    filteredList.forEach(function(item){
        let filterEle = generateTodoDOM(item)
        document.querySelector('#todos').appendChild(filterEle)
    })
    
}
