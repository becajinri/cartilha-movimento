// ==========================================================
// 1. BANCO DE DADOS DOS EXERCÍCIOS E SEMANAS (ORDEM EXATA)
// ==========================================================
const exerciseCatalog = {
  "marcha": {
    name: "Marcha estacionária",
    duration: "1 minuto",
    howTo: "Fique em pé e caminhe sem sair do lugar, levantando um joelho de cada vez em um ritmo confortável por 1 minuto.",
    audioDesc: "Audiodescrição: Pessoa em pé, caminhando no mesmo lugar, elevando alternadamente os joelhos em altura confortável e balançando suavemente os braços.",
    variation: "Sente-se em uma cadeira firme com as costas apoiadas. Levante um joelho de cada vez alternadamente, como se estivesse caminhando sentado, por 1 minuto.",
    file: "marcha-estacionaria.mp4"
  },
  "alongamentos": {
    name: "Alongamentos gerais",
    duration: "3 repetições de 20 segundos",
    howTo: "Espreguice os braços para cima inspirando fundo e incline suavemente o tronco para os lados, respeitando o limite do seu corpo.",
    audioDesc: "Audiodescrição: Pessoa em pé com os pés afastados na largura dos ombros, elevando os braços acima da cabeça e alongando suavemente a lateral do tronco.",
    variation: "Sente-se com a coluna reta e as pernas esticadas ou levemente dobradas. Leve as mãos em direção aos joelhos ou pés e depois volte à posição inicial.",
    file: "alongamentos-gerais.mp4"
  },
  "mob_pelvica": {
    name: "Mobilidade pélvica",
    duration: "10 repetições lentas",
    howTo: "Deitado de barriga para cima com os joelhos dobrados e pés apoiados no chão (ou cama firme), balance suavemente o quadril para frente e para trás, encostando e desencostando a lombar.",
    audioDesc: "Audiodescrição: Pessoa deitada de costas com joelhos flexionados, realizando um movimento suave e curto de báscula com o quadril para relaxar a região lombar.",
    variation: "Sentado na beira de uma cadeira firme com os pés apoiados no chão, curve suavemente as costas para trás e depois empine levemente o quadril para frente.",
    file: "mobilidade-pelvica.mp4"
  },
  "respiracao": {
    name: "Controle da respiração / Respiração diafragmática",
    duration: "5 ciclos respiratórios",
    howTo: "Coloque uma mão sobre a barriga e outra no peito. Puxe o ar pelo nariz enchendo a barriga devagar e solte o ar lentamente pela boca.",
    audioDesc: "Audiodescrição: Pessoa sentada confortavelmente com uma mão no abdômen e outra no tórax, inspirando profundamente pelo nariz e expirando lentamente pela boca.",
    variation: "Pode ser feito deitado com um travesseiro baixo sob os joelhos para maior conforto da coluna lombar.",
    file: "respiracao-diafragmatica.mp4"
  },
  "sentar_levantar": {
    name: "Sentar / Levantar",
    duration: "8 a 10 repetições",
    howTo: "Sente-se em uma cadeira firme com os pés afastados na largura do quadril. Incline o tronco levemente à frente e levante-se sem impulso brusco, depois sente-se devagar.",
    audioDesc: "Audiodescrição: Pessoa sentada em uma cadeira firme, levantando-se com a coluna alinhada e sentando-se novamente de forma controlada.",
    variation: "Use uma almofada firme sobre o assento para deixar a cadeira mais alta, ou apoie as mãos nos braços da cadeira para auxiliar na subida.",
    file: "sentar-levantar.mp4"
  },
  "ponte": {
    name: "Ponte",
    duration: "8 repetições",
    howTo: "Deitado de barriga para cima, joelhos dobrados e pés apoiados. Aperte levemente os glúteos e eleve o quadril do colchão ou colchonete até alinhar com as coxas. Desça devagar.",
    audioDesc: "Audiodescrição: Pessoa deitada de costas com joelhos dobrados, elevando o quadril em direção ao teto e retornando lentamente ao apoio.",
    variation: "Eleve o quadril apenas alguns centímetros do apoio, mantendo o movimento curto e sem desconforto na lombar.",
    file: "ponte.mp4"
  },
  "flexao_plantar": {
    name: "Flexão plantar",
    duration: "10 a 12 repetições",
    howTo: "Em pé, apoiando as mãos no encosto de uma cadeira ou na parede, fique na ponta dos pés subindo os calcanhares e desça devagar.",
    audioDesc: "Audiodescrição: Pessoa em pé com as mãos apoiadas no encosto de uma cadeira para equilíbrio, elevando os calcanhares e ficando na ponta dos pés.",
    variation: "Faça o mesmo movimento sentado na cadeira, levantando os calcanhares do chão e mantendo a ponta dos pés apoiada.",
    file: "flexao-plantar.mp4"
  },
  "abducao": {
    name: "Abdução / Abertura lateral da perna",
    duration: "8 repetições cada lado",
    howTo: "Em pé, segurando no encosto de uma cadeira para equilíbrio, abra uma perna para o lado mantendo o joelho esticado e o tronco reto. Volte devagar.",
    audioDesc: "Audiodescrição: Pessoa em pé apoiada em uma cadeira, realizando a abertura lateral de uma perna de cada vez sem inclinar o tronco.",
    variation: "Sentado na cadeira, afaste uma perna para o lado deslizando o pé no chão e retorne ao centro.",
    file: "abducao-perna.mp4"
  },
  "degrau": {
    name: "Subir / Descer degrau",
    duration: "8 repetições cada perna",
    howTo: "De frente para um degrau baixo e seguro (com corrimão ou apoio próximo), suba com um pé, junte o outro em cima e desça controlando o movimento.",
    audioDesc: "Audiodescrição: Pessoa de frente para um degrau baixo com apoio lateral, subindo e descendo um pé de cada vez com segurança.",
    variation: "Sem usar degrau, dê apenas um passo firme à frente tocando o calcanhar no chão e volte à posição inicial.",
    file: "subir-descer-degrau.mp4"
  }
};

