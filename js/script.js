

if (document.all||document.getElementById){
document.write('<style>.tictac {width:50px;height:50px;}</style>')

}

var p1
var p2
var p3
var p4
var p5
var p6
var p7
var p8
var p9
var p1T = 0
var p2T = 0
var p3T = 0
var p4T = 0
var p5T = 0
var p6T = 0
var p7T = 0
var p8T = 0
var p9T = 0
var moveCount = 0
var turn = 0
var mode = 1

function vari()
{
p1 = document.tic.p1.value
p2 = document.tic.p2.value
p3 = document.tic.p3.value
p4 = document.tic.p4.value
p5 = document.tic.p5.value
p6 = document.tic.p6.value
p7 = document.tic.p7.value
p8 = document.tic.p8.value
p9 = document.tic.p9.value
}
function check()
{
  if(p1 == " X " && p2 == " X " && p3 == " X " ||
     p4 == " X " && p5 == " X " && p6 == " X " ||
     p7 == " X " && p8 == " X " && p9 == " X " ||
     p1 == " X " && p5 == " X " && p9 == " X " ||
     p1 == " X " && p4 == " X " && p7 == " X " ||
     p2 == " X " && p5 == " X " && p8 == " X " ||
     p3 == " X " && p6 == " X " && p9 == " X " ||
     p1 == " X " && p5 == " X " && p9 == " X " ||
     p3 == " X " && p5 == " X " && p7 == " X "
    
    )
  {
    alert("Вы выиграли!")
    reset()
  } 
 

  
  else
  {
    winCheck()
    check2()
    drawCheck()  
  } 
}

function check2()
{
  vari()
  drawCheck()
  if(p1 == " O " && p2 == " O " && p3 == " O " ||
     p4 == " O " && p5 == " O " && p6 == " O " ||
     p7 == " O " && p8 == " O " && p9 == " O " ||
     p1 == " O " && p5 == " O " && p9 == " O " ||
     p1 == " O " && p4 == " O " && p7 == " O " ||
     p2 == " O " && p5 == " O " && p8 == " O " ||
     p3 == " O " && p6 == " O " && p9 == " O " ||
     p1 == " O " && p5 == " O " && p9 == " O " ||
     p3 == " O " && p5 == " O " && p7 == " O "   )
  {
    alert("Компьютер победил!")
    reset()
  } 
  
  
}



function drawCheck()
{
  vari()
  moveCount = p1T + p2T + p3T + p4T + p5T + p6T + p7T + p8T + p9T 
  if(moveCount == 9)
  {
    reset()
    alert("Ничья") 
  }
}

