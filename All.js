// -----Variebel
let El={
    BtnBig:document.getElementById("BtnRed"),
    btn:document.getElementById("Send"),
    Box:document.getElementById("Cash"),
    Clear:document.getElementById("Clear"),
    btnGray:document.getElementById("gray")
}
// ---Events
El.BtnBig.addEventListener("click",show)
El.Clear.addEventListener("click",hide)
// El.btn.addEventListener("click",Add);
El.btnGray.addEventListener("click",BuyGray)

//-------- function

//----Show-box
function show(){
    El.Box.style.opacity=1;
}
// ---Hide-box
function hide(){
    El.Box.style.transitionDelay="1s";
    El.Box.style.opacity=0;
}
// btns Green
function BuyGray(){
var Gray=document.createElement("div");
Gray.id="child";
El.Box.appendChild(Gray);
}