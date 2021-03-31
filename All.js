// -----Variebel
let El={
    BtnBig:document.getElementById("BtnRed"),
    btn:document.getElementById("Send"),
    Box:document.getElementById("Cash"),
    Clear:document.getElementById("Clear"),
    btnGray:document.getElementById("gray"),
    btnPink:document.getElementById("pink"),
    btnYellow:document.getElementById("yellow"),
    btnGreen:document.getElementById("green"),
    body:document.querySelector("body"),
    // ClearAll:document.getElementById("Clear")
}
// ---Events
El.BtnBig.addEventListener("click",show)
El.Clear.addEventListener("click",hide)
// El.btn.addEventListener("click",Add);
El.btnGray.addEventListener("click",BuyGray)
El.btnPink.addEventListener("click",BuyPink);
El.btnYellow.addEventListener("click",BuyYellow);
El.btnGreen.addEventListener("click",BuyGreen);
El.Box.addEventListener("click",remove);
// El.Clear.addEventListener("click",ClearBox)
El.body.onload=Refresh;



//-------- function

//----Show-box
function show(){
    El.Clear.style.opacity=1;
    El.Box.style.opacity=1;
}
// ---Hide-box
function hide(){
    El.Box.style.transitionDelay="1s";
    El.Clear.style.transitionDelay="1s";
    El.Box.style.opacity=0;
    El.Clear.style.opacity=0;
    ClearBox();
    // console.log("s")
}
// btn Clear All
function ClearBox(){

    var L=El.Box.children;
    var M=El.Box;
    localStorage.removeItem("shert");
    for(var i=0;i<L.length;++i){
        L[i].remove();
        L[i].removeChild();
        console.log(L[i].re);
    }
    // El.Box.children
}
// btns Green

// -----Gray
function BuyGray(){
var Gray=document.createElement("div");
var SmallImg=document.createElement("img");
var Color=document.createElement("p");
var Delete=document.createElement("div");
Delete.id="Del";
Delete.textContent="X"
Color.id="ColorShirt";
Color.textContent="Gray|200$"
SmallImg.id="SmallImg";
SmallImg.src="img/tshirt_PNG5448.png";
Gray.id="child";
Gray.append(SmallImg);
Gray.append(Color);
Gray.append(Delete);
El.Box.appendChild(Gray);
alert("با موفقیت لباس طوسی  به فاکتور  شما اضافه شد!");
AddLS();
PushLS(Color.textContent);
// console.log(AddLS());

}
function BuyGrayRef(){
    var Gray=document.createElement("div");
    var SmallImg=document.createElement("img");
    var Color=document.createElement("p");
    var Delete=document.createElement("div");
    Delete.id="Del";
    Delete.textContent="X"
    Color.id="ColorShirt";
    Color.textContent="Gray|200$"
    SmallImg.id="SmallImg";
    SmallImg.src="img/tshirt_PNG5448.png";
    Gray.id="child";
    Gray.append(SmallImg);
    Gray.append(Color);
    Gray.append(Delete);
    El.Box.appendChild(Gray);
    alert("با موفقیت لباس طوسی  به فاکتور  شما اضافه شد!");
    // AddLS();
    // PushLS(Color.textContent);
    // console.log(AddLS());
    
    }

//----Pink
function BuyPink(){
    var Pink=document.createElement("div");
    var SmallImg=document.createElement("img");
    var Color=document.createElement("p");
    var Delete=document.createElement("div");
    Delete.id="Del";
    Delete.textContent="X"
    Color.id="ColorShirt";
    Color.textContent="Pink|100$"
    SmallImg.id="SmallImg";
    SmallImg.src="img/unnamed.png";
    Pink.id="child";
    Pink.append(SmallImg);
    Pink.append(Color);
    Pink.append(Delete);
    El.Box.appendChild(Pink);
    alert("با موفقیت لباس صورتی  به فاکتور  شما اضافه شد!");
    AddLS();
PushLS(Color.textContent);
    }
    //----Pink Refresh
function BuyPinkRef(){
    var Pink=document.createElement("div");
    var SmallImg=document.createElement("img");
    var Color=document.createElement("p");
    var Delete=document.createElement("div");
    Delete.id="Del";
    Delete.textContent="X"
    Color.id="ColorShirt";
    Color.textContent="Pink|100$"
    SmallImg.id="SmallImg";
    SmallImg.src="img/unnamed.png";
    Pink.id="child";
    Pink.append(SmallImg);
    Pink.append(Color);
    Pink.append(Delete);
    El.Box.appendChild(Pink);
    alert("با موفقیت لباس صورتی  به فاکتور  شما اضافه شد!");
//     AddLS();
// PushLS(Color.textContent);
    }