const weeksData = [
  {
    week: 1,
    title: "Semana 01 (Dia 1)",
    painTopic: "O que é a dor? Dor crônica x Dor aguda",
    painDesc: "A dor aguda é um alerta rápido do corpo (como um corte). Já a dor crônica persiste por mais tempo porque o sistema de alarme ficou sensível — mas movimentar-se com segurança ajuda a acalmar esse alerta!",
    exercises: ["marcha", "alongamentos", "mob_pelvica", "respiracao"]
  },
  {
    week: 2,
    title: "Semana 02 (Dia 2)",
    painTopic: "A Importância de movimentar-se",
    painDesc: "Ficar muito tempo parado enrijece as articulações e enfraquece a musculatura que protege a lombar. O movimento suave lubrifica a coluna e traz alívio.",
    exercises: ["marcha", "alongamentos", "sentar_levantar", "mob_pelvica", "respiracao"]
  },
  {
    week: 3,
    title: "Semana 03 (Dia 3)",
    painTopic: "Exposição gradual",
    painDesc: "Não precisamos fazer tudo de uma vez. Aumentar os exercícios aos poucos ensina ao seu corpo que o movimento é seguro e fortalece sua confiança.",
    exercises: ["marcha", "alongamentos", "sentar_levantar", "ponte", "mob_pelvica", "respiracao"]
  },
  {
    week: 4,
    title: "Semana 04 (Dia 4)",
    painTopic: "Planejamento das atividades de vida diária",
    painDesc: "Dividir tarefas domésticas ao longo do dia e fazer pequenas pausas evita sobrecarga na lombar e permite que você faça tudo o que gosta sem exaustão.",
    exercises: ["marcha", "alongamentos", "sentar_levantar", "ponte", "flexao_plantar", "mob_pelvica", "respiracao"]
  },
  {
    week: 5,
    title: "Semana 05 (Dia 5)",
    painTopic: "A importância do exercício físico",
    painDesc: "O exercício regular libera substâncias naturais de bem-estar no cérebro, melhora o sono, o equilíbrio e dá mais autonomia no dia a dia.",
    exercises: ["alongamentos", "marcha", "mob_pelvica", "respiracao", "ponte", "sentar_levantar", "flexao_plantar", "abducao"]
  },
  {
    week: 6,
    title: "Semana 06 (Dia 6)",
    painTopic: "Resumo dos assuntos anteriores",
    painDesc: "Você já aprendeu que dor não significa dano grave, que o movimento é seu aliado e que progredir aos poucos traz força e liberdade!",
    exercises: ["alongamentos", "marcha", "mob_pelvica", "respiracao", "ponte", "sentar_levantar", "abducao", "degrau", "flexao_plantar"]
  },
  {
    week: 7,
    title: "Semana 07 (Consolidação)",
    painTopic: "Mantendo os hábitos saudáveis",
    painDesc: "Continue praticando sua sequência favorita e observando como seu corpo responde com mais disposição.",
    exercises: ["alongamentos", "marcha", "mob_pelvica", "respiracao", "ponte", "sentar_levantar", "abducao", "degrau", "flexao_plantar"]
  },
  {
    week: 8,
    title: "Semana 08 (Autonomia)",
    painTopic: "Celebração da sua jornada!",
    painDesc: "Parabéns por chegar até aqui! Você agora conhece os exercícios e variações para cuidar da sua lombar por toda a vida.",
    exercises: ["alongamentos", "marcha", "mob_pelvica", "respiracao", "ponte", "sentar_levantar", "abducao", "degrau", "flexao_plantar"]
  }
];

