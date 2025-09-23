/*let num = [1,2,3,4,5,6];

let myNames = ["Abdulrahman","Nasser","Belal","Ahmad","Ali"];

let names = myNames.filter(function(el){
    return el.startsWith("A");
});
console.log(names); 

let count = num.map(function(ele){
    return  ele + ele;
});
console.log(count);
*/

//لما تمر على الكلمة تظهر القوائم




const allq = document.querySelectorAll("#plus")

allq.forEach(item => {
  item.addEventListener("click", (om) => {



    const content = om.target.parentElement.parentElement.getElementsByClassName("content")[0]
    
    content.classList.toggle("active")
    
  })
  
});

