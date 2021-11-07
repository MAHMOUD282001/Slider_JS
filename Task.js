

let nextBtn = document.getElementById("next");

let prevBtn = document.getElementById("prev");

let slider = document.querySelectorAll(".slider-container div");

let divLength = slider.length;


var i = 0;


function next(){
        i++;
        
        if(i == divLength){
        
            i = 0;
    }
    
    slider.forEach((el)=>{
        el.classList.remove("active");
    })
    
    slider[i].classList.add("active");
    
}


function previous(){
        
        if(i == 0){
            i = divLength-1;
        }
        else{
            i--;
        }
    
    slider.forEach((el)=>{
        el.classList.remove("active");
    })
    
    slider[i].classList.add("active");
    
}

nextBtn.addEventListener('click',()=>{
    next()
});



prevBtn.addEventListener('click',()=>{
    previous();
})


var Timer = setInterval(()=>{
    // previous();
    // next();
},3000)