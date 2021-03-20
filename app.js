const addANewTodo = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search input');

//add todos
const generateTemplate = (newTodo )=>{
    const newTemplate = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${newTodo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    todoList.innerHTML += newTemplate;
};


addANewTodo.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newTodo = addANewTodo.add.value.trim();
    if(newTodo.length>0) generateTemplate(newTodo);
    addANewTodo.reset();
});

//delete todos
todoList.addEventListener('click',e =>{
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//filtering todos

const filterTodos = (term)=>{
    
    //to filer out the unmatched ones
    Array.from(todoList.children)
    .filter((todo)=>{
        return !todo.textContent.toLowerCase().includes(term);
    }).forEach((todo)=>{
        todo.classList.add('filtered');
    });

    //to remove already added todos
    Array.from(todoList.children)
    .filter((todo)=>{
        return todo.textContent.toLowerCase().includes(term);
    }).forEach((todo)=>{
        todo.classList.remove('filtered');
    });
}

//search todos
search.addEventListener('keyup', (e)=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})