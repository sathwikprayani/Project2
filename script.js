
var text = document.getElementById("c1");
var strText = text.textContent;
var splitText = strText.split("");
text.textContent = "";
for(var i=0; i< splitText.length; i++){
  text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

var char = 0;
var timer = setInterval(onTick, 600);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
   }
  }

  function complete(){
    clearTimeout(timer);
    timer = null;
  }
