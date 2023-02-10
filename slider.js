let slidernumber=document.getElementById("slidernumber")
let imags=document.querySelectorAll(".imags img")
let previous=document.getElementById("previous")
let next=document.getElementById("next")
let indicatorul=document.querySelectorAll(".indicatorul li")
// console.log(slidernumber,imags,previous,next,indicatorul)

let arryimags=Array.from(imags)
let arryindica=Array.from(indicatorul)
// console.table(arryimags,arryindica)
let currentindex=0;


slidernumber.textContent="slide " + (currentindex + 1) + " of " +(arryimags.length)

next.onclick=function(){
    if(currentindex ==arryimags.length-1){
        return false

    }else{
        currentindex++
        slidernumber.textContent="slide " + (currentindex + 1) +  " of " +(arryimags.length)
          showimag()
    }
    
  
}
previous.onclick=function(){

    if(currentindex == 0){
      return false
     
    }else{

          currentindex--
          slidernumber.textContent="slide " + (currentindex + 1) + " of " +(arryimags.length)
            showimag()
    }
  
    // console.log(currentindex)
}




function showimag(){
    deleteactive()
arryimags[currentindex].setAttribute("class","active")   
arryindica[currentindex].setAttribute("class","active")   
}


function deleteactive(){
    arryimags.forEach(function(img){
       img.classList.remove("active")
    //    console.log(img)
    })
    arryindica.forEach(function(ele){
       ele.classList.remove("active")
    //    console.log(ele)
    })
}