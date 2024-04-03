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



    //鲤鱼跳龙门代码
    function fish_jump() {
        // 获取按钮跟鱼
        let next_neiron = document.querySelector(".next_neiron");
        let fish = document.querySelector(".fish");
        // 设置个鱼初始位置值
        let num = 20;
        // 点击次数值让鱼抖动
        let fish_dodon = 0;
        

        next_neiron.addEventListener("click" , function() {
            // 有点击就清除定时器
            clearInterval(fish.timer)

            
            fish_dodon++;
            num++;
            // 让鱼每点击一次就上升一点
            fish.style.bottom = num + "%";

            // 如果点击次数为二就执行动画并让次数为0
            if(fish_dodon == 2) {
                fish.style.animation = "fish_dodong 2s"
                setTimeout(function() {
                    fish_dodon = 0;
                    fish.style.animation = "";
                } , 2000)
            }

            //鱼跃线检测
            if(fish.style.bottom >= 40 + "%") {
                location.replace("four.html")
            }

            // 设置定时器
            fish.timer = setInterval(function() {
                fish.style.bottom = 20 + "%";
                num = 20;
            } , 2000)

        })
        
    }

fish_jump()

});