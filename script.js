function throw_dice() {
    var pl1=document.getElementById("p1").value;
    var pl2=document.getElementById("p2").value;
    var x=throw_dice_p1();
    var y=throw_dice_p2();
    if (x>y)
    {
        if(pl1=="")
        {
            document.getElementsByClassName("outpu")[0].innerHTML="Player 1 won";
        }
        else 
        {
            document.getElementsByClassName("outpu")[0].innerHTML=pl1+" won";
        }

    }
    else if(y>x) {
        if(pl1=="")
        {
            document.getElementsByClassName("outpu")[0].innerHTML="Player 2 won";
        }
        else 
        {
            document.getElementsByClassName("outpu")[0].innerHTML=pl2+" won";
        }
    }
    else {
       document.getElementsByClassName("outpu")[0].innerHTML="its a draw"; 
    }
    
}
function throw_dice_p1() {
    var b=Math.floor(Math.random() * 6)+1;
    if(b==1)
    {
        document.getElementsByClassName("img1")[0].src="images/dice1.png";
    }
    else if(b==2) 
    {
        document.getElementsByClassName("img1")[0].src="images/dice2.png";
    }
    else if(b==3) 
    {
        document.getElementsByClassName("img1")[0].src="images/dice3.png";
    }
    else if(b==4) 
    {
        document.getElementsByClassName("img1")[0].src="images/dice4.png";
    }
    else if(b==5) 
    {
        document.getElementsByClassName("img1")[0].src="images/dice5.png";
    }
    else 
    {
        document.getElementsByClassName("img1")[0].src="images/dice6.png";
    }
    return b;
}
function throw_dice_p2() {
    var a=Math.floor(Math.random() * 6)+1;
    if(a==1)
    {
        document.getElementsByClassName("img2")[0].src="images/dice1.png";
    }
    else if(a==2) 
    {
        document.getElementsByClassName("img2")[0].src="images/dice2.png";
    }
    else if(a==3) 
    {
        document.getElementsByClassName("img2")[0].src="images/dice3.png";
    }
    else if(a==4) 
    {
        document.getElementsByClassName("img2")[0].src="images/dice4.png";
    }
    else if(a==5) 
    {
        document.getElementsByClassName("img2")[0].src="images/dice5.png";
    }
    else 
    {
        document.getElementsByClassName("img2")[0].src="images/dice6.png";
    }
    return a;
}