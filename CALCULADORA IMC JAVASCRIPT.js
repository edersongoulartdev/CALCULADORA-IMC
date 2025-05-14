function calcularIMC()
{
    //entrada de dados
    let peso = parseFloat(document.getElementById("peso").value);
    //.value pega o valor que foi digitado nesse campo (em formato de texto)
    //parseFloat converte os textos digitados em numeros
    //Obtém os valores digitados nos campos HTML com IDs "peso" e "altura"
    let altura = parseFloat(document.getElementById("altura").value);

    //validação
    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) 
    // isNaN(peso) Verifica se o peso não é um número (Not a Number)
    //isNaN(altura)  Verifica se a altura não é um número
    //altura <= 0  Verifica se a altura é zero ou negativo
    //peso <= 0  Verifica se o peso é zero ou negativo

    {
        alert("Por favor, insira valores válidos!");
        return;
    }

    //processamento
    const imc = peso / (altura * altura);
    //Calcula o IMC usando a fórmula: peso dividido por altura ao quadrado
    //Armazena o resultado na constante imc
    

    //saida
    document.getElementById("resultado").textContent = "Seu IMC: " + imc.toFixed(2);
    //document.getElementById("resultado") Procura na página o elemento com ID "resultado" (normalmente uma tag <p> ou <div>
    //textContent Define o texto que vai aparecer dentro desse elemento
    //Seu IMC: " (texto fixo) imc.toFixed(2) - pega o valor do IMC e formata com 2 casas decimais (ex: 24.56)




    //classificação
    let classificacao = "";
    if (imc < 18.5) 
    {
        classificacao = "Abaixo do peso";
    } 
    else if (imc < 24.9) 
    {
        classificacao = "Peso normal";
    } 
    else if (imc < 29.9) 
    {
        classificacao = "Sobrepeso";
    } 
    else if (imc < 34.9) 
    {
        classificacao = "Obesidade Grau I";
    } 
    else if (imc < 39.9) 
    {
        classificacao = "Obesidade Grau II";
    } 
    else
    {
        classificacao = "Obesidade Grau III";
    }
    

    // Exibir classificação
    document.getElementById("classificacao").textContent = `Classificação: ${classificacao}`;
    //document.getElementById("classificacao") - Isso encontra o elemento HTML que tem o ID "classificacao" 
    // (que normalmente seria uma tag <p> ou <div> na página)
    //.textContent - Esta parte acessa o conteúdo de texto desse elemento
    //`Classificação: ${classificacao}` Usando crases (`) que permitem incluir variáveis no texto
    //Escrevendo "Classificação: " (texto fixo)
    //Incluindo o valor da variável classificacao (que foi calculada anteriormente)
    //O ${classificacao} pega automaticamente o valor que está na variável Peso normal) e insere no texto.

    
                    
}
        