// =========================
// 감정 데이터
// =========================

const emotionData = {

  찜찜: {
    emoji:"🐣",
    book:"아몬드",
    author:"손원평",
    quote:"세상은 나 없이도 잘 돌아갔고, 나는 그 틈에서 조용히 숨을 쉬고 있었다.",
    comment:"마음이 찜찜한 날엔 조용히 숨 쉬는 것만으로도 충분해. 🤍"
  },

  불안: {
    emoji:"😰",
    book:"죽고 싶지만 떡볶이는 먹고 싶어",
    author:"백세희",
    quote:"불안은 없어지는 게 아니라 함께 살아가는 거였다.",
    comment:"괜히 불안한 밤은 누구에게나 있어."
  },

  외로움: {
    emoji:"💬",
    book:"82년생 김지영",
    author:"조남주",
    quote:"우리는 말하지 않은 것들로 가득 찬 사람들이다.",
    comment:"혼자인 기분이 들어도 네 마음은 연결되어 있어."
  },

  지침: {
    emoji:"😪",
    book:"채식주의자",
    author:"한강",
    quote:"아무것도 하지 않는 것이 가장 어려운 일이었다.",
    comment:"지치는 날엔 쉬어가도 괜찮아."
  },

  위로: {
    emoji:"🤍",
    book:"달러구트 꿈 백화점",
    author:"이미예",
    quote:"오늘 하루도 수고했어. 이제 눈 감아도 돼.",
    comment:"오늘 정말 고생 많았어."
  }

};

// =========================
// 감정 선택
// =========================

function quickEmotion(emotion){

  const data = emotionData[emotion];

  document.querySelector("#s8 .chip").innerHTML =
    `${data.emoji} ${emotion}`;

  document.querySelector("#s8 .lmeta").innerHTML =
    `『${data.book}』 — ${data.author}`;

  document.querySelector("#s8 .lquote").innerHTML =
    `"${data.quote}"`;

  document.querySelector("#s8 .lcomment").innerHTML =
    data.comment;

  goTo(22);

  setTimeout(()=>{

    goTo(8);

  },2200);

}

// =========================
// 채팅 전송
// =========================

function sendMessage(){

  const input =
    document.getElementById("chatInput");

  const chat =
    document.getElementById("chat");

  const text =
    input.value.trim();

  if(text === "") return;

  // 사용자 메시지
  chat.innerHTML += `
    <div class="cmsg user">
      <div class="cbubble">
        ${text}
      </div>

      <div class="ctime">
        지금
      </div>
    </div>
  `;

  input.value = "";

  chat.scrollTop =
    chat.scrollHeight;

  // 봇 답변
  setTimeout(()=>{

    chat.innerHTML += `
      <div class="cmsg bot">
        <div class="cbubble">
          그런 마음이 들었구나. 🤍
        </div>

        <div class="ctime">
          지금
        </div>
      </div>
    `;

    chat.scrollTop =
      chat.scrollHeight;

  },700);

}

// =========================
// 엔터 전송
// =========================

document.addEventListener("keydown", function(e){

  if(e.key === "Enter"){

    const input =
      document.getElementById("chatInput");

    if(document.activeElement === input){

      e.preventDefault();

      sendMessage();

    }

  }

});
