
window.onload = () =>{
    const counter = document.getElementById("counter");
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) =>{
        button.addEventListener("click",()=>{
            switch(button.id){
                case 'decrease':
                    counter.innerText =parseInt(counter.innerText)-1;
                    break; 
                case 'increase':
                    counter.innerText =parseInt(counter.innerText)+1;
                    break;
                default : 
                    counter.innerText = 0;
            }
            if(counter.innerText>0) 
                counter.style.color = '#13cd13';
            else if(counter.innerText<0)
                counter.style.color = 'red';
            else 
                counter.style.color = 'beige';
        });
    });

};
