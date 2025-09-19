val=document.querySelector("#cart-num");
data=localStorage.getItem("userData");// to get data from local memory named given


val.innerText=data;


total=document.querySelector("#value");
total.innerText=localStorage.getItem("total");

count=Number(data);
for(let i=0;i<=count;i++){
    if(i==0){
        items = document.querySelector(".items");
        items.innerText="";
    }
    else{
    temp=localStorage.getItem(`userorder${i}`);
    div=document.createElement("div");
    div.innerHTML=temp;


    items = document.querySelector(".items");
    items.prepend(div);

    hr=document.createElement("hr");
    hr.style.border="1px solid black";//style is used to style the node
    hr.style.margin="5px 0px 5px 0px";
    div.before(hr);


    div.style.display="flex";
    div.style.justifyContent="space-around";


    img=localStorage.getItem(`img${i}`);


    var1=div.querySelector("div");
    var1.style.height="200px";
    var1.style.width="200px";
    var1.style.backgroundSize="contain";
    var1.style.backgroundRepeat="no-repeat";
    var1.style.backgroundImage=img;
    }
}







