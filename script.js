const titulo = document.querySelector("#titulo");
console.log(titulo);

const ul = document.querySelector("ul");
console.log(ul);

const a = document.querySelector("a");
console.log(a);

const ol = document.querySelector("#lista-ordenada");
console.log(ol);

titulo.innerText = "Título da Página";

a.innerText = "Clik Aqui e acesse o site da Proz Tecnologia.";

ul.innerHTML = `
  <li>Sãp Paulo</li>
  <li>São Vicente</li>
  <li>Praia Grande</li>
`;

ol.innerHTML = `
  <li><a href="https://www.google.com/">Google</a></li>
  <li><a href="https://www.youtube.com/">YouTube</a></li>
  <li><a href="https://www.facebook.com/">Facebook</a></li>
`;


