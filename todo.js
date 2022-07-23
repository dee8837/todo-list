const todos = [];


const render = function() {
    const parent_container = document.getElementById('to-dos');
    parent_container.innerHTML = "";

    for(let i = 0; i < todos.length; i +=1){
        const single_todo_item = todos[i];
        const new_li = document.createElement('li');
        new_li.innerText = single_todo_item;
        parent_container.appendChild(new_li);

    }
}

const add_item = function(){
    const ip = document.getElementById('inputField');
    const new_todo = ip.value;
    ip.value="";
    todos.push(new_todo);
    render();
}



const btn = document.getElementById('addToDo');
btn.addEventListener('click', add_item);