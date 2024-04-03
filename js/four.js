window.addEventListener("load" , function() {
    function dl_change() {
    let dl_change = document.querySelector(".dlchange");
    // 每个灯笼循环顺序亮灯
    for(let i = 0 ; i <= dl_change.children.length - 1; i++) {
    dl_change.children[i].style.animation = "dl_opacity 2s linear infinite "+ i +"s alternate";
    }

    // 最后都一块亮灯
    setTimeout(function() {

    for(let i = 0 ; i <= dl_change.children.length - 1; i++) {
        dl_change.children[i].style.animation = "dl_allopacity 1s linear 0s 4  alternate";
    }
    
    } , 5000)
}

// 这是灯笼代码
dl_change()
this.setInterval(function() {
    dl_change()
} , 10000)




function btn_jingbi() {
    let alljingbi = document.querySelector(".alljingbi");
    let shoji_jingbi = document.querySelector(".shoji_jingbi");
    let allreturn = document.querySelector(".return");
    let win = document.querySelector(".win");

    let j = 4;
    let num = 0;

    for(let i = 0 ; i <= alljingbi.children.length - 1 ; i++) {
        alljingbi.children[i].addEventListener("click" , function(e) {
            e.target.style.display = "none";

            shoji_jingbi.children[j].style.background = "url(img/Neiron6/已收集金币.png) 100%/100%";
            j--;
            num++;

            if(num == 5) {
                win.style.display = "block";
                win.style.animation = "show 3s";
                clearTimeout(timer)
                setTimeout(function() {
                    location.replace("five.html")
                } , 3000)
            }

                
        })

    }

    let timer = setTimeout(function() {
        allreturn.style.display = "block";
        allreturn.style.animation = "show 3s";
        setTimeout(function() {
            location.reload("four.html");
        } , 3000)
    } , 13000)

    
}

btn_jingbi()


});