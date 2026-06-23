const authors = [
  {
    name: "Dante Alighieri",
    period: "1265-1321",
    title: "A ponte entre Idade Média e Renascimento",
    text: "Dante consolidou o italiano literário e transformou uma viagem espiritual em arquitetura poética. Sua obra combina teologia medieval, política, filosofia e uma imaginação visual que influenciou séculos de narrativas."
  },
  {
    name: "Francesco Petrarca",
    period: "1304-1374",
    title: "O pai do Humanismo",
    text: "Petrarca recuperou autores clássicos e fez da interioridade um tema literário. Seus poemas de amor, memória e conflito pessoal ajudaram a criar uma nova sensibilidade renascentista."
  },
  {
    name: "Giovanni Boccaccio",
    period: "1313-1375",
    title: "O narrador da vida cotidiana",
    text: "Boccaccio aproximou a literatura das ruas, dos desejos, da ironia social e da inteligência prática. Suas histórias mostram pessoas comuns lidando com medo, prazer, dinheiro, fé e sobrevivência."
  },
  {
    name: "Luís de Camões",
    period: "c. 1524-1580",
    title: "A epopeia da expansão portuguesa",
    text: "Camões uniu tradição clássica, mitologia e experiência histórica para narrar as navegações. Sua poesia cria uma visão grandiosa, mas também crítica, da glória e dos riscos do império."
  },
  {
    name: "William Shakespeare",
    period: "1564-1616",
    title: "O teatro da alma humana",
    text: "Shakespeare levou ao palco personagens de contradição intensa. Reis, amantes, cômicos e assassinos revelam desejos e dúvidas que continuam reconhecíveis no presente."
  },
  {
    name: "Miguel de Cervantes",
    period: "1547-1616",
    title: "O nascimento do romance moderno",
    text: "Cervantes desmontou os ideais cavaleirescos com humor e ternura. Dom Quixote reflete sobre leitura, imaginação e realidade, inaugurando um novo modo de pensar a ficção."
  }
];

