console.log("connect");


$( document ).ready(function() {
  $('.clickpro').click(function(){
   window.open("project.html", "_blank")
});
  
  $("#imgcompany").click(function(){
  	window.open("./mywork/Company Website/company.html", "_blank")
  })

  $("#imguni").click(function(){
  	window.open("./mywork/University/university.html", "_blank")
  })

//   $('#cvimg').click(function(e) {
//     e.preventDefault();  //stop the browser from following
//     window.open("./mywork/Rana's CV1.pdf");
// });

var imgs = ["./images/programmin.jpg",
            "./images/university.jpg"]
    var cnt = imgs.length;

    setInterval(forwardImage, 4000);


//This function will find the key for the current Image
function currentImageKey() {
    i = jQuery.inArray($('#slideshow').attr('src'), imgs);
    return i;
}


//This function will move the slideshow forward one
function forwardImage() {
    currentImageKey();
    if (i < imgs.length - 1) {
        changeImage(i + 1);
    } else {
        changeImage(0);
    }
}


//This function will change to image to whatever the variable i passes to it
function changeImage(i) {
    $('#slideshow').stop().animate({
        opacity: 0,
    }, 200, function() {
        $('#slideshow').attr('src', images[i]);
        $('#holder img').load(function() {
            $('#slideshow').stop().animate({
                opacity: 1,
            }, 200)
        })
    })
}


});
