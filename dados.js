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
    "id": "orixas",
    "rotulo": "Xirê dos Orixás",
    "titulo": "Cantigas<br>do Xirê",
    "subtitulo": "Letras, traduções e áudios de referência, organizados por orixá, na ordem do xirê.",
    "nota": "As grafias podem variar de uma fonte para outra. A referência principal deve ser sempre a forma ensinada no terreiro e pelos mais velhos da casa. Toque no nome de cada orixá para abrir as cantigas; toque em <strong>Praticar</strong> para deixar o áudio tocando fixo embaixo da tela enquanto você lê e canta junto.",
    "entidades": [
      {
        "id": "exu",
        "nome": "Exu",
        "subtitulo": "ÈSÙ",
        "cor": "#E0503C",
        "video": "jAiVVy5IVnQ",
        "youtube": "https://youtu.be/jAiVVy5IVnQ?si=MSLduEWFmCseciE9",
        "fonte": "http://ileaseegbeomorisaogum.blogspot.com/2012/11/cantigas-de-xire-de-exu.html",
        "cantigas": [
          {
            "rotulo": "Trecho 1",
            "letra": [
              "Laaróyè Èsù!",
              "Egba rà bó ago mojuba rà",
              "Egba Kose",
              "Egba rà bó ago mojuba rà",
              "E mó dé ko e ko",
              "Egba rà bó ago mojuba rà",
              "Lè gbálè èsù loná",
              "Egba rà um be be",
              "Tiriri Lona",
              "Esú Tiriri Egba rà um be be Tiriri Lona Èsù Tiriri Elegbara"
            ],
            "traducao": "Nos dê entendimento sobre a vida, Exu; tenho fé e peço licença para louvá-lo em minha casa; tenho fé, amém; nossa casa está limpa, proteja a nossa terra; seu poder, Exu, limpa o caminho; minha fé me alimenta, peço, peço; Tiriri — valoroso no caminho, Exu que nos dá coisas no caminho."
          },
          {
            "rotulo": "Trecho 2",
            "letra": [
              "Èsù Ajo",
              "A ma ma",
              "Ke o Elegbara",
              "Èsù Ajo",
              "A ma ma Ke o laaròyè",
              "Èsù Soroke",
              "O dara o dara",
              "Ba bá ebó",
              "Esú O"
            ],
            "traducao": "Homem da rua; Exu da jornada, nós sempre, sempre pedimos a ti, Elegbara; Exu da jornada, clamamos que nos dê compreensão; Exu que fala alto; ele é justo, ele é justo; ajude-nos, acompanhe-nos; ele é Exu."
          },
          {
            "rotulo": "Trecho 3",
            "letra": [
              "Esú Olona",
              "Mó forí Gbále",
              "Esú O Gba rá Lò jí ki",
              "Esú Lò bi wa",
              "Ara e e",
              "So so Obé",
              "Odara kolobi ebó",
              "Laaròyé",
              "Àgiri Esú ma na",
              "Le lè àgiri"
            ],
            "traducao": "Dono da estrada; limpe o que é ruim, varra; com minha fé lhe cumprimento; Exu venha até nós; faça-se presente; fala, fala na faca; ele é justo e ensina-nos a renascer no ebó; dê-nos compreensão; Exu está presente no nascer da aurora, ele tem força e poder na aurora."
          },
          {
            "rotulo": "Trecho 4",
            "letra": [
              "Àjé ma na",
              "Le lè àgiri",
              "Fí rò ófè na",
              "Fé na jò",
              "Àgiri",
              "Orisa pa ta",
              "Ago nilé",
              "Ago nilé mó forí gbále",
              "Gbà-là ló jù gbà-là",
              "Ló jù gbà-là"
            ],
            "traducao": "Seu feitiço está presente, força e poder na aurora; seu assobio é o primeiro a ser ouvido, se manifeste na aurora; Orixá que nos acode mas pode nos matar; a humanidade em suas casas pede auxílio; livre a humanidade do que é ruim, varra; salve-nos, busque a nossa salvação."
          },
          {
            "rotulo": "Trecho 5",
            "letra": [
              "Ará legbé",
              "Ògó Rum Gò",
              "Rum gò",
              "Laaròyé",
              "Ba pàdé olà na e",
              "Mojúbà ójisè",
              "Àwa se àwo",
              "Mojúbá ójisè",
              "Elégbára Rewá",
              "Àwa se àwo"
            ],
            "traducao": "Fique por perto; te louvamos com o tambor para que não se confunda, o tambor é inconfundível; dê-nos compreensão; esta oferenda servida em prato de barro é para que nos ajude e não nos castigue; salve Exu, o mensageiro, alimente-se em nossa casa de santo; Elegbara é bonito, alimente-se em nossa casa de santo."
          },
          {
            "rotulo": "Trecho 6",
            "letra": [
              "A ji ki rè mi èsù",
              "Èsù ka bi, ka bí",
              "Elégbára Èsù",
              "Osá rere rere",
              "O ké Sá bára èsù",
              "O Sá rere rere",
              "Elégbára, elégbara èsù ará ye",
              "Elégbára, elégbara èsù ará ye",
              "O wá lè se ìlàjà ba àwo",
              "Lè só ri am-nó ìlèkùn"
            ],
            "traducao": "Nós te acordamos para lhe felicitar, meu Exu; Exu que nos acompanha desde o nascimento; Elegbara, Exu que mora no caminho; nós lhe convidamos; nós te chamamos, bom amigo; nós lhe convidamos; Exu Elegbara, Exu que mora no caminho; ele vem com seu poder nos ajudar a harmonizar, com seu poder toma conta da nossa entrada."
          },
          {
            "rotulo": "Trecho 7",
            "letra": [
              "Èsù a jùmò ma ma ké o",
              "O dara",
              "Laaróyè èsù",
              "A jùmò ma ma ké o o",
              "O dara èsù àwo",
              "O dara. Lò sóro",
              "O dara. Lò sóro loná",
              "O di se bá lè pón a o o",
              "O dara. Bá lè só bá",
              "Kòna wù rè já rè o"
            ],
            "traducao": "Exu, nós sempre lhe chamamos; você é justo, dê-nos compreensão; nós sempre lhe chamamos; você é justo, Exu, nós te alimentamos; ele é justo, ouça sua voz durante a caminhada; retorne para nos encontrar e nos fortalecer; ele é justo, ele toma conta e seu poder nos fortalece; te agradamos na encruzilhada, levante-se."
          },
          {
            "rotulo": "Trecho 8",
            "letra": [
              "Èsù loná",
              "Ajé ba lè a ká ra wó",
              "Èsù Soroke Èsù sórò sórò",
              "Ajé ba lè a ká ra wó",
              "Èsù só Soroke",
              "Elégbára lè ba àwo",
              "Èsù só Soroke",
              "Èsù só Soroke ki awo",
              "Elégbára Vodun Adja ke de ke de",
              "Èsù lè ba o"
            ],
            "traducao": "Exu da rua; este sangue de animal que será derramado aqui é para nos ajudar; Exu, venha participar do culto; Exu Soroke tome conta, Elegbára, seu poder nos ajuda; Exu Soroke tome conta, nós te cumprimentamos; tocamos o adja bem alto para lhe chamar, Exu, buscamos o seu poder."
          },
          {
            "rotulo": "Trecho 9",
            "letra": [
              "Odún lè ba o",
              "A dí kí ba rà bò e mojúbà",
              "Àwa kó jé",
              "A dí kí ba rà bò e mojúbà",
              "Òmowé kó ikó",
              "Kó ké kó ké o ba rà",
              "O ba rà ba ba ebo",
              "Iná iná e mojúbà e",
              "E mojúbà",
              "Ibó mojúbà"
            ],
            "traducao": "Está na hora de usar o seu poder; nós tornamos a lhe cumprimentar pela ajuda que recebemos, nós somos aprendizes; Senhor, seja paciente em nos ensinar para que nos tornemos bons trabalhadores; cantamos alto para que venha nos ajudar com os trabalhos, venha em nosso auxílio, venha para o ebó; o fogo das velas é para te saudar, nós te saudamos, no seu altar te saudamos."
          },
          {
            "rotulo": "Trecho 10",
            "letra": [
              "E ma wù lè ba na",
              "Kórin ti a",
              "E ma wù lè ba na",
              "E ma je kí",
              "Kórin ti a",
              "O loná wa ba rà ketu",
              "O loná wa ba rà ketu",
              "Ketu ketu e",
              "Èsù alaketu",
              "Yemonjá ka ká rè bo"
            ],
            "traducao": "Você sempre foi agradado primeiro que os outros, nós cantamos suas cantigas; você sempre foi agradado primeiro que os outros, nós sempre te alimentamos e cumprimentamos, nós cantamos suas cantigas; vós que estais no caminho, venha para o Ketu; Exu, este é o reino de Ketu; Yemanjá recolhe e alimenta a todos em seu reino."
          },
          {
            "rotulo": "Trecho 11",
            "letra": [
              "Èsù ayà abo",
              "Yemonjá ka ká rè bo",
              "Èsù ayà abo"
            ],
            "traducao": "Exu também encontra amparo; Yemanjá recolhe e alimenta a todos em seu reino."
          }
        ]
      },
      {
        "id": "ogum",
        "nome": "Ogum",
        "subtitulo": "ÒGÚN",
        "cor": "#2F6FB5",
        "video": "lpIW8bxp52Q",
        "youtube": "https://youtu.be/lpIW8bxp52Q?si=__MXVM351lLjbjce",
        "fonte": "http://ileaseegbeomorisaogum.blogspot.com/2012/11/cantigas-de-xire-de-ogum.html",
        "cantigas": [
          {
            "rotulo": "Trecho 1",
            "letra": [
              "Pà ta ko ri Ògún",
              "Ògún Je si je si",
              "Ògún a jo e Mariwo",
              "Akóró a jo e Mariwo",
              "Ògún pà lè pà lona",
              "Ògún a jo e Mariwo E ma tù Ye ye",
              "Àwa sí Iré Ògún o"
            ],
            "traducao": "Ogun guerreiro toma conta de suas terras; Ògún, nos sustente; Ògún se manifeste com o seu mariwo; Akóró, se manifeste com o seu mariwo; Akóró – qualidade de um Ogun; Ògún mata, tem poder de matar no caminho; Vós sempre anima a nossa vida; animar = reviver; Abra a nossa gira Ògún de Ire; Ire = Cidade da Nigéria."
          },
          {
            "rotulo": "Trecho 2",
            "letra": [
              "E oun jo jo",
              "Awa sí Iré Ògún",
              "E oun jo jo e oun je je",
              "Ògún ní ta ewe rè",
              "Ògún ní ta ewe rè",
              "A Òsóòsì ko rí a lódè",
              "Ògún ní ta ewe rè",
              "O ni ko tó ile ògún",
              "Akóró umbo bò silé"
            ],
            "traducao": "Dance conosco; Abra a nossa gira Ògún de Irè; Ire = Cidade da Nigéria; Dance conosco, coma conosco; Ògún no fim da tarde quer seu feijão; Ògún no fim da tarde quer seu feijão; Oxossi colhe pra ele, na chuva, lá fora; Ògún no fim da tarde quer seu feijão; Ògún é guardião da nossa terra, nossa casa de santo; Akóró estamos lhe esperando."
          },
          {
            "rotulo": "Trecho 3",
            "letra": [
              "A Ògún Meje Iré",
              "Ire Meje Meje Katakata òbí meje",
              "Òbí meje àna gbod-ó",
              "Katakata òbí meje",
              "Òbí meje àna gbod-ó",
              "E pà mi Ògún, Ògún pà meje",
              "E meje mi òsè",
              "E pé lè já pé lè já",
              "Ògún Onirè E Aáké lódè koró oun bè lè",
              "Akóró o Ògún já koró oun bè lè"
            ],
            "traducao": "Ogun das 7 aldeias de Irè; aqui e lá ele está em 7 lugares; ele está em 7 lugares tomando conta de todos; aqui e lá ele está em 7 lugares; ele está em 7 lugares tomando conta de todos; Ogun mata 7 vezes sem pestanejar, Ogun mata 7 vezes; Ele faz tudo em 7 dias; Seu poder nos protege nas lutas; Pedimos que use as suas armas para vencer nossas lutas; Ogun Akoro pedimos que nos dê forças e nos ajude a vencer nossas lutas."
          },
          {
            "rotulo": "Trecho 4",
            "letra": [
              "Ògún onirè o a koro Onire re gbé de",
              "Aáké Ogun Onire ore gbé de",
              "Ògún se kó re nde se kó re",
              "Ògún se kó re nde se kó re",
              "E pá ní òbe Ògún pá ní obé",
              "E pá ní òbe Ògún pá ní obé",
              "O ni ko tó",
              "O ni ko tó nile Ògún",
              "O ni awa ba já",
              "O ni ko to to ba òbe"
            ],
            "traducao": "Ogun Onire pedimos que traga suas dádivas para este lugar e para nós; Ogun Onire, seu machado atrai forças para nós; Ogun, corte e nos ensine a cortar, atrair e cortar, nos ensine a cortar; Ogun, corte e nos ensine a cortar, atrair e cortar, nos ensine a cortar; Sua faca mata, Ogun, sua faca mata; Sua faca mata, Ogun, sua faca mata; Ele é dono da terra; Ele é o dono da terra e protege a nossa casa; Ele é um guerreiro; Ele é dono da terra e o dono da faca."
          },
          {
            "rotulo": "Trecho 5",
            "letra": [
              "Ògún ni kó to wà layè",
              "Mariwo uá e",
              "Ògún ni kó to wà layè",
              "A wá Akóró e lè a rùn",
              "A wá Akóró e lè dun wò",
              "Ae, ae, ae, a wá Akóró e lè dun wò",
              "Ìjà kwe ìjà kwe ìjà",
              "A wá Akóró mi rè",
              "Wá Ogun Meje ilé",
              "Alagba Meje Meje"
            ],
            "traducao": "Ògún é o dono da terra; Venha com seu Mariwo; Ògún é o dono da terra; Venha nos ajudar Ogun Guerreiro, com seu poder; Venha nos ajudar e nos proteger Ogun Guerreiro; Venha nos ajudar e nos proteger, Ogun Guerreiro; Batalhe na nossa casa, batalhe na nossa casa, batalhe; Ogun, venha até nós; Venha à nossa casa de santo Ogun Meje; Senhor Meje, Meje."
          },
          {
            "rotulo": "Trecho 6",
            "letra": [
              "E mariwo aso",
              "E mariwo aso",
              "Ògún àgò fi rí rí",
              "Ága dé lò wa de a o",
              "Ògún àgò fi rí rí",
              "Koró ba ga dá",
              "Koró ba ga dá",
              "Ògún ba ga dá e",
              "Ògún ba ga dá",
              "Ke kí kí àwa Akóró"
            ],
            "traducao": "A roupa dele é de Mariwo; A roupa dele é de Mariwo; Ògun nos dê licença; Pedimos que saia de seu reino e venha nos encontrar para que possamos vê-lo; Ògun nos dê licença; Lá do alto ele nos ajuda; Lá do alto ele nos ajuda; Lá do alto Ogun nos ajuda; Lá do alto Ogun ajuda; Nós cantamos para salvar Ogun."
          },
          {
            "rotulo": "Trecho 7",
            "letra": [
              "Ke kí kí àwa Akóró"
            ],
            "traducao": "Nós cantamos para salvar Ogun."
          }
        ]
      },
      {
        "id": "oxossi",
        "nome": "Oxóssi",
        "subtitulo": "Ọ̀SỌ́Ọ̀SÌ / ODÈ",
        "cor": "#3E9D54",
        "video": "jF0AMzsJJhw",
        "youtube": "https://youtu.be/jF0AMzsJJhw?si=YDCp40SiPpsy9o5U",
        "fonte": "https://ileaseegbeomorisaogum.blogspot.com/2012/11/cantigas-de-xire-de-ode.html",
        "cantigas": [
          {
            "rotulo": "Trecho 1",
            "letra": [
              "Oke, Odè ko ké ma wo!",
              "Farahàn rere Fibó",
              "Ode Fibó farahàn lewa kosè",
              "Omo ode",
              "Olu wó kí rí bodè",
              "Olu wó kí rí bodè",
              "Àwa ní sa Omo odé",
              "Ode onise wá",
              "E aráiye",
              "Ode aréré òkè"
            ],
            "traducao": "Salve o Rei que é aquele que fala mais alto!; Osóòsi Fibó venha nos cobrir com sua bondade; Oxossi, encubra-nos com sua bondade e beleza, amém; Filho do caçador; Cumprimentamos o Senhor Caçador; Cumprimentamos o Senhor Caçador; Venha até nós Filho do Caçador; Venha Grande Caçador; Nós, filhos de santo; O saudamos."
          },
          {
            "rotulo": "Trecho 2",
            "letra": [
              "E Òrisà elo",
              "E oun Ofà Akueran",
              "Omo ode Ode Ìroko",
              "E oun Ofà Akueran",
              "E o sí bodè. E o sí bodè",
              "Arolè o sí bodè e o sí bodè",
              "E o sí bodè",
              "Olu o kí rí kí rí bodè",
              "Kí rí kí rí bodè",
              "Kí já kí já wá rà dé ode yò màa"
            ],
            "traducao": "Ele vem com o vento; Akueran é um caçador; Filho do caçador, Oxossi Iroko; Akueran é um caçador; Nós o saudamos; Nós o saudamos. Nós o saudamos; Nós o saudamos; Queremos encontrar e cumprimentar o Sr. Caçador; Encontrar e cumprimentar o Sr. Caçador; Queremos cumprimentar quem sempre nos ajuda. Ficamos felizes sempre com sua presença."
          },
          {
            "rotulo": "Trecho 3",
            "letra": [
              "Sálo kí ri",
              "Wá si lò ko",
              "Elo ké re odè àárò lè ló ké re",
              "Ode àárò lè ló gbèjà lè ló gbèjà",
              "Olu o kí rí kí rí bodè",
              "Kí rí kí rí bodè",
              "O wá nibó oro odè",
              "O ké odara sálo gbé rà",
              "Omo odè se rere Ìrokò",
              "Se rere wá lò Ibo"
            ],
            "traducao": "Queremos encontra-lo para cumprimenta-lo; Venha para esta terra que é sua; Pela manhã clamamos pelo caçador para que nos proteja com o seu poder; Pela manhã clamamos para que o caçador use seu poder para nos defender; Queremos encontrar e cumprimentar o Sr. Caçador; Encontrar e cumprimentar o Sr. Caçador; O Caçador vem com o vento; O chamamos para que venha nos ajudar para que fiquemos bem; Iroko, filho de caçador, só faz o bem; Ibo, venha fazer o bem em nosso altar."
          },
          {
            "rotulo": "Trecho 4",
            "letra": [
              "Onise wá ra e odè Aréré Lokuere",
              "Omo odè se rere Ìrokò",
              "Se rere wá lò Ibo",
              "Ará wá won ní je kí ofà rè won",
              "Ofà rè ye je ní won",
              "Ago ofà ní won, a arò ilè ko de wa jo ní gbo o ará wá",
              "Won ní je kí ofà rè won",
              "Wá ní je ki ofà rè won",
              "Oluaiyè a aréré",
              "Oluaiyè a ago gbo"
            ],
            "traducao": "Venha até nós grande caçador; Iroko, filho de caçador, só faz o bem; Ibo, venha fazer o bem em nosso altar; O cumprimentamos Senhor da caça. Traga para nós o alimento; Sua caça nos alimenta e nos dá vida; Os filhos de santo batem o Arò para que o caçador venha se manifestar em nossa casa; Agradecemos pela comida que nos dá; Senhor caçador, venha receber nossos agradecimentos pela comida que nos dá; Rei caçador; Rei caçador nós cremos em ti."
          },
          {
            "rotulo": "Trecho 5",
            "letra": [
              "Oluaiyè aréré ago gbo",
              "Oló dó bí ewè",
              "Oló dó bí ewè bàbá",
              "Wá wá lè ko de Omo odè",
              "E ati rè okè ní lè imoye",
              "O Dana-dana",
              "Ti sè eran odè",
              "Kí rí kí rí bodè",
              "Odè ni o"
            ],
            "traducao": "Rei caçador nós cremos em ti; ele nasceu na mata, o pai gerou seu filho na mata; filho do caçador, venha mostrar seu poder nesta casa; o Senhor caçador tem poder e sabedoria; ele é Dana-Dana, o bom caçador que prepara a sua caça; cumprimentamos ao encontrar o Sr. Caçador, ele é um grande caçador."
          },
          {
            "rotulo": "Trecho 6",
            "letra": [
              "O ní aráiye Ibo si",
              "O ní aráiye Ibo si ma lè ké o àjo",
              "Ibo si ma wé ki o àjo",
              "O ni aráiye odè aréré oké",
              "Àwa ní ko de lò ke",
              "Odè a pà o eran",
              "Àwa ní ko de lò ke",
              "Odè a pà o eran",
              "Odè bi ewè",
              "Odè lò ké o a pà o eran"
            ],
            "traducao": "Ibo atende a todos nós; Ibo atende a todos nós. Podemos contar com seu poder por toda a nossa jornada; Podemos contar com Ibo por toda a nossa jornada; Ele é, para todos, o Rei caçador; Cantamos para ele que fala mais alto; O caçador é quem mata a caça e traz a carne; Cantamos para ele que fala mais alto; O caçador é quem mata a caça e traz a carne; ele nasceu na mata; O rei que fala mais alto é quem mata a caça e traz a carne."
          },
          {
            "rotulo": "Trecho 7",
            "letra": [
              "Odè kí a mò de odè",
              "Odè kí a mò de odè",
              "Odè aréré",
              "Odè kí a mò de odè ni ma wó",
              "Odè ki a mò de odè òòni e",
              "Ago gbo mi rò òsè mi ro",
              "Orò ìmale",
              "O si bodè",
              "E o si bodè",
              "Arolè o si bodè"
            ],
            "traducao": "Nós cumprimentamos o Rei caçador pois o conhecemos; Nós cumprimentamos o Rei caçador pois o conhecemos; Salve o Rei caçador; Nós cumprimentamos e reverendamos o Rei caçador; Nós cumprimentamos o Rei caçador. Ele é o Rei da nação Yorubá; Todos cremos que o nosso ritual é benéfico; Nosso culto é para homenagear e cultuar nossos ancestrais; Ele é o vento; Ele é o vento; Arolè é o vento."
          },
          {
            "rotulo": "Trecho 8",
            "letra": [
              "E o si bodè",
              "O ní dá wó",
              "O ní dá wwó ní ma lè",
              "O ní dá wó lè mimó",
              "Ofà mi lò si",
              "Abo wá",
              "Abo wá là abó",
              "Alaketu e",
              "Sa lò kun odara",
              "Sa lò kun odara"
            ],
            "traducao": "Ele é o vento; ele nasceu para caçar; Ele tem o poder de caçador; Ele tem o poder sagrado de caçador; Ele usa seu arco e flecha; Para nos proteger; Para nos proteger e abrir nossos caminhos; Venha ao Reino de Ketu; Aceite o convite; Aceite o convite."
          },
          {
            "rotulo": "Trecho 9",
            "letra": [
              "Sa lò kun odara Arolè",
              "Sa lò kun odara",
              "Ma ba isé isé Ìrokò",
              "E abo wá e",
              "E abo wá",
              "Ofà ofà bèru já",
              "Ofà ofà bèru já",
              "Ofà ofà bèru já ni Ibo",
              "Ofà ofà bèru já lò de",
              "Àwa ta pà ta pà rò de"
            ],
            "traducao": "Aceite o convite do Rei de Ketu; Aceite o convite; Iroko sempre nos ajuda com os trabalhos; Ele vem nos amparar; Ele nos ampara; O arco e flecha é a sua arma de luta; O arco e flecha é a sua arma de luta; Ibo tem um arco e flecha para lutar; O arco e flecha do caçador é usado para caçar; Nós manuseamos a caça que vai morrer, com respeito."
          },
          {
            "rotulo": "Trecho 10",
            "letra": [
              "Àwa ta pà ta pà àwo",
              "Ará ará a we",
              "Ajé we lè ajé we lè o dá pà lò si",
              "Kí tí kí tí Ibo alé mi rù wa",
              "Ódá pà we si Ibo",
              "Kí tí kí tí Ibo alé mi rù wa",
              "Ale si ko",
              "Arolè o inaio ke o ajo"
            ],
            "traducao": "Nós manuseamos a caça que vai morrer para o culto; ela tem dono, por isso a tratamos com respeito; cobrimos a cabeça em respeito às bênçãos do ajé (sangue do animal que cai), que é para nos salvar; cumprimentamos Ibo, que nos salva dos perigos; Ibo nos protege durante a noite e nos protege dos perigos; Rei de Ketu, pedimos que ilumine a nossa jornada."
          },
          {
            "rotulo": "Trecho 11",
            "letra": [
              "O ní aráiye",
              "Ke o inaio ke o ajo",
              "O ké arò o ké",
              "O ké arò",
              "Òsè ni bò kun",
              "Odè aké lem",
              "Odè ilè",
              "Okè arò, okè",
              "Omo odè Omo kí kí o yo-jáde",
              "Omo odè Omo kí kí o yo-jáde"
            ],
            "traducao": "Ele ajuda a toda humanidade; Pedimos que nos ilumine em nossa jornada; Nós te chamamos Oxossi, nós te chamamos; Nós te chamamos; Ajude-nos em nosso ritual; Caçador, traga a sua força; Caçador em nossa casa de santo; Nós te chamamos; Filho do caçador, apareça para que possamos cumprimentá-lo; Filho do caçador, apareça para que possamos cumprimentá-lo."
          },
          {
            "rotulo": "Trecho 12",
            "letra": [
              "Omo odè odè yio ajadi we lè",
              "Omo odè odè yio ajadi we lè",
              "Siré, siré",
              "Odè ma ta òrè òrè",
              "Siré, siré",
              "Já bè lè okè ílò rò odè ma ta àgo lóna",
              "E rere fibo odè Fibo",
              "Pè rere Afoxé Omo odè",
              "E mò re lè ko lè",
              "Omo odè"
            ],
            "traducao": "Filho do caçador, tocamos o adja e danamos em sua homenagem, caçador; Filho do caçador, tocamos o adja e danamos em sua homenagem, caçador; Festa, festa; O caçador sempre confraterniza com os amigos; festa, festa; Com sua licença cantamos e pedimos que confraternize conosco e que sua paz nos alcance; Odè Fibo é encantador; Chamamos o filho do caçador com seu encanto para o Afoxé; Nós conhecemos seu poder sobre a terra; Filho do caçador."
          },
          {
            "rotulo": "Trecho 13",
            "letra": [
              "E odè ma ta",
              "E odè lè",
              "O ní pepe",
              "Siré, siré",
              "Odè ma ta òrè òrè",
              "E jô jô balé",
              "Iná ba ta tó ba lé",
              "Aráiye",
              "Odè aréré oke",
              "E Òrisà rélo"
            ],
            "traducao": "Ele sempre confraterniza; Ele é um caçador poderoso; Ele tem um reino; festa, festa; O caçador sempre confraterniza com os amigos; Ele é o chefe da comunidade e dança; A luz do chefe da comunidade ajuda e ilumina a todos; A humanidade; Saúda o Rei caçador; Ele é um Orixá sedutor."
          },
          {
            "rotulo": "Trecho 14",
            "letra": [
              "E oun ofà Akueran",
              "Odè ni tà fasoké",
              "Ba lè ode ní tà fasoké",
              "E odè aráiye ode pà ra ká de",
              "E odè aráiye ode pà ra ká de",
              "E wá wá wá odè ní lè àwa",
              "Odè kí ni jó",
              "Omo odè lóní",
              "Omo odè oluayè",
              "Odè balè já mi rò"
            ],
            "traducao": "Ele é Oxossi Akueran; O caçador sempre nos ajda; Com seu poder o caçador sempre nos ajuda; O caçador alimenta a humanidade com seus frutos e sua caça; O caçador alimenta a humanidade com seus frutos e sua caça; Caçador venha, venha trazer suas bênçãos para nós; O caçador com sua dança nos cumprimenta; Todo dia é dia do Filho do caçador; Filho do caçador é o Senhor do Mundo; Caçador com seu poder de luta acalma tudo e nos ajuda."
          },
          {
            "rotulo": "Trecho 15",
            "letra": [
              "Odè balè já mi rò",
              "E sìn ké lè Arolè",
              "E sìn ké lè Arolè",
              "E Arole e ma là ko",
              "E Arole e ma là kó-lekó"
            ],
            "traducao": "Caçador com seu poder de luta acalma tudo e nos ajuda; Arole nós pedimos a sua ajuda; Arole nós pedimos a sua ajuda; Rei de Ketu sempre nos ensina; Rei de Ketu sempre nos doutrina."
          }
        ]
      },
      {
        "id": "ossaim",
        "nome": "Ossaim",
        "subtitulo": "ÒSÁNYIN",
        "cor": "#7FB43A",
        "video": "MuRjEAFetNE",
        "youtube": "https://youtu.be/MuRjEAFetNE?si=5szyZLzHA-mRZjSy",
        "fonte": "http://ileaseegbeomorisaogum.blogspot.com/2012/11/cantigas-de-xire-de-ossaim.html",
        "cantigas": [
          {
            "rotulo": "Trecho 1",
            "letra": [
              "Pèrègún a lá we titun o",
              "Pèrègún a lá we titun o",
              "Gbogbo pèrègún a lá we lessé",
              "À àjá lé o pèrègún lá to ni o",
              "Ewè pèrègún lá to ni o",
              "A n’sé irúnmolè a ewè àjè bi imolè",
              "A ewè kí a jé",
              "A wá ku rò yá wá lorí òkun",
              "Pèrègún lá to ni o",
              "Abebe ni bó wá",
              "Abebe ni bó"
            ],
            "traducao": "As folhas frescas do Peregum devem ser manuseadas com respeito; os filhos de santo respeitam as folhas frescas do peregum; tocamos o adjá em homenagem ao peregum, que tem um grande poder; das folhas do peregum nasceu uma mulher encantada que dá a essa folha todo o poder da natureza; nós saudamos suas folhas; ela leva os espíritos da escuridão para outro lugar além do mar; o peregum tem um grande poder; venha com seu grande leque."
          },
          {
            "rotulo": "Trecho 2",
            "letra": [
              "E abebe",
              "Abebe ni bó wá",
              "Abebe ni bó",
              "Àtá koró ojú ewè",
              "Àtá koró ojú ododún",
              "Àtá koró ojú ewè",
              "A lelé koró ojú ododún",
              "Àwa orò sìn ma",
              "Ódó ro dun",
              "Òpeèré Òsányin èhin si búkun rù ide ará ká"
            ],
            "traducao": "Seu leque; Venha com seu grande leque; Com seu grande leque; Veja que a cumieira está com as suas folhas; Veja que uma vez por ano colocamos suas folhas na cumieira; Veja que a cumieira está com as suas folhas; Veja que anualmente cobrimos o chão com suas folhas; Nosso culto sempre homenageia; A presença agradável e doce desse jovem; O pássaro de prata de Ossanhe voa de costas e ela o traz na cabeça. Bendizemos esse espírito que abençoa a colheita de frutas."
          },
          {
            "rotulo": "Trecho 3",
            "letra": [
              "Sawo òpeèré",
              "Òpeèré ni o pé were",
              "Sawo òpeèré",
              "Opé ni o pé sàn gò",
              "Mò njá ewè pé mò só",
              "Mò njá ewè pé mò só rò",
              "E pín ló pé mi",
              "E pín ló Yia mi"
            ],
            "traducao": "Veja! O pássaro!; Encontramos o pássaro e o anão; Veja! O pássaro!; à sua presença devemos demonstrar gratidão; Para pegar as folhas temos que encontrar quem toma conta delas; Para pegar as folhas temos que encontrar e acalmar quem toma conta delas; Usamos as folhas que encontramos para remédio; Nossa mãe quem nos ensinou a usar."
          }
        ]
      },
      {
        "id": "omolu",
        "nome": "Omolu / Obaluaiê",
        "subtitulo": "OMOLU",
        "cor": "#B09680",
        "video": "OmjQ3pQubBI",
        "youtube": "https://youtu.be/OmjQ3pQubBI?si=fb7qz6_o6HotEIXk",
        "fonte": "http://ileaseegbeomorisaogum.blogspot.com/2012/11/cantigas-de-xire-de-omolu.html",
        "cantigas": [
          {
            "rotulo": "Trecho 1",
            "letra": [
              "Wá to to a jú gbé rò!",
              "Dagò lu nà ke wa Saworo",
              "Dagò lelé",
              "Dagò lu nà ke wa Saworo",
              "Dagò lelé",
              "Omolu a fá rà we we",
              "Fá rà fá rà fá ro",
              "Ji ja Pepe",
              "E lò obi wa re",
              "Tori bóri"
            ],
            "traducao": "Ele é o médico que vem nos acudir; Dê-nos licença para tocar o Saworo para que nos acuda; Pedimos licença humildemente; Dê-nos licença para tocar o Saworo para que nos acuda; Pedimos licença humildemente; Omolu, abençoe as nossas cabeças raspadas e nos livre das doenças; Cobre nossas cabeças raspadas e abençoadas por vós; Venha abençoar nossa altar com sua presença; Venha cortar o Obi que proteje a nossa existência; Por isso fizemos o bori."
          },
          {
            "rotulo": "Trecho 2",
            "letra": [
              "Ji já Pepe Ori Je nà Pà ba",
              "O sí e to bò wa lè",
              "Ori Je nà Pà ba",
              "O sí e to bò wa lè",
              "E ké rè nù bé ké rè",
              "E ké rè nù bé ké rè",
              "E àgò Òmolu já e e lè ní wa bèrè ko",
              "E lè ní wa Omolu já e lè ní wa bè rè ko",
              "Lá o pè rè ní sò dá",
              "Èjó e sò èjó"
            ],
            "traducao": "Aquele que dá vida e saúde às nossas cabeças também pode nos castigar com a morte; Nós te adoramos até a hora da morte pois vós nos acompanha até depois dela; Aquele que dá vida e saúde às nossas cabeças também pode nos castigar com a morte; Nós te adoramos até a hora da morte pois vós nos acompanha até depois dela; Clamamos a vós que nos purifica, clamamos por vós; Clamamos a vós que nos purifica, clamamos por vós; Omolu nos de licença para invocarmos sua força que vem da terra, de onde viemos e para onde iremos; Omolu, vosso poder vem da terra. Dela viemos e para ela voltaremos; Temos em nós a gratidão por ti que nos criastes. Nos purifique; Descarregue-nos e nos livre das doenças."
          },
          {
            "rotulo": "Trecho 3",
            "letra": [
              "E ba aìsan ní mora e",
              "Já ba to là ba rè awa",
              "Omolu bé wa rà e Omolu bé wa rà o",
              "Omolu bé wa rà e Omolu bé wa rà o bò bò",
              "E ága ké ba ìwà ága ke ba ìwà",
              "E ko lè ko lè saworo",
              "Já bè lè ké ajo o fàiyakò",
              "Àwa ní ko ajo",
              "A dí dà bò loná bè wa asa o orò",
              "Àgò ile ìlera bo loná"
            ],
            "traducao": "Esteja junto de nós e nos ajude quando estivermos doentes; Esperamos por sua ajuda nesta nossa luta; Omolu, pedimos que venha nos ajudar nesse início de caminhada; Omolu, pedimos que venha nos ajudar nesse início de caminhada. Salve-nos, salve-nos; Do seu trono respeitoso e humilde ouve nossos lamentos e nos ajude; Seu poder é a terra e o saworo a nossa humildade e respeito para convosco; O seu abraço e sua força nos ajuda e nos protege em nossa jornada; Na nossa jornada pela Terra; Nós o adoramos no tempo e pedimos de novo que venha, como sempre, ao nosso oro; Nós pedimos licença para louvá-lo dentro da nossa casa para que nos socorra."
          },
          {
            "rotulo": "Trecho 4",
            "letra": [
              "Bè wa asa o orò",
              "O a jerí loná",
              "Ódo bàbá",
              "A we ba bè ba yò áwa dokítà",
              "Onílè wà",
              "Lèsé Òrisá",
              "Onilè wà",
              "Kòlòbó",
              "E kolòbó e kolòbó simi, simi, simi, simi",
              "Omolu aráiye ba jeun ba ekó",
              "Òní e Omolu ba jeun ba ekó",
              "Aloré be we gbérè mí daiyàfò",
              "Omolu pè olóre a wù rè a kú abò"
            ],
            "traducao": "Pedimos que venha ao nosso oro; venha com seu capuz de palha ajudar-nos em nosso culto, como médico, para que possamos viver felizes; o Senhor da terra está entre nós que cultuamos Orixá, agradecemos felizes por estar entre nós; em sua pequena cabaça traz remédios para nos livrar das doenças; nós respeitamos a terra que serve para o descanso; adoramos a terra e a usamos com respeito; Omolu, ajude a humanidade (filhos de santo) que se alimenta com ekó; Omolu que cobre a cabeça por causa de sua intensa luz, pedimos ajuda para que nos sustente nessa vida; nos curvamos em respeito e pedimos que venha até nós receber as oferendas que lhe dedicamos; Omolu, seja bem-vindo! Nosso benfeitor! Nós o chamamos para agradá-lo."
          },
          {
            "rotulo": "Trecho 5",
            "letra": [
              "Ja npènpè e lò gbé wà layè_",
              "Tó ní gbón mì o",
              "Ja npènpè_Omolú wà layè",
              "Tó ní gbón mì o",
              "Kóró nló áwo, kóró nló áwo se o gbé je",
              "Kóró nló áwo, kóró nló áwo se o gbé je",
              "O àtà lábé o ko rí",
              "O kilò fun àtà lábé o ko ri",
              "Abe mi lorí bè ri onilé oluayè",
              "O àtà lábé o ko rí"
            ],
            "traducao": "O chamamos para que use suas folhas medicinais para nos socorrer nesta vida; Para o senhor, tocamos o adja o tempo que for preciso; Omolu, o chamamos para que use suas folhas medicinais para nos socorrer nesta vida; Para o senhor, tocamos o adja o tempo que for preciso; estamos indo ao culto, estamos indo ao culto para receber sua ajuda; estamos indo ao culto, estamos indo ao culto para receber sua ajuda; Ele fica embaixo da cumieira, na terra, que é de onde ele nos assiste; De lá ele nos avisa dos perigos, embaixo da cumieira, na terra, que é de onde ele nos assiste; Dono da terra, Senhor do mundo que está acima de nós; Ele fica embaixo da cumieira, na terra, que é de onde ele nos assiste."
          },
          {
            "rotulo": "Trecho 6",
            "letra": [
              "Lo ní aló ìyìn gè ni a",
              "Aja kunlowo ìyìn gè ni a",
              "O àtà lábé o ko rí",
              "Ajunsun, aráiye lorí Ìyìn gè ni a",
              "Ewá kalo",
              "Sakpata, ewá kalo",
              "Ìyìn gè ni a",
              "A ìyìn gè ni a ágo ìyìn gè ni a",
              "A kalo a Ìyìn gè ni a",
              "Ago nile ní lè ma dagò"
            ],
            "traducao": "Hoje, nossas mãos estão postas em seu louvor; O Adja nos ajuda a louvá-lo; Ele fica embaixo da cumieira, na terra, que é de onde ele nos assiste; Ajunsun, vós que estais acima de nós. Te louvamos e reconhecemos seu valor; Sua luz nos guia; Sakpata, sua luz nos guia; Nós reconhecemos seu valor e o louvamos; A humanidade o elogia e o louva. Nós o louvamos e o elogiamos; Nós reconhecemos seu valor e o louvamos. Caminhamos com sua luz; A humanidade lhe pede licença pelo seu poder."
          },
          {
            "rotulo": "Trecho 7",
            "letra": [
              "Sakpata, Ajunsun ma dagò",
              "Ago ní lè ma dagò",
              "Gbé lè iko o àtà lábé o ko rí",
              "Gbé lè iko o àtà lábé o ko rí",
              "We lè iko sa là sa là re o ní",
              "We lè iko sa là sa là re o ní",
              "O ìyìn gè ni a pàdé o ló ri pà",
              "O ìyìn gè ni a pàdé o yò ló ri pà",
              "Opè ma díjo père ké se",
              "Ma díjo hàn ma díjo pè"
            ],
            "traducao": "Sempre pedimos licença para Sakpata e Ajunsun; A humanidade lhe pede licença pelo seu poder; Pelo seu poder, colocamos a decisa em baixo da cumieira, na terra, para receber sua ajuda; Pelo seu poder, colocamos a decisa em baixo da cumieira, na terra, para receber sua ajuda; Sua cabeça é coberta com palha para ofuscar a sua luz e seus mistérios por isso ela não pode ser aberta; Sua cabeça é coberta com palha para ofuscar a sua luz por isso ela não pode ser aberta; Nós o louvamos e bendizemos juntos para que afaste de nós a morte; Nós o louvamos e bendizemos juntos com nossa alegria, para que afaste de nós a morte; Sempre cantamos alto e juntos somente para agradecer; Sempre juntos nos manifestamos, sempre juntos o chamamos."
          },
          {
            "rotulo": "Trecho 8",
            "letra": [
              "Opè ma díjo père ké se",
              "Ma díjo hàn ma díjo pè",
              "Do hàn a do hàn a yèpè",
              "Bè lè iko sa láré o kórin",
              "Omolu ki bè hù já",
              "O lò gbo sè a jeum bó",
              "O lò gbo sè a jeum bó ro e",
              "O ìyìn gè ni a Baba sí e bò ale"
            ],
            "traducao": "Sempre cantamos alto e juntos somente para agradecer, sempre juntos nos manifestamos, sempre juntos o chamamos; juntos nos manifestamos para vós, na terra; cantamos para que sua poderosa luz, que sua palha esconde, nos ajude; Omolu, o cumprimentamos e pedimos uma boa colheita; nós cozinhamos e nos alimentamos com fé em ti, que nos tranquiliza; nós o louvamos e o glorificamos, Pai das doenças contagiosas, nós o adoramos e o recebemos."
          },
          {
            "rotulo": "Trecho 9",
            "letra": [
              "Umbó àlejò",
              "E jò àlejò",
              "E jò àlejò",
              "Áfaradà lè jé hù lelé",
              "Omolú to lè kè eran ènia",
              "E rò e rò ékun",
              "O ni e mò ri ba mejá ké",
              "Olodè ayè mò ri ba mejá ké ké",
              "Obalúwàiyé mò ri ba mejá",
              "Ké ké olodè ayè"
            ],
            "traducao": "As visitas estão chegando e dançam para vós; esperando resignados que o seu poder, que está embaixo da cumieira, possa beneficiá-los; Omolu, clamamos para que seu poder atue em nossos corpos, estamos de joelhos para que nos cure; clamamos por vós, Senhor que está onde o céu alcança, para que venha nos ajudar com sua luz brilhante; Obaluaê, venha nos ajudar com sua luz brilhante."
          },
          {
            "rotulo": "Trecho 10",
            "letra": [
              "Akan ki fá bó a",
              "Akan ki fá bó a o",
              "Ki nibí fá rò fá rò ti",
              "Ki ní bi fá rò áfaradà",
              "O ki ní pokó",
              "O ní e",
              "Ki nibí wa áfaradà",
              "Omolú to lè kúnlè rò e lò lò ékun",
              "Omolú to lè kúnlè rò e lò lò ékun",
              "Omolú to lè kúnlè rò e lò lò ékun"
            ],
            "traducao": "Cumprimentamos e adoramos vossa luz que chega até nós pouco a pouco; Cumprimentamos e adoramos vossa luz que chega até nós pouco a pouco; Louvamos neste lugar, o médico que, resignado, sempre nos atendeu; Louvamos o médico que sempre nos atende com resignação; O que tem no seu copo feito de casca de coco; Dá para todos; Sua resignação é digna de louvor nesta casa; Omolu, aguardamos de joelhos o seu poder para sermos abençoados por vós; Omolu, aguardamos de joelhos o seu poder para sermos abençoados por vós; Omolu, aguardamos de joelhos o seu poder para sermos abençoados por vós."
          },
          {
            "rotulo": "Trecho 11",
            "letra": [
              "Ni a lò ìyìn gè ni a",
              "Aja ko to lò ìyìn gè ni a oluayè",
              "O ata lábé o ko rí",
              "Béèni ko rí bè rí o ni je oluayè",
              "O àtè lábé o ko rí",
              "Hù lò hù lò",
              "Onilé bè lè bè ko o"
            ],
            "traducao": "È para vós os nossos louvores; Tocamos o adja o tempo que for necessário para louvar e glorificar o “dono do mundo”; Glorificamos sua força e colocamos a decisa embaixo da cumieira em sua homenagem para que venha nos ajudar; Molhamos a terra para ver brotar o nosso alimento que vem com as bênçãos do “dono do mundo”; Colocamos a decisa embaixo da cumieira em sua homenagem e para que venha nos ajudar; Usamos os frutos que a terra dá. Usamos os frutos que a terra dá.; Dono da terra pedimos que sua força mantenha a nossa terra sempre fértil."
          }
        ]
      },
      {
        "id": "oxumare",
        "nome": "Oxumarê",
        "subtitulo": "ÒṢÙNMÀRÈ",
        "cor": "#B9C43A",
        "video": "kDXrK0uv4rk",
        "youtube": "https://youtu.be/kDXrK0uv4rk?si=IEb2Rihn2sLvei43",
        "fonte": "http://ileaseegbeomorisaogum.blogspot.com/2012/11/cantigas-de-xire-de-oxumare.html",
        "cantigas": [
          {
            "rotulo": "Trecho 1",
            "letra": [
              "Arò bó bò Yí!",
              "Òsunmarè lelé mo rí Òsunmarè",
              "Lelé mo rí rà ba ta",
              "Lelé mo rí Òsunmaré",
              "Ódí náà léwà",
              "Léwà léwà e",
              "Ódí náà léwà",
              "Léwà léwà e",
              "O bi òjò birí bò",
              "O mió aráiye",
              "Jô ma ndi o pe"
            ],
            "traducao": "Neste dia que nasce lhe rendemos graças; Oxumarê encontra-se andando no chão, é preciso saber encontrá-la, pois ela se esconde — tenha cuidado por onde anda para não pisá-la; ela é teimosa, mas também é bela; ele surge através de pequenas gotas de chuva, água doce que sustenta a humanidade; ele sempre vem quando o chamamos."
          },
          {
            "rotulo": "Trecho 2",
            "letra": [
              "Jô ma ndi o pe",
              "E sìn a bebe ko e dìde",
              "E sìn a bebe ko e dìde",
              "O dí ma dí ma",
              "Òsunmarè aidan",
              "Ma sán rí ma sa ibó",
              "E e e o fi-ko fi opè",
              "Arò bó bò yí! U nké lè sìn",
              "A ni wère lókan",
              "Àwa e kó oribande"
            ],
            "traducao": "Ele sempre vem quando o chamamos; Nós adoramos sua dança e seu ato de ir ao chão e depois se levantar; Nós adoramos sua dança e seu ato de ir ao chão e depois se levantar; Ele sempre foi, sempre foi; Oxumare sempre foi belo; O céu é um lugar de adoração; Devemos olhá-lo com respeito e dar graças; Aróbò bò yi louvamos e cultuamos sua força; Vós sois um jovem bravo!; traga para nós a boa sorte."
          },
          {
            "rotulo": "Trecho 3",
            "letra": [
              "E hàn oribande",
              "Àwa bí a ma gbo ji bè",
              "E ba kú èwe lè",
              "Arò bó bò yí! A bo mojúbà a wù rí ko kun",
              "A ro lè",
              "A lè a lè a pà ra dà",
              "A lè a lè apà ra o",
              "Wù lè ké wá o jó rí o",
              "Wé wé ké",
              "Wá o jó rí o"
            ],
            "traducao": "A sua presença nos traz a boa sorte; A cada dia que despertamos damos graças para que, assim como o dia que nasce, tenhamos também nossas vidas renovadas; a cada dia que nasce, nossas vidas possam ser renovadas com a sua força; Nós o adoramos! Mojubá! Nós o reverendamos quando vemos o arco-íris; Nele encontramos sua força; Seu poder e sua força o permite ficar invisível; Ele pode estar caminhando ao nosso lado sem que possamos vê-lo; Cantamos para louvar sua força e agrada-lo. Venha dançar para que possamos vê-lo; Rola, rola e dança; Vem dançar para que possamos vê-lo."
          },
          {
            "rotulo": "Trecho 4",
            "letra": [
              "Ké ké dá lè mi ìran lê wá",
              "Ké ké dá lè mi ìran lê wá",
              "Òsunmaré lè lê ma rì",
              "Lè lê ma húwà ara ká",
              "Lè lê ma rè Òsunmaré",
              "Ko bé jijó",
              "Òsunmaré ko bé jijó",
              "Ara ká ko bé jijó",
              "Lesse Orisà",
              "Lesse ko ma fò"
            ],
            "traducao": "Cantamos, cantamos para que traga sua força até nós que somos sua família; Cantamos, cantamos para que traga sua força até nós que somos sua família; Òsunmaré é poderoso; Ele pode enrolar o corpo com seu poder; Você é poderoso Òsunmaré; pedimos que dance indo até o chão; Òsunmaré, pedimos que dance indo até o chão; Pedimos que dance em torno de si mesma indo até o chão; Somos filhos de Orixá; Os filhos de Orixá mantém o chão sempre lavado."
          },
          {
            "rotulo": "Trecho 5",
            "letra": [
              "Sá ro ho",
              "Lesse Orisà",
              "Lesse ko ma fò",
              "Sá ro ho",
              "Òsunmaré ló ké rè Òsunmaré",
              "Òsunmaré se umbó",
              "Se umbó",
              "O se umbó",
              "Wá là koró léhìn ni",
              "Wá là koró léhìn ni"
            ],
            "traducao": "Para que você possa dançar no chão e não se ferir; Somos filhos de Orixá; Os filhos de Orixá mantém o chão sempre lavado; Para que você possa dançar no chão e não se ferir; Òsunmaré, cantamos para sua despedida O ló ké rè (Cantamos para ele se despedir; Òsunmaré está presente; Está presente; Ele está presente; Ele está escondido, venha para este lugar; Ele está escondido, venha para este lugar."
          },
          {
            "rotulo": "Trecho 6",
            "letra": [
              "Òsunmaré ní fe run dá dán",
              "Ní fé run dá dán",
              "O ba hàn si o kun",
              "Àlejò, Àlejò",
              "O ba hàn si o kun",
              "Ba hàn, ba hàn si o kun",
              "Suré, e suré",
              "Ba hàn, ba hàn si o kun",
              "Arò bó bò yí! Aké lè sí",
              "O hun jé lè iko kun"
            ],
            "traducao": "Òsunmaré é uma luz brilhante que gostamos de ter; É uma luz brilhante que gostamos de ter; Mostre seu arco-íris e venha nos ajudar; Venha nos visitar, venha nos visitar; Mostre seu arco-íris e venha nos ajudar; Mostre seu arco-íris e venha nos ajudar; Nos abençoe, nos abençoe; Mostre seu arco-íris e venha nos ajudar; Arò bó bò yí! Ele tem um machado para nos proteger; Sua palha da costa é colorida (as cores representam seu poder."
          },
          {
            "rotulo": "Trecho 7",
            "letra": [
              "U Vodun nos adó dé",
              "Arò bó bò yí! Aké lè sí e u jé lè Vodun jé",
              "E ara ká ló bó ro",
              "Àwa dé wò",
              "Òsunmarè àwa dé wó",
              "Vodun àwa dé wò",
              "Òsunmarè o",
              "A ma rà ka lódódun",
              "Àtà te lówó",
              "Òsunmarè o"
            ],
            "traducao": "Ele é Orixá e nos abençoa com adó (comida feita com pipoca e azeite doce; Arò bó bò yí! Ele tem um machado para nos proteger e nos curvamos ao poder que tem esse Orixá; Vosso corpo vai se enrolando até o chão; Nos curvamos para que nos abençoe; Osunmarè enrola o corpo e vai até o chão; Curvamo-nos a este Orixá para que nos abençoe; Ele é Òsunmarè; Uma vez ao ano nos curvamos; Na cumieira pedindo fartura para o ano todo; Para Òsunmarè."
          },
          {
            "rotulo": "Trecho 8",
            "letra": [
              "A ma rà ka lódódun",
              "Àtà te lówó",
              "Òsunmarè o",
              "Òòni se wá",
              "Òòni se wá",
              "O dá bo",
              "Ajelé lù wè",
              "Òrisà ta bè lò",
              "Vodun tata un dé",
              "E dan, dan, dan"
            ],
            "traducao": "Uma vez ao ano nos curvamos; Na cumieira pedindo fartura para o ano todo; Para Òsunmarè; Orixá Rei da nação Yorubá venha nos ajudar; Orixá Rei da nação Yorubá venha nos ajudar; O Senhor nos orienta e nos ajuda; Governador, venha nos consagrar; Pedimos que nos ilumine; Orixá chefe, cubra-nos; Ele é uma serpente, serpente, serpente."
          },
          {
            "rotulo": "Trecho 9",
            "letra": [
              "Jó árin da ji dan"
            ],
            "traducao": "Ele é uma serpente criada e dança e torno do asè."
          }
        ]
      },
      {
        "id": "nana",
        "nome": "Nanã",
        "subtitulo": "NÀNÁ",
        "cor": "#9B7BC4",
        "video": "drQ_jzGm3c8",
        "youtube": "https://youtu.be/drQ_jzGm3c8?si=rKxXN5gri-4rI6qN",
        "fonte": "http://ileaseegbeomorisaogum.blogspot.com/2012/11/cantigas-de-xire-de-nana.html",
        "cantigas": [
          {
            "rotulo": "Trecho 1",
            "letra": [
              "Yìn Nàná yò",
              "O lù obó",
              "Nana Yò",
              "Yìn Nàná yò",
              "O lù obó",
              "Nàná Yò",
              "O ko lodò sìn sa lè wá",
              "A rìn kú ma oun rè",
              "O ko lodò sìn sa lè wá",
              "A rìn kú ma oun rè"
            ],
            "traducao": "Nanã fica feliz ao ser glorificada; Tocamos para homenageá-la; Nana fica feliz; Nanã fica feliz ao ser glorificada; Tocamos para homenageá-la; Nàná fica feliz; Ela está na terra úmida do rio. Traga seu poder até nós; Para todos nós que caminhamos sempre em direção à morte; Ela está na terra úmida do rio. Traga seu poder até nós; Para todos nós que caminhamos sempre em direção à morte."
          },
          {
            "rotulo": "Trecho 2",
            "letra": [
              "Sa là wá jo",
              "Olu wò kú ké wá jo",
              "Sa là wá jo",
              "Olu wò kú ké wá jo",
              "Oloré",
              "Eni ko ri bobò",
              "Ki àwa lè Omo nilè ko rá ajo",
              "Nàná Yìn kú re Omo nilè ko rá àjo",
              "Ko rá jo, ko rá jo",
              "O fé le lè"
            ],
            "traducao": "Cantamos para que venha rogar por nós; Curvamo-nos e clamamos Senhora para que venha nos proteger da morte; Cantamos para que venha rogar por nós; Curvamo-nos e clamamos Senhora para que venha nos proteger da morte; Nossa benfeitora; Veja todos que estão na esteira; Nós, os filhos desta casa saudamos sua presença e seu poder neste lugar e em nossas vidas até o fim; Os filhos desta casa pedem à Nana que nos ajude em nossa jornada até depois da morte; Em nossa jornada até o fim da vida; Seu amor e seu poder são capazes de nos acompanhar até depois da morte."
          },
          {
            "rotulo": "Trecho 3",
            "letra": [
              "Nàná kú ré",
              "Omo nilè ko rá àjo",
              "O dí Nàná e wá léwà e",
              "O dí Nàná e wá léwà e",
              "E Nàná oluaye",
              "We pà pà",
              "A là yá jo olu ódo",
              "Ké wá jo",
              "Abi ma ma kú ma ka ode oribande",
              "Abi ma ma kú ma ka ode oribande"
            ],
            "traducao": "Nos ajude Nana até depois da morte; Os filhos da casa pedem sua ajuda até depois da morte; Nana, venha até nós com sua grandeza; Nana, venha até nós com sua grandeza; Nana é a Senhora do mundo; Proteja-nos da morte, morte; Grande Senhora, a sua presença nos encoraja; Cantamos para que se manifeste; Do nascimento até à morte estás ao nosso lado e em qualquer caminho nos trazendo sorte; Do nascimento até à morte estás ao nosso lado e em qualquer caminho nos trazendo sorte."
          },
          {
            "rotulo": "Trecho 4",
            "letra": [
              "Àwa o lò bí ma a yo olokó",
              "Nàná yò",
              "Nàná yiá ko lodò",
              "Nàná Òrisà",
              "Nàná e Nàná yò",
              "Nàná yiá ko lodò",
              "O dí Nàná Yò",
              "Obìnrin sá sá o lódè",
              "Obìnrin sá sá",
              "O dí Nàná Yò",
              "Nàná yò olu odò se se"
            ],
            "traducao": "Podemos sempre fazer uso de sua lança para obter felicidade; Nanã nos traz felicidade; Nanã é a Senhora do solo úmido, Nanã é Orixá; ela é a Senhora que vive onde a terra é úmida, a convidamos para que entre; Nanã nos traz felicidade, ela é a Senhora do rio e da criação."
          },
          {
            "rotulo": "Trecho 5",
            "letra": [
              "Ibiri odara ódo se àwa rè",
              "Nàná olu odò",
              "Olu ase Yìn se yìn",
              "Ibiri odara ódo se àwa rè",
              "Ko mò rè dìde",
              "Ibiri odara ódo se àwa rè",
              "A yìn saalare",
              "A ikú wò lò se",
              "A yìn saalare",
              "A ikú wò lò se"
            ],
            "traducao": "O Ibiri é o ornamento que ela carrega sempre para fazer o bem; Nanã é a Senhora do rio; saudamos a força desta Senhora; venha de sua morada nos abençoar com seu conhecimento; Nanã é a Senhora do rio; saudamos Nanã, curvamo-nos a ela que nos ajuda até a hora da morte."
          },
          {
            "rotulo": "Trecho 6",
            "letra": [
              "O yiá wá ore o ni a yiá lodè",
              "Ni odún ké dá tí ba bá rè ibó ni-ori ma",
              "Lodè domi ibó Yìn ibò",
              "O ní se saalare se yiá lodè ilú yìn",
              "E Nàná e wá o"
            ],
            "traducao": "Sua presença é uma dádiva, grande Senhora que vive nas terras úmidas; cantamos alto para que nosso clamor seja ouvido em seu reino, que está muito acima de nós; saudamos o seu reino, que está onde a terra é úmida; glorificamos Nanã, a Senhora que nos dá o sopro da vida e vive nas terras úmidas; Nanã, faça-se presente para acompanhar nosso culto com a sua força de criação."
          }
        ]
      },
      {
        "id": "xango",
        "nome": "Xangô",
        "subtitulo": "ṢÀNGÓ",
        "cor": "#B02A37",
        "video": "qeB4xQsQddQ",
        "youtube": "https://youtu.be/qeB4xQsQddQ?si=2h7k4_mZj_EwXmiI",
        "fonte": "https://joiamisticalaroye.com.br/cantigas/",
        "cantigas": [
          {
            "rotulo": "Cantiga 1",
            "letra": [
              "Ikitê re o lokê odô",
              "Oba lajô",
              "Oba tani, Oba lelwuo",
              "Oba laieo"
            ],
            "traducao": "Cantiga de exaltação ao Rei de Kossô; grafia fonética conforme a fonte."
          },
          {
            "rotulo": "Cantiga 2",
            "letra": [
              "Oba ní sà rè lóòkè odó",
              "Ó bé rí omon",
              "Oba ní sà rè lóòkè odó",
              "Oba Kòso ayò"
            ],
            "traducao": "Louvor à força e à autoridade de Xangô, o Rei de Kossô."
          },
          {
            "rotulo": "Cantiga 3",
            "letra": [
              "Oba sá rewa",
              "E o jejé",
              "Koto koto awo de se",
              "Oba sá rewa"
            ],
            "traducao": "Louvor ao rei belo e justiceiro."
          }
        ]
      },
      {
        "id": "oya",
        "nome": "Oyá / Iansã",
        "subtitulo": "ỌYA / ÌYÁNSÁN",
        "cor": "#D4713F",
        "video": "aP5xDY1vsdk",
        "youtube": "https://youtu.be/aP5xDY1vsdk?si=nJfgEE3ST4Qd2mdb",
        "fonte": "http://ileaseegbeomorisaogum.blogspot.com/2012/11/cantigas-de-xire-de-oya.html",
        "cantigas": [
          {
            "rotulo": "Cantiga 1",
            "letra": [
              "Ọyá Balé láàrin yò",
              "Ọyá Balé",
              "Àdá má dé pà rà gan bẹ̀ hẹ̀"
            ],
            "traducao": "Oyá Balé: ficamos felizes com sua presença. Pedimos que elimine o mal."
          },
          {
            "rotulo": "Cantiga 2",
            "letra": [
              "Ajé mito ti Yao",
              "Ajé mito ti Ọya",
              "Aé aé aé",
              "Ajé mito ti Ọya"
            ],
            "traducao": "Refrão de saudação à guerreira dos ventos; grafia fonética."
          },
          {
            "rotulo": "Cantiga 3",
            "letra": [
              "Ọyá koro un le, o guerê gue",
              "Sábà koro un lá, o gará ga",
              "Omo obiri s'ala koro un le",
              "E L'Ọyá kobé lá jo e L'Ọyá"
            ],
            "traducao": "Cantiga de louvor à força feminina e guerreira de Oyá; grafia fonética."
          }
        ]
      },
      {
        "id": "oba",
        "nome": "Obá",
        "subtitulo": "ỌBÀ",
        "cor": "#D96A8A",
        "video": "NMIu8Tip2q8",
        "youtube": "https://youtu.be/NMIu8Tip2q8?si=y4kx5rVPq1cz3ARf",
        "fonte": "https://www.youtube.com/watch?v=lwAMuwGRvIY",
        "cantigas": [
          {
            "rotulo": "Cantiga 1",
            "letra": [
              "Ọbà kò rẹ̀ sí!",
              "Ọbà ní Ọya!",
              "Ọbà Elekó a já osí!",
              "Ọbà òsì, Ọbà òsì!"
            ],
            "traducao": "Cantiga de saudação à força da rainha guerreira Obá. Grafia publicada na descrição da fonte."
          }
        ]
      },
      {
        "id": "ewa",
        "nome": "Ewá",
        "subtitulo": "YEWÁ / EWÁ",
        "cor": "#E0964A",
        "video": "y2aR8SJJ2GY",
        "youtube": "https://youtu.be/y2aR8SJJ2GY?si=FOiY_C0iTanPXrAJ",
        "fonte": "https://joiamisticalaroye.com.br/cantigas/",
        "cantigas": [
          {
            "rotulo": "Cantiga 1",
            "letra": [
              "Ewá Ewá majô",
              "Ewá Ewá, Ewá Ewá majô",
              "Koiô, koiô Ewá lésé",
              "Ewá Ewá majô, Ewá Ewá"
            ],
            "traducao": "Cantiga de louvor a Ewá; grafia fonética conforme a fonte."
          },
          {
            "rotulo": "Cantiga 2",
            "letra": [
              "Ewá Ewá, onin operê",
              "Ewá Ewá, onin operê ô",
              "Ewá Ewá, onin operê",
              "Ewá Ewá, onin operê ô"
            ],
            "traducao": "Refrão de chamada e reverência a Ewá."
          }
        ]
      },
      {
        "id": "oxum",
        "nome": "Oxum",
        "subtitulo": "ÒṢUN",
        "cor": "#E3B63F",
        "video": "Mleg8rrC6d4",
        "youtube": "https://youtu.be/Mleg8rrC6d4?si=PC60UndUvkwSJSVa",
        "fonte": "http://ileaseegbeomorisaogum.blogspot.com/2012/11/cantigas-de-xire-de-oxum.html",
        "cantigas": [
          {
            "rotulo": "Trecho 1",
            "letra": [
              "Ye, ye, ye, ye,ye o",
              "Oro mi wá",
              "Nù àse tori e fò",
              "Yìn se kó-jùlo Iyagba o",
              "Oro mi wá",
              "Nù àse tori e fò",
              "A mu Ìyà mu ìyà",
              "Ojá re e lè mò so tori e fò"
            ],
            "traducao": "A elogiamos, elogiamos...; Traga riqueza para nós; A força de suas águas lava e limpa tudo; Glorificamos a grande mãe que nos cria; Traga riqueza para nós; A força de suas águas lava e limpa tudo; Ajude-nos mãe, ajude-nos mãe; Seu ojá a enfeita e representa seu poder de limpar tudo com as águas."
          }
        ]
      },
      {
        "id": "logunede",
        "nome": "Logun Edé",
        "subtitulo": "LÒGÚN EDÉ",
        "cor": "#5BA8C9",
        "video": "GdP4-a6wOI0",
        "youtube": "https://youtu.be/GdP4-a6wOI0?si=X8Nzoz5WUYw5cnJg",
        "fonte": "https://joiamisticalaroye.com.br/cantigas/logun-ede-kere-kere-ode/",
        "cantigas": [
          {
            "rotulo": "Cantiga 1",
            "letra": [
              "Kerê kerê odé ô, kerê kerê odé ô",
              "Oluwo orisá kemí máxa kemí mó wo",
              "Orisá odé igbô otôcàn xoxo",
              "Awa omodé ti Inrilé",
              "Awa omodé ti okuerã",
              "Odé igbô tí kolá",
              "Babá odé igbô ofá"
            ],
            "traducao": "Louvor ao príncipe caçador das águas. A grafia é fonética, com referências ao caçador, à mata e ao ofá."
          }
        ]
      },
      {
        "id": "yemanja",
        "nome": "Yemanjá",
        "subtitulo": "ÌYEMỌJA / IYEMONJÀ",
        "cor": "#4FA3D9",
        "video": "fblQv6RzkzI",
        "youtube": "https://youtu.be/fblQv6RzkzI?si=-rBpoj8Aojq84ZF5",
        "fonte": "http://ileaseegbeomorisaogum.blogspot.com/2012/11/cantigas-de-xire-de-yemanja.html",
        "cantigas": [
          {
            "rotulo": "Trecho 1",
            "letra": [
              "Iyemonjá wá abó a yò",
              "Iyemonjá wá abó a yò"
            ],
            "traducao": "Venha Yemonjá nos trazer felicidade e amparo; Venha Yemonjá nos trazer felicidade e amparo."
          }
        ]
      },
      {
        "id": "oxala",
        "nome": "Oxalá / Oxaguiã",
        "subtitulo": "ÒÒṢÀÁLÁ",
        "cor": "#EDE6D6",
        "video": "Un2Nu4GRRAk",
        "youtube": "https://youtu.be/Un2Nu4GRRAk?si=H6weKGgZuRO1m9T4",
        "fonte": "http://ileaseegbeomorisaogum.blogspot.com/2012/11/cantigas-de-xire-de-oxala.html",
        "cantigas": [
          {
            "rotulo": "Trecho 1",
            "letra": [
              "E rìn lè wá",
              "A ba wá okàn",
              "E lè dùn se ìpadé siré",
              "Koró lè koró lè Bàbá Ifá",
              "Be wi rò ko Ájàlá",
              "Bàbá o ké di am-nó re ki Ájàlá",
              "Be wi ro ko",
              "A jagun ná",
              "A jagun ná Bàbá o",
              "A jagun ná"
            ],
            "traducao": "Sua energia se aproxima de nós; Ela vem de encontro ao nosso coração; Sua energia torna a nossa festa agradável; Bàbá Ifá, traga sua energia a este lugar; Oxalá, suplicamos que venha nos trazer a paz; Pai Supremo, saudamos a sua misericórdia, saudamos Oxalá; Suplicamos que venha nos trazer a paz; Ele é o primeiro de todos os guerreiros; O Pai é o primeiro de todos os guereiros; Ele é o primeiro de todos os guerreiros."
          },
          {
            "rotulo": "Trecho 2",
            "letra": [
              "Elemaxó Bàbá Olorogun",
              "A jagun ná Bàbá o",
              "Elemaxó Bàbá Òsògìnyón",
              "Òrisà rè wà",
              "Mò rò Bàbá e ye",
              "Mò rò Bàbá nilè wá o",
              "Mò rò Bàbá ekún ayè",
              "Olorum a ki ba se o",
              "E Bàbá o ní",
              "Olorun a ki ba se"
            ],
            "traducao": "Ele é o sacerdote supremo no Olorogun; O Pai é o primeiro de todos os guereiros; Oxaguiã é Sacerdote supremo; Orixá, venha até nós; Pai, queremos sua paz em nossa vida; Pai, queremos que traga a sua paz à nossa casa; Pai, queremos que traga do céu a sua paz e sua espada; Olorun é o nosso Criador, o saudamos e pedimos sua ajuda; Ele é o Pai Todo Poderoso; Olorun é o nosso Criador, o saudamos e pedimos sua ajuda."
          },
          {
            "rotulo": "Trecho 3",
            "letra": [
              "O fìlà álá e o",
              "Ile Ile àwa",
              "E Bàbá álá e o",
              "Ile Ile àwa",
              "Olu o olu o",
              "O ní álá",
              "E ní Bàbá jo Òsòginyón",
              "E ní Bàbá jo Òsòlúfón",
              "Èrò Bàbá mi se ro",
              "Èrò mi Bàbá kojáde"
            ],
            "traducao": "Cobrimos nossas cabeças com o Alá; E a nossa casa de santo; Pai, cobrimo-nos com o Alá; E a nossa casa de santo; Ele é o Senhor, Ele é o Senhor; Ele é o dono do alá; Venha até nós Pai Oxaguiã; Venha até nós Pai Oxalufã; O amor do Pai está em mim; Elevamos o pensamento ao nosso Pai."
          },
          {
            "rotulo": "Trecho 4",
            "letra": [
              "E mi re mi re",
              "Bàbá mo rí aba ódó",
              "Álá só rí àwa o",
              "Yò Onirè mi dé",
              "Bàbá mó duro",
              "Aráiye Bàbá unje je",
              "Bàbá mó rí o",
              "Bàbá o ké e ye ba",
              "E ye ba lò ódó"
            ],
            "traducao": "Vós que sois de todos Bàbá Olorum (Deus Pai; Os jovens e os idosos querem lhe encontrar; Estendemos o Alá para que, debaixo dele, sejamos abençoados; Estamos satisfeitos com a boa sorte que nos dá; Pai, esperamos sua compreensão; A *humanidade come da sua comida; *comunidade espírita; Pai de sabedoria, venha nos encontrar; Pai Supremo, cantamos pedindo sua ajuda para viver; Ajude-nos a viver com a alegria da juventude."
          },
          {
            "rotulo": "Trecho 5",
            "letra": [
              "A Irè, A Irè Bàbá a Irè",
              "A Irè Bàbá",
              "Bàbá o dé òrún e",
              "E Bàbá o dé Bàbá o dé e o",
              "Ojo bo dí ojo álá e ojo",
              "Ojo bi wá e",
              "Ojo bo dí ojo álá e ojo",
              "Ojo bi wá e",
              "Wá Bàbá, Bàbá o",
              "Ojo bo dí ojo álá e ojo"
            ],
            "traducao": "Ele é o Pai Supremo de Irè; Ele é o Pai Supremo de Irè; Pai, o seu céu nos encobre; Pai, o vosso céu encobre a todos nós; No dia de recebê-lo, cobrimo-nos com o Alá; Ele vem com o nascer do dia; No dia de recebê-lo, cobrimo-nos com o Alá; Ele vem com o nascer do dia; Ele é nosso ai, venha até nós Pai; No dia de recebê-lo, cobrimo-nos com o Alá."
          },
          {
            "rotulo": "Trecho 6",
            "letra": [
              "Là álá aráiye Bàbá wá lè kú e",
              "E Bàbá wá lè kú e",
              "Álá o álá",
              "Orò álá",
              "E ye Bàbá ba",
              "Álá fùn kí kí àwa là",
              "Bàbá oun re",
              "Òrisà òrè Òrisà òrè umbó",
              "Álá adun re ajo",
              "Ájàlá wò rí wò rí mò yo"
            ],
            "traducao": "Nós abrimos o Alá para que o Pai venha trazer o seu poder e nos revitalizar; Pai, traga-nos o seu poder para nos revitalizar; Alá, o pano que dignifica os Orixás; Nosso culto tem o Alá; Pai, acompanhe-nos durante a nossa vida; Abrimos o Alá para dar boas vindas; Ao Pai de Todos; Orixá amigo, orixá amigo está chegando; A proteção do Alá torna a nossa vida agradável; Curvamo-nos diante de Oxalá, curvamo-nos e ficamos felizes com sua sabedoria."
          },
          {
            "rotulo": "Trecho 7",
            "letra": [
              "Álá wò rín kan",
              "E áwo firin mi",
              "Ópelé ké dé",
              "Ópelé ké dé Bàbá",
              "Ki ba oníbará kó ìyìn jé ní a",
              "Èkó ké dé o",
              "Álá te lè o",
              "Àwa Bàbá",
              "Ki ile wá o",
              "Òrisà ile rè wá"
            ],
            "traducao": "Curvamo-nos no Alá que é único; Durante o culto, caminhamos embaixo dele; Mensageiro de Ifá, cantamos em sua homenagem; Mensageiro de Ifá, cantamos em sua homenagem, Pai; Somos seus clientes. O saudamos pela ajuda que nos dá; cantamos para que nos cubra com sua sabedoria; Curvamo-nos embaixo do Alá para recebermos suas bênçãos; Nosso Pai; O cumprimentamos para que venha à nossa casa; Orixá, venha à nossa casa."
          },
          {
            "rotulo": "Trecho 8",
            "letra": [
              "Àwa Bàbá lè bò ayè",
              "Aso funfun àwa bí",
              "Àlá funfun dé Òrìsànlà",
              "Ála ye Ájàlá o",
              "Àlá funfun dé Òrìsànlà",
              "Ebo Bàbá ebo unjé wá",
              "Òrìsànlá bori o",
              "Ebo",
              "Bàbá bori o",
              "Ebo Òòsáálá bori o"
            ],
            "traducao": "Nosso Pai do céu, cubra-nos com seu poder; Nascemos cobertos de branco; O alá branco de Oxalá nos encobre; O Alá de Oxalá nos dá a vida; O alá branco de Oxalá nos encobre; Venha comer Pai; Oxalá no bori; canjica de Oxalá; O Pai no bori; Oxalá no bori."
          },
          {
            "rotulo": "Trecho 9",
            "letra": [
              "Ebo Bàbá ebo",
              "Unjé wá",
              "E iráwó",
              "Ki Bàbá o ògá",
              "E iráwó",
              "Ki Bàbá o ògá",
              "E te dun se ba dé siré",
              "Kó rò lè, Kó rò lè",
              "Bàbá Ifá Kó rò lè, Kó rò lè",
              "Bàbá Ifá sehin bá dé siré"
            ],
            "traducao": "Canjica do Pai; venha comer; Ele é uma estrela; Saudamos o Pai Supremo; Ele é uma estrela; Saudamos o Pai Supremo; Nos curvamos ao criador que nos protege nesta festa aos Orixás; Nos abençoe com sua paz, nos abençoe com sua paz; Pai Ifá, nos abençoe com sua paz, nos abençoe com sua paz; Pai Ifá que sempre nos protege nas festas que fazemos em homenagem aos Orixás."
          },
          {
            "rotulo": "Trecho 10",
            "letra": [
              "Kó rò lè, Kó rò lè",
              "Bàbá Ifá Kó rò lè, Kó rò lè",
              "Òrisá Bàbá",
              "Òrisá beni o",
              "Orisá Bàbá olu a mi",
              "Òrisá beni o",
              "Òrisá Bàbá Ajagunan Ori o",
              "O ni rò dí dé",
              "E lè jùbeelo",
              "Bàbá e lè jùbeelo"
            ],
            "traducao": "Nos abençoe com sua paz, nos abençoe com sua paz; Pai Ifá, nos abençoe com sua paz, nos abençoe com sua Paz; Orixá Pai; Orixá, nos favoreça; Orixá nosso Pai e Senhor; Orixá, nos favoreça; Ele no ori; Ele vem e nos traz a paz que nos envolve; Seu poder está acima de tudo; O poder do Pai está acima de tudo."
          },
          {
            "rotulo": "Trecho 11",
            "letra": [
              "E e bo ri o",
              "E mò yìn ba",
              "E mò Yìn Ijesá",
              "E ro mi Bàbá kojáde",
              "Òfurufúru rè mi rìn ila Bàbá",
              "Bàbá ké rìn elemi",
              "Ilé Ifá e mojú wá Bàbá",
              "Àwa bó Yìn e mojúbà o",
              "Olu a mi",
              "Elemaxó elemi bó"
            ],
            "traducao": "Ele no bori; Louvamos sua sabedoria e sua ajuda; Louvamos sua sabedoria e tocamos ijexá para vós; Pai que está no céu, traga-nos a sua paz; Caminhamos sob o firmamento que é a casa do Pai; Pai, cantamos para saúda-lo. Vosso poder nos desperta a vida; Pai de Sabedoria, venha à nossa casa; Nós o adoramos e o glorificamos. Mojubá!; Meu Senhor!; Elemaxó ilumine a nossa vida."
          },
          {
            "rotulo": "Trecho 12",
            "letra": [
              "Elemaxó àwa ògá",
              "E lè Bàbá béérè",
              "E ma wá",
              "Òfurufurú, Òfurufurú, Òfurufurú",
              "Bàbá o dé",
              "Olorum olówó e ké",
              "Ala-morerè, Ala-morerè o fe ki kún",
              "Ala-morerè, Ala-morerè e kú abò",
              "Bàbá ba di ile a tútú",
              "A tútú atori àkó lè gangan yanran",
              "Bùnlaye ri kó"
            ],
            "traducao": "Elemaxó é o chefe, venha até nós; Pai, o saudamos e pedimos que nos abençoe; ele sempre nos atende; o firmamento, o firmamento, o firmamento; Pai, nos proteja; cantamos para Olorum Olówó; Ala-morerè ama os mortais e é bem-vindo; Pai, retorne com alegria à nossa casa para nos ajudar, em silêncio, usando seu atori com muita bondade e justiça; permita que possamos aprender com sua presença."
          },
          {
            "rotulo": "Trecho 13",
            "letra": [
              "Olorum olówó e ké",
              "Oun siré ìgbín èkó roró",
              "Bàbá a fé aba akin ebo wá o",
              "Yágò mò dé n’gè ore",
              "Yágò mò"
            ],
            "traducao": "Cantamos para Olorum Olówó; Em sua festa tocamos o ìgbín em respeito à sua sabedoria e austeridade; Pai que amamos! És idoso e valente! Venha ao nosso culto!; Nos dê licença para elogiar a sua generosidade em nos dar sabedoria; Por favor, ensine-nos."
          }
        ]
      }
    ],
    "manutencao": "As letras desta linha estão sendo conferidas com os mais velhos da casa. Há trechos com grafia errada. Não use como referência até este aviso sair."
  },
  {
    "id": "caboclo",
    "rotulo": "Caboclo & Boiadeiro",
    "titulo": "Cantigas<br>de Caboclo",
    "subtitulo": "Pontos cantados de caboclo e boiadeiro, com letra e áudio de referência.",
    "nota": "Assim como no xirê, a referência principal é sempre a forma cantada na casa. A gravação é um vídeo só: o botão com o horário ao lado do ponto pula direto para o momento dele. Os pontos ainda <strong>sem horário</strong> aparecem sem botão, e ganham o seu assim que o tempo for conferido na gravação.",
    "entidades": [
      {
        "id": "caboclo-sultao-das-matas",
        "nome": "Caboclo",
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
          }
        ]
      },
      {
        "id": "boiadeiro",
        "nome": "Boiadeiro",
        "subtitulo": "LINHA DE BOIADEIRO",
        "cor": "#C08A4A",
        "video": "Tb22AQiI5cc",
        "youtube": "https://youtu.be/Tb22AQiI5cc",
        "fonte": "",
        "cantigas": [
          {
            "rotulo": "Ponto 1 · Ê bom vaqueiro",
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
            "rotulo": "Ponto 2 · Vaquejada boa é lá em Belém",
            "letra": [
              "Vaquejada boa é lá em Belém - 2x",
              "Ê Ê A, quem vem lá - 2x",
              "Ê boiadeiro é divisa (?)"
            ],
            "traducao": "",
            "repete": 6
          },
          {
            "rotulo": "Ponto 3 · Nos campos de Jerusalém",
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
            "rotulo": "Ponto 4 · De tropeiro",
            "letra": [
              "De tropeiro ê ê, de tropeiro aê - 4x",
              "Aiaiaia, de tropeiro ê - 2x",
              "Aiaiaia, de tropeiro a"
            ],
            "traducao": "",
            "repete": 3
          },
          {
            "rotulo": "Ponto 5 · Seu boiadeiro por aqui choveu",
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
            "rotulo": "Ponto 6 · Na levada povo, vamos a Belém",
            "letra": [
              "Na levada povo, vamos a Belém",
              "Vamos ver seu boiadeiro que nasceu pro nosso bem"
            ],
            "traducao": "",
            "repete": 7
          },
          {
            "rotulo": "Ponto 7 · Oh lá em Roma, tem uma igreja",
            "letra": [
              "Oh lá em Roma, tem uma igreja - 2x",
              "Dentro dela tem morador - 2x"
            ],
            "traducao": "",
            "repete": 4
          },
          {
            "rotulo": "Ponto 8 · Cadê a corda de laçar meu boi",
            "letra": [
              "Ê cadê a corda de laçar meu boi",
              "Meu boi fugiu, não sei pra onde foi"
            ],
            "traducao": "",
            "repete": 6
          },
          {
            "rotulo": "Ponto 9 · Bota no laço, vaqueiro",
            "letra": [
              "Ê Ê bota no laço, vaqueiro",
              "Oh vem topar, oh vem topar",
              "Na porteira do curral"
            ],
            "traducao": "",
            "repete": 3
          },
          {
            "rotulo": "Ponto 10 · Á ê ê, chapéu grande",
            "letra": [
              "Á ê ê, chapéu grande",
              "Beirada de ventania - 3x"
            ],
            "traducao": "",
            "repete": 6
          },
          {
            "rotulo": "Ponto 11 · Ê laje grande",
            "letra": [
              "Ê laje grande, a pedra do morro desce",
              "Quem tem é porque Deus dá",
              "Deus dá a quem merece"
            ],
            "traducao": "",
            "repete": 6
          },
          {
            "rotulo": "Ponto 12 · Meu lajedo é muito grande",
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
            "rotulo": "Ponto 13 · Cascata dos seus cabelos",
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
            "rotulo": "Ponto 14 · Ê de Taquari",
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
