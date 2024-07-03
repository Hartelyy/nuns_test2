export const scripts = [
  {
    number: '01',
    script: '[배고프다..]',
    img: '/images/집_주방.jpg'
  },
  {
    number: '02',
    script: '[아빠가 오늘도 안 들어왔으면 좋겠다.]',
    img: '/images/아지트_거실.png',
  },
  {
    number: '03',
    script: '[급식을 못 먹은지 이틀째.<br>너무나도 배가 고프다]',
    img: '/images/아지트_거실.png',
  },
  {
    number: '04',
    script: '[뭐라도 좀 먹어야 할 것 같다.]',
    img: '/images/집_주방.jpg',
  },
  {
    number: '05',
    script: '[늘 하던듯이 라면을 반 개만 끓인다.]',
    img: '/images/집_주방.jpg',
  },
  {
    number: '06',
    script: '[라면 반 개로는 배고픔이 채워지지 않는다.<br>이래서 주말이 싫다.]',
    img: '/images/집_주방.jpg',
  }

]


export const scripts2 = [
  {
    number: '01',
    script: '[아빠가 언제 올지 몰라 무서워 늦게 잤더니, 늦잠을 자버렸다.]',
    img: '/images/집_주방.jpg'
  },
  {
    number: '02',
    script: '‘아 지각이다...!’',
    img: '/images/아지트_거실.jpg',
  },
  {
    number: '03',
    script: '-급하게 등교해 책상에 앉는 지윤-',
    img: '/images/아트_거실.jpg',
  },
  {
    number: '04',
    script: '"서지윤!! 왜 늦었음?!"',
    img: '/images/집_주방.jpg',
  },
  {
    number: '05',
    script: ' `갑자기 아빠가 올까봐 늦게 잤더니...` ',
    img: '/images/집_주방.jpg',
  },
  {
    number: '06',
    script: '"에반데?<br>차라리 니가 집 나가면 안 돼?"',
    img: '/images/집_주방.jpg',
  },
  {
    number: '07',
      script: '"내가 저번에 말한 아지트 기억나?,<br>너도 한 번 가볼래?"',
      choices: [
        { text: '유리가 말한 빈집으로 간다', value: '"응. 그게 낫겠다."' },
        { text: '집으로 돌아간다', value: '"그래도 집에 가야지..."',
      next: '`먹을 것도 없고... 아빠가 오늘 올 것 같아 무섭다...<br>그냥 유리와 함께 가는 게 낫겠어.`' }
      ]
    },
    {
      number: '08',
      script: '-지윤은 그렇게 유리와 아지트로 간다-',
      img: '/images/아트_거실.jpg',
    }
]



export const results = [
  {
    title: '출근 시간은<br>내가 정해!',
    character: '/images/result_character1.png',
    results: [
      '혼자서 멘탈 케어가 가능해요!<br>소속이 없어도, 벌이가 불안정해도 저는 지금이 좋아요!',
      '일에 대한 욕심이 많아요.<br>행복한 야근이라고 할 수 있어요!',
      '자유로운 환경에서 더 잘해요!<br>하지만 누구보다 스스로 시간 관리가 철저해요:)',
      '리더십 있다는 소리를 자주 들어요.<br>추진력이 있는 편이죠~ (뿌듯)'
    ],
    jobs: ['프리랜서', '창업가'],
    lectureImg: '/images/result_lecture1.png',
    lectureUrl: 'https://bit.ly/3Wr0kt6'
  },
  {
    title: '프로직진러!<br>진행력 갑',
    character: '/images/result_character2.png',
    results: [
      '나는야 회사 사람들 멘탈 지킴이!<br>언제나 토닥토닥 으샤으샤 응원하며 다니는 파워 인싸!',
      '여러 사람과 협업이 필요한 직무에 찰떡!',
      '진행력 갑! 추진력 갑!<br>빠른 속도로 동시에 여러 업무를 해결할 수 있어요.',
      '회사 행사나 크리스마스 이벤트,<br>회사사람들 생일까지 우리가 다 챙길게요'
    ],
    jobs: ['마케터', '기획자'],
    lectureImg: '/images/result_lecture2.png',
    lectureUrl: 'https://bit.ly/3SZl1t9'
  },
  {
    title: '우리 무기는<br>상상력!',
    character: '/images/result_character3.png',
    results: [
      '이것저것 관심이 많은 편이에요.<br>모든 게 궁금해요!',
      '섬세함이 장점으로<br>업무를 센스 있게 처리한다는 말을 자주 들어요.',
      '가끔은 거절을 잘 못해서 일이 몰릴 때가 있지만..!<br>전 괜찮아요~ (프로긍정러)',
      '업무에 예민할 때도 있지만,<br>그래서 결과물은 완벽하죠!'
    ],
    jobs: ['디자이너', '예술가'],
    lectureImg: '/images/result_lecture3.png',
    lectureUrl: 'https://bit.ly/3DWlesG'
  },
  {
    title: '인생은<br>한방!',
    character: '/images/result_character4.png',
    results: [
      '전략적으로 계획을 세우는 걸 좋아해요!',
      '평소 경제와 사회 이슈에 관심이 매우 많아요.',
      '꿈이 커요!<br>크게 성공할 수 있는 한 방을 이뤄낼 거예요~',
      '일할 땐 일하고! 놀 땐 놀고!<br>뭐든 확실한 게 좋아요.'
    ],
    jobs: ['부동산<br>투자자', '주식<br>투자자'],
    lectureImg: '/images/result_lecture4.png',
    lectureUrl: 'https://bit.ly/3fvoTo5'
  },
  {
    title: '한 번 집중하면<br>멈출 수 없지!',
    character: '/images/result_character5.png',
    results: [
      '저는 위선과 가식이 없어요.<br>진실만 말하죠. (진지)',
      '혼자서 더 잘해요.<br>솔로 워커 최고!',
      '관심 분야가 생기면 끝도 없이 깊어져요.<br>다만 이외에 모든 것엔 관심이 없어요.',
      '(이상) <<<<<< (현실)<br>가끔 이성에게 상처를 줄 때가 있어요, 그게 아닌데...'
    ],
    jobs: ['개발자', '데이터분석가'],
    lectureImg: '/images/result_lecture5.png',
    lectureUrl: 'https://bit.ly/3U0O3Kj'
  },
  {
    title: '인생 욜로지~<br>일단 놀자 ><',
    character: '/images/result_character6.png',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '한가하냐고요?<br>원래 백수가 젤 바쁜 거에요!',
      '결혼사진에 친구들이 다 들어갈 수 있을까요?',
      '가끔이지만, 갓생살기 도전해요!'
    ],
    jobs: ['돈 많은 백수', '유튜버'],
    lectureImg: '/images/result_lecture6.png',
    lectureUrl: 'https://bit.ly/3fzdinR'
  }
]

