$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
   
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
});

const move = (e)=>{
    var x = e.clientX;
    var y = e.clientY;
    document.getElementById('todo').style.position  ="absolute";
    document.getElementById('todo').style.left  = x-415+"px";
    document.getElementById('todo').style.top  = y -25 +"px";
}

var clickTodo = 0;
$("#todo").click(function(){
    if(n==1){
        clickTodo = 1;
    }else{
        clickTodo = 0;
    }
    console.log(clickTodo);
    if(clickTodo == 1 && n==1){
    document.addEventListener('mousemove', move);
    }
    if(clickTodo == 0) {
        document.removeEventListener("mousemove", move, false);
    }
});


var n=0;
$(".fa-angle-down").click(function(){
    if(n == 0){
        $("ul").hide();
        n=1;
    }
    else{
        $("ul").show();
            n=0;
        }
});