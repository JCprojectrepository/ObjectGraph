interface Navigation {
    label: string
    path: string
  }

export const navigations: Navigation[] = [
  {
    label: 'カリキュラム',
    path: '/viewer/curriculum', 
  },
  {
    label: '課題',
    path: '/viewer/task', 
  },
  {
    label: 'ブートキャンプ',
    path: '/viewer/bootcamp', 
  },
  {
    label: 'アンケート',
    path: '/viewer/survey'
  },
  {
    label: 'ニュース',
    path: '/viewer/news'
  },
  {
    label: '設定',
    path: '/viewer/account'
  },
]