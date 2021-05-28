var images = [
  "image/image1.jpg", "image/image2.jpg","image/image3.jpg"]
var i = 0;

function slides() {
  document.getElementById("slideImage").src = images[i]
  if (i < (images.length - 1))
    i++;
  else
    i = 0;
  
}
function plusSlides(n) {
  console.log(n)
  slides(i += n);
}
setInterval(slides,10000)
