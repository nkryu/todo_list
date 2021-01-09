const btn1 = document.getElementById("btn1"); //addBtn
const btn2 = document.getElementById("btn2"); //all reBtn

const input = document.querySelector("input")
const ol = document.querySelector("ol");



//add
let i = 1;
btn1.addEventListener("click",(e)=>{
  e.preventDefault();
  const value = input.value;
  const li = document.createElement("li");
  const r_btn = document.createElement('button');
  const check = document.createElement("input");
  check.setAttribute('type','checkbox');

  if(value.length === 0){
    alert("1文字以上入力してください!!");
  }else{
    li.textContent= `  ${value}`
    r_btn.textContent = "削除"

    li.classList.add('li');
    ol.classList.add('ol');
    r_btn.classList.add('btn');

    ol.appendChild(li);
    li.prepend(check)
    li.appendChild(r_btn);

    input.value="";
    i++;
  }

  //remove
  r_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(confirm("本当に削除しますか??")){
      li.remove();
     
    }
  })
  
  //check aleat
  check.addEventListener('click',(e=>{
    if(check.checked){
      alert("達成!!")
    }
  }))
});

//all remove
btn2.addEventListener('click' , (e)=>{
  e.preventDefault();
  if(prompt("本当に全て削除しますか?? ''yes or no'' ")==="yes"){
    ol.textContent =""
    i=1;
  }
});





