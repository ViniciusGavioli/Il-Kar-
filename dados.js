// Conteúdo das cantigas — Ilê Asé Karè Oju Igbi
//
// Este arquivo guarda SÓ o conteúdo. A página (index.html) se monta a partir daqui,
// então para incluir uma cantiga nova você não precisa mexer em HTML.
//
// Uma linha (linha de culto) tem:
//   id         identificador curto, sem acento  — usado na URL (#caboclo)
//   rotulo     nome que aparece no seletor lá em cima
//   titulo     título grande do topo (aceita <br> para quebrar linha)
//   subtitulo  frase de apoio abaixo do título
//   nota       o quadro de aviso antes das cantigas (aceita <strong>)
//   entidades  a lista de orixás / caboclos dessa linha, na ordem de cantar
//
// Uma entidade tem:
//   id         identificador curto, sem acento — vira link direto (#ogum)
//   nome       como aparece no título do bloco
//   subtitulo  linha pequena embaixo do nome (em ioruba, ou a linha do caboclo)
//   cor        cor do orixá / da entidade (hex). É a única cor que você informa:
//              a página deriva sozinha a cor do número e a versão clara usada
//              nos rótulos, sempre com contraste suficiente sobre o fundo escuro.
//   video      ID do vídeo no YouTube (só o ID, não a URL inteira)
//   youtube    link completo, para o botão "Abrir no YouTube"
//   fonte      link de onde veio a letra (deixe "" se não houver)
//   cantigas   lista de trechos
//
// Um trecho tem:
//   rotulo     "Trecho 1", "Ponto 3 · Nome do ponto", o que fizer sentido
//   letra      lista de versos — CADA VERSO É UM ITEM da lista.
//              Um item vazio ("") vira uma linha em branco entre estrofes.
//   traducao   tradução ou comentário. Deixe "" quando não houver — nos pontos
//              de caboclo, que já são em português, não há o que traduzir.
//   inicio     OPCIONAL: segundo em que esse trecho começa dentro do vídeo da
//              entidade. Tendo esse campo, aparece um botão com o horário ao
//              lado do rótulo, que toca o vídeo já a partir dali.
//              1:14 = 74. 2:30 = 150. (minutos x 60 + segundos)
//
// A numeração (01, 02, 03...) é automática, pela ordem da lista.
// Para inserir uma entidade no meio, basta colocá-la na posição certa.

