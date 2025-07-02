const buttons = document.querySelectorAll('.Done');
const list = document.querySelectorAll('.list')

buttons.forEach(button=>

    button.addEventListener('click', event=>{
        const task = event.target.parentElement;
        if(event.target.textContent==='Mark as Done'){
        event.target.textContent = 'Done'; 
      


        }


        else{
            event.target.textContent = "Mark as Done";
        }
    }))
function addremoveTask(){
    const newTask = document.createElement("li");
    const newButton = document.createElement('button');
    const newremove = document.createElement('button');
    newremove.textContent = "Remove Task";
    newTask.textContent = window.prompt("Enter task: ");
    newButton.textContent="Mark as Done";
    newTask.classList='button';
    const tasklist = document.getElementById("tasklist");
    newTask.classList.add('list')
    tasklist.appendChild(newTask);
    newButton.classList.add('button');
    newremove.classList.add('button');
    tasklist.appendChild(newButton);
    tasklist.appendChild(newremove);
    newButton.addEventListener('click', event=>{
        if(event.target.textContent==='Mark as Done'){
            event.target.textContent ='Undo';
            newTask.append('✔️');
           
        }
        else{
            event.target.textContent = "Mark as Done";
            newTask.removeChild(newTask.lastChild);
          
        }
        
    })
    newremove.addEventListener('click', event=>{
            tasklist.removeChild(newTask);
            tasklist.removeChild(newButton);
            tasklist.removeChild(newremove);
        })
    


}

    