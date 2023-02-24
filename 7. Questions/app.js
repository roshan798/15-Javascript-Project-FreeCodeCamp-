const questions  = document.querySelectorAll(".question-wrapper");
let pre = undefined;
questions.forEach(q =>{
    q.addEventListener("click",() =>{
        q.classList.toggle("open");
        if(pre == q)
            pre = undefined;
        if(pre!=undefined) {
            pre.classList.remove("open");
        }
        pre = q;
    });
});