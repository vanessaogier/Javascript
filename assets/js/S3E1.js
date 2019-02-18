console.log("hello");
let image = document.getElementById("image1");
console.log(image);
image.addEventListener("mouseover", function() {
  image.setAttribute("src", "image1_2.jpg");
});
