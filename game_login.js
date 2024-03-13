function c(){
player1=document.getElementById("a").value; 
player2=document.getElementById("b").value;
localStorage.setItem("player1",player1); 
localStorage.setItem("player2",player2); 
window.location="game_page.html";
}