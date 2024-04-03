window.addEventListener("load" , function() {
    let chufa = this.document.getElementById("chufa");
    let mudi = this.document.getElementById("mudi");
    let next_btn = this.document.querySelector(".next_btn");

    chufa.addEventListener("focus" , function() {
        if(this.value == "请输入出发地") {
            this.value = ""
        }
        
        this.addEventListener("blur" , function() {
            if(this.value == "") {
                this.value = "请输入出发地"
            }
        })
    })

    mudi.addEventListener("focus" , function() {
        if(this.value == "请输入目的地") {
            this.value = ""
        }
        
        this.addEventListener("blur" , function() {
            if(this.value == "") {
                this.value = "请输入目的地"
            }
        })
    })
    

});