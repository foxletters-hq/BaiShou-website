import type { Messages } from '../types';

const ja: Messages = {
  meta: {
    title: '白守 · BaiShou',
    description:
      'ローカル優先・AI ネイティブの個人ナレッジベースと長期記憶システム。AI コンパニオン、RAG 検索、マルチデバイス同期に対応。',
  },
  brand: { name: '白守', suffix: ' · Foxletters' },
  nav: {
    problem: '課題',
    features: '機能',
    vision: 'ナレッジ',
    principles: '理念',
    people: 'メンバー',
  },
  a11y: {
    mainNav: 'ページナビゲーション',
    snapNav: 'セクションナビゲーション',
    footerNav: 'フッターナビゲーション',
    themeToggle: 'ライト / ダークテーマを切り替え',
    langSelect: '言語を選択',
    avatar: 'のアバター',
  },
  hero: {
    eyebrow: 'BaiShou',
    title: '白守',
    tagline: '純白の誓いで、互いの一生を守る',
    positioning: 'ローカル優先・AI ネイティブの個人ナレッジベースと長期記憶システム。',
    desc: 'AI コンパニオンユーザーの日記と長期記憶から始め、日記・AI コンパニオン・マルチデバイス同期をひとつの個人記憶空間に。ナレッジベース機能は開発中。コア機能はオープンで、データはあなたのデバイスに残ります。',
    ctaGithub: 'GitHub へ',
    ctaVision: 'ナレッジベースについて',
    iconAlt: '白守アプリアイコン',
  },
  problem: {
    eyebrow: 'Problem',
    title: 'AI 時代、長期記憶はまだ本当には解決されていない',
    lead: '日記・資料・対話をソフトに託す人が増えても、長期記憶・AI コンパニオン・ローカルに残るデータを一体で扱うツールは少ない。',
    items: {
      memory: {
        title: 'AI に信頼できる長期記憶がない',
        desc: '多くの AI 製品はクラウドセッションに依存し、記憶はコンテキストとプラットフォーム方針に縛られる。使い捨てのチャットではなく、生活と思い出を長く残すシステムが必要です。',
      },
      notes: {
        title: '従来のノートは AI ネイティブではない',
        desc: 'Notion や Obsidian は整理に優れるが、AI はしばしば後付け。自分のノートを AI に読ませるには、複雑な設定やプラグインが要ることも。',
      },
      scattered: {
        title: '資料と記憶がバラバラ',
        desc: 'ファイルはクラウド、ノートはノートアプリ、日記は別の場所、対話はモデルプラットフォーム。分散したデータでは AI は文脈を組み立てにくい。',
      },
      locale: {
        title: '中文圏に適した選択が少ない',
        desc: '海外のナレッジ・AI ツールはアクセス・決済・データ所在地の壁がある。ローカル優先で多端末使え、国産モデルにもつなげる選択が必要です。',
      },
    },
  },
  features: {
    eyebrow: 'Features',
    title: 'コア機能',
    lead: '日記・AI コンパニオン・同期は利用可能。ナレッジベースは開発中で、既存の記憶体系と順次つながります。',
    devBadge: '開発中',
    items: {
      diary: {
        title: '日記と思い出',
        desc: '毎日の出来事を記録し、週記・月記・年間まとめで長期記憶を育てる。',
      },
      companion: {
        title: 'AI コンパニオン',
        desc: '個人の記憶を土台に、長く寄り添う AI コンパニオンを作れる。',
      },
      knowledge: {
        title: 'ファイルナレッジベース',
        desc: 'PDF・DOC・Markdown・画像などをナレッジベース単位で整理。（開発中）',
        badge: '開発中',
      },
      rag: {
        title: 'RAG 検索',
        desc: '全文検索とベクトル検索を組み合わせ、関連する日記・ファイル・履歴を見つける。',
      },
      sync: {
        title: 'マルチデバイス同期',
        desc: 'デスクトップとモバイルを同期。公式ホスティングまたは自前の S3 / WebDAV も。',
      },
      local: {
        title: 'ローカル優先',
        desc: 'コアデータはデフォルトでローカル。インポート・エクスポートでき、記憶をプラットフォームに閉じ込めない。',
      },
    },
  },
  vision: {
    eyebrow: 'Vision',
    title: 'AI ネイティブの個人ナレッジベースを構築する',
    devBadge: '開発中',
    lead: '日記と AI コンパニオンはすでに使える。ナレッジベースは白守の次の段階——ファイル・学習資料・生活の記憶を、AI が読めるひとつの空間へ。',
    whyTitle: 'なぜナレッジベースか？',
    whyP1:
      'PDF、授業ノート、仕事の文書、生活の日記をずっと別アプリに分けておく必要はない。白守は<strong>個人の長期データの統一入口</strong>を目指す——蓄積が増えるほど、AI は学習の軌跡・生活の脈・思考の癖を理解する。',
    whyP2:
      'クラウドストレージの皮を被せたものではない。資料を AI のワークフローに入れ、検索・質問応答・出典付き・長く寄り添えるようにする。',
    compare: {
      notes: {
        title: '従来のノートアプリとは違う',
        desc: 'ノートツールは「記録と整理」、白守は「個人データを AI が理解し長く使う」こと。コンパニオン・RAG・長期記憶は土台設計で、後付けプラグインではない。',
      },
      chat: {
        title: '従来のチャットアプリとは違う',
        desc: 'チャットは即時の質問応答と陪伴に強いが、記憶はプラットフォーム側に残りがち。白守はローカルの日記・ファイル・移行可能なデータの上に AI を載せる。',
      },
    },
    ambitionTitle: '私たちのビジョン',
    ambitionP1:
      'まず AI コンパニオンユーザーの日記と長期記憶で需要を検証し、知識労働者・学生・生涯学習者へ広げる。白守は<strong>中文圏でローカル優先・AI ネイティブ・多端末同期</strong>の個人ナレッジベースを目指す——データはエクスポートでき、記憶と資料を自分で持ち続けられるようにする。',
  },
  principles: {
    eyebrow: 'Principles',
    title: 'ローカル優先、データは開かれている',
    lead: '白守はすべてのツールを置き換えるのではなく、個人データと長期記憶を大切にする人のための、AI ネイティブで同期できる個人ナレッジベースです。',
    items: {
      local: {
        title: 'ローカル優先',
        desc: 'コアデータはローカルがデフォルト。インポート・エクスポートでき、記憶をプラットフォームに閉じ込めない。',
      },
      open: {
        title: 'コア機能はオープン',
        desc: 'ローカル日記・ファイル管理・自前同期・カスタムモデル API は開放。データを閉じて課金しない。',
      },
      ai: {
        title: 'AI が資料を理解する',
        desc: '単なるファイル置き場ではなく、長く蓄積した個人記憶を検索・質問応答・要約できる。',
      },
      official: {
        title: '公式サービスは任意',
        desc: '手間を省きたいときは暗号化同期・バックアップ・AI サービスを。無料でもデータの所有と移行は続けられる。',
      },
    },
  },
  people: {
    founderEyebrow: 'Founder',
    founderTitle: '創業者',
    founderRole: '創業者',
    founderBio:
      '技術型のインディー開発者。製品定義、クロスプラットフォーム開発、AI 記憶・同期アーキテクチャ、初期コミュニティ運営を担当。',
    collabEyebrow: 'Collaborators',
    collabTitle: '協力者',
    collabLeadBefore: '白守を支えるすべての方に感謝。完全な貢献者一覧は',
    collabLeadLink: 'GitHub Contributors',
    collabLeadAfter: 'をご覧ください。',
    collaborators: {
      ratman: {
        bio: 'フロントエンド開発。コンポーネントライブラリとデザインに独自の理解があり、豊富な実務経験と高品質な PR で知られる。',
      },
      ctnilpp: {
        bio: '情熱あふれる理想主義者。新技術への習得が早く、独力で深く掘り下げる力がある。',
      },
    },
  },
  footer: {
    bilibili: 'ビリビリ',
    joinCommunity: 'コミュニティに参加',
  },
  community: {
    eyebrow: 'Community',
    title: 'コミュニティに参加',
    lead: 'QR コードをスキャンして QQ グループに参加し、白守のユーザーと開発者と交流しましょう。',
    groupIdLabel: 'グループ番号',
    scanHint: 'QR コードをスキャンしてグループチャットに参加',
    closeAria: 'コミュニティダイアログを閉じる',
    groups: {
      group1: {
        name: '白守1群 早睡早起',
        qrAlt: '白守1群 QQ グループ QR コード',
      },
      group2: {
        name: '白守2群 好好吃饭',
        qrAlt: '白守2群 QQ グループ QR コード',
      },
    },
  },
};

export default ja;
