$(document).ready(function(){
    $(".section2").ripples({
        resolution: 300, 
        perturbance: 0.004,  // Movimentos suaves
        dropRadius: 20,  // Tamanho maior para gotas mais densas
        interactive: true, // Interação com o mouse
        color: "rgba(255, 255, 255, 0.3)", // Cor da onda mais clara (branca/translúcida)
        ripplesColor: "rgba(255, 204, 102, 0.4)" // Cor mais dourada para as ondulações
    });

    // Configurar o fundo para um tom mais escuro de café
    // $(".section2").css({
    //     "background-color": "#3e2723", // Cor de café mais escuro
    //     "background-image": "url('https://www.toptal.com/designers/subtlepatterns/patterns/dark-wood.png')",  // Adicionando textura
    //     "background-size": "cover",
    //     "background-blend-mode": "multiply"  // Mescla a textura com o fundo para dar um efeito de café mais denso
    // });
});
