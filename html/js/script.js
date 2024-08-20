$(function(){
    // 개별메뉴
    $(".mainmenu>li").mouseenter(function(){
        $(this).find(".submenu").stop().slideDown(100);
    });
    $(".mainmenu>li").mouseleave(function(){
        $(this).find(".submenu").stop().slideUp(100);
    });

    // fade in out slide
    var x = 0;
    setInterval(function(){
        var next = ( x + 1 ) % 3;
        $(".slideList").find("div").eq(x).stop().fadeOut();
        $(".slideList").find("div").eq(next).stop().fadeIn();
        x = next;
    },3000);

    // tab
    // 문서 내의 h2에 클릭 이벤트 추가 
    $(document).on("click", "h2", function(){
        // 클릭된 h2에 on클래스 추가
        // 그 형제인 h2 요소들에 on  클래스 제거 
        $(this).addClass("on").siblings("h2").removeClass("on");
    });
    // layer popup
});
