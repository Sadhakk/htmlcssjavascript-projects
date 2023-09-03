let input = document.querySelector("input");
let btn = document.querySelector(".addtask button");
btn.addEventListener("click", addList);

function addList() {
    const notcompleted = document.querySelector(".notcompled"); // Fix the typo here (should be notcompleted)
    const completed = document.querySelector(".completed");

    const newLi = document.createElement("li");
    const checkBtn = document.createElement("button");
    const checkTrash = document.createElement("button"); // Fix the typo here (should be checkTrash)

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    checkTrash.innerHTML = '<i class="fa fa-trash"></i>';

    if (input.value !== '') {
        newLi.textContent = input.value;
        input.value = '';
        notcompleted.querySelector("ol").appendChild(newLi); // Append to the <ol> element inside notcompleted
        newLi.appendChild(checkBtn);
        newLi.appendChild(checkTrash);
    }
    checkBtn.addEventListener("click",function(){
                const parent=this.parentNode;
                parent.remove();
                completed.querySelector("ol").appendChild(parent);
                checkBtn.style.display="none";
    });
    checkTrash.addEventListener("click",function(){
        const parent=this.parentNode;
        parent.remove();
        
});
}
