
function Show() {
    var value = parseInt(document.getElementById("mebleg").value);
    var x = value;
    var value = parseInt(document.getElementById("faiz").value);
    var y = value;
    var value = parseInt(document.getElementById("vaxt").value);
    var z = value;
    var count = 0;
    var text = document.getElementById("msg")

   if (y*=x) {
       y/=100
       y+=x
       y/=z


        text.innerHTML = `Aylıq ödəniş : ${Math.floor(y)}AZN `
   }
  
    
}