window.CANTIGAS = [
  {
    "id": "caboclo",
    "rotulo": "Caboclo & Boiadeiro",
    "titulo": "Cantigas<br>de Caboclo",
    "subtitulo": "Pontos cantados de caboclo e boiadeiro, com letra e áudio de referência.",
    "nota": "A referência principal é sempre a forma cantada na casa. A gravação é um vídeo só: o botão com o horário ao lado do ponto pula direto para o momento dele. Os pontos ainda <strong>sem horário</strong> aparecem sem botão, e ganham o seu assim que o tempo for conferido na gravação.",
    "entidades": [
      {
        "id": "caboclo",
        "nome": "Caboclo e Boiadeiro",
        "subtitulo": "GIRA DE CABOCLO",
        "cor": "#4E9E5F",
        "video": "Tb22AQiI5cc",
        "youtube": "https://youtu.be/Tb22AQiI5cc",
        "fonte": "",
        "cantigas": [
          {
            "rotulo": "Ponto 1 · Saudação — Abre a sala do angolê",
            "letra": [
              "Abre a sala do angole",
              "E buki buke lele",
              "Abre a sala do angole",
              "E buki buke Lala",
              "2x"
            ],
            "traducao": "",
            "inicio": 74
          },
          {
            "rotulo": "Ponto 2 · Eu aprendi campestre verde",
            "letra": [
              "Eu aprendi campestre verde 2x",
              "Cheio de tanta alegria 2x"
            ],
            "traducao": "",
            "inicio": 128
          },
          {
            "rotulo": "Ponto 3 · Abre esse campestre",
            "letra": [
              "Abre esse campestre que eu quero passar 2x",
              "Quero ver meu povo do lado de lá",
              "",
              "Abre esse campestre que eu quero passar 2x",
              "Quero ver meu povo do lado de lá",
              "",
              "Tava lhe chamando lhe chamando eeee 2x",
              "Tava lhe chamando lhe chamando eeuaa 2x",
              "",
              "Tava lhe chamando lhe chamando eeee 2x",
              "Tava lhe chamando lhe chamando eeuaa 2x",
              "",
              "Maranhado em mata ardente, fui a procura de quem lhe chamou",
              "",
              "Ô boa noite meus senhores esses caboclo por aqui chegou",
              "",
              "Tava lhe chamando lhe chamando eee",
              "Tava lhe chamando lhe chamando eeuaa 4x"
            ],
            "traducao": "",
            "inicio": 192
          },
          {
            "rotulo": "Ponto 4 · Ira ra mi na kue — Pisa na trilha",
            "letra": [
              "Ira ra mi na kue",
              "Ira ra mi na kue 2x.",
              "",
              "Piza na trilha, vem ver",
              "Vem ver caboclo a sua aldeia 2x",
              "",
              "Ô piza na trilha camarada venha ver venha ver caboclo a sua aldeia",
              "",
              "Piza na trilha, vem ver",
              "Vem ver caboclo a sua aldeia 2x"
            ],
            "traducao": "",
            "inicio": 402
          },
          {
            "rotulo": "Ponto 5 · Eu dei um tiro na sapucaia",
            "letra": [
              "Eu dei um tiro na sapucaia não há caboclo que não ouça e que não saia 2x",
              "",
              "Eu dei um tiro na sapucaia não há caboclo que não ouça e que não saia 2x",
              "",
              "Eu dei um tiro ouvi gemido ainda tem caboclo escondido 2x",
              "",
              "Eu dei um tiro ouvi gemido ainda tem caboclo escondido 2x",
              "",
              "E ainda tem caboclo de baixo da samambaia 2x",
              "",
              "de baixo da samambaia",
              "de baixo da samambaia",
              "de baixo da samambaia",
              "",
              "E ainda tem caboclo de baixo da samambaia 2x",
              "",
              "de baixo da samambaia",
              "de baixo da samambaia",
              "de baixo da samambaia"
            ],
            "traducao": ""
          },
          {
            "rotulo": "Ponto 6 · Eu chorei na boca da mata",
            "letra": [
              "Eu chorei na boca da mata,",
              "três caboclos me apareceu",
              "Sultão das matas, seu Pena Branca,",
              "Onça Jurema me socorreu,",
              "pra sua aldeia eles me levaram,",
              "me ensinaram a me defender",
              "hoje sou filho de um caboclo",
              "a ti serei fiel até morrer",
              "",
              "Nessa aldeia tem caboclo?",
              "Tem sim senhor 2x",
              "",
              "Nessa aldeia tem caboclo?",
              "Tem sim senhor 2x",
              "",
              "Nessa aldeia tem caboclo?",
              "Tem sim senhor 2x",
              "",
              "Tem caboclo curandeiro, caboclo curandor",
              "caboclo veste pena",
              "caboclo é caçador",
              "",
              "Nessa mata tem caboclo?",
              "Tem sim senhor 2x",
              "",
              "Nessa mata tem caboclo?",
              "Tem sim senhor 2x",
              "",
              "Gostou de mim por que não vem me ver? 2x",
              "",
              "Gostou de mim por que não vem me ver 2x",
              "",
              "Se ele é caboclo tem que obedecer",
              "Ele é caboclo diz que veste pena Venha ver",
              "A força que a Jurema tem"
            ],
            "traducao": "",
            "inicio": 561
          },
          {
            "rotulo": "Ponto 7 · O meu pavão",
            "letra": [
              "O meu pavão foi na beira do rio ia",
              "E caboclo pegou",
              "Pavão foi na beira do rio do na",
              "E caboclo pegou",
              "4x",
              "",
              "E pisa caboclo",
              "Quero ver você pisar",
              "2x",
              "",
              "E Samba de caboclo",
              "faz aldeia chorar",
              "2x",
              "",
              "Piza caboclo de um lado pro outro"
            ],
            "traducao": "",
            "inicio": 706
          },
          {
            "rotulo": "Ponto 8 · Ô mata medonha",
            "letra": [
              "O mata mata",
              "O mata medonha",
              "O mata mata",
              "O mata medonha",
              "",
              "O mata medonha meu Deus",
              "Eu vou caçar nela",
              "O mata medonha meu Deus",
              "Eu vou caçar nela"
            ],
            "traducao": "",
            "inicio": 829
          },
          {
            "rotulo": "Ponto 9 · Mata virgem — Caboclo é a luz do mato",
            "letra": [
              "mata virgem",
              "mata ia",
              "E e e mata ia",
              "Mata virgem mata ia",
              "Eeeee mata ia",
              "2x",
              "",
              "Ele é da mata",
              "Ele é da mata",
              "Ele é da mata",
              "e venha dizer",
              "",
              "Ele é da mata",
              "Ele é da mata",
              "Ele é da mata camarada",
              "Ele é da mata e venha dizer",
              "",
              "O caboclo da mata virgem",
              "Plantou ae nasceu flor",
              "Caboclo da mata virgem",
              "Plantou aí nasceu flor",
              "",
              "Eee caboclo é",
              "Caboclo é",
              "Caboclo é a luz do mato é",
              "",
              "Sultão das matas é a luz da mata é",
              "Seu pena branca a luz do mato é",
              "",
              "Caboclo é",
              "Caboclo é",
              "Caboclo é",
              "a luz do mato é 2x",
              "",
              "Ê cabocleiro é a luz do mato é",
              "Irarai é a luz do mato é",
              "",
              "Caboclo é",
              "a luz do mato é 2x"
            ],
            "traducao": "",
            "inicio": 891
          },
          {
            "rotulo": "Ponto 10 · Mi na ora — Quem manda é caboclo",
            "letra": [
              "Mi na ora eeee",
              "Mi na oraaaa",
              "",
              "Mi na ora eeee",
              "Caboclo é hora é hora",
              "",
              "Mi na ora eeee",
              "Mi na oraaaa",
              "",
              "Mi na ora eeee",
              "Caboclo é hora é hora",
              "",
              "Lala o lala e",
              "Quem manda é caboclo",
              "",
              "Lala o lala e quem manda é caboclo",
              "",
              "Lá la i la lá i lá"
            ],
            "traducao": "",
            "inicio": 1101
          },
          {
            "rotulo": "Ponto 11 · Iraraê",
            "letra": [
              "Ooooo iraraeee iraraee iraraee",
              "Oooo ira ira ra i ra ra i ra"
            ],
            "traducao": "",
            "inicio": 1140
          },
          {
            "rotulo": "Ponto 12 · Sindorerê — Cauiza é o rei",
            "letra": [
              "Sindorere auê cauiza",
              "Sindorere é o sangue real",
              "Se ele é filho eu sou neto da Jurema",
              "Sindorere auê cauiza",
              "",
              "Cauiza é o rei",
              "É orixá",
              "",
              "Agora ????",
              "É orixá",
              "",
              "Cauiza é o rei",
              "É orixá",
              "",
              "Agora ????",
              "É orixá",
              "",
              "Ê cauizou",
              "Auê cauiza 2x",
              "",
              "Ê cauiza cauizou",
              "Auê cauiza 2x",
              "",
              "Ê cauiza cauizou",
              "Auê cauizou 2x"
            ],
            "traducao": "",
            "inicio": 1408
          },
          {
            "rotulo": "Ponto 13 · Sai do mato",
            "letra": [
              "Sai do mato e vem pra aldeia",
              "Sindorere fala caboclo",
              "",
              "Sai do mato e vem pra aldeia",
              "Sindorere fala caboclo",
              "",
              "Sai do mato e vem pra aldeia",
              "Sindorere fala caboclo",
              "",
              "Ê caboclo é",
              "Caboclo é",
              "Caboclo é a luz do mato é",
              "",
              "Caboclo é",
              "Caboclo é",
              "Caboclo é a luz do mato é"
            ],
            "traducao": "",
            "inicio": 1530
          },
          {
            "rotulo": "Ponto 14 · Com Jesus de Maria — Lá na Hungria",
            "letra": [
              "Ke ke ke ke keua ke ke ke com jesus de maria",
              "",
              "Com Jesus de maria  Eu tenho pai",
              "Eu tenho mãe",
              "Eu sou inocente minha morada é na Hungria",
              "",
              "Eu tenho pai",
              "Eu tenho mãe",
              "Sou um bom filho minha morada é na aldeia",
              "",
              "Eu tenho pai",
              "Eu tenho mãe",
              "Sou um bom filho minha morada é na aldeia",
              "",
              "Eu tenho pai",
              "Eu tenho mãe",
              "Sou um bom filho minha morada é na Hungria",
              "",
              "Ê Lá na Hungria",
              "Lá na Hungria",
              "Lá na Hungria",
              "Ainda é um dia",
              "",
              "Lá na Hungria",
              "Lá na Hungria",
              "Lá na Hungria",
              "Ê lá na Hungria na Hungriaaa",
              "",
              "Lá na Hungria",
              "Lá na Hungria",
              "Lá na Hungria",
              "Ê lá na Hungria na Hungriaaa",
              "",
              "Lá na Hungria",
              "Lá na Hungria",
              "Lá na Hungria",
              "Ê lá na Hungria na Hungriaaa"
            ],
            "traducao": "",
            "inicio": 1590
          },
          {
            "rotulo": "Ponto 15 · Ele atirou",
            "letra": [
              "Ele atirou, ele atirou ninguém viu",
              "E caboclo é quem sabe aonde a flecha caiu",
              "",
              "Ele atirou",
              "Ele atirou ninguém viu",
              "É caboclo quem sabe aonde a flecha caiu",
              "",
              "Ele atirou",
              "Ele atirou ninguém viu",
              "É caboclo é quem sabe aonde a flecha caiu",
              "",
              "Ele atirou",
              "Ele atirou ninguém viu",
              "Só caboclo é quem sabe aonde a flecha caiu"
            ],
            "traducao": "",
            "inicio": 1695
          },
          {
            "rotulo": "Ponto 16 · Sultão das matas — Ele é o rei, ele é o tata",
            "letra": [
              "Ê sultão das matas lá na mata ele é o rei",
              "Sultão das matas lá na mata ele é o tata",
              "Lá na mata sua flecha voa",
              "Voa muito longe quando desce ela mata",
              "",
              "Ele é o rei",
              "Ele é o tata 2x",
              "",
              "E lá na mata sua flecha voa",
              "Voa muito longe quando desce ela mata",
              "",
              "Ele é o rei",
              "Ele é o tata 2x",
              "",
              "E lá na mata sua flecha voa",
              "Voa muito longe quando desce ela mata",
              "",
              "Ele é o rei",
              "Ele é o tata 2x"
            ],
            "traducao": "",
            "inicio": 1751
          },
          {
            "rotulo": "Ponto 17 · Tava longe dessa aldeia",
            "letra": [
              "Tava longe, tava longe, tava longe dessa aldeia 2x",
              "Tava longe tava longe tava longe dessa aldeia 2x",
              "Tava longe tava longe tava longe dessa aldeia 2x"
            ],
            "traducao": "",
            "inicio": 1808
          },
          {
            "rotulo": "Ponto 18 · Nunca vi na minha aldeia — Tanaraê",
            "letra": [
              "Ô nunca vi na minha aldeia tana",
              "Ô cheia de espinhos tana",
              "Tanta gente boa ê tana",
              "Eu não tô sozinho ê tana",
              "",
              "Ê tanarae tanarae tanarae minha aldeia",
              "Ê tanarae tanarae tanarae minha aldeia",
              "Ê tanarae tanarae tanarae minha aldeia"
            ],
            "traducao": "",
            "inicio": 1841
          },
          {
            "rotulo": "Ponto 19 · Caboclo tá no mato — Maiá dendê",
            "letra": [
              "Caboclo tá no mato tá correndo sapucacaia 2x",
              "ê maia dendê ê dendê caboclo maia 2x",
              "",
              "ê maia dendê ê dendê caboclo maia 3x",
              "",
              "Caboclo tá no mato tá correndo sapucacaia 2x",
              "ê maia dendê ê dendê caboclo maia 4x"
            ],
            "traducao": "",
            "inicio": 1990
          },
          {
            "rotulo": "Ponto 20 · Ô Sultão, aonde é que você mora",
            "letra": [
              "Ô Sultão",
              "Ô Sultão",
              "Aonde é que você mora?",
              "Ô Sultão",
              "Ô Sultão",
              "Aonde é sua morada?",
              "Ô Sultão",
              "Ô Sultão",
              "Eu moro nas onda verde",
              "Ô Sultão",
              "Ô Sultão",
              "Nas ondas do mar sagrada",
              "",
              "Ô Sultão",
              "Ô Sultão",
              "Aonde é que você mora?",
              "Ô Sultão",
              "Ô Sultão",
              "Aonde é sua morada?",
              "Ô Sultão",
              "Ô Sultão",
              "Eu moro nas onda verde",
              "Ô Sultão",
              "Ô Sultão",
              "Nas ondas do mar sagrada",
              "",
              "Ô Sultão",
              "Ô Sultão",
              "Aonde é que você mora?",
              "Ô Sultão",
              "Ô Sultão",
              "Aonde é sua morada?",
              "Ô Sultão",
              "Ô Sultão",
              "Eu moro nas onda verde",
              "Ô Sultão",
              "Ô Sultão",
              "Nas ondas do mar sagrada"
            ],
            "traducao": "",
            "inicio": 2038
          },
          {
            "rotulo": "Ponto 21 · Sultão das matas é o rei do rei",
            "letra": [
              "É sultão das matas é o rei do rei",
              "Ê que vem da mina do ouro",
              "Sultão das matas é um grande lindo rei",
              "Ê que vem da mina do ouro",
              "",
              "Que de um lado sacode as penas",
              "E do outro sobe a ouro",
              "",
              "É sultão das matas é o rei do rei",
              "Ê que vem da mina do ouro",
              "Sultão das matas é um grande lindo rei",
              "Ê que vem da mina do ouro",
              "",
              "Que de um lado sacode as penas",
              "E do outro sobe a ouro"
            ],
            "traducao": "",
            "inicio": 2104
          },
          {
            "rotulo": "Ponto 22 · Sultão das matas subindo a montanha",
            "letra": [
              "Sultão das matas subindo a montanha",
              "Indorere que mata medonha",
              "Indorere que mata medonha",
              "Indorere que mata medonha",
              "",
              "Sultão das matas subindo a montanha",
              "Indorere que mata medonha",
              "Indorere que mata medonha",
              "Indorere que mata medonha",
              "",
              "Sultão das matas subindo a montanha",
              "Indorere que mata medonha",
              "Indorere que mata medonha",
              "Indorere que mata medonha"
            ],
            "traducao": "",
            "inicio": 1610
          },
          {
            "rotulo": "Ponto 23 · Minha mãe eu quero água",
            "letra": [
              "Minha mãe eu quero água, da fonte do Angolá - 2x",
              "Onde os pombos vão beber e os caboclo vão rezar",
              "",
              "Maia dendê, dendê caboclo maiá - 10x"
            ],
            "traducao": "",
            "repete": 3,
            "inicio": 2700
          },
          {
            "rotulo": "Ponto 24 · Ê Ê Ê na mata, lá da Jurema",
            "letra": [
              "Ê Ê Ê na mata, lá da Jurema - 2x",
              "É uma lei severa, é uma lei sem pena - 2x"
            ],
            "traducao": "",
            "repete": 9
          },
          {
            "rotulo": "Ponto 25 · Andando na mata encontrei duas índias",
            "letra": [
              "Andando na mata encontrei duas índias - 2x",
              "Uma era Jussara, outra era Jupira - 3x"
            ],
            "traducao": "",
            "repete": 4
          },
          {
            "rotulo": "Ponto 26 · Ê Cabocla morena",
            "letra": [
              "Ê Cabocla morena, ê um dê um dá",
              "Cabocla morena filha de gangazuamba"
            ],
            "traducao": "",
            "repete": 4
          },
          {
            "rotulo": "Ponto 27 · Ê o sol, oh lua",
            "letra": [
              "Ê o sol, oh lua - 2x",
              "Clareia o mundo, para nós passar, esquenta a aldeia",
              "Pra ele chegar"
            ],
            "traducao": "",
            "repete": 4
          },
          {
            "rotulo": "Ponto 28 · No alto daquela palmeira",
            "letra": [
              "No alto daquela palmeira aonde arara foi morar",
              "Atira meu pai, atira, não deixa arara voar - 2x"
            ],
            "traducao": "",
            "repete": 3
          },
          {
            "rotulo": "Ponto 29 · Ê oh caçador da mata real",
            "letra": [
              "Ê oh caçador da mata real, se não matou o meu pavão",
              "Faz favor de não matar"
            ],
            "traducao": "",
            "repete": 3
          },
          {
            "rotulo": "Ponto 30 · Eu atirei no passarão",
            "letra": [
              "Eu atirei no passarão, não foi para matar - 2x",
              "Minha mão escorregou, matou, matou - 2x"
            ],
            "traducao": "",
            "repete": 3
          },
          {
            "rotulo": "Ponto 31 · Atirei no passarão e não matei",
            "letra": [
              "Atirei no passarão, atirei no passarão",
              "Atirei no passarão e não matei,",
              "se o passarão voltar eu matarei"
            ],
            "traducao": "",
            "repete": 5
          },
          {
            "rotulo": "Ponto 32 · Oh da terra onde eu nasci",
            "letra": [
              "Oh da terra onde eu nasci - 2x",
              "Tem sapucaia, tem Jurema, tem pau-brasil",
              "Oh que maravilha, criação da natureza",
              "E os caboclos lindos do meu Brasil"
            ],
            "traducao": "",
            "repete": 4
          },
          {
            "rotulo": "Ponto 33 · Lá na Jurema, a cobra pia",
            "letra": [
              "Oh lá, lá na Jurema, a cobra pia, caboclo quer passar",
              "A cobra pia, caboclo quer passar,",
              "com seu arco e sua flecha e sua cobra coral"
            ],
            "traducao": "",
            "repete": 4
          },
          {
            "rotulo": "Ponto 34 · Quando eu saí da minha aldeia",
            "letra": [
              "Eu andei, quando eu saí da minha aldeia - 2x",
              "Na mão direita trago a Juriti",
              "No meio do caminho pra se dividir",
              "Na mão esquerda trago sementinhas,",
              "é muito tempo que eu cheguei aqui"
            ],
            "traducao": "",
            "repete": 3
          },
          {
            "rotulo": "Ponto 35 · Por cima do Wandê",
            "letra": [
              "Por cima do Wandê, por baixo do Wandá - 2x",
              "Saia do caminho, caboclo quer passar",
              "Ê Ê Ê, Ê Ê A",
              "Abra a porta minha gente, caboclo quer passar"
            ],
            "traducao": "",
            "repete": 3
          },
          {
            "rotulo": "Ponto 36 · Fui fazer uma caçada no morro da Juriti",
            "letra": [
              "Fui fazer uma caçada no morro da Juriti - 2x",
              "Animal me atacou, minha sina eu fiz cumprir",
              "Animal me atacou, minha adaga me valeu",
              "Rei do céu tem piedade, era ele ou era eu - 2x"
            ],
            "traducao": "",
            "repete": 3
          },
          {
            "rotulo": "Ponto 37 · Quando ele vem na sua aldeia, Bom Jesus",
            "letra": [
              "Quando ele vem na sua aldeia, Bom Jesus",
              "Ele é o vento, Bom Jesus de Maria"
            ],
            "traducao": "",
            "repete": 3
          },
          {
            "rotulo": "Ponto 38 · Ê bandeira branca",
            "letra": [
              "Ê bandeira branca trago no pau forte",
              "Ê trago no peito uma estrela brilhante",
              "Ê Deus o salve, casa santa!",
              "Com sua lança de guerreiro"
            ],
            "traducao": "",
            "repete": 6
          },
          {
            "rotulo": "Ponto 39 · Caminho que eu passei",
            "letra": [
              "Caminho que eu passei, você não passará",
              "Caminho que eu andei, você não andará",
              "Na mata tem uma onça, caboclo mora lá - 2x"
            ],
            "traducao": "",
            "repete": 5
          },
          {
            "rotulo": "Ponto 40 · Caboclo é esse da faixa vermelha",
            "letra": [
              "Caboclo é esse da faixa vermelha",
              "É caboclo que vem abalar aldeia"
            ],
            "traducao": "",
            "repete": 3
          },
          {
            "rotulo": "Ponto 41 · Ele veste pena, ele come cru",
            "letra": [
              "Ele veste pena, ele come cru",
              "Ele é sultão das matas, irmão de Ekum"
            ],
            "traducao": "",
            "repete": 5
          },
          {
            "rotulo": "Ponto 42 · Sua cama de ortiga",
            "letra": [
              "Sua cama de ortiga, travesseiro cansanção",
              "Ele é caboclo, não nega sua nação"
            ],
            "traducao": "",
            "repete": 5
          },
          {
            "rotulo": "Ponto 43 · Eno, Eno, Eno ê",
            "letra": [
              "Eno, Eno, Eno ê",
              "Ero, ero, ero ê",
              "Quem compra fiado paga",
              "Pro dono não vir cobrar"
            ],
            "traducao": "",
            "repete": 5
          },
          {
            "rotulo": "Ponto 44 · Ê brasileiro, brasileiro",
            "letra": [
              "Ê brasileiro, brasileiro - 2x",
              "Brasileiro imperador, eu nasci foi no Brasil",
              "Brasileiro, sim senhor"
            ],
            "traducao": "",
            "repete": 5
          },
          {
            "rotulo": "Ponto 45 · Ê minha mãe é brasileira",
            "letra": [
              "Ê minha mãe é brasileira - 2x",
              "Meu pai imperador",
              "O que é que eu sou? - 2x",
              "Brasileiro, imperador"
            ],
            "traducao": "",
            "repete": 3
          },
          {
            "rotulo": "Ponto 46 · Salve a bandeira brasileira",
            "letra": [
              "Ê Ê Ê, salve a bandeira brasileira - 2x",
              "São quatro cores pra dividir",
              "Oh verde, amarelo, azul e branco",
              "Ê são as cores do meu Brasil"
            ],
            "traducao": "",
            "repete": 4
          },
          {
            "rotulo": "Ponto 47 · Verde é esperança",
            "letra": [
              "Verde é esperança",
              "Oh amarelo é o desespero",
              "O azul traz a liberdade",
              "Pelos caboclos brasileiros"
            ],
            "traducao": "",
            "repete": 2
          },
          {
            "rotulo": "Ponto 48 · Ê Ê caminhei até chegar",
            "letra": [
              "Ê Ê caminhei até chegar",
              "Por uma tribo meio que desconhecida",
              "Eu avistei o chefe daquela tribo",
              "Aquele índio senhor foi meu guia",
              "Eu perguntei praquele caboclo",
              "Que respondeu no pé de uma Jurema",
              "E me falou das lendas da Jurema",
              "No gingado de Tupinambá"
            ],
            "traducao": "",
            "repete": 13
          },
          {
            "rotulo": "Ponto 49 · Ê de marrumba chetruê",
            "letra": [
              "Ê de marrumba chetruê",
              "Ê de marrumba chetruá"
            ],
            "traducao": "",
            "repete": 4
          },
          {
            "rotulo": "Ponto 50 · Bate congo lá na aldeia",
            "letra": [
              "Ê Ê bate congo lá na aldeia, ê ê ê",
              "Bate congo na aldeia, marrumba chetruá"
            ],
            "traducao": "",
            "repete": 4
          },
          {
            "rotulo": "Ponto 51 · Oh lá vem o congo",
            "letra": [
              "Oh lá vem o congo, oh lá vem o índio",
              "Lá vem o congo, lá vem o índio"
            ],
            "traducao": "",
            "repete": 8
          },
          {
            "rotulo": "Ponto 52 · Índio guerreiro, vamos guerrear",
            "letra": [
              "Índio guerreiro, vamos guerrear - 2x",
              "Eu ia, eu caá - 2x"
            ],
            "traducao": "",
            "repete": 4
          },
          {
            "rotulo": "Ponto 53 · Oh índio companheiro",
            "letra": [
              "Oh índio companheiro, índio",
              "Oh índio, vamos guerrear",
              "Oh índio, chama caboclo",
              "Para brincar nesse cazuá"
            ],
            "traducao": "",
            "repete": 6
          },
          {
            "rotulo": "Ponto 54 · Ê bom vaqueiro",
            "letra": [
              "Ê bom vaqueiro, bom vaqueiro",
              "Dê-me licença de eu passar",
              "Com meus filhos [palavra pouco legível]",
              "Para caça me guiar",
              "",
              "Bom vaqueiro, quem vem lá",
              "Quem sou eu, quem vem lá",
              "Eu vou levar da cancela, quem vem lá",
              "O boiadeiro sou eu, quem vem lá - 2x"
            ],
            "traducao": "",
            "repete": 2
          },
          {
            "rotulo": "Ponto 55 · Vaquejada boa é lá em Belém",
            "letra": [
              "Vaquejada boa é lá em Belém - 2x",
              "Ê Ê A, quem vem lá - 2x",
              "Ê boiadeiro é divisa (?)"
            ],
            "traducao": "",
            "repete": 6
          },
          {
            "rotulo": "Ponto 56 · Nos campos de Jerusalém",
            "letra": [
              "Nos campos de Jerusalém - 2x",
              "Meu gado esparramado",
              "Ê Ê chamei, Ê Ê chamei - 2x",
              "Seu boiadeiro pra apanhar meu gado"
            ],
            "traducao": "",
            "repete": 3
          },
          {
            "rotulo": "Ponto 57 · De tropeiro",
            "letra": [
              "De tropeiro ê ê, de tropeiro aê - 4x",
              "Aiaiaia, de tropeiro ê - 2x",
              "Aiaiaia, de tropeiro a"
            ],
            "traducao": "",
            "repete": 3
          },
          {
            "rotulo": "Ponto 58 · Seu boiadeiro por aqui choveu",
            "letra": [
              "Seu boiadeiro por aqui choveu - 2x",
              "Choveu que água rolou",
              "Foi tanta água que caiu na aldeia",
              "Foi tanta água que meu boi nadou"
            ],
            "traducao": "",
            "repete": 4
          },
          {
            "rotulo": "Ponto 59 · Na levada povo, vamos a Belém",
            "letra": [
              "Na levada povo, vamos a Belém",
              "Vamos ver seu boiadeiro que nasceu pro nosso bem"
            ],
            "traducao": "",
            "repete": 7
          },
          {
            "rotulo": "Ponto 60 · Oh lá em Roma, tem uma igreja",
            "letra": [
              "Oh lá em Roma, tem uma igreja - 2x",
              "Dentro dela tem morador - 2x"
            ],
            "traducao": "",
            "repete": 4
          },
          {
            "rotulo": "Ponto 61 · Cadê a corda de laçar meu boi",
            "letra": [
              "Ê cadê a corda de laçar meu boi",
              "Meu boi fugiu, não sei pra onde foi"
            ],
            "traducao": "",
            "repete": 6
          },
          {
            "rotulo": "Ponto 62 · Bota no laço, vaqueiro",
            "letra": [
              "Ê Ê bota no laço, vaqueiro",
              "Oh vem topar, oh vem topar",
              "Na porteira do curral"
            ],
            "traducao": "",
            "repete": 3
          },
          {
            "rotulo": "Ponto 63 · Á ê ê, chapéu grande",
            "letra": [
              "Á ê ê, chapéu grande",
              "Beirada de ventania - 3x"
            ],
            "traducao": "",
            "repete": 6
          },
          {
            "rotulo": "Ponto 64 · Ê laje grande",
            "letra": [
              "Ê laje grande, a pedra do morro desce",
              "Quem tem é porque Deus dá",
              "Deus dá a quem merece"
            ],
            "traducao": "",
            "repete": 6
          },
          {
            "rotulo": "Ponto 65 · Meu lajedo é muito grande",
            "letra": [
              "Ê Ê meu lajedo é muito grande,",
              "de pedrinha miúda",
              "De pedrinha miudinha,",
              "de pedrinha graúda"
            ],
            "traducao": "",
            "repete": 5
          },
          {
            "rotulo": "Ponto 66 · Cascata dos seus cabelos",
            "letra": [
              "Cascata dos seus cabelos",
              "Eu bebi água de gravatá",
              "Eu bebi água no gravatá, seu boiadeiro",
              "Eu bebi no gravatá"
            ],
            "traducao": "",
            "repete": 4
          },
          {
            "rotulo": "Ponto 67 · Ê de Taquari",
            "letra": [
              "Ê de Taquari, cadê o seu laço e seu jibão",
              "Boiadeiro, cadê o seu laço e seu jibão"
            ],
            "traducao": "",
            "repete": 6
          }
        ]
      }
    ]
  }
];
