function genQr()
{
    var gApi="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var myImg=document.getElementById("img");
    var myText=document.getElementById("qrtext").value;
    var mySize=document.getElementById("size").value;

    if(myText!=="")
    {
        if(mySize=="100")
        {
            myImg.src=gApi+"100x100"+"&chi="+myText
        }
        else if(mySize=="150")
        {
            myImg.src=gApi+"150x150"+"&chi="+myText
        }
        else if(mySize=="200")
        {
            myImg.src=gApi+"200x200"+"&chi="+myText
        }
        else if(mySize=="250")
        {
            myImg.src=gApi+"250x250"+"&chi="+myText
        }
        else if(mySize=="300")
        {
            myImg.src=gApi+"300x300"+"&chi="+myText
        }
    }
    else
    {
        alert("Please Enter Text")
    }
}



