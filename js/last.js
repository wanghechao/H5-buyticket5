window.addEventListener("load" , function() {
    let url = decodeURIComponent(this.window.location.href)
    let spot = this.document.querySelector(".spot");
    let next_btn = this.document.querySelector(".next_btn");
    let chufa = url.split("=")[1].slice( 0 ,2)
    let mudi = url.split("=")[2]

    this.setTimeout(function() {
        spot.children[0].innerHTML = chufa;
        spot.children[1].innerHTML = mudi;
    } , 2000)
    
    next_btn.addEventListener("click" , function() {
        location.replace("index.html")
    })
    
});
