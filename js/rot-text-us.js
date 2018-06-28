$(document).ready(function () {
    
    var arr = ['Cooperation With Other Merchant', 'Customer Targeting', 'Social Networks', 'No Initial Investment', 'Easy To Use', 'Fast User Verification', 'Maximum Safe','Customer Care', 'Statistics And Analasys', 'Hurry up - first 3 months free!'],
    i = 0, // Start Index
    len = arr.length,
    $el = $('#rot-text');
    $temp = $('<span />'); // Helper - Will measure Text width
    $Wel = $('#widthEl');
    
    var arr1 = ['DABOME PLATFORM', 'THE BEST LOYALTY PROGRAM', 'First 3 months free!']
    j=0;
    len1=arr1.length;
    $el1=$('#widthEl');
    
$temp.hide().appendTo( $el.parent() ); // Setup Helper

(function loop() {
  var w =  $Wel.width(); // set text + get width
  $el.fadeOut(700, function(){
    $(this).text( arr[i++] ).fadeIn(700, "linear");
      if (i==arr.length)i=0;
  });
  setTimeout(loop, 4000);
}());
    
    

    (function loop() {
  var w =  $Wel.width(); // set text + get width
  $el1.fadeOut(700, function(){
    $(this).text( arr1[j++] ).fadeIn(700, "linear");
      if (j==arr1.length)j=0;
  });
  setTimeout(loop, 8000);
}());
    
});