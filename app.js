const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// add html template with value from form
const generateTemplate = todo => {

    const html = `
    <li class="list-group-item d-flex justify-content-between aligh-items-central">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML += html;
}; 

// add todos - function linked to this one above
addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
    generateTemplate(todo);
    addForm.reset();
    } 
    
});

// delete todos - fired when sb clicked trash icon
list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    };

});

// filtering function of todo list
const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo) => todo.classList.add('filtered'));
    Array.from(list.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};

// keyup event - fired whenever sth is written in search
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
});