const works = [
  {
    id: "divina-comedia",
    title: "A Divina Comédia",
    author: "Dante Alighieri",
    year: "c. 1308-1321",
    summary: "Poema narrativo em que um viajante atravessa três reinos espirituais e encontra figuras marcantes da história e da imaginação medieval.",
    themes: "Fé, Destino, Moralidade, Jornada",
    letter: "E",
    cover: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(6,24,38,0.42)), url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gustave_Dore_Inferno1.jpg/1280px-Gustave_Dore_Inferno1.jpg')",
    coverPosition: "center 24%",
    accent: "#4f46e5",
    quote: "Uma descida pela sombra para reencontrar a luz.",
    slides: [
      ["A Divina Comédia", "Poema épico e alegórico que transforma a vida após a morte em uma jornada de autoconhecimento, justiça e esperança."],
      ["Autor", "Dante Alighieri, poeta florentino, escreveu em língua italiana quando o latim ainda dominava a cultura erudita. Sua escolha ajudou a fortalecer a literatura em língua vulgar."],
      ["Contexto histórico", "A obra nasce em uma Itália fragmentada por disputas políticas e religiosas. O exílio de Dante marcou profundamente sua visão sobre culpa, poder e justiça."],
      ["Resumo da trama", "Guiado por Virgílio e depois por Beatriz, Dante atravessa Inferno, Purgatório e Paraíso. Cada etapa mostra almas, pecados, virtudes e lições sobre a ordem moral do universo."],
      ["Personagens principais", "Dante representa o ser humano em busca de sentido. Virgílio simboliza a razão clássica. Beatriz representa amor espiritual, graça e elevação."],
      ["Temas centrais", "Salvação, pecado, arrependimento, amor, justiça divina, razão, fé e responsabilidade humana formam o eixo da obra."],
      ["Simbolismos e significados", "A viagem simboliza a passagem da confusão moral à iluminação. Os três reinos funcionam como mapas da alma e da sociedade."],
      ["Curiosidades", "O número três estrutura a obra: três partes, tercetos e uma forte presença da Trindade. Dante também colocou inimigos políticos entre figuras condenadas."],
      ["Legado histórico", "Influenciou poesia, pintura, cinema, filosofia e imaginário religioso. É uma das bases da literatura italiana e mundial."],
      ["Por que continua relevante hoje", "Porque fala da necessidade humana de enfrentar erros, entender consequências e procurar um caminho de transformação."]
    ]
  },
  {
    id: "decamerao",
    title: "Decamerão",
    author: "Giovanni Boccaccio",
    year: "c. 1349-1353",
    summary: "Coleção de cem narrativas contadas por jovens afastados de Florença durante a peste, com retratos vivos da sociedade italiana.",
    themes: "Sociedade, Humanismo, Humor, Cotidiano",
    letter: "F",
    cover: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(6,24,38,0.44)), url('https://upload.wikimedia.org/wikipedia/commons/b/b4/Giovanni_Boccaccio_and_Florentines_who_have_fled_from_the_plague.jpg')",
    coverPosition: "center 42%",
    accent: "#0f9f9a",
    quote: "Quando o mundo desmorona, contar histórias também é sobreviver.",
    slides: [
      ["Decamerão", "Coletânea de cem histórias que observa a sociedade com humor, inteligência e grande atenção à vida cotidiana."],
      ["Autor", "Giovanni Boccaccio foi escritor italiano e um dos grandes nomes do Humanismo. Sua prosa ajudou a dar prestígio literário à narrativa em língua vulgar."],
      ["Contexto histórico", "A obra surge após a Peste Negra, que devastou a Europa no século XIV. O medo da morte torna ainda mais forte o desejo de narrar, rir e viver."],
      ["Resumo da trama", "Dez jovens fogem de Florença durante a peste e passam dez dias contando histórias. Cada narrativa revela amores, enganos, vícios, virtudes e críticas aos costumes."],
      ["Personagens principais", "O grupo de narradores conduz a moldura. Nas histórias aparecem mercadores, religiosos, mulheres astutas, amantes, nobres e pessoas comuns."],
      ["Temas centrais", "Humanismo, prazer, esperteza, hipocrisia, crítica social, amor, fortuna e sobrevivência atravessam a obra."],
      ["Simbolismos e significados", "O ato de contar histórias funciona como defesa contra o caos. A narrativa organiza o medo e devolve sentido à experiência humana."],
      ["Curiosidades", "A estrutura de dez narradores por dez dias gera cem contos. Muitos enredos circularam depois em peças, novelas e adaptações populares."],
      ["Legado histórico", "É uma referência decisiva para a prosa narrativa europeia e para a tradição da novela curta."],
      ["Por que continua relevante hoje", "Porque mostra que humor, imaginação e crítica social ajudam a atravessar crises coletivas."]
    ]
  },
  {
    id: "cancioneiro",
    title: "Cancioneiro",
    author: "Francesco Petrarca",
    year: "c. 1336-1374",
    summary: "Conjunto de poemas dedicados a Laura, construído como um diário lírico de lembranças, imagens e movimentos interiores.",
    themes: "Amor, Beleza, Emoção, Poesia",
    letter: "C",
    cover: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(6,24,38,0.42)), url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Petrarch_canzoniere.jpg/1280px-Petrarch_canzoniere.jpg')",
    coverPosition: "center 20%",
    accent: "#c026d3",
    quote: "O amor vira espelho: nele, o coração aprende a se ler.",
    slides: [
      ["Cancioneiro", "Conjunto de poemas líricos que fez da experiência amorosa um campo de análise emocional e estética."],
      ["Autor", "Francesco Petrarca foi poeta, estudioso dos clássicos e figura central do Humanismo. Sua escrita transformou a introspecção em matéria literária nobre."],
      ["Contexto histórico", "No início do Renascimento italiano, o interesse pelo indivíduo crescia. A poesia de Petrarca reflete esse novo olhar para o eu, a memória e o desejo."],
      ["Resumo da trama", "Não há trama única, mas um percurso emocional: o eu lírico ama Laura, oscila entre esperança e sofrimento, e transforma essa tensão em poesia."],
      ["Personagens principais", "O eu lírico e Laura dominam a obra. Laura é mulher real, ideal poético, lembrança e símbolo de beleza quase inalcançável."],
      ["Temas centrais", "Amor, idealização, conflito interior, passagem do tempo, beleza, culpa, desejo e espiritualidade."],
      ["Simbolismos e significados", "Laura simboliza tanto atração terrena quanto elevação espiritual. O amor é força que perturba, inspira e refina a consciência."],
      ["Curiosidades", "O modelo petrarquista influenciou profundamente a poesia europeia, incluindo sonetos portugueses, espanhóis, franceses e ingleses."],
      ["Legado histórico", "Ajudou a consolidar o soneto amoroso e a linguagem lírica da modernidade ocidental."],
      ["Por que continua relevante hoje", "Porque descreve com precisão sentimentos contraditórios que ainda aparecem nas relações afetivas contemporâneas."]
    ]
  },
  {
    id: "lusiadas",
    title: "Os Lusíadas",
    author: "Luís de Camões",
    year: "1572",
    summary: "Epopeia portuguesa que acompanha a viagem de Vasco da Gama e transforma a navegação em grande narrativa histórica.",
    themes: "Exploração, Heroísmo, Mitologia, Aventura",
    letter: "B",
    cover: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(6,24,38,0.34)), url('https://upload.wikimedia.org/wikipedia/commons/0/0d/Os_Lus%C3%ADadas.jpg')",
    coverPosition: "center center",
    accent: "#0284c7",
    quote: "O mar abre caminhos, mas também cobra memória.",
    slides: [
      ["Os Lusíadas", "Epopeia portuguesa que celebra a viagem de Vasco da Gama e reflete sobre coragem, fama, poder e destino coletivo."],
      ["Autor", "Luís de Camões foi poeta português do século XVI. Viveu experiências militares e marítimas que alimentaram a força concreta de sua poesia."],
      ["Contexto histórico", "A obra surge no auge das navegações portuguesas, quando a expansão ultramarina redefinia comércio, cultura e poder político."],
      ["Resumo da trama", "Vasco da Gama e sua tripulação viajam até a Índia. Deuses greco-romanos interferem, e a história portuguesa é narrada como grande epopeia."],
      ["Personagens principais", "Vasco da Gama, os marinheiros portugueses, Vênus, Baco, Júpiter e figuras históricas de Portugal compõem a narrativa."],
      ["Temas centrais", "Heroísmo, aventura, expansão marítima, mitologia, patriotismo, ambição, sofrimento e crítica à fragilidade humana."],
      ["Simbolismos e significados", "O mar simboliza desafio, conhecimento e perigo. A viagem representa a busca por glória e os custos dessa grandeza."],
      ["Curiosidades", "Camões mistura mitologia clássica com história nacional, criando uma epopeia moderna inspirada em Homero e Virgílio."],
      ["Legado histórico", "Tornou-se obra central da língua portuguesa e referência da identidade literária de Portugal."],
      ["Por que continua relevante hoje", "Porque permite discutir coragem, memória histórica, colonização, ambição e os limites da ideia de heroísmo."]
    ]
  },
  {
    id: "hamlet",
    title: "Hamlet",
    author: "William Shakespeare",
    year: "c. 1600-1601",
    summary: "Tragédia sobre um príncipe dinamarquês que descobre um crime no palácio e passa a investigar a verdade por trás da corte.",
    themes: "Poder, Vingança, Dúvida, Tragédia",
    letter: "A",
    cover: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(6,24,38,0.36)), url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Hamlet_Q2_TP_1604.jpg/1280px-Hamlet_Q2_TP_1604.jpg')",
    coverPosition: "center center",
    accent: "#334155",
    quote: "A maior batalha acontece dentro da própria consciência.",
    slides: [
      ["Hamlet", "Tragédia sobre dúvida, vingança e colapso moral, centrada em um príncipe incapaz de agir sem compreender o peso de sua ação."],
      ["Autor", "William Shakespeare foi dramaturgo e poeta inglês. Suas peças exploram com profundidade linguagem, poder, desejo e contradição humana."],
      ["Contexto histórico", "Escrita no período elisabetano, a peça reflete debates sobre sucessão, aparência, consciência religiosa e instabilidade política."],
      ["Resumo da trama", "Hamlet descobre que seu tio matou seu pai e tomou o trono. A busca por vingança desencadeia suspeita, loucura encenada, mortes e tragédia."],
      ["Personagens principais", "Hamlet, Cláudio, Gertrudes, Ofélia, Polônio, Laertes e Horácio formam uma rede de lealdades partidas e intenções ocultas."],
      ["Temas centrais", "Vingança, dúvida, poder, morte, loucura, corrupção, aparência e realidade."],
      ["Simbolismos e significados", "O fantasma simboliza memória e culpa. O teatro dentro do teatro revela a verdade escondida por máscaras políticas."],
      ["Curiosidades", "É uma das peças mais citadas do mundo e oferece alguns dos monólogos mais famosos da literatura ocidental."],
      ["Legado histórico", "Influenciou teatro, cinema, psicanálise, filosofia e o modo moderno de representar conflitos internos."],
      ["Por que continua relevante hoje", "Porque mostra como a dúvida, quando encontra um mundo corrompido, pode paralisar e destruir."]
    ]
  },
  {
    id: "romeu-julieta",
    title: "Romeu e Julieta",
    author: "William Shakespeare",
    year: "c. 1595",
    summary: "Peça sobre dois jovens de famílias rivais em Verona, marcada por encontros secretos, conflitos públicos e escolhas apressadas.",
    themes: "Amor, Destino, Juventude, Tragédia",
    letter: "G",
    cover: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(6,24,38,0.34)), url('https://upload.wikimedia.org/wikipedia/commons/1/1e/Romeo_and_Juliet_Q2_Title_Page.jpg')",
    coverPosition: "center center",
    accent: "#e11d48",
    quote: "O amor floresce depressa quando o mundo insiste em odiar.",
    slides: [
      ["Romeu e Julieta", "Tragédia lírica sobre amor juvenil, destino e violência social entre famílias inimigas."],
      ["Autor", "William Shakespeare escreveu a peça no fim do século XVI, usando poesia intensa para transformar uma história de amantes em mito universal."],
      ["Contexto histórico", "O teatro elisabetano combinava entretenimento popular, poesia e reflexão moral. A peça dialoga com tradições italianas de narrativas trágicas de amor."],
      ["Resumo da trama", "Romeu Montecchio e Julieta Capuleto se apaixonam apesar da rivalidade familiar. Planos secretos, duelos e desencontros conduzem à morte dos dois."],
      ["Personagens principais", "Romeu, Julieta, Mercúcio, Teobaldo, Frei Lourenço, Ama, Capuleto e Montecchio movem a trama entre afeto, honra e conflito."],
      ["Temas centrais", "Amor, juventude, destino, pressa, ódio familiar, violência e reconciliação tardia."],
      ["Simbolismos e significados", "A noite simboliza o espaço protegido do amor; o nome de família representa uma identidade social que aprisiona os amantes."],
      ["Curiosidades", "A peça tornou-se sinônimo cultural de amor impossível e recebeu inúmeras adaptações em cinema, música, dança e literatura."],
      ["Legado histórico", "Fixou um modelo poderoso de tragédia amorosa e influenciou a forma como o Ocidente imagina paixão e destino."],
      ["Por que continua relevante hoje", "Porque denuncia como conflitos herdados podem destruir vidas que desejam apenas escolher outro futuro."]
    ]
  },
  {
    id: "dom-quixote",
    title: "Dom Quixote",
    author: "Miguel de Cervantes",
    year: "1605 e 1615",
    summary: "Romance sobre um fidalgo leitor de histórias cavaleirescas que sai pelos caminhos da Espanha acompanhado por Sancho Pança.",
    themes: "Sonhos, Loucura, Idealismo, Humor",
    letter: "D",
    cover: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(6,24,38,0.34)), url('https://upload.wikimedia.org/wikipedia/commons/b/ba/Title_page_first_edition_Don_Quijote.jpg')",
    coverPosition: "center center",
    accent: "#ca8a04",
    quote: "Às vezes, sonhar demais é o modo mais humano de resistir.",
    slides: [
      ["Dom Quixote", "Romance que mistura humor, melancolia e reflexão sobre leitura, imaginação e choque entre ideal e realidade."],
      ["Autor", "Miguel de Cervantes foi escritor espanhol, soldado e prisioneiro. Sua experiência de vida aparece na visão complexa e irônica da obra."],
      ["Contexto histórico", "Publicado no início do século XVII, o livro surge quando os romances de cavalaria já pareciam ultrapassados. Cervantes transforma esse desgaste em invenção literária."],
      ["Resumo da trama", "Alonso Quijano enlouquece de tanto ler romances de cavalaria, torna-se Dom Quixote e sai em aventuras com Sancho Pança, vendo gigantes onde há moinhos."],
      ["Personagens principais", "Dom Quixote, Sancho Pança, Dulcineia, o cura, o barbeiro e muitos personagens encontrados pelo caminho compõem o universo do romance."],
      ["Temas centrais", "Idealismo, loucura, amizade, imaginação, realidade, humor, crítica literária e dignidade humana."],
      ["Simbolismos e significados", "Os moinhos simbolizam o conflito entre fantasia heroica e mundo concreto. Sancho equilibra o sonho do cavaleiro com sabedoria prática."],
      ["Curiosidades", "É frequentemente chamado de primeiro romance moderno pela autoconsciência narrativa e pela complexidade dos personagens."],
      ["Legado histórico", "Influenciou profundamente o romance ocidental, da sátira à metaficção, e criou uma das duplas mais famosas da literatura."],
      ["Por que continua relevante hoje", "Porque pergunta se viver sem sonhos é realmente mais sensato do que lutar por ideais impossíveis."]
    ]
  }
];