// Escala de Borg oficial com cores
const borgScaleData = [
  { num: 0, label: "Repouso", color: "#4CAF50" },
  { num: 1, label: "Demasiado Leve", color: "#66BB6A" },
  { num: 2, label: "Muito muito Leve", color: "#81C784" },
  { num: 3, label: "Muito Leve", color: "#AED581" },
  { num: 4, label: "Leve", color: "#DCE775" },
  { num: 5, label: "Leve - Moderado", color: "#FFD54F" },
  { num: 6, label: "Moderado", color: "#FFB74D" },
  { num: 7, label: "Moderado - Intenso", color: "#FF8A65" },
  { num: 8, label: "Intenso", color: "#E57373" },
  { num: 9, label: "Muito Intenso", color: "#EF5350" },
  { num: 10, label: "Exaustivo", color: "#D32F2F" }
];

// ==========================================================
// 2. ESTADO DO APLICATIVO (SALVO NO NAVEGADOR DO IDOSO)
// ==========================================================
let currentWeekNum = 1;
let formState = { mood: "", sleep: "", borg: null };
let savedRecords = JSON.parse(localStorage.getItem("movimento_ufc_records") || "{}");

// ==========================================================
// 3. NAVEGAÇÃO E RENDERIZAÇÃO
// ==========================================================
function goTo(screenId) {
  window.speechSynthesis.cancel();
  document.getElementById("btnGlobalAudio").classList.remove("speaking");

  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (screenId === "screen-weeks") renderWeeks();
  if (screenId === "screen-records") renderRecords();
}

