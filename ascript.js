document.getElementById("zonk").innerHTML = localStorage.getItem("n");
let quotes = [
   '<span id="capital">A</span> woman is like tea bag<br> you never know how strong she <br>is until she gets in<br> hot water. <br><section>Eleanor Roosvelt</section>',
   '<span id="capital">A</span> man does what he can;<br> a woman does what does<br> what a man can not.<br><section>Isabel Allende</section>',
   '<span id="capital">T</span>o tell a woman<br>everything<br>she can not do<br>is to tell her<br> what she can do.<br><section>Spanish proverb</section>',
   '<span id="capital">S</span>he wasn’t looking for a knight,<br>she was looking for a sword.<br><section>Atticus</section>',
   '<span id="capital">W</span>here there is a woman, <br>there is magic.<br><section>Ntozake Shange</section>',
  ];
  
  function displayQuote(){
  let index = Math.floor(Math.random()*quotes.length);
  
  let div = document.querySelector('#quote');
  let quote = `<div class = "card">
  <p>${quotes[index]}</p>
  </div>`;
  div.innerHTML=quote;
  };
  
  
  window.addEventListener('load',displayQuote,false)