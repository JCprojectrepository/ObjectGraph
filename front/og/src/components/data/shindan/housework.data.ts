export interface Question {
  questionText: string;
  choices: {
    choiceText: string;
    point: number;
  }[];
}

interface ResultType {
  type: string;
  description: string;
  image: string;
  range: {
    min: number;
    max: number;
  };
}


export const questionDetail: any = {
  title: '毎日の家事を効率化！チャットGPT家事サポート診断',
  description: 'あなたの家事スタイルとチャットGPTの活用方法を発見しましょう',
  headerImage: 'JCWeb/front/jcweb/public/shindan/chatgpt/housework/creator.webp',
  numberOfQuestions: 10,
};

export const questions: Question[] = [
  {
    questionText: '料理のレシピを探す時、どのように情報を得ていますか？',
    choices: [
      { choiceText: 'インターネットで検索する', point: 10 },
      { choiceText: '本や雑誌を参照する', point: 5 }
    ],
  },
  {
    questionText: '洗濯物をする際、どのように天気をチェックしますか？',
    choices: [
      { choiceText: 'スマートフォンの天気アプリを見る', point: 10 },
      { choiceText: 'テレビやラジオの天気予報を聞く', point: 5 }
    ],
  },
  {
    questionText: '掃除のスケジュールはどのように管理していますか？',
    choices: [
      { choiceText: '頭の中で覚えておく', point: 5 },
      { choiceText: 'カレンダーやアプリで管理する', point: 10 }
    ],
  },
  {
    questionText: '買い物リストを作る際、どの方法を使いますか？',
    choices: [
      { choiceText: '紙に手書きで書く', point: 5 },
      { choiceText: 'スマホのメモやアプリを使用する', point: 10 }
    ],
  },
  {
    questionText: '料理中にわからないことがあった時、どうしますか？',
    choices: [
      { choiceText: '家族や友人に電話で聞く', point: 5 },
      { choiceText: 'オンラインで検索する', point: 10 }
    ],
  },
  {
    questionText: '子どもたちの予定はどのように管理していますか？',
    choices: [
      { choiceText: '家族共有のデジタルカレンダーを利用する', point: 10 },
      { choiceText: '壁に掛けたカレンダーに書き込む', point: 5 }
    ],
  },
  {
    questionText: '疲れたときのリラックス方法は何ですか？',
    choices: [
      { choiceText: 'アロマテラピーなどのリラクゼーションを楽しむ', point: 10 },
      { choiceText: 'テレビを見たり、音楽を聞く', point: 5 }
    ],
  },
  {
    questionText: '普段の交通手段は何ですか？',
    choices: [
      { choiceText: '公共交通機関を利用する', point: 5 },
      { choiceText: '自転車や徒歩で移動する', point: 10 }
    ],
  },
  {
    questionText: '大掃除をする頻度はどれくらいですか？',
    choices: [
      { choiceText: '年に1回の徹底的な大掃除を行う', point: 5 },
      { choiceText: '季節の変わり目ごとに少しずつ行う', point: 10 }
    ],
  },
  {
    questionText: '料理の際、どのような調理器具を好んで使用しますか？',
    choices: [
      { choiceText: '最新の電子機器やスマートキッチンツール', point: 10 },
      { choiceText: '伝統的な鍋やフライパン', point: 5 }
    ],
  }
];

export const result: any = {
  title: 'あなたのタイプは？',
  types:[
    {
      typeName:"digital-assistant-master",
      type: 'デジタルアシスタントマスター',
      description: 'デジタルツールを積極的に活用し、効率的な家事管理をしています。ChatGPTでさらに家事の自動化や情報収集を進めましょう。',
      advice: 'ChatGPTを使って、毎日の買い物リストや簡単な家計簿を作成してみましょう。声で入力する方法もあり、手軽に始められます。',
      image: '/shindan/chatgpt/housework/types/type1.png',
      range: { min: 76, max: 100 },
      useCase:[1,2],
    },
    {
      typeName:"traditional-home-expert",
      type: '伝統的家事の達人',
      description: '伝統的な方法で家事をこなし、経験と知識に頼るスタイルです。ChatGPTを使って新しい家事の技術を取り入れてみましょう。',
      advice: 'ChatGPTに簡単な質問をしてみて、例えば「簡単な家庭料理のレシピは？」と聞いてみましょう。新しい料理のアイデアを得ることができます。',
      image: '/shindan/chatgpt/housework/types/type2.png',
      range: { min: 41, max: 75 },
      useCase:[0,1],
    },
    {
      typeName:"experimental-home-explorer",
      type: '探求心旺盛な実験家',
      description: '新しい家事の方法を試すことが好きで、常に最良の方法を求めています。ChatGPTと一緒に、もっと多くの家事ハックを発見しましょう。',
      advice: 'ChatGPTと一緒に、新しい掃除のコツや整理整頓のアイデアを探してみましょう。簡単な言葉で質問するだけで、役立つ情報が得られます。',
      image: '/shindan/chatgpt/housework/types/type3.png',
      range: { min: 101, max: 125 },
      useCase:[1,3],
    },
    {
      typeName:"busy-practical-professional",
      type: '忙しい実践家',
      description: '忙しい毎日を過ごしながらも、家事をしっかりとこなすプロフェッショナルです。ChatGPTで家事の効率をさらに向上させ、もっと自由な時間を作り出しましょう。',
      advice: 'ChatGPTに日々の家事スケジュールを整理してもらい、何をいつやるかの提案をしてもらいましょう。忙しい毎日を少し楽にするためのアイデアがもらえます。」',
      image: '/shindan/chatgpt/housework/types/type4.png',
      range: { min: 126, max: 150 },
      useCase:[1,2],
    }
  ]
};

export const useCase: any = {
  title: 'ChatGPT活用事例',
  cases: [
    {
      title: '冷蔵庫にある材料で献立を考えてもらおう！',
      description: '冷蔵庫にある食材をChatGPTに伝えるだけ、それらを使った献立を提案してくれます。 「糖質制限」や「塩分少なめ」といった条件を追加すれば、よりパーソナルな献立を提案してくれます！',
      image: '/shindan/chatgpt/housework/usecase/3386406_s.jpg'
    },
    {
      title: '食事の栄養価を教えてもらう',
      description: '食事の写真をChatGPTに送るだけで、その食事の栄養価を教えてくれます。カロリーや栄養素のバランスを気にしている方におすすめです。写真に加えて分量や調味料などを追記すれば、より正確な栄養価を教えてくれます。',
      image: '/shindan/chatgpt/housework/usecase/28410640_s.jpg'
    },
    {
      title: '週末のお出かけプランを考えてもらう',
      description: '旅行先、目的、プラン等をChatGPTに伝えることで、旅行に必要な持ち物のリストや日程表を作成できます。既に決まっている予定や優先的に訪れたい場所があれば、その旨も伝えておくと、よりパーソナライズされた日程表を作成することも可能です。',
      image: '/shindan/chatgpt/housework/usecase/4154034_s.jpg'
    },
    {
      title: '専用のフィットネスメニューを作ってもらってもらう',
      description: 'ChatGPTを使って、自分に合ったフィットネスメニューを作成してもらうことができます。目標や好みに合わせたメニューを提案してくれるので、自分に合ったトレーニングメニューを作りたい方におすすめです。',
      image: '/shindan/chatgpt/housework/usecase/24007925_s.jpg'
    }
  ]
}
