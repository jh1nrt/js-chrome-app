const quotes = [
  {
    quotes:
      "햇빛은 달콤하고 비는 상쾌하며, 바람은 시원하고 눈은 기분을 들뜨게 만든다. 세상에 나쁜 날씨란 없는 법이다. 각자 다른 종류의 좋은 날씨만 존재할 뿐이다. ",
    author: "John Ruskin",
  },
  {
    quotes:
      "누구나 위대한 사람이 될 수 있다. 누구나 남들에게 필요한 존재가 될 수 있기 때문이다.",
    author: "Martin Luther King Jr.",
  },
  {
    quotes: "무엇도 변하지 않을 지언정, 내가 변하게 된다면 모든 것이 변한다.",
    author: "Honoré Balzac",
  },
  {
    quotes:
      "한 사람이 맺는 인간관계는 그 사람이 갖고 있는 꿈의 크기를 결정짓는다.",
    author: "알베르트 슈바이처",
  },
  {
    quotes: "열등감과 자기비난에 시달리는 사람은 주변을 어둡게 만든다.",
    author: "존 F. 케네디",
  },
  {
    quotes:
      "큰 그림을 보고가는 사람은 작은 그림이 조금씩 틀리는 것에 연연하지 않는다.",
    author: "강태공",
  },
  {
    quotes: "세상에는 악한 사람이 존재하는 것이 아니라, 약한 사람이 존재한다.",
    author: "베이컨(철학자)",
  },
  {
    quotes:
      "단호한 생각과 모호한 생각의 경계를 구분짓기 위해서는 단호한 결단이 필요하다.",
    author: "헤르만 헤세",
  },
  {
    quotes:
      "준비된 성공과 우연한 성공은 처음에는 비슷해 보이나, 결말은 확실히 달라진다.",
    author: "맥스웰 몰츠",
  },
  {
    quotes:
      "사람이 발전하는 속도가 크게 차이가 나게 되면 신뢰있는 관계를 구축하기 어렵다.",
    author: "피카소",
  },
  {
    quotes:
      "애초에 얻고 싶은 바가 명확하지 않았던 사람들에게는 잃을 것도 명확하지않다.",
    author: "니체",
  },
  {
    quotes:
      "새로운 시간에는 새로운 영혼을 담고 새로운 목표에는 노련한 경험을 담으라.",
    author: "탈무드",
  },
  {
    quotes:
      "일 중심적인 관점으로만 인간관계에 집중하면 상대의 감정을 놓치기 쉽다.",
    author: "디킨스",
  },
  {
    quotes:
      "아름다운 젊음은 우연한 자연현상이지만, 아름다운 노년은 훌륭한 예술 작품이다.",
    author: "도날드 트럼프",
  },
  {
    quotes:
      "비관론자는 기회에 숨어있는 문제를 보고 낙관론자는 문제에 숨어있는 기회를 본다.",
    author: "위틀리",
  },
  {
    quotes:
      "문제라고 함은 목표와 현실 사이의 간극(gap) 이므로 목표가 없다면 문제도 없다.",
    author: "촘스키",
  },
  {
    quotes:
      "회사의 성장을 위해서는 문제가 아닌 해법에 초점을 맞출 수 있는 인재가 필요하다.",
    author: "맥스웰 몰츠",
  },
  {
    quotes:
      "기회는 배를 타고 오는 것이 아니라, 우리들 내부의 목표의식에서 온다.",
    author: "데이스위틀리",
  },
  {
    quotes: "목표가 구체적일때 그 목표를 실현하는데 많은시간을 투자하게 된다.",
    author: "브라이언 트레이시",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const todaysQuote = quotes[getRandom(0, 19)];

quote.innerText = todaysQuote.quotes;
author.innerText = `ㅡ ${todaysQuote.author}`;
