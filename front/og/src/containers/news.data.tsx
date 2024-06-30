import React, { ReactNode } from 'react'

interface Data {
  image: string
  name: string
  url: string
}

export const newsList: Data[] = [
    {
        image: 'https://www.atpress.ne.jp/releases/372652/img_372652_1.jpg',
        name: 'CodeCollegeがマナビタイムに掲載されました。',
        url: 'https://manab-it.com/school/418'
    },
    {
        image: '/img/ogp/opengraph-image.png',
        name: '社名変更のお知らせ',
        url: 'https://magazine.code-college.jp/archives/42'
    },
    {
        image: '/img/news/CodeCollegeMagazine.png',
        name: '『CodeCollege Magazine』をリリースしました。',
        url: 'https://magazine.code-college.jp/'
    },
    {
        image: '/img/service/codecollege.jpg',
        name: 'オンラインプログラミングスクール『CodeCollege』をリリースしました。',
        url: 'https://code-college.jp/'
    },
    {
        image: '/img/news/Mirai_No_Kyositsu.png',
        name: '経済産業省【未来の教室】EdTechサービスに認定されました。',
        url: 'https://www.learning-innovation.go.jp/db/ed0162/'
    },
    {
        image: '/img/news/ToinHiSchool_resize.jpg',
        name: 'Pythonのオンラインプログラミング学習サービス「Laibra」 学校向け導入開始',
        url: 'https://kyodonewsprwire.jp/release/202109109879'
    },
    
]