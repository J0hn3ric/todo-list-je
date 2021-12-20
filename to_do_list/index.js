const addList=document.querySelector("#todoListInput");
const form=document.querySelector("#aggiungiLista");
const submit=document.querySelector(".addToList");
const msg=document.querySelector(".msg");
const todos=document.querySelector("#todos");
const remove=document.querySelector("#removeAll")
var listItem=0;


let arrayList=JSON.parse(localStorage.getItem('todos'))||[];

remove.addEventListener('click', removeAll);


todos.addEventListener('click', (e) =>{
    if(e.target.classList.contains("btnDelete")){
        let li=e.target.parentElement;
        let index = Array.prototype.indexOf.call(todos.children,li);
        removeLocalStorage(index);
        todos.removeChild(li);
    }
})

function removeLocalStorage(index){
    let storage=JSON.parse(localStorage.getItem('todos'))||[];
    storage.splice(index,1);
    localStorage.setItem('todos',JSON.stringify(storage))
}

function removeAll(e){
    for(let i=0;i<listItem;i++){
        removeLocalStorage(i);
        todos.removeChild(todos.firstChild);
    }
}

form.addEventListener('submit', onSubmit);

function addLi(text){
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(text));
    todos.appendChild(li);
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btnDelete");
    btnDelete.appendChild(document.createTextNode("X"));
    li.appendChild(btnDelete);
    arrayList.push(li.outerHTML);
    localStorage.setItem('todos',JSON.stringify(arrayList));

    addList.value='';
    listItem++;
}

function onSubmit(e){
    e.preventDefault();
    if(addList.value===''){
        msg.classList.add('error');
        msg.innerHTML= 'error, nothing inserted in the bar';
        setTimeout(() => msg.remove(), 3000);
    }else
        addLi(addList.value);
}

/*arrayList.forEach(todo => {
    addLi(todo);
});*/
