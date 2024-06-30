import React, { ReactNode } from 'react'

interface Data {
  image: string
  name: string
  description: string
  url: string
}

export const serviceList: Data[] = [
    {
        image: '/img/service/codecollege.jpg',
        name: 'CodeCollege',
        description: '未経験・非エンジニアでも最短1ヶ月でエンジニア・プログラマーのスキルを習得できるオンラインプログラミングスクール',
        url: 'https://code-college.jp'
    },
    {
        image: '/img/service/laibra.png',
        name: 'Laibra',
        description: '環境構築不要。ブラウザ上でプログラムを作成しながらAIについて学べる学習プラットフォーム。',
        url: 'https://laibra.com/'
    },
    {
        image: '/img/service/laibraforbiz.png',
        name: 'Laibra For Biz',
        description: 'Laibraの法人向けサービス。企業研修や授業などでPython・AIの学習を取り入れたい場合に最適なe-learning。',
        url: 'https://laibra.com/business'
    },
]