const slideInsights = {
  "divina-comedia": [
    ["Forma: poema narrativo em três partes, com arquitetura numérica rigorosa.", "Chave de leitura: cada paisagem exterior representa também um estado da alma."],
    ["Dante viveu exilado de Florença, e esse trauma atravessa sua visão política.", "A decisão de escrever em italiano aproximou a alta literatura dos leitores de sua época."],
    ["A Itália ainda não era um país unificado; havia cidades rivais e disputas entre facções.", "A obra mistura imaginário medieval, filosofia escolástica e admiração pelos clássicos."],
    ["O Inferno mostra a consequência dos vícios; o Purgatório, a possibilidade de purificação.", "O Paraíso abandona a lógica do castigo e se aproxima da harmonia, da luz e do amor."],
    ["Virgílio é guia da razão, mas não pode conduzir Dante até o fim.", "Beatriz representa um amor que deixa de ser apenas pessoal e vira caminho espiritual."],
    ["A justiça não aparece como vingança simples, mas como ordem moral do universo.", "A liberdade humana é essencial: cada alma encontra o destino que ajudou a construir."],
    ["A floresta escura abre a obra como imagem da perda de direção.", "A subida final sugere que conhecimento, amor e humildade pertencem ao mesmo percurso."],
    ["Dante colocou figuras históricas reais na viagem, inclusive adversários políticos.", "A terza rima dá ao poema um movimento encadeado, quase como passos numa escada."],
    ["Pintores, cineastas e escritores reutilizaram suas imagens do Inferno por séculos.", "A obra ajudou a definir o italiano literário e um imaginário europeu sobre a vida após a morte."],
    ["Continua forte porque transforma culpa, medo e esperança em experiência narrativa.", "Fala com qualquer época em que alguém precise atravessar a própria escuridão."]
  ],
  "decamerao": [
    ["Forma: coletânea de cem novelas conectadas por uma moldura narrativa.", "Chave de leitura: contar histórias é uma resposta humana ao medo e à desordem."],
    ["Boccaccio observa a sociedade sem idealizá-la, com humor e agudeza.", "Sua prosa valoriza o engenho humano, a inteligência prática e a vida comum."],
    ["A Peste Negra abalou instituições, famílias e certezas religiosas no século XIV.", "O refúgio dos jovens cria uma pequena comunidade baseada em palavra, jogo e imaginação."],
    ["As histórias alternam enganos amorosos, críticas ao clero, fortuna e esperteza.", "A variedade de tons faz a obra parecer uma cidade inteira falando ao mesmo tempo."],
    ["Os narradores têm voz própria, mas a multidão de personagens é o verdadeiro espetáculo.", "Mulheres aparecem muitas vezes como figuras de estratégia, desejo e inteligência."],
    ["O Humanismo surge no interesse por pessoas reais, contraditórias e imperfeitas.", "A obra critica hipocrisias sociais sem abandonar o prazer narrativo."],
    ["A villa fora da cidade funciona como pausa simbólica diante da morte.", "A narração organiza o caos, como se a arte criasse uma ordem temporária."],
    ["Muitos contos circularam antes oralmente; Boccaccio transforma tradição popular em literatura sofisticada.", "A estrutura de dez dias cria ritmo, simetria e expectativa."],
    ["Influenciou a novela europeia, o teatro e narrativas de humor social.", "Abriu espaço para personagens comuns ocuparem o centro da literatura."],
    ["É atual porque mostra sociedades em crise tentando preservar riso, desejo e conversa.", "Também lembra que narrar é uma forma de comunidade."]
  ],
  "cancioneiro": [
    ["Forma: conjunto lírico com sonetos, canções e poemas de introspecção amorosa.", "Chave de leitura: o amor é menos conquista e mais investigação interior."],
    ["Petrarca combina erudição clássica com uma voz íntima e moderna.", "Seu eu lírico observa as próprias contradições com delicadeza e precisão."],
    ["O Humanismo valorizou a subjetividade e a redescoberta dos autores antigos.", "A poesia passa a registrar movimentos sutis da memória, do desejo e do tempo."],
    ["O percurso poético acompanha amor, ausência, culpa, esperança e luto.", "Laura é presença e distância: inspira o poema justamente por ser inalcançável."],
    ["O eu lírico é personagem de si mesmo, dividido entre desejo terreno e ideal espiritual.", "Laura é mulher amada, imagem de beleza e construção poética."],
    ["Amor, tempo, beleza, morte e conflito moral aparecem como forças inseparáveis.", "A emoção não é descontrole puro; vira forma, ritmo e pensamento."],
    ["Laura pode ser lida como louro poético, glória literária e figura amorosa.", "O espelho do poema transforma sentimento privado em experiência universal."],
    ["O petrarquismo virou modelo europeu de poesia amorosa por séculos.", "A tensão entre presença e ausência moldou inúmeros sonetos posteriores."],
    ["Influenciou Camões, Shakespeare e muitas tradições líricas nacionais.", "Ajudou a estabelecer a ideia moderna de poesia como análise do eu."],
    ["Continua relevante porque sentimentos ambíguos seguem difíceis de nomear.", "A obra mostra que a beleza também pode ser inquietação."]
  ],
  "lusiadas": [
    ["Forma: epopeia em cantos, inspirada nos modelos clássicos de Homero e Virgílio.", "Chave de leitura: a glória marítima é celebrada, mas também interrogada."],
    ["Camões conheceu viagem, guerra e deslocamento, o que dá densidade ao poema.", "Sua escrita combina grandeza épica e consciência amarga dos limites humanos."],
    ["Portugal vivia o auge simbólico das navegações e da expansão ultramarina.", "A obra nasce em contexto de império, comércio, fé, violência e encontro cultural."],
    ["A viagem de Vasco da Gama até a Índia organiza a ação principal.", "Paralelamente, episódios históricos constroem uma memória heroica de Portugal."],
    ["Vasco da Gama encarna o capitão épico, mas os deuses movem tensões simbólicas.", "Vênus protege os portugueses, enquanto Baco teme perder seu prestígio no Oriente."],
    ["Heroísmo, fama, risco, mar, mito, pátria e ambição formam o núcleo da obra.", "O poema também alerta contra cobiça, vaidade e decadência moral."],
    ["O mar é fronteira entre medo e conhecimento.", "A Ilha dos Amores representa recompensa, desejo e consagração simbólica da viagem."],
    ["O Velho do Restelo é uma das vozes críticas mais fortes do poema.", "A presença dos deuses clássicos dá escala universal à história portuguesa."],
    ["Tornou-se monumento literário da língua portuguesa.", "É referência para debates sobre identidade, memória, colonização e épica moderna."],
    ["Continua relevante porque permite admirar a linguagem e questionar a história ao mesmo tempo.", "A aventura marítima vira reflexão sobre o preço da grandeza."]
  ],
  "hamlet": [
    ["Forma: tragédia teatral de investigação moral e psicológica.", "Chave de leitura: Hamlet pensa tanto sobre a ação que transforma vingança em crise filosófica."],
    ["Shakespeare domina o palco como espaço de política, poesia e contradição humana.", "Sua força está em personagens que parecem maiores do que a própria intriga."],
    ["O período elisabetano vivia inquietações sobre poder, sucessão e ordem social.", "A peça também conversa com dúvidas religiosas sobre alma, morte e culpa."],
    ["Um fantasma denuncia assassinato; Hamlet tenta confirmar a verdade antes de agir.", "A demora cria uma cadeia de espionagem, encenação, loucura e destruição."],
    ["Hamlet é príncipe, estudante, filho enlutado e juiz de si mesmo.", "Ofélia, Gertrudes, Cláudio e Laertes revelam formas diferentes de obediência, desejo e vingança."],
    ["Dúvida, corrupção, morte, aparência, verdade e vingança atravessam cada cena.", "O poder aparece como teatro: todos observam, fingem ou manipulam."],
    ["O fantasma é memória que se recusa a desaparecer.", "A peça encenada por Hamlet mostra que a arte pode revelar uma verdade escondida."],
    ["O crânio de Yorick virou um dos ícones visuais do teatro.", "A peça já foi adaptada em palácios, fábricas, cinemas, escolas e cenários políticos modernos."],
    ["Hamlet redefine a tragédia ao colocar a mente do personagem no centro do drama.", "Influenciou psicanálise, filosofia, cinema e teatro contemporâneo."],
    ["Segue atual porque a consciência ainda pode ser um labirinto.", "A peça pergunta o que acontece quando uma pessoa lúcida vive num sistema corrompido."]
  ],
  "romeu-julieta": [
    ["Forma: tragédia lírica de amor jovem e conflito social.", "Chave de leitura: a paixão é intensa, mas o desastre nasce de uma sociedade que cultiva ódio."],
    ["Shakespeare transforma uma narrativa conhecida em poesia dramática inesquecível.", "A linguagem dos amantes muda ao longo da peça, como se o amor ensinasse outra fala."],
    ["A peça dialoga com histórias italianas de famílias rivais e amores impossíveis.", "No palco elisabetano, emoção popular e refinamento poético conviviam com naturalidade."],
    ["Romeu e Julieta se apaixonam, casam em segredo e tentam escapar da rivalidade familiar.", "Duelos, pressa e mensagens desencontradas levam ao final trágico."],
    ["Romeu é impulsivo e lírico; Julieta amadurece rapidamente diante do perigo.", "Mercúcio dá brilho verbal e ironia; Frei Lourenço tenta mediar o impossível."],
    ["Amor, destino, juventude, violência, família e tempo são forças centrais.", "A pressa é quase personagem: tudo acontece antes que a razão alcance os fatos."],
    ["A noite protege os amantes, enquanto o dia traz vigilância e conflito.", "Os sobrenomes simbolizam identidades herdadas que impedem escolhas pessoais."],
    ["A cena do balcão virou símbolo mundial de declaração amorosa.", "A peça inspirou balés, óperas, filmes, musicais e releituras urbanas."],
    ["Consolidou o imaginário do amor impossível na cultura ocidental.", "Mostrou que tragédia íntima pode denunciar problemas coletivos."],
    ["Continua relevante porque jovens ainda enfrentam regras herdadas e conflitos que não criaram.", "A obra pergunta por que sociedades preferem orgulho à vida."]
  ],
  "dom-quixote": [
    ["Forma: romance em duas partes, irônico, metalinguístico e profundamente humano.", "Chave de leitura: o riso nunca elimina a ternura pelo personagem."],
    ["Cervantes viveu guerra, prisão, dificuldades financeiras e desencanto histórico.", "Essa experiência aparece em uma obra que ri das ilusões sem destruir a dignidade de sonhar."],
    ["Os romances de cavalaria estavam em decadência, mas ainda povoavam a imaginação popular.", "A Espanha do período convivia com glória imperial e sinais de crise."],
    ["Dom Quixote decide tornar-se cavaleiro andante e reinterpretar o mundo como aventura.", "Sancho o acompanha, oferecendo contraste entre imaginação heroica e bom senso popular."],
    ["Dom Quixote é idealista, frágil e comovente; Sancho é prático, esperto e leal.", "Dulcineia existe mais como invenção poética do que como presença concreta."],
    ["Idealismo, loucura, amizade, leitura, realidade e liberdade imaginativa sustentam o romance.", "A obra também satiriza gêneros literários e expectativas do leitor."],
    ["Os moinhos representam o choque entre mundo real e desejo heroico.", "A armadura improvisada simboliza uma identidade criada pela leitura."],
    ["A segunda parte conversa com a fama da primeira, criando um jogo moderno entre livro e leitor.", "A expressão quixotesco virou sinônimo de idealismo nobre e impraticável."],
    ["É uma das fundações do romance moderno.", "Influenciou narradores irônicos, personagens autoconscientes e ficções sobre a própria ficção."],
    ["Segue relevante porque todos negociamos alguma distância entre sonho e realidade.", "A obra defende que imaginar também é uma forma de existir."]
  ]
};

