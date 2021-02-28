var window_height=window.innerHeight;
var window_width=window.innerWidth;

function setHeightHeader(){

    var header_id=document.getElementById("header");

        if(header_id!=null){

            header_id.style.height=window_height+"px";
        }
    

}

/**settin height of cars section*/
function setHeightCars(){

    var cars_id=document.getElementById("cars");
    if(cars_id!=null){

        cars_id.style.height=window_height+"px";
    }

}

/**setting footer  section*/
function setHeightSalecar(){

    var footer_id=document.getElementById("salecars");
if(footer_id!=null){
       footer_id.style.height=window_height+"px";
}   

}


/**setting team  section*/
function setHeightTeams(){

    var team_id=document.getElementById("teams");

        if(team_id!=null){
       team_id.style.height=window_height+"px";
        }

}


/**setting team  section*/
function setHeightFooter(){

    var bottom_id=document.getElementById("footer");
   if(bottom_id!=null){

    bottom_id.style.height=window_height+"px";
    }
}


function setHeaderTitle(){
    var header_title=document.getElementById("header-span");
    if(header_title!=null){


    
    header_title.innerHTML="Efficeney"
var words = ["Quality", "Useability", "Security", "Performance","Compatibility"];
var temp=0;    
setInterval(function(){
        

        header_title.innerHTML=words[temp];
       
        if(temp<4){
            temp+=1;
        }else{temp=0;}
    }, 6000);
}


}






function setMarign(){
    //seting margin of contact and phone
    var email_id=document.getElementById("h-address");
    var marint_top=window_height-email_id.offsetTop-100;  
   

    email_id.style.marginTop=marint_top+"px";


    // setting marign for scroll
    
    var scrol_id=document.getElementById("h-scroll");
    
    var marint_top_s=window_height-scrol_id.offsetTop-180;
    var margin_left=window_width/2;
    scrol_id.style.marginTop=marint_top_s+"px";
    scrol_id.style.marginLeft=margin_left+"px";
    
    
    
    // setting marign for scroll-buttton
    var scrol_button_id=document.getElementById("h-scroll-button");
    //var marint_top_b=window_height-scrol_button_id.offsetTop-330;
    console.log("i am runin");
    scrol_button_id.style.marginTop="-150px";
}


function hideScroll(){

    document.addEventListener('scroll',function(e){
    var scrol_id=document.getElementById("scrol-id");
    var footer=document.getElementById("footer");
    
        if(footer!=null){

            var react=footer.getBoundingClientRect();
        }
        
    if(react.top<=5){
           
        scrol_id.style.opacity="0";
       
    }else{
        
        scrol_id.style.opacity="1000";
     }

});


}
    

/*function to extend to border of car card image*/

function extendBorder(obj,widht){
    
    document.getElementById(obj).style.width=widht+"%";
    document.getElementById(obj).style.cursor="pointer";
    
}



function reduceBorder(obj,widht){
    document.getElementById(obj).style.width=widht+"px";
 
}


document.addEventListener("DOMContentLoaded",function() {
    
    
        
        setHeightHeader();
        setHeaderTitle();
        hideScroll();
        
       setHeightCars();
        setHeightSalecar();
        setHeightTeams();
        setHeightFooter();

});    




