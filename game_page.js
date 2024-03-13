p1=localStorage.getItem("player1");
p2=localStorage.getItem("player2");
p1score=0;
p2score=0;
document.getElementById("p1").innerHTML=p1+"-";
document.getElementById("p2").innerHTML=p2+"-";
document.getElementById("s1").innerHTML=p1score;
document.getElementById("s2").innerHTML=p2score;
document.getElementById("pq").innerHTML="Qustion turn    --"+p1;
document.getElementById("pa").innerHTML="Answer turn      --"+p2;
function send(){
 n1=document.getElementById("w").value;
 n2=document.getElementById("x").value;
 aa=parseInt(n1)*parseInt(n2);
question="<h4>"+n1 + "X" + n2 + "</h4>";
input = "<br>Answer : <input type='text' id='input_check_box'>";
button= "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
row=question+input+button;
document.getElementById("output").innerHTML=row;
document.getElementById("w").value="";
}
questionturn="p1";
answerturn="p2";
function check(){
var ans=document.getElementById("input_check_box").value;
if (ans == aa){
if (answerturn == "p1"){
p1score=p1score+1;
document.getElementById("s1").innerHTML=p1score;
}
else
{
p2score=p2score+1;
document.getElementById("s2").innerHTML=p2score;    
}
}
if(questionturn == "p1"){
questionturn="p2";
document.getElementById("pq").innerHTML="Question turn     --"+p2;
}
else{
    questionturn="p1";
    document.getElementById("pq").innerHTML="Question turn    --"+p1;    
}

if(answerturn == "p1"){
   answerturn="p2";
    document.getElementById("pa").innerHTML="Answer turn    --"+p2;
    }
    else{
       answerturn="p1";
        document.getElementById("pa").innerHTML="Answer turn   --"+p1;    
    }
    document.getElementById("output").innerHTML="";
}
