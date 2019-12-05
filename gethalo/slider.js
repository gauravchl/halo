$(function() {

  $(".box-outer").delay(3200).animate({ width: "toggle" });

  setTimeout(function() {
    $(".box").animate({ width: "toggle" });
  }, 9200);
  // <-- time in milliseconds
});