function renderWeeks() {
  const container = document.getElementById("weeksListContainer");
  container.innerHTML = "";
  let completedCount = 0;

  weeksData.forEach(w => {
    const isDone = Boolean(savedRecords[w.week]);
    if (isDone) completedCount++;

    // Atualiza o fruto correspondente na Árvore do Movimento
    const fruitEl = document.getElementById(`fruit-${w.week}`);
    if (fruitEl) {
      fruitEl.setAttribute("fill", isDone ? "#FF9800" : "#E2E8F0");
      fruitEl.setAttribute("r", isDone ? "11" : "9");
    }

    const btn = document.createElement("button");
    btn.className = `week-item ${isDone ? "completed" : ""}`;
    btn.onclick = () => openWeekDetail(w.week);
    btn.innerHTML = `
      <div class="week-left">
        <div class="week-badge">${isDone ? "✔" : w.week}</div>
        <div>
          <strong style="font-size: 19px; color: var(--azul-escuro);">${w.title}</strong><br>
          <span class="week-status">${isDone ? "Concluída • Fruto colhido!" : "Toque para iniciar"}</span>
        </div>
      </div>
      <span style="font-size: 24px; color: var(--azul-medio);">›</span>
    `;
    container.appendChild(btn);
  });

  document.getElementById("treeStatusText").innerText = `${completedCount} de 8 frutos colhidos na sua árvore`;
}

function openWeekDetail(weekNum) {
  currentWeekNum = weekNum;
  const data = weeksData.find(w => w.week === weekNum);
  
  document.getElementById("detailWeekTitle").innerText = data.title;
  document.getElementById("detailPainTopic").innerText = `Tema: ${data.painTopic}`;
  document.getElementById("detailPainDesc").innerText = data.painDesc;

  const exContainer = document.getElementById("exercisesContainer");
  exContainer.innerHTML = "";

  data.exercises.forEach((exKey, index) => {
    const ex = exerciseCatalog[exKey];
    const card = document.createElement("div");
    card.className = "exercise-card";
    card.innerHTML = `
      <div class="exercise-header">
        <span class="ex-num">${index + 1}</span>
        <span class="ex-title">${ex.name}</span>
      </div>

      <div class="media-placeholder">
        <span style="font-size: 32px;">🎬</span>
        <strong>Espaço reservado para Vídeo / GIF</strong>
        <small>Arquivo sugerido: /assets/${ex.file}</small>
      </div>

      <div>
        <h3 style="font-size: 18px;">Como fazer?</h3>
        <p style="margin-top: 4px;">${ex.howTo}</p>
        <p style="margin-top: 6px; font-weight: 700; color: var(--petroleo-escuro);">⏱ Tempo/Repetições: ${ex.duration}</p>
      </div>

      <div class="ex-actions">
        <button class="btn-audio-ex" onclick="speakText('${ex.name}. ${ex.howTo} ${ex.audioDesc}')">
          🔊 Ouvir Exercício
        </button>
        <button class="btn-variation" onclick="openVariation('${exKey}')">
          Não conseguiu? Ver variações ›
        </button>
      </div>
    `;
    exContainer.appendChild(card);
  });

  goTo("screen-week-detail");
}

function openVariation(exKey) {
  const ex = exerciseCatalog[exKey];
  document.getElementById("varExerciseName").innerText = ex.name;
  document.getElementById("varHowTo").innerText = ex.variation;
  document.getElementById("varMediaFile").innerText = `Arquivo sugerido: /assets/var-${ex.file}`;
  goTo("screen-variations");
}

// ==========================================================
// 4. ACOMPANHAMENTO & ESCALA DE BORG
// ==========================================================
function buildBorgScale() {
  const borgList = document.getElementById("borgList");
  borgList.innerHTML = "";
  borgScaleData.forEach(item => {
    const div = document.createElement("div");
    div.className = "borg-item";
    div.style.backgroundColor = item.color;
    div.onclick = () => {
      document.querySelectorAll(".borg-item").forEach(el => el.classList.remove("selected"));
      div.classList.add("selected");
      formState.borg = `${item.num} - ${item.label}`;
    };
    div.innerHTML = `<span class="borg-num">${item.num}</span> <span>${item.label}</span>`;
    borgList.appendChild(div);
  });
}

function selectOption(group, value, btnEl) {
  formState[group] = value;
  btnEl.parentElement.querySelectorAll(".emoji-btn").forEach(b => b.classList.remove("selected"));
  btnEl.classList.add("selected");
}

