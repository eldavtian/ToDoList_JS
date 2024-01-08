let form=document.querySelector("form")
let input = document.querySelector("input");
let box = document.querySelector(".box");
let tasks=[]
let id = 0;
form.addEventListener("submit", function (e) {
    e.preventDefault();
   
    tasks.push(
        {
            id:id++,
            title:input.value,
        }
    )
    localStorage.setItem(`task${id}`,input.value)

    AddToBox()
  input.value = "";

   
  })


function AddToBox(){
    box.innerHTML=``
        for (value of Object.entries(localStorage)) {
           if (value[0].includes("task")){
        box.innerHTML+=`
        <div class='task'>
        <input type="checkbox" class="myCheckbox" onclick="done(this)">
        <p class="paragraph"> ${value[1]}</p>
        <button onclick="remove(this)">Delete</button>
        </div>
        `
    }
}
}
AddToBox()


function done(item){
    let parent=item.parentNode
    parent.classList.toggle(`done`)
    
}

function remove(item){
    let parent=item.parentNode
 let p=parent.children[1]
  
        for (value of Object.entries(localStorage)){
            if(value[1]===p.innerText){
                localStorage.removeItem(`${value[0]}`)
                AddToBox()
                

            }
            
         }
 

}