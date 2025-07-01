const buttons = document.querySelectorAll('.Done');
buttons.forEach(button=>

    button.addEventListener('click', event=>{
        if(event.target.textContent==='Mark as Done'){
        event.target.textContent = 'Done';
        }
        else{
            event.target.textContent = "Mark as Done";
        }
    }))
function addTask(){
    const newTask = document.createElement("li");
    const newButton = document.createElement('button');
    newTask.textContent = window.prompt("Enter task: ");
    newButton.textContent="Mark as Done";
    newTask.classList='button';
    const tasklist = document.getElementById("tasklist");
    newTask.classList.add('add')
    tasklist.appendChild(newTask);
    newButton.classList.add('button');
    newButton.classList='button';
    tasklist.appendChild(newButton);


}
function removeTask(){

}






