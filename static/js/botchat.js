console.log("to aqui")
var form = document.getElementById('formulario');
var campo = document.getElementById('campo');
if (campo) {

    function adcElemento(pessoa, mensagem) {
        var divNova = document.createElement("div");
        var conteudoNovo = document.createTextNode(`${pessoa}: ${mensagem}`);
        divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

        // adiciona o novo elemento criado e seu conteúdo ao DOM
        var divAtual = document.getElementById("div2");
        document.body.insertBefore(divNova, divAtual);
    }




    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if(campo.value=== "") {
            alert("DIGITE ALGUMA COISA")
            return true
        }

        adcElemento("Usuario", campo.value)

        if (campo.value.toLowerCase() == "oi" || campo.value.toLowerCase() == "ola" || campo.value.toLowerCase() == "olá") {
            adcElemento("Crebson", "Olá, tudo bem?")
        } else if(campo.value.toLowerCase() == "quais as formas de lutar contra a pobreza?"){
            adcElemento("Crebson", "1 Acabar com a fome e a desnutrição")
            adcElemento("Crebson", "2 Cuidados de saúde universais")
            adcElemento("Crebson", "3 Adaptação às alterações climáticas")
            adcElemento("Crebson", "4 Acesso universal a uma educação de qualidade")
            adcElemento("Crebson", "5 Aumentar o investimento no desenvolvimento de regiões e comunidades empobrecidas")
            adcElemento("Crebson", "6 Combater a desigualdade de género")
            adcElemento("Crebson", "Acabar com a pobreza é possível!!!")
        }  else if (campo.value.toLowerCase() === "o que é pobreza?") {
            adcElemento("Crebson", "A pobreza pode ser entendida em vários sentidos, principalmente: Carência real; tipicamente envolvendo as necessidades da vida cotidiana como alimentação, vestuário, alojamento e cuidados de saúde. Pobreza neste sentido pode ser entendida como a carência de bens e serviços essenciais.")
        } else if (campo.value.toLowerCase() === "quais os dados da pobreza no brasil?") {
            adcElemento("Crebson", "De acordo com a FGV Social, quase 28 milhões de pessoas vivem abaixo da linha da pobreza no Brasil. Em 2019, antes da pandemia de Covid-19, eram pouco mais de 23 milhões de indivíduos nesta situação.")
        } else {
            adcElemento("Crebson", "Eu ainda não sei responder isso! :/")
        }
        document.getElementById('campo').value = '';
    });

}