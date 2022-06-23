let but1 = document.getElementById("but2");
let text = document.getElementById("text");
function pressNo() {
    text.innerText = "Maybe you press yes? :(";
}

but1.onclick = pressNo;
