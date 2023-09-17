myEvent = new Date(2023, 11, 27); 
let barWidth= $(".bar").outerWidth(true);
$(".bar").css("left",`-${barWidth}px`);

$(window).resize(function(){
    barWidth= $(".bar").outerWidth(true);
    if($(".open").css("left") != "0px" || $(".open").css("left") !=`${barWidth}px`){
        if($(".bar").css("left") != "0px"){
            $(".bar").css({"left":`-${barWidth}px`});
            $(".open").css({left:`0px`});
        }
        else{
            $(".bar").css({"left":`${0}px`});
            $(".open").css({left:`${barWidth}px`});
        }}
});

$(".open").click(function(){
    barWidth= $(".bar").outerWidth(true);
    if($(".bar").css("left") == "0px"){
        $(".bar").animate({"left":`-${barWidth}px`});
        $(this).animate({left:`0px`});
    }
    else{
        $(".bar").animate({"left":`${0}px`});
        $(this).animate({left:`${barWidth}px`});
    }
});
$(".close").click(function(){
    barWidth= $(".bar").outerWidth(true);
    $(".bar").animate({"left":`-${barWidth}px`});
    $(".open").animate({left:`0px`});

});
$(".itemHead").click(function(){
    $(this).next().slideToggle();
    $(".itemBody").not($(this).next()).slideUp();
});

updateTime();
setInterval(updateTime,1000);

function updateTime(){
    myCurrent= new Date();
    let diffTime=myEvent.getTime()-myCurrent.getTime();
    let sec = Math.floor(diffTime/1000); 
    let min = Math.floor(sec/60); 
    let hours = Math.floor(min/60); 
    let days = Math.floor(hours/24) - 30 ; 
    hours %= 24;
    min %= 60;
    sec %= 60;

    if(days<10){
        days=`0${days}`;
    }
    else{
        days=`${days}`;
    }
    if(hours<10){
        hours=`0${hours}`;
    }
    else{
        hours=`${hours}`;
    }
    if(min<10){
        min=`0${min}`;
    }
    else{
        min=`${min}`;
    }
    if(sec<10){
        sec=`0${sec}`;
    }
    else{
        sec=`${sec}`;
    }
    $("#days").html(`${days}`);
    $("#hours").html(`${hours}`);
    $("#min").html(`${min}`);
    $("#sec").html(`${sec}`);
}
$("textarea").keyup(function(){
    let len= $(this).val().length;
    if(100-len>0){
        $("#counter").html(`${100-len}`);
    }
    else{
        $("#counter").html(`your available character finished`);
    }
});