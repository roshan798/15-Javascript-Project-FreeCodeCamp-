let type = true;
const body = document.querySelector("body");
const colorType = document.getElementById("color");
// true : #rrggbb false : rgb(rr,gg,bb);
const codes = { 10: 'a', 11: 'b', 12: 'c', 13: 'd', 14: 'e', 15: 'f' };
const getRandom = () => {
    if (type == true) {
        let ran = parseInt(Math.random() * 16);
        if (ran > 9)
            return codes[ran];
        else
            return ran;
    }
    return parseInt(Math.random() * 255);
}
const getRandomColor = () => {
    let color = "";
    if (type) {
        color += "#";
        for (let i = 0; i < 6; i++) {
            color += getRandom();
        }

    }
    else {
        color = `rgb(${getRandom()},${getRandom()},${getRandom()})`;
    }
    console.log(color);
    return color;
}

window.onload = () => {
    const simple = document.querySelectorAll("button");
    simple.forEach((btn) => {
        btn.addEventListener("click", () => {
console.log(btn.id);
            if (btn.id === "simple")
                type = false;
            else if (btn.id === "hex")
                type = true;
            else {
                let color = getRandomColor();
                body.style.backgroundColor = color;
                colorType.innerText = color;
            }
        })
    });

    colorType.addEventListener("click", () =>{
        navigator.clipboard.writeText(colorType.innerHTML);
        alert(`${colorType.innerHTML} copied to clipboard`)
    });
};