function winCheck()
{
  check2()
  if(p1 == " O " && p2 == " O " && p3T == 0 && turn == 1)
  {
    document.tic.p3.value = " O "
    p3T = 1;
    turn = 0;
  }
  else if(p2 == " O " && p3 == " O " && p1T == 0 && turn == 1)
  {
    document.tic.p1.value = " O "
    p1T = 1;
    turn = 0;
  }
  else if( p4 == " O " &&  p5 == " O " &&  p6T == 0 && turn == 1)
  {
    document.tic. p6.value = " O "
    p6T = 1;
    turn = 0;
  }
  else if( p5 == " O " &&  p6 == " O " && p4T == 0 && turn == 1)
  {
    document.tic. p4.value = " O "
     p4T = 1;
    turn = 0;
  }
  else if( p7 == " O " &&  p8 == " O " &&  p9T == 0 && turn == 1)
  {
    document.tic. p9.value = " O "
     p9T = 1;
    turn = 0;
  }
  else if( p8 == " O " &&  p9 == " O " &&  p7T == 0 && turn == 1)
  {
    document.tic. p7.value = " O "
     p7T = 1;p
    turn = 0;
  }
  else if( p1 == " O " &&  p5 == " O " &&  p9T == 0 && turn == 1)
  {
    document.tic. p9.value = " O "
     p9T = 1;
    turn = 0;
  }
  else if( p5 == " O " &&  p9 == " O " &&  p1T == 0 && turn == 1)
  {
    document.tic. p1.value = " O "
     p1T = 1;
    turn = 0;
  }
  else if( p3 == " O " &&  p5 == " O " &&  p7T == 0 && turn == 1)
  {
    document.tic.p7.value = " O "
    p7T = 1;
    turn = 0;
  }
  else if(p7 == " O " && p5 == " O " && p3T == 0 && turn == 1)
  {
    document.tic.p3.value = " O "
    p3T = 1;
    turn = 0;
  }
  else if(p1 == " O " && p3 == " O " && p2T == 0 && turn == 1)
  {
    document.tic.p2.value = " O "
    p2T = 1;
    turn = 0;
  }
  else if(p4 == " O " && p6 == " O " && p5T == 0 && turn == 1)
  {
    document.tic.p5.value = " O "
    p5T = 1;
    turn = 0;
  }
  else if(p7 == " O " && p9 == " O " && p8T == 0 && turn == 1)
  {
    document.tic.p8.value = " O "
    p8T = 1;
    turn = 0;
  }
  else if(p1 == " O " && p7 == " O " && p4T == 0 && turn == 1)
  {
    document.tic.p4.value = " O "
    p4T = 1;
    turn = 0;
  }
  else if(p2 == " O " && p8 == " O " && p5T == 0 && turn == 1)
  {
    document.tic.p5.value = " O "
    p5T = 1;
    turn = 0;
  }
  else if(p3 == " O " && p9p == " O " && p6T == 0 && turn == 1)
  {
    document.tic.p6.value = " O "
    p6T = 1;
    turn = 0;
  }
  else if(p1 == " O " && p5 == " O " && p9T == 0 && turn == 1)
  {
    document.tic.p9.value = " O "
    p9T = 1;
    turn = 0;
  }
  else if(p4 == " O " && p7 == " O " && p1T == 0 && turn == 1)
  {p
    document.tic.p1.value = " O "
    p1T = 1;
    turn = 0;
  }
  else if(p5 == " O " && p8 == " O " && p2T == 0 && turn == 1)
  {
    document.tic.p2.value = " O "
    pT = 1;
    turn = 0;
  }
  else if(p6 == " O " && p9 == " O " && p3T == 0 && turn == 1)
  {
    document.tic.p3.value = " O "
    p3T = 1;
    turn = 0;
  }
  else if(p1 == " O " && p4 == " O " && p7T == 0 && turn == 1)
  {p
    document.tic.p7.value = " O "
   p7T = 1;
    turn = 0;
  }
  else if(p2 == " O " && p5 == " O " && p8T == 0 && turn == 1)
  {
    document.tic.p8.value = " O "
    p8T = 1;
    turn = 0;
  }
  else if(p3 == " O " && p6 == " O " && p9T == 0 && turn == 1)
  {
    document.tic.p9.value = " O "
    p9T = 1;
    turn = 0;
  }
  else if(p1 == " O " && p9 == " O " && p5T == 0 && turn == 1)
  {
    document.tic.p5.value = " O "
    p5T = 1;
    turn = 0;
  }
  else if(p3 == " O " && p7 == " O " && p5T == 0 && turn == 1)
  {
    document.tic.p5.value = " O "
    p5T = 1;
    turn = 0;
  }
  else
  {
    computer()
  }
  check2()
}
function computer()
{
  check2()
  if(p1 == " X " && p2 == " X " && p3T == 0 && turn == 1)
  {
    document.tic.p3.value = " O "
    p3T = 1;
    turn = 0;
  }
  else if(p2 == " X " && p3 == " X " && p1T == 0 && turn == 1)
  {
    document.tic.p1.value = " O "
    p1T = 1;
    turn = 0;
  }
  else if(p4 == " X " && p5 == " X " && p6T == 0 && turn == 1)
  {
    document.tic.p6.value = " O "
    p6T = 1;
    turn = 0;
  }
  else if(p5 == " X " && p6 == " X " && p4T == 0 && turn == 1)
  {
    document.tic.p4.value = " O "
    p4T = 1;
    turn = 0;
  }
  else if(p7 == " X " && p8 == " X " && p9T == 0 && turn == 1)
  {
    document.tic.p9.value = " O "
    p9T = 1;
    turn = 0;
  }
  else if(p8 == " X " && p9 == " X " && p7T == 0 && turn == 1)
  {
    document.tic.p7.value = " O "
    p7T = 1;
    turn = 0;
  }
  else if(p1 == " X " && p5 == " X " && p9T == 0 && turn == 1)
  {
    document.tic.p9.value = " O "
    p9T = 1;
    turn = 0;
  }
  else if(p5 == " X " && p9 == " X " && p1T == 0 && turn == 1)
  {
    document.tic.p1.value = " O "
    p1T = 1;
    turn = 0;
  }
  else if(p3 == " X " && p5 == " X " && p7T == 0 && turn == 1)
  {
    document.tic.p7.value = " O "
    p7T = 1;
    turn = 0;
  }
  else if(p7 == " X " && p5 == " X " && p3T == 0 && turn == 1)
  {
    document.tic.p3.value = " O "
   p3T = 1;
    turn = 0;
  }
  else if(p1 == " X " && p3 == " X " && p2T == 0 && turn == 1)
  {
    document.tic.p2.value = " O "
    p2T = 1;
    turn = 0;
  }
  else if(p4 == " X " && p6 == " X " && p5T == 0 && turn == 1)
  {
    document.tic.p5.value = " O "
    p5T = 1;
    turn = 0;
  }
  else if(p7 == " X " && p9 == " X " && p8T == 0 && turn == 1)
  {
    document.tic.p8.value = " O "
    p8T = 1;
    turn = 0;
  }
  else if(p1 == " X " && p7 == " X " && p4T == 0 && turn == 1)
  {
    document.tic.p4.value = " O "
    p4T = 1;
    turn = 0;
  }
  else if(p2 == " X " && p8 == " X " && p5T == 0 && turn == 1)
  {
    document.tic.p5.value = " O "
    p5T = 1;
    turn = 0;
  }
  else if(p3 == " X " && p9 == " X " && p6T == 0 && turn == 1)
  {
    document.tic.p6.value = " O "
    p6T = 1;
    turn = 0;
  }
  else if(p1 == " X " && p5 == " X " && p9T == 0 && turn == 1)
  {
    document.tic.p9.value = " O "
   p9T = 1;
    turn = 0;
  }
  else if(p4 == " X " && p7 == " X " && p1T == 0 && turn == 1)
  {
    document.tic.p1.value = " O "
   p1T = 1;
    turn = 0;
  }
  else if(p5 == " X " && p8 == " X " && p2T == 0 && turn == 1)
  {
    document.tic.p2.value = " O "
    p2T = 1;
    turn = 0;
  }
  else if(p6 == " X " && p9 == " X " && p3T == 0 && turn == 1)
  {
    document.tic.p3.value = " O "
    p3T = 1;
    turn = 0;
  }
  else if(p1 == " X " && p4 == " X " && p7T == 0 && turn == 1)
  {
    document.tic.p7.value = " O "
    p7T = 1;
    turn = 0;
  }
  else if(p2 == " X " && p5 == " X " && p8T == 0 && turn == 1)
  {
    document.tic.p8.value = " O "
   p8T = 1;
    turn = 0;
  }
  else if(p3 == " X " && p6 == " X " && p9T == 0 && turn == 1)
  {
    document.tic.p9.value = " O "
  p9T = 1;
    turn = 0;
  }
  else if(p1 == " X " && p9 == " X " && p5T == 0 && turn == 1)
  {
    document.tic.p5.value = " O "
    p5T = 1;
    turn = 0;
  }
  else if(p3 == " X " && p7 == " X " && p5T == 0 && turn == 1)
  {
    document.tic.p5.value = " O "
    p5T = 1;
    turn = 0;
  }
  else
  {
    AI()
  }
  check2()
}

