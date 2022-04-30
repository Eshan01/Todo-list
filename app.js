const addForm=document.querySelector('.add');
const ul=document.querySelector('.todos');
const search=document.querySelector('.search input');

//event delegation!! Attaching event listener to the <ul> tag to delete Todos 
ul.addEventListener('click',event=>{
    // if(event.target.class==="delete")
    if(event.target.classList.contains('delete'))
        event.target.parentElement.remove();
});


//To genrate HTML template
const liTemplate= newItem=>{
    const html= `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${newItem}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    ul.innerHTML+=html;
};

//submit event(adding todos)
addForm.addEventListener('submit',event=>{
    event.preventDefault();
    const newItem=addForm.add.value.trim();
    if(newItem!=""){
        liTemplate(newItem);
        addForm.reset();
    }
});

const filterOut=input=>{
    Array.from(ul.children)
        .filter(value=> !value.textContent.toLowerCase().includes(input))
        .forEach(value=> value.classList.add('filtered'));
        
    Array.from(ul.children)
    .filter(value=> value.textContent.toLowerCase().includes(input))
    .forEach(value=> value.classList.remove('filtered'));
}


//Attaching keyup event
search.addEventListener('keyup',event=>{
    const inputValue=event.target.value.trim().toLowerCase();
    filterOut(inputValue);
});