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

            fundo.css("background-image", "url('https://cdn.esahubble.org/archives/images/screen/heic1112d.jpg')");
            titulo.css("color", "bisque");
            subtitulo.css("color", "bisque");

            modoescuro = true;

        }else{

            botoes.css("background-color", "rgb(190, 172, 255");
            botoes.css("color", "blueviolet");

            fundo.css("background-image", "url('../Recursos/img/Fundo.avif')");
            titulo.css("color","rgb(190, 172, 255)");
            subtitulo.css("color", "rgb(190, 172, 255)");
            modoescuro = false;

        }





    })



    //SAIDA



});