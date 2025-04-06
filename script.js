const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){

    if(inputBox.value===''){
        alert("You must write something!");

    }else {

        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        li.className="before:content-[''] before:absolute before:bg-cover before:bg-center before:cursor-pointer before:h-[28px] before:w-[28px] before:rounded-[50%] before:bg-[url(unchecked.png)] before:bg-center before:top-[12px] before:left-[8px] text-[17px] pt-[12px] pr-[8px] pb-[12px] pl-[50px] select-none cursor-pointer relative";
        listContainer.appendChild(li);
        
        let span=document.createElement("span");
        span.innerHTML="\u00D7";
        span.className="absolute right-0 top-[5px] width-[40px] height-[40px] text-[22px] text-[#555] cursor-pointer align-center line-height-[40px] hover:text-red-500 rounded-[50%]";
        li.appendChild(span);
        
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName==="LI"){
        const checkedClass = "before:content-['']  before:absolute before:bg-cover before:bg-center before:cursor-pointer before:h-[28px] before:w-[28px] before:rounded-[50%] before:bg-[url(checked.png)] before:bg-center before:top-[12px] before:left-[8px] text-[17px] pt-[12px] pr-[8px] pb-[12px] pl-[50px] select-none cursor-pointer relative line-through text-gray-600";
        const uncheckedClass = "before:content-[''] before:absolute before:bg-cover before:bg-center before:cursor-pointer before:h-[28px] before:w-[28px] before:rounded-[50%] before:bg-[url(unchecked.png)] before:bg-center before:top-[12px] before:left-[8px] text-[17px] pt-[12px] pr-[8px] pb-[12px] pl-[50px] select-none cursor-pointer relative";
        
        if (e.target.className === uncheckedClass) {
            e.target.className = checkedClass;
            saveData();
        } else {
            e.target.className = uncheckedClass;
            saveData();
        }
        } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
        }
});

function saveData(){

    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showData();
