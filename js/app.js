$(document).ready(function(){

    //var header_hight=$(window).height()-$('#nav-bar').height();
    
    //var header=$('#header').css({"width":"100%","height":screen.height});
  //  console.info(header_hight);
    //console.log(screen.height);
    //var cars_height=$('#cars').css({"width":"100%","height":$(window).height()});
    //var contact_height=$('#contact').css({"width":"100%","height":$(window).height()});
    //var team_height=$('#team').css({"width":"100%","height":$(window).height()});



//console.log(header_hight);
// to change the border of register
    var reg_border=$("#reg-border");
    
    $("#reg-header").mouseover(function(){
       
        reg_border.css({"width":"150px"});

    });
   

     $("#reg-header").mouseout(function(){
       
        reg_border.css({"width":"100px"});

    });
   


//console.log(header_hight);
// to change the border of register
    var reg_border=$("#cars-card-bg");
    
    $("#card-cars").mouseover(function(){
        
        reg_border.css({"width":"80%"});

    });
   

     $("#card-cars").mouseout(function(){
       
        reg_border.css({"width":"100px"});

    });
   



});



