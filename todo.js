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


// function isTouch(){
//     try{
//         document.createEvent("TouchEvent");
//         return True;
//     }catch(e){
//         return False;
//     }
// }
const move = (e)=>{
    // document.addEventListener('click', function(){
    //     clickTodo = !clickTodo;
        

    // });
    var x = e.clientX;
    var y = e.clientY;
    document.getElementById('todo').style.position  ="absolute";
    document.getElementById('todo').style.left  = x-415+"px";
    document.getElementById('todo').style.top  = y -25 +"px";
}

var clickTodo = true;
$("#todo").click(function(){
    // clickTodo = 1;
    clickTodo = !clickTodo;
    if(clickTodo == false && n==1){
    document.addEventListener('mousemove', (e)=>{move(e)});
    }
    if(clickTodo == true) {
        document.removeEventListener("mousemove", (e)=>move(e));
    }
});

// $("#todo").click(function(){
    // document.getElementById("todo").onmousemove = function(e) { 
    //     document.getElementById('todo').style.position  ="absolute";
        
//         document.getElementById('todo').style.left  = x+"px";
//         document.getElementById('todo').style.top  = y +"px";
//         // document.getElementById('todo').style.bottom  = y+100+"px";
//         document.getElementById('todo').style.rigth  = y+450+"px";
    // }
// })

// document.getElementById(".todo-cont").addEventListener('click', function(e){
//     var x = e.clientX;
//     var y = e.clientY;
//     var todo = document.getElementById('todo');
//     todo.style.position = "absolute";
//     todo.style.left = `${x}px`;
//     todo.style.top = `${y}px`;
// })


var n=0;
$(".fa-angle-down").click(function(){
    if(n == 0){
        $("ul").hide();
        document.getElementById('todo').style.position  ="fixed";
        n=1;
    }
    else{
        $("ul").show();
        n=0;
    }
});