
document.querySelector("button").addEventListener("click",calculate);

  function calculate()
  {

    var n1=document.getElementById("name1").value;
    var n2=document.getElementById("name2").value;
    if(n1!='')
    {
      if(n2!='')
      {

        var no=Math.floor(Math.random() * 100) + 20;

        if(no<50){
          no=no+40;

        }
        if(no>100)
        {
          no=no-30;
        }
        var val=no.toString();
        var rs="Your friendship in percentage is"+" "+ val +"%";
        //var element = document.getElementById("val");
        //element.innerText = rs;
        alert(rs);
        //document.getElementById("val").innerText="Your friendship in percentage is"+" "+ val +"%";

      }
    }
  //  var no=Math.floor(Math.random() * 100) + 20;
  //  var val=no.toString();
    //var rs="Your friendship in percentage is"+" "+ val +"%";
    //var element = document.getElementById("val");
    //element.innerHTML = rs;
    //alert(rs);
    //document.getElementById("val").innerText="Your friendship in percentage is"+" "+ val +"%";
    //setTimeOut(wait,3000);
    //alert("Your friendship in percentage is"+" "+val);

}

function wait()
{
  for (var i=0;i<100;i++)
    {

    }
}
