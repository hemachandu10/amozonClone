count=document.querySelector("#cart");
console.log(count);
count.innerText=0;
data=localStorage.getItem("userData");
count.innerText=data;


