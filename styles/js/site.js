$(document).ready(function(){
  $(".details .product-description").hide();
  $(".img-toggle").click(function(){
    $(this).next(".details").find(".product-description").slideToggle();
  });
  $(".product-title").click(function(){
    $(this).parent().find(".product-description").slideToggle();
  });
});