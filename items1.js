but=document.querySelectorAll("button");
value=document.querySelector("#cartNum");
box=document.querySelector(".elements");

let total=0;
let count = 0;
value.innerText=count;
localStorage.setItem("userData",value.innerText);
localStorage.setItem("total",total);
for(let ele of but ){
    ele.addEventListener("click",(e)=>{
        // console.log(value.innerText);
        countCart();
        // val.innerText=count;
        // console.log(e.target.getAttribute("class"));
        let x=e.target.getAttribute("class");//e.terget is specific button clicked
        // console.log(x);
        let temp=document.querySelector(`.${x}`);
        // console.log(temp.innerHTML);
        localStorage.setItem(`userorder${count}`,temp.innerHTML);//this method is used to store data in local memory in varible

        //console.log(temp.querySelector("div"));
        
        
        urlItem=temp.querySelector("div");//node.querySelector is to get html tag given in node
        sty=window.getComputedStyle(urlItem);//window.getComputedStyle to get style of given html tag
        let url=sty.backgroundImage;
        localStorage.setItem(`img${count}`,url);
        console.log(url,urlItem);

        totalAmount(temp);
    })
}
function countCart(){
    count += 1;
    value.innerText=count;
    localStorage.setItem("userData",value.innerText);
}
function totalAmount(temp){
    span=temp.querySelector("#cost");
    total += Number(span.innerText);
    console.log(total);
    localStorage.setItem("total",total);
}