//----Yellow
function BuyYellow(){
    var Yellow=document.createElement("div");
    var SmallImg=document.createElement("img");
    var Color=document.createElement("p");
    var Delete=document.createElement("div");
    Delete.id="Del";
    Delete.textContent="X"
    Color.id="ColorShirt";
    Color.textContent="Yellow|300$"
    SmallImg.id="SmallImg";
    SmallImg.src="img/Yellow.png";
    Yellow.id="child";
    Yellow.append(SmallImg);
    Yellow.append(Color);
    Yellow.append(Delete);
    El.Box.appendChild(Yellow);
    alert("با موفقیت لباس زرد  به فاکتور  شما اضافه شد!");
    AddLS();
PushLS(Color.textContent);
    }
    //----Yellow Refresh
function BuyYellowRef(){
    var Yellow=document.createElement("div");
    var SmallImg=document.createElement("img");
    var Color=document.createElement("p");
    var Delete=document.createElement("div");
    Delete.id="Del";
    Delete.textContent="X"
    Color.id="ColorShirt";
    Color.textContent="Yellow|300$"
    SmallImg.id="SmallImg";
    SmallImg.src="img/Yellow.png";
    Yellow.id="child";
    Yellow.append(SmallImg);
    Yellow.append(Color);
    Yellow.append(Delete);
    El.Box.appendChild(Yellow);
    alert("با موفقیت لباس زرد  به فاکتور  شما اضافه شد!");
//     AddLS();
// PushLS(Color.textContent);
    }
//-----Green
function BuyGreen(){
    var Green=document.createElement("div");
    var SmallImg=document.createElement("img");
    var Color=document.createElement("p");
    var Delete=document.createElement("div");
    Delete.id="Del";
    Delete.textContent="X"
    Color.id="ColorShirt";
    Color.textContent="Green|140$"
    SmallImg.id="SmallImg";
    SmallImg.src="img/GREEN.png";
    Green.id="child";
    Green.append(SmallImg);
    Green.append(Color);
    Green.append(Delete);
    El.Box.appendChild(Green);
    alert("با موفقیت لباس سبز  به فاکتور  شما اضافه شد!");
    AddLS();
PushLS(Color.textContent);
    }
    //-----Green Refesh
function BuyGreenRef(){
    var Green=document.createElement("div");
    var SmallImg=document.createElement("img");
    var Color=document.createElement("p");
    var Delete=document.createElement("div");
    Delete.id="Del";
    Delete.textContent="X"
    Color.id="ColorShirt";
    Color.textContent="Green|140$"
    SmallImg.id="SmallImg";
    SmallImg.src="img/GREEN.png";
    Green.id="child";
    Green.append(SmallImg);
    Green.append(Color);
    Green.append(Delete);
    El.Box.appendChild(Green);
    alert("با موفقیت لباس سبز  به فاکتور  شما اضافه شد!");
//     AddLS();
// PushLS(Color.textContent);
    }



// Remove Item in the Box
function remove(e){
if(e.target.id=="Del"){
  var x=e.target.parentElement.children[1].textContent;
    e.target.parentElement.remove();
    removeLS(x);
}
}
// Add Item in LocalStorage
function AddLS(){
    var shert;
    var local=localStorage.getItem("shert");
    if(local==null){
        shert=[];
    }
    else{
        shert=JSON.parse(local);
    }
    return shert;
  
}
// Push Item in Local Storage
function PushLS(nots){
    const LS=AddLS();
    LS.push(nots);
    // console.log(LS);
    // // LS.push("Gray");
    localStorage.setItem("shert",JSON.stringify(LS));
}
// remove Item in LocalStorage
function removeLS(T){
var list=AddLS();
    list.forEach(function (el,index)  {
        if(T==el){
          list.splice(index,1)
          localStorage.setItem("shert",JSON.stringify(list));
        }
    });
  


}
// onload in box
function Refresh(){
    var test=JSON.parse(localStorage.getItem("shert"));
    // console.log(test)
   test.forEach(function (el) {
       if(el=="Gray|200$"){
        return BuyGrayRef();
       }
       else if(el=="Pink|100$"){
        return BuyPinkRef();
       }
       else if(el=="Yellow|300$"){
           return BuyYellowRef();
       }
       else if(el=="Green|140$"){
           return BuyGreenRef()
       }
   });
}
