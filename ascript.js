document.getElementById("zonk").innerHTML = localStorage.getItem("n");
let quotes = [
  '<span id="capital">A</span> woman is like tea bag<br> you never know how strong she <br>is until she gets in<br> hot water. <br><section>Eleanor Roosvelt</section>',
  '<span id="capital">A</span> man does what he can;<br> a woman does what does<br> what a man can not.<br><section>Isabel Allende</section>',
  '<span id="capital">T</span>o tell a woman everything<br>she can not do<br>is to tell her<br> what she can do.<br><section>Spanish proverb</section>',
  '<span id="capital">S</span>he wasn’t looking for a knight,<br>she was looking for a sword.<br><section>Atticus</section>',
  '<span id="capital">W</span>here there is a woman, <br>there is magic.<br><section>Ntozake Shange</section>',
  '<span id="capital">A</span> charming woman<br> doesn’t follow the crowd;<br> she is herself.<br><section>Loretta Young</section>',
  '<span id="capital">W</span>ell-behaved women<br> rarely make history.<br><section>Eleanor Roosevelt</section>',
  '<span id="capital">G</span>irls should<br> never be afraid<br> to be smart.<br><section>Emma Watson</section>',
  '<span id="capital">Y</span>our life<br> isn’t yours if you constantly<br> care what others think.<br><section>Unknown</section>',
  '<span id="capital">I</span>f you obey all the rules,<br> you miss all the fun.<br><section>Katherine Hepburn</section>',
  '<span id="capital">S</span>ome of us<br> are becoming the men<br> we wanted to marry.<br><section>Gloria Steinem</section>',
  '<span id="capital">T</span>he question isn’t<br> who’s going to let me; <br>it’s who’s going to<br> stop me.<br><section>Ayn Rand</section>',
  '<span id="capital">C</span>inderella never asked for a prince.<br> She asked for a <br>night off and a dress.<br><section>Kiera Cass</section>',
  '<span id="capital">S</span>he remembered who she was and<br> the game changed.<br><section>Lalah Deliah</section>',
  '<span id="capital">I</span> do not wish women<br> to have power over men,<br>but over themselves.<br><section>Mary Shelley</section>',
  '<span id="capital">S</span>ome days,<br> she has no idea<br> how she’ll do it.<br> But every single day,<br> it still gets done.<br><section>Unknown</section>',
  '<span id="capital">S</span>he has been through hell,<br> so believe me when I say,<br> fear her when she<br> looks into fire and smiles.<br><section>E. Corona</section>',
  '<span id="capital">Y</span>ou can waste your life drawing lines.<br> Or you can live your life<br> crossing them.<br><section>Shonda Rhimes</section>',
];

function displayQuote() {
  let index = Math.floor(Math.random() * quotes.length);

  let div = document.querySelector("#quote");
  let quote = `<div class = "card">
  <p>${quotes[index]}</p>
  </div>`;
  div.innerHTML = quote;
}

window.addEventListener("load", displayQuote, false);
