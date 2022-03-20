var totlcnt=JSON.parse(localStorage.getItem("totalcount"))
document.getElementById("cartlist").innerText=totlcnt


var cartclick=document.getElementById("cartwraper")
cartclick.addEventListener("click",function(){
  location.assign("file:///C:/Users/PANDI%20VIJI/Documents/htmlfiles/shoplane-project/shoplane-cart.html")
})