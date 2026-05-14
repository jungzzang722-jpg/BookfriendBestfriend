// =========================
// 감정별 책 데이터
// =========================

const emotionData = {

  찜찜: {
    emoji: "🐣",
    book: "아몬드",
    author: "손원평",
    quote:
      "세상은 나 없이도 잘 돌아갔고, 나는 그 틈에서 조용히 숨을 쉬고 있었다.",
    comment:
      "마음이 찜찜한 날엔 조용히 숨 쉬는 것만으로도 충분해. 🤍"
  },

  불안: {
    emoji: "😰",
    book: "죽고 싶지만 떡볶이는 먹고 싶어",
    author: "백세희",
    quote:
      "불안은 없어지는 게 아니라 함께 살아가는 거였다.",
    comment:
      "괜히 불안한 밤은 누구에게나 있어. 오늘은 너무 애쓰지 마."
  },

  외로움: {
    emoji: "💬",
    book: "82년생 김지영",
    author: "조남주",
    quote:
      "우리는 말하지 않은 것들로 가득 찬 사람들이다.",
    comment:
      "혼자인 기분이 들어도 네 마음은 분명 누군가와 연결되어 있어."
  },

  지침: {
    emoji: "😪",
    book: "채식주의자",
    author: "한강",
    quote:
      "아무것도 하지 않는 것이 가장 어려운 일이었다.",
    comment:
      "이유 없이 지치는 날도 있어. 그런 날엔 쉬어가도 괜찮아."
  },

  위로: {
    emoji: "🤍",
    book: "달러구트 꿈 백화점",
    author: "이미예",
    quote:
      "오늘 하루도 수고했어. 이제 눈 감아도 돼.",
    comment:
      "오늘 정말 고생 많았어. 여기서는 편하게 쉬어도 돼."
  }

};

// =========================
// 감정 선택
// =========================

function quickEmotion(emotion){

  const data =
    emotionData[emotion];

  if(!data) return;

  // 감정칩 변경
  const chip =
    document.querySelector("#s8 .chip");

  if(chip){

    chip.innerHTML =
      `${data.emoji} ${emotion}`;

  }

  // 책 정보 변경
  const meta =
    document.querySelector("#s8 .lmeta");

  if(meta){

    meta.innerHTML =
      `『${data.book}』 — ${data.author}`;

  }

  // 문장 변경
  const quote =
    document.querySelector("#s8 .lquote");

  if(quote){

    quote.innerHTML =
      `"${data.quote}"`;

  }

  // 코멘트 변경
  const comment =
    document.querySelector("#s8 .lcomment");

  if(comment){

    comment.innerHTML =
      data.comment;

  }

  // 로딩 화면 이동
  goTo(22);

  // 2.2초 후 편지 화면
  setTimeout(()=>{

    goTo(8);

  },2200);

}

// =========================
// 채팅 기능
// =========================

window.onload = function(){

  const sendBtn =
    document.getElementById("sendBtn");

  const chatInput =
    document.getElementById("chatInput");

  const chat =
    document.getElementById("chat");

  if(!sendBtn || !chatInput || !chat){

    console.log("채팅 요소 못 찾음");

    return;

  }

  // 전송 함수
  function sendMessage(){

    const text =
      chatInput.value.trim();

    if(text === "") return;

    // 사용자 메시지
    const userMsg =
      document.createElement("div");

    userMsg.className =
      "cmsg user";

    userMsg.innerHTML = `
      <div class="cbubble">
        ${text}
      </div>

      <div class="ctime">
        지금
      </div>
    `;

    chat.appendChild(userMsg);

    // 입력창 비우기
    chatInput.value = "";

    // 스크롤 맨 아래
    chat.scrollTop =
      chat.scrollHeight;

    // 봇 답변
    setTimeout(()=>{

      const botMsg =
        document.createElement("div");

      botMsg.className =
        "cmsg bot";

      botMsg.innerHTML = `
        <div class="cbubble">
          그런 마음이 들었구나. 🤍
          조금 더 이야기해줄래?
        </div>

        <div class="ctime">
          지금
        </div>
      `;

      chat.appendChild(botMsg);

      chat.scrollTop =
        chat.scrollHeight;

    },700);

  }

  // 버튼 클릭
  sendBtn.addEventListener(
    "click",
    sendMessage
  );

  // 엔터 전송
  chatInput.addEventListener(
    "keydown",
    function(e){

      if(e.key === "Enter"){

        e.preventDefault();

        sendMessage();

      }

    }
  );

};
