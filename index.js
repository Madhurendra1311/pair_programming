todo=()=> {
    let getInput=document.getElementById('takeInput');

    let division=document.createElement('div');
    let checkBox=document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.addEventListener('change',onchengeElement)
    let labelName=document.createElement('label');
    let editButton=document.createElement('button');
        editButton.textContent="edit"
        editButton.addEventListener('click', editElement)
    let deleteButton=document.createElement('button');
        deleteButton.textContent="delete";
        deleteButton.addEventListener('click', deleteElement)

        labelName.textContent=getInput.value
    division.append(checkBox,labelName,editButton,deleteButton);
    showCompleted(division)
}

onchengeElement=()=>{
    let target=event.target
    let getLabelName=target.nextElementSibling
    target.parentElement.remove()
    let completed=document.getElementById("completedList")
    let division=document.createElement('div');
    let checkBox=document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.addEventListener('change',onchengeElement)
    let labelName=document.createElement('label');
    let editButton=document.createElement('button');
        editButton.textContent="edit"
        editButton.addEventListener('click', editElement)
    let deleteButton=document.createElement('button');
        deleteButton.textContent="delete";
        deleteButton.addEventListener('click', deleteElement)

        labelName.textContent=getLabelName.textContent
    division.append(checkBox,labelName,editButton,deleteButton);
    completed.appendChild(division)

}

editElement=()=>{
    let target=event.target;
    let textLabel=target.previousElementSibling

    let createInput=document.createElement('input')
        createInput.textContent=textLabel.textContent;
        textLabel.remove();

        target.textContent="update";
    target.removeEventListener('click',editElement);
    target.addEventListener('click',updateElement);

    let parent=target.parentElement
    parent.insertBefore(createInput,target);
}

updateElement=()=> {
    let target=event.target;
    let textLabel=target.previousElementSibling

    let createLabel=document.createElement('label')
        createLabel.textContent=textLabel.value;
        textLabel.remove();

        target.textContent="Edit";
    target.removeEventListener('click',updateElement);
    target.addEventListener('click',editElement);

    let parent=target.parentElement
    parent.insertBefore(createLabel,target);
}

deleteElement=()=> {
    let target=event.target
    target.parentElement.remove()
}

showCompleted=(division)=> {
    let completedDiv=document.getElementById('addTodo')
    completedDiv.appendChild(division)
}
let flag=true
toggler=()=>{
    // console.log("hide")
    
    let getCompleted= document.getElementById('completedList')

    if(flag){
        
        getCompleted.style.display="block";
        console.log(getCompleted)
        flag=false;
    }else{
        getCompleted.style.display="none"
        flag=true;
    }
}

window.addEventListener("load", ()=>{
    let addButton=document.getElementById("add")
    addButton.addEventListener('click',todo)
    let getToggle= document.getElementById('toggle')
    getToggle.addEventListener('click',toggler)
})