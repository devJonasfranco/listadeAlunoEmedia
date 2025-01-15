
    let menu;
    const ListaAlunos = [
      ]

 while(menu != 3){

    menu = prompt(`
        Menu escola do doida!
        1 - Adicionar Notas
        2 - Ver media dos alunos
        3 - Sair
        
        
        `);




    if(menu == 1){
        const nome = prompt("Digite o nome do aluno");
        const nota1 = Number(prompt("Digite a nota 1"));
        const nota2 = Number(prompt("Digite a nota 2"));
        const nota3 = Number(prompt("Digite a nota 3"));
        const media = (nota1 + nota2 + nota3) / 3;

        ListaAlunos.push({nome:nome, prova1:nota1, prova2:nota2, prova3:nota3, media:media});
        


        continue
    }else if(menu == 2){
        for(let media of ListaAlunos){
            const mediaAluno = media.media.toFixed(2)

            const dadosAlunos = alert(`
                Aluno: ${media.nome}  
                Média: ${mediaAluno}`);
        
        }
        continue
        
    }else if(menu == 3){

        alert("Programa finalizado!");
    }

 }