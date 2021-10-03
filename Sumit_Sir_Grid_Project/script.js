
function img1Changer(){
   var change1 = "";
    if (document.getElementById("image-1").style.display == "block") {
        document.getElementById("image-1").style.display = "none";
        document.getElementById("image-2").style.display = "block";
    }
    
  
}
function img1Changer2(){
    
    if (document.getElementById("image-1").style.display == "none" && document.getElementById("image-2").style.display == "block") {
        document.getElementById("image-1").style.display = "block";
        document.getElementById("image-2").style.display = "none";
    }
    
}
function img2Changer1(){
    if (document.getElementById("image-2.1").style.display == "block") {
        document.getElementById("image-2.1").style.display = "none";
        document.getElementById("image-2.2").style.display = "block";
    }
}
function img2Changer2(){
    if (document.getElementById("image-2.1").style.display == "none" && document.getElementById("image-2.2").style.display == "block") {
        document.getElementById("image-2.1").style.display = "block";
        document.getElementById("image-2.2").style.display = "none";
    }
}