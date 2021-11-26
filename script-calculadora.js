/*## Funções aritméticas

Criando uma calculadora
Para este exercício vamos utilizar alguns métodos nativos do
JavaScript:
• Number() – para converter valores em números;
• Prompt() – para registrar entradas de usuário;
• Alert() – para mostrar mensagem ao usuário;
• Template Strings – para usar strings junto com expressões;*/

// ## criando uma calculadora

function calculadora() {
    const operacao = Number(prompt('escolha uma operação: \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));
    //o prompt é o equivalente ao leia no portugol, serve para pegar um dado do usuário
    
    if (!operacao || operacao >= 7) {
        alert('Erro - Operação inválida!')
        calculadora();
    } else {
    
        let valor1 = Number(prompt('Insira o primeiro valor'));
        let valor2 = Number(prompt('Insira o segundo valor'));
        // tem que declar antes que é um número se não ele vai tratar como string e vai juntar os valores 1 e 2 no lugar de somar, ou seja, ficaria 1+1 = 11 e não = 2
        let resultado;
        
        if (!valor1 || !valor2) {
            alert('Erro - Parâmetros inválidos')
            calculadora()
        } else {
            function soma() {
                resultado = valor1 + valor2;
                alert(`${valor1} + ${valor2} = ${resultado}`);
                novaoperacao();
                //o alert também é usado para escrever algo na tela, também é equivalente ao escreva do portugol.
                //Se escrever usando `crase` em vez de 'aspas simples' dá pra concatenar expressãoes e texto ao mesmo tempo
            }
    
            function subtracao() {
                resultado = valor1 - valor2;
                alert(`${valor1} - ${valor2} = ${resultado}`);
                novaoperacao();
            }
    
            function multiplicacao() {
                resultado = valor1 * valor2;
                alert(`${valor1} * ${valor2} = ${resultado}`);
                novaoperacao();
            }
    
            function divisaoReal() {
                resultado = valor1 / valor2;
                alert(`${valor1} / ${valor2} = ${resultado}`);
                novaoperacao();
            }
    
            function divisaoInteira() {
                resultado = valor1 % valor2;
                alert(`O resto da divisão inteira entre ${valor1} e ${valor2} é igual a: ${resultado}`);
                novaoperacao();
            }
    
            function potenciacao() {
                resultado = valor1 ** valor2;
                alert(`${valor1} elevado a ${valor2}ª é igual a: ${resultado}`);
                novaoperacao();
            }
    
            function novaoperacao() {
                let opcao = prompt('Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não');
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!');
                } else {
                    alert('Digite uma opção válida!');
                    novaoperacao();
                }
            
            }
            
            /* 
            function novaoperacao() {
            let opcao = prompt('Deseja fazer uma nova operação?\n 1 - sim\n 2 - Não')
   
           if (opcao == 1) {
               calculadora();
           } else (opcao == 2); {
               alert('Até mais');
           } if (opcao >= 3) {
               alert('digite uma opção válida');
               novaoperacao();
           } else {
               alert('Digite uma opção valida')
               novaoperacao();
           }  
           }*/
        
        
           
        }
    }    
    
     /*
    if (operacao == 1) {
        soma();  //se a operação for igual a 1, vai chamar a função soma
    } else if (operacao == 2) {
        subtracao()
    } else if (operacao == 3) {
        multiplicacao()
    } else if (operacao == 4) {
        divisaoReal()
    } else if (operacao == 5) {
        divisaoInteira()
    } else if (operacao == 6) {
        potenciacao()
    }
    */
    
    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao();
            break;
    }  
}
calculadora();