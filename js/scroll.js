function scroll_to(){



var s_id=document.getElementById("h-scroll");
var window_height=window.innerHeight;
var window_width=window.innerWidth;


var temp1=window_height;

s_id.addEventListener("mouseover",function(){
 
 
    window.scrollTo({
     top:temp1,
     left:0,
     behavior:'smooth'
 });
 
 
 
 temp1+=window_height;
   
});

}




//scroll_to();


