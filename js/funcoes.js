let series = ["greys-anatomy.jpg" , "por-tras-de-seus-olhos.jpg" , "as-telefonistas.jpg" , "bridgerton.jpg" , "you.jpg"];
let nomeSerie = ["Grey's Anatomy" , "Por trás de seus olhos" , "As telefonistas" , "Bridgerton" , "You"];

for(let i = 0; i < series.length; i++){
    document.write("<div class='series'>");
    document.write("<img src='img/" + series[i] + "'><br>" + nomeSerie[i]);
    // document.write(nomeSerie[i]);
    document.write("</div>");
}

document.write("<div class='container'>");
document.write("<h2>Filmes</h2>");
document.write("</div>");

let filmes = ["a-cinco-passos-de-voce.jpg" , "minha-mae-e-uma-peca-3.jpg" , "o-bebe-de-bridget-jones.jpg" , "simplesmente-acontece.jpg" , "zootopia.jpg"];
let nomeFilme = ["A cinco passos de você" , "Minha mãe é uma peça 3" , "O bebê de Bridget Jones" , "Simplesmente acontece" , "Zootopia"];

for(let i = 0; i < filmes.length; i++){
    document.write("<div class='filmes'>");
    document.write("<img src='img/" + filmes[i] + "'><br>" + nomeFilme[i]);
    document.write("</div>");
}