function CopyIp() {
    var ipvalue = document.getElementById("iptext");
  
    ipvalue.select();
    ipvalue.setSelectionRange(0, 99999); 
  
    document.execCommand("copy");
  
    var btn = document.getElementById("copyipbtn");
          btn.innerText = "Copied";
}