const timeline = document.querySelector("#timeline");
const timelinePanel = document.querySelector("#timelinePanel");
const worksGrid = document.querySelector("#worksGrid");
const voteGrid = document.querySelector("#voteGrid");
const revealOverlay = document.querySelector("#revealOverlay");
const revealCover = document.querySelector("#revealCover");
const revealTitle = document.querySelector("#revealTitle");
const revealQuote = document.querySelector("#revealQuote");
const enterPresentation = document.querySelector("#enterPresentation");
const closeReveal = document.querySelector("#closeReveal");
const presentation = document.querySelector("#presentation");
const slideContent = document.querySelector("#slideContent");
const slideCount = document.querySelector("#slideCount");
const progressBar = document.querySelector("#progressBar");
const prevSlide = document.querySelector("#prevSlide");
const nextSlide = document.querySelector("#nextSlide");
const homeFromPresentation = document.querySelector("#homeFromPresentation");

let selectedWork = works[0];
let currentSlide = 0;

function renderTimeline() {
  timeline.innerHTML = authors.map((author, index) => `
    <button class="timeline-button ${index === 0 ? "active" : ""}" data-index="${index}">
      <strong>${author.name}</strong><br>
      <small>${author.period}</small>
    </button>
  `).join("");

  timeline.addEventListener("click", (event) => {
    const button = event.target.closest(".timeline-button");
    if (!button) return;
    const index = Number(button.dataset.index);
    document.querySelectorAll(".timeline-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderTimelinePanel(authors[index]);
  });

  renderTimelinePanel(authors[0]);
}

function renderTimelinePanel(author) {
  timelinePanel.innerHTML = `
    <p class="eyebrow">${author.period}</p>
    <h3>${author.name}</h3>
    <p><strong>${author.title}</strong></p>
    <p>${author.text}</p>
  `;
}

function renderWorks() {
  worksGrid.innerHTML = works.map((work) => `
    <article class="work-card" style="--work-accent: ${work.accent}">
      <div class="cover" data-title="${work.title}" style="--cover: ${work.cover}; --cover-position: ${work.coverPosition}">
      </div>
      <div class="work-body">
        <p class="artifact-label">Acervo literário</p>
        <p class="meta">${work.author} · ${work.year}</p>
        <h3>${work.title}</h3>
        <p>${work.summary}</p>
      </div>
    </article>
  `).join("");
}

function renderVote() {
  const voteOrder = ["hamlet", "lusiadas", "cancioneiro", "dom-quixote", "divina-comedia", "decamerao", "romeu-julieta"];
  const orderedWorks = voteOrder.map((id) => works.find((work) => work.id === id));

  voteGrid.innerHTML = orderedWorks.map((work) => `
    <button class="vote-card" data-id="${work.id}">
      <span class="vote-themes">${work.themes}</span>
      <span class="vote-hint">Escolha esta sala se esses temas parecem contar algo sobre você.</span>
    </button>
  `).join("");

  voteGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".vote-card");
    if (!button) return;
    const work = works.find((item) => item.id === button.dataset.id);
    showReveal(work);
  });
}

