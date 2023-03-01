const video = document.getElementById("video");
const btn = document.getElementById("control"); 
btn.addEventListener("click",()=>{
    if(video.paused){
        video.play();
        btn.innerText = "Pause";
    }
    else {
        video.pause();
        btn.innerText = "Play";
    }
})