function AI()
{
  vari()
  if(document.tic.p5.value == "     " && turn == 1)
  {
    document.tic.p5.value = " O "
    turn = 0
    p5T = 1
  }
  else if(document.tic.p1.value == "     " && turn == 1)
  {
    document.tic.p1.value = " O "
    turn = 0
    p1T = 1
  }
  else if(document.tic.p9.value == "     " && turn == 1)
  {
    document.tic.p9.value = " O "
    turn = 0
    p9T = 1
  }
  else if(document.tic.p6.value == "     " && turn == 1)
  {
    document.tic.p6.value = " O "
    turn = 0
   p6T = 1
  }
  else if(document.tic.p2.value == "     " && turn == 1)
  {
    document.tic.p2.value = " O "
    turn = 0
    p2T = 1
  }
  else if(document.tic.p8.value == "     " && turn == 1)
  {
    document.tic.p8.value = " O "
    turn = 0
    p8T = 1
  }
  else if(document.tic.p3.value == "     " && turn == 1)
  {
    document.tic.p3.value = " O "
    turn = 0
   p3T = 1
  }
  else if(document.tic.p7.value == "     " && turn == 1)
  {
    document.tic.p7.value = " O "
    turn = 0
    p7T = 1
  }
  else if(document.tic.p4.value == "     " && turn == 1)
  {
    document.tic.p4.value = " O "
    turn = 0
    p4T = 1
  }
  check2()
}

function reset()
{
  document.tic.p1.value = "     "
  document.tic.p2.value = "     "
  document.tic.p3.value = "     "
  document.tic.p4.value = "     "
  document.tic.p5.value = "     "
  document.tic.p6.value = "     "
  document.tic.p7.value = "     "
  document.tic.p8.value = "     "
  document.tic.p9.value = "     "
 p1T = 0
  p2T = 0
 p3T = 0
  p4T = 0
  p5T = 0
  p6T = 0
 p7T = 0
p8T = 0
  p9T = 0
  vari()
  turn = 0
  moveCount = 0
}

