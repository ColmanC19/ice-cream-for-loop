$(document).ready(function(){

  var flavors = ["vanilla", "chocolate", "strawberry", "pistachio"]
  flavors.forEach(function(flavor){
    // var myFlavor = $(flavor).val();
    $("ul").append("<li class='" + flavor + "'>" + flavor + "</li>");
  });
});