function openTracking() {
  formState = { mood: "", sleep: "", borg: null };
  document.querySelectorAll(".emoji-btn, .borg-item").forEach(el => el.classList.remove("selected"));
  document.querySelectorAll("input[type='radio']").forEach(r => r.checked = false);
  document.getElementById("userNotes").value = "";
  document.getElementById("trackingProgressLabel").innerText = `Registrando Semana ${currentWeekNum} de 8`;
  goTo("screen-tracking");
}

function saveTracking() {
  const completedRadio = document.querySelector("input[name='completedEx']:checked");
  const helpRadio = document.querySelector("input[name='helpNeeded']:checked");
  const notes = document.getElementById("userNotes").value.trim();

  savedRecords[currentWeekNum] = {
    week: currentWeekNum,
    date: new Date().toLocaleDateString("pt-BR"),
    mood: formState.mood || "Não informado",
    sleep: formState.sleep || "Não informado",
    completed: completedRadio ? completedRadio.value : "Não informado",
    help: helpRadio ? helpRadio.value : "Não informado",
    borg: formState.borg || "Não informado",
    notes: notes || "Sem observações."
  };

  localStorage.setItem("movimento_ufc_records", JSON.stringify(savedRecords));
  speakText(`Parabéns! Semana ${currentWeekNum} salva com sucesso. Um novo fruto cresceu na sua Árvore do Movimento!`);
  alert(`🎉 Parabéns! Semana ${currentWeekNum} concluída! Um novo fruto cresceu na sua Árvore do Movimento.`);
  goTo("screen-weeks");
}

function renderRecords() {
  const container = document.getElementById("recordsContainer");
  const keys = Object.keys(savedRecords);

  if (keys.length === 0) {
    container.innerHTML = `<div class="exercise-card"><p>Você ainda não possui registros salvos. Conclua uma semana para vê-la aqui!</p></div>`;
    return;
  }

  container.innerHTML = "";
  keys.forEach(k => {
    const r = savedRecords[k];
    const card = document.createElement("div");
    card.className = "exercise-card";
    card.innerHTML = `
      <div class="exercise-header">
        <span class="ex-num">${r.week}</span>
        <span class="ex-title">Semana 0${r.week} • ${r.date}</span>
      </div>
      <p><strong>Como se sentiu:</strong> ${r.mood} | <strong>Sono:</strong> ${r.sleep}</p>
      <p><strong>Realização:</strong> ${r.completed}</p>
      <p><strong>Apoio:</strong> ${r.help}</p>
      <p><strong>Esforço (Escala de Borg):</strong> ${r.borg}</p>
      <p><strong>Relato:</strong> "${r.notes}"</p>
    `;
    container.appendChild(card);
  });
}

// ==========================================================
// 5. AUDIODESCRIÇÃO NATIVA GRATUITA (WEB SPEECH API)
// ==========================================================
function speakText(text) {
  if (!("speechSynthesis" in window)) {
    alert("Seu navegador não suporta leitura em voz alta.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "pt-BR";
  utterance.rate = 0.92; // Velocidade levemente mais pausada para idosos

  const btn = document.getElementById("btnGlobalAudio");
  btn.classList.add("speaking");
  utterance.onend = () => btn.classList.remove("speaking");
  utterance.onerror = () => btn.classList.remove("speaking");

  window.speechSynthesis.speak(utterance);
}

function readCurrentScreen() {
  const activeScreen = document.querySelector(".screen.active");
  if (!activeScreen) return;
  const textToRead = activeScreen.innerText.replace(/🔊.*?\n/g, "");
  speakText(textToRead);
}

function readPainEducation() {
  const topic = document.getElementById("detailPainTopic").innerText;
  const desc = document.getElementById("detailPainDesc").innerText;
  speakText(`${topic}. ${desc}`);
}

// Inicializa Escala de Borg ao carregar
buildBorgScale();