$(document).ready(function () {
    
    var arr = ['Saradnja sa drugim prodavcima', 'Kampanje, akcije, događaji, vesti', 'Povezivanje sa socijalnim mrežama', 'Bez početnih investicija', 'Jednostavno za korišćenje', 'Brza verifikacija korisnika','Briga o kupcima', 'Statistika i analiza', 'Specijalna promocija - 3 meseca besplatno!'],
    i = 0, // Start Index
    len = arr.length,
    $el = $('#rot-text');
    $temp = $('<span />'); // Helper - Will measure Text width
    $Wel = $('#widthEl');
    
    var arr1 = ['DABOME PLATFORMA', 'NAJSAVREMENIJI PROGRAM LOJALNOSTI', '3 MESECA BESPLATNO']
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