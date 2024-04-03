window.addEventListener("load" , function() {

   //这是让数字加载的代码
   function ShuZiJiaZai() {
      let Neiron = document.querySelector(".NeiRon");
      let NeiRon2 = document.querySelector(".NeiRon2");
      let shuzi = this.document.querySelector(".shuzi") ;
      let num = 0;

      let time = setInterval(() => {

         num++
         shuzi.innerHTML = num + "%";
         if(num >= 100) {
            
            
               setTimeout(function() {
                  Neiron.style.display = "none";
                  NeiRon2.style.display = "block";
                  tiaozhan();
               } , 1700)
            Neiron.style.animation = "hide_show 2s"
               
               this.clearInterval(time);
         }
          
      }, 100);
   }

   ShuZiJiaZai();
   
   //这是让数字加载的代码

   //一个平平无奇的动画代码
      function animate(obj , target ) {

         clearInterval(obj.time);

         timer = setInterval(function() {

            var step = (target - obj.offsetLeft)/10;
            step = step >= 0 ? Math.ceil(step) : Math.floor(step);

            if(obj.offsetLeft >= target) {
               clearInterval(timer)
            }

            obj.style.left = obj.offsetLeft + step + "px";
         } , 50);

      }
    //一个平平无奇的动画代码


      //内容2js代码--------------------------------------
      function tiaozhan() {
         let tiaozhan = document.querySelector(".tiaozhan");
         setTimeout(function() {
            tiaozhan.style.animation = "text_tiaozhan_rotate 2s linear 2s"
         } , 2000)
         
      }
      // 这是调用挑战文字到位2秒后颤抖
      

      function next_neiron3() {
         let next_btn = this.document.querySelector(".next_btn");
         let Neiron2 = document.querySelector(".NeiRon2");
         let Neiron3 = this.document.querySelector(".NeiRon3");

         next_btn.addEventListener("click" , function() {
            Neiron2.style.animation = "hide_show 2s";
            setTimeout(function() {
               Neiron2.style.display = "none";
               Neiron3.style.display = "block";
            } , 2000);
         })
      }
      
      next_neiron3()

      //内容3js代码--------------------------------------
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
      



      function wenti_click() {

         //获取问题跟里面的做题dom
         let wenti = document.querySelector(".wenti")
         let wenti_zuoti = wenti.querySelectorAll(".text_zuoti");
         let next_neiron = document.querySelector(".next_neiron");
         let notgood = document.querySelector(".notgood");

            // 循环给每个组加上点击事件
            for(let i = 0 ; i <= wenti.children.length - 1 ; i++) {
              
               // 循环给每个组加上点击事件
               wenti_zuoti[i].addEventListener("click" , function() {


                  //如果这个边框没有就加上边框，有边框就执行边框闪烁
                  if(this.style.border != "") {

                        this.style.animation = "border_shansuo 2s linear infinite";

                  }else {
                        //每次一点击就清空所有边框和动画
                        for(let i = 0 ; i <= wenti.children.length - 1 ; i++) {
                           wenti_zuoti[i].style.border = "";
                           wenti_zuoti[i].style.animation = "";
                           wenti_zuoti[i].setAttribute("index" , "")
                        }
                        //让当前选中的组有边框
                        this.style.border = "2px solid black" ;
                        
                        wenti_zuoti[i].setAttribute("index" , "1")
                  }


                  // 这是点击下一个页面事件,这里有个bug
                  next_neiron.addEventListener("click" , function() {
                    
                     if(wenti_zuoti[3].getAttribute("index") == "1") {
                        // 执行关卡2代码
                        location.replace("two.html");
                     }else {
                        notgood.style.display = "block"
                        notgood.style.animation = "error 3s"
                           setTimeout(function() {
                              notgood.style.display = "none"
                              notgood.style.animation = ""
                           } , 3000)
                     }
                           
                  });


               })


               //长按2秒取消边框检测
               wenti_zuoti[i].onmousedown = function() {

                  tim = setTimeout(function() {
                     wenti_zuoti[i].style.border = "";
                     wenti_zuoti[i].style.animation = "";
                     wenti_zuoti[i].setAttribute("index" , "")
                  } , 2000)
                  
                  wenti_zuoti[i].onmouseup = function() {
                     clearTimeout(tim);
                  }

               }//长按2秒取消边框检测

                  
            }

                  
      };

      wenti_click();



   });