import { ReactNode } from 'react'
import '@/styles/globals.css'
import GoogleAnalytics from '@/services/GoogleAnalytics'
import { Suspense } from 'react'
import { QuizProvider } from '@/components/context/QuestionContext'; 
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: 'あなたにピッタリの活用術をご紹介！ChatGPT家事サポート診断',
    default: 'あなたにピッタリの活用術をご紹介！ChatGPT家事サポート診断'
  },
  description:"日常生活で役立つChatGPTの活用方法をご紹介！普段の家事のスタイルからあなたにピッタリの活用方法を提案します。",
  openGraph:{
    title:"あなたにピッタリの活用術をご紹介！ChatGPT家事サポート診断",
    images:["https://alto-software.com/shindan/chatgpt/housework/ogp/ogp.png"],
    url:"https://alto-software.com",
  },
  twitter: {
    card: 'summary_large_image',
    title:"あなたにピッタリの活用術をご紹介！ChatGPT家事サポート診断",
    description:"日常生活で役立つChatGPTの活用方法をご紹介！普段の家事のスタイルからあなたにピッタリの活用方法を提案します。",
    images: ['https://alto-software.com/shindan/chatgpt/housework/ogp/ogp.png'],
  },
}


type Props = {
    children: ReactNode
  }


const Layout = ({ children }: Props): ReactNode => {
    return (
        <QuizProvider>
            {children}
          </QuizProvider>

    )
}


export default Layout;

