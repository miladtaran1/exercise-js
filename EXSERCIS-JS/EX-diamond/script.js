function diamond(val){

  doubleit = val*2;
  document.write('<center>');
  document.write('function diamond('+val+')<br>');
  for(i=0; i<doubleit; i++){
      if (i < val){
          for(j=0; j<i; j++){
              document.write('*');
          }
      }
      if (i >= val){
          for(j=doubleit; j>i; j--){
              document.write('*');
          }
      }

      document.write('<br>');
  }

  document.write('</center>');
}


document.getElementById("demo").onclick = function() {diamond(3)};
document.getElementById("demo2").onclick = function() {diamond(4)};
document.getElementById("demo3").onclick = function() {diamond(5)};
document.getElementById("demo4").onclick = function() {diamond(6)};
document.getElementById("demo5").onclick = function() {diamond(7)};