window.onload = function() {
    const detalhes = document.getElementById('detalhesBrincadeira');
    detalhes.style.display = 'none'; // Garante que a div comece oculta
}

function mostrarBrincadeiraSelecionada() {
    const select = document.getElementById('brincadeiraSelect');
    const brincadeira = select.value; 
    mostrarBrincadeira(brincadeira); 
}

function mostrarBrincadeira(brincadeira) {
    const detalhes = document.getElementById('detalhesBrincadeira');
    const titulo = document.getElementById('tituloBrincadeira');
    const descricao = document.getElementById('descricaoBrincadeira');
    const video = document.getElementById('videoBrincadeira');
    const videoSource = document.getElementById('videoSource');

    if (brincadeira === 'brincadeira1') {
        titulo.innerText = 'Lencinho Branco';
        descricao.innerText = 'Faz uma roda e fica todo mundo sentado e todo mundo fecha o olho e canta a música do lencinho branco: "Lencinho branco caiu no chão, moça bonita do meu coração. Pode olhar? Não. Quem olhar é um bobão, vai levar um beliscão bem na ponta do dedão do seu irmão que se chama João pé de feijão." Enquanto a música é cantada, uma pessoa que foi previamente escolhida circula ao redor da roda com um lencinho nas mãos e o coloca atrás de alguém sem que a pessoa perceba. Quando a música termina, todos devem abrir os olhos e olhar para trás. Quem encontrar o lencinho atrás de si deve correr atrás da pessoa que o colocou. A pessoa que colocou o lencinho precisa correr e se sentar no lugar que sobrou na roda.';
        videoSource.src = 'videos/IMG_2867.MOV'; 
    } else if (brincadeira === 'brincadeira2') {
        titulo.innerText = 'Pararaparati';
        descricao.innerText = 'Uma brincadeira parecido com "soco-soco, bate-bate". Onde terá que ser feito movimentos em sequência enquanto cantar uma música. Assim, aumentando a velocidade dos movimentos.'; 
        videoSource.src = 'videos/IMG_2762.MOV'; 
    } else if (brincadeira === 'brincadeira3') {
        titulo.innerText = 'Passa Anel';
        descricao.innerText = 'Todos os jogadores se sentam em círculo, de preferência no chão ou em cadeiras. Um jogador é escolhido para ser o "passador", e os outros ficam com as mãos unidas em forma de concha, uma sobre a outra, abertas e prontas para receber o anel.';
        videoSource.src = 'videos/IMG_2946.MOV'; 
    } else if (brincadeira === 'brincadeira4') {
        titulo.innerText = 'Pato Pato Ganso';
        descricao.innerText = 'Em uma roda todos ficam sentados e um será o ganso e ficará em pé. Esse que será o ganso passa ao redor da roda tocando a cabeça dos outros participantes chamando-os de “pato” até ele escolher um “ganso”. Esse escolhido para ser ganso deve correr para pegar o outro participante impedindo-o de sentar no seu lugar, caso ele se sente primeiro na roda o outro será o novo “ganso”, se ele for pego, continua outra rodada sendo o ganso da turma.';
        videoSource.src = 'videos/PatoPatoGanso.MOV'; 
    } else if (brincadeira === 'brincadeira5') {
        titulo.innerText = 'Pega Pega Gelo';
        descricao.innerText = 'O pegador corre para pegar o maior número de pessoas e quando ele consegue pegar alguém, essa pessoa deve ficar “congelada”. Caso outra criança que não foi pega queira, ela pode “descongelar” uma outra pessoa que foi pega e ela volta para o jogo. A brincadeira pode ter mais de um pegador.';
        videoSource.src = 'videos/pegapegagelo.MOV'; 
    } else if (brincadeira === 'brincadeira4.5') {
        titulo.innerText = 'Pega Pega Espelho';
        descricao.innerText = 'O pegador corre para pegar maior número de pessoas e quando ele consegue pegar alguém, essa pessoa deve parar fazendo uma pose. Caso outra pessoa que não foi pega queira, ela pode fazer o participante voltar para o jogo fazendo a mesma pose que ele na sua frente e ele volta pro jogo.';
        videoSource.src = 'videos/pegapegaespelho.MOV';
    } else if (brincadeira === 'brincadeira6') {
        titulo.innerText = 'Quem Sou Eu?';
        descricao.innerText = 'Escolha uma categoria para ser adivinhada, por exemplo, “animais”, separe no mínimo 8 pedaços de papel e em cada um escreva o nome de um animal. Escolha um participante para colar o nome desse animal sem que ele veja qual é, somente os outros participantes podem saber o animal escolhido. Durante a brincadeira a pessoa com o papel deve fazer perguntas que só podem ser respondidas com SIM ou NÃO, com o objetivo de descobrir qual é o animal. Quando ela adivinhar, escolhe outra pessoa para brincar no lugar dela.';
        videoSource.src = 'videos/quemsoueu.MOV'; 
    } else if (brincadeira === 'brincadeira7') {
        titulo.innerText = 'Telefone Sem Fio';
        descricao.innerText = 'Alguém é escolhido para dizer uma palavra e cochicha no ouvido de quem está ao seu lado. O próximo passa a mensagem adiante até chegar no último, que fala a palavra em voz alta para ver se está correta.';
        videoSource.src = 'videos/telefonesemfio.MOV'; 
    }

    video.load(); 
    detalhes.style.display = 'block'; // Mostra os detalhes
}

function fecharDetalhes() {
    const detalhes = document.getElementById('detalhesBrincadeira');
    const video = document.getElementById('videoBrincadeira');
    
    // Pausa o vídeo e reseta o tempo
    video.pause();
    video.currentTime = 0;
    
    // Esconde os detalhes
    detalhes.style.display = 'none'; 
}
