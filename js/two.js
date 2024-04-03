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


        function wenti2() {
            let wenti = document.querySelector(".wenti");
            let next_neiron = document.querySelector(".next_neiron");

            for(let i = 0 ; i <= wenti.children.length - 1 ; i++ ) {

                wenti.children[i].addEventListener("click" , function() {

                    if(this.style.background != "") {
                        this.style.background = "";
                        wenti.children[i].setAttribute("index" , "")
                    }else{
                        this.style.background = "url(img/Neiron4/yes.png) no-repeat right bottom";
                        wenti.children[i].setAttribute("index" , "1")
                    }

                })

            };


            next_neiron.addEventListener("click" , function() {

                let notgood = document.querySelector(".notgood")

                if(wenti.children[0].getAttribute("index") && wenti.children[2].getAttribute("index") && wenti.children[5].getAttribute("index") == 1) {
                    location.replace("three.html")
                }else{
                        notgood.style.display = "block"
                        notgood.style.animation = "error 3s"
                           setTimeout(function() {
                              notgood.style.display = "none"
                              notgood.style.animation = ""
                           } , 3000)

                           for(let i = 0 ; i <= wenti.children.length - 1 ; i++ ) {
                                wenti.children[i].setAttribute("index" , "")
                                wenti.children[i].style.background = "";
                           }

                }

            });

        }
        wenti2()
})

