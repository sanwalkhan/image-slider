let thumbnail = document.getElementsByClassName("thumbnail")

let activeimages = document.getElementsByClassName("active")

for (var i=0; i <thumbnail.length; i++){

    thumbnail[i].addEventListener("mouseover" , function(){
        if(activeimages.length > 0){
          activeimages[0].classList.remove("active")
        }
        this.classList.add("active")
        document.getElementById("featured").src = this.src
    })
}



let buttonright = document.getElementById("slideright")
let buttonleft = document.getElementById("slideleft")

buttonleft.addEventListener("click" , function(){
    document.getElementById("slider").scrollLeft -= 180
})

buttonright.addEventListener("click" , function(){
  document.getElementById("slider").scrollLeft += 180
})