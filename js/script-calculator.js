let para = document.querySelector(".para-js");

para.innerText = '0';
function clickfun(event) {
  console.log(event.target.innerText);

  if (para.innerText === "0") {
    para.innerText = "";
  }

  if (event.target.innerText === "1") {
    para.innerText += event.target.innerText;
  } else if (event.target.innerText === "2") {
    para.innerText += event.target.innerText;
  } else if (event.target.innerText === "3") {
    para.innerText += event.target.innerText;
  } else if (event.target.innerText === "4") {
    para.innerText += event.target.innerText;
  } else if (event.target.innerText === "5") {
    para.innerText += event.target.innerText;
  } else if (event.target.innerText === "6") {
    para.innerText += event.target.innerText;
  } else if (event.target.innerText === "7") {
    para.innerText += event.target.innerText;
  } else if (event.target.innerText === "8") {
    para.innerText += event.target.innerText;
  } else if (event.target.innerText === "9") {
    para.innerText += event.target.innerText;
  } else if (event.target.innerText === "0") {
    para.innerText += event.target.innerText;
  } else if (event.target.innerText === "+") {
    para.innerText += event.target.innerText;
  } else if (event.target.innerText === "%") {
    para.innerText += event.target.innerText;
  } else if (event.target.innerText === "/") {
    para.innerText += event.target.innerText;
  } else if (event.target.innerText === "-") {
    para.innerText += event.target.innerText;
  } else if (event.target.innerText === "*") {
    para.innerText += event.target.innerText;
  } else if (event.target.innerText === ".") {
    para.innerText += event.target.innerText;
  } else if (event.target.innerText === "^") {
    para.innerText += event.target.innerText;
  }

  arr.push( Array(event.target.innerText));
  
   if(event.target.innerText === "AC"){
    para.innerText = "0";
    arr=[];
  }

  console.log(arr);

}
let arr = [];

function calfun(event) {
  const value = para.innerText;
  let result = eval(value);
  para.innerText = result;
  arr=[];
  arr.push(result);
}

function deletefun(){
 
  if(arr.length===1){
    para.innerText="0";
    arr=[];
  }else{
  arr.pop();
  
  let out=String(arr.join(''));
  console.log(out);
  para.innerText=out;
  }
  
}