function showReveal(work) {
  selectedWork = work;
  revealCover.dataset.title = work.title;
  revealCover.style.setProperty("--cover", work.cover);
  revealCover.style.setProperty("--cover-position", work.coverPosition);
  revealOverlay.style.setProperty("--work-accent", work.accent);
  revealCover.innerHTML = "";
  revealTitle.textContent = work.title;
  revealQuote.textContent = work.quote;
  revealOverlay.classList.remove("reveal-ready");
  revealOverlay.classList.add("active", "reveal-dark");
  revealOverlay.setAttribute("aria-hidden", "false");

  window.setTimeout(() => {
    revealOverlay.classList.remove("reveal-dark");
    revealOverlay.classList.add("reveal-ready");
  }, 1150);
}

function closeRevealOverlay() {
  revealOverlay.classList.remove("active", "reveal-dark", "reveal-ready");
  revealOverlay.setAttribute("aria-hidden", "true");
}

function openPresentation() {
  closeRevealOverlay();
  currentSlide = 0;
  presentation.style.setProperty("--work-accent", selectedWork.accent);
  presentation.classList.add("active");
  presentation.setAttribute("aria-hidden", "false");
  renderSlide();
}

function closePresentation() {
  presentation.classList.remove("active");
  presentation.setAttribute("aria-hidden", "true");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSlide() {
  const [heading, body] = selectedWork.slides[currentSlide];
  const isFirstSlide = currentSlide === 0;
  const insights = slideInsights[selectedWork.id]?.[currentSlide] || [];
  slideContent.style.setProperty("--work-accent", selectedWork.accent);

  slideContent.innerHTML = `
    <div class="slide-layout">
      <div class="slide-cover-mini" style="--cover: ${selectedWork.cover}; --cover-position: ${selectedWork.coverPosition}; --work-accent: ${selectedWork.accent}" aria-hidden="true">
      </div>
      <div class="slide-copy">
        <p class="eyebrow">${selectedWork.author} · ${selectedWork.year}</p>
        ${isFirstSlide ? `<h2>${heading}</h2>` : `<h3>${heading}</h3>`}
        <p>${body}</p>
        <div class="slide-insights">
          <strong>Notas da exposição</strong>
          <ul>
            ${insights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;

  slideCount.textContent = `Slide ${currentSlide + 1} de ${selectedWork.slides.length}`;
  progressBar.style.width = `${((currentSlide + 1) / selectedWork.slides.length) * 100}%`;
  prevSlide.disabled = currentSlide === 0;
  nextSlide.textContent = currentSlide === selectedWork.slides.length - 1 ? "Finalizar" : "Próximo";
}

prevSlide.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide -= 1;
    renderSlide();
  }
});

nextSlide.addEventListener("click", () => {
  if (currentSlide < selectedWork.slides.length - 1) {
    currentSlide += 1;
    renderSlide();
  } else {
    closePresentation();
  }
});

enterPresentation.addEventListener("click", openPresentation);
closeReveal.addEventListener("click", closeRevealOverlay);
homeFromPresentation.addEventListener("click", closePresentation);

document.addEventListener("keydown", (event) => {
  if (!presentation.classList.contains("active")) return;
  if (event.key === "ArrowRight") nextSlide.click();
  if (event.key === "ArrowLeft") prevSlide.click();
  if (event.key === "Escape") closePresentation();
});

function setupScrollReveal() {
  const targets = document.querySelectorAll(".section-heading, .concept-card, .context-ribbon, .timeline, .timeline-panel, .work-card, .vote-card");
  targets.forEach((target) => target.classList.add("reveal-on-scroll"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  targets.forEach((target) => observer.observe(target));
}

// Renderiza as áreas interativas a partir dos dados acima.
renderTimeline();
renderWorks();
renderVote();
setupScrollReveal();
