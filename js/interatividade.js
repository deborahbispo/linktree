$(function(){

    //ENTRADA
    var botoes = $(".botao");
    var titulo = $("h1");
    var subtitulo = $("#subtitulo");
    var icones = $("svg");
    var fundo = $("body");
    var botao_modoescuro = $("#modoescuro");

    var modoescuro = false
    
    //PROCESSAMENTO

    botao_modoescuro.click(()=>{


        if (modoescuro == false ){

            botoes.css("background-color", "black");
            botoes.css("color", "bisque");

            modoescuro = true;

        }else{

            botoes.css("background-color", "rgb(190, 172, 255");
            botoes.css("color", "blueviolet");

            modoescuro = false;

        }





    })



    //SAIDA



});