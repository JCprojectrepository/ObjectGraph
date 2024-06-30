import { ReactNode } from 'react'
import '@/styles/globals.css'
import GoogleAnalytics from '@/services/GoogleAnalytics'
import { Suspense } from 'react'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Alto Software株式会社',
    default: 'Alto Software株式会社'
  },
  description:"Alto Software株式会社は『デジタルの力で質の高い教育を全ての人が受けられる社会の実現』を目標として企業活動を行っています。",
  openGraph:{
    title:"Alto Software株式会社",
    images:["https://alto-software.com/img/ogp/opengraph-image.jpg"],
    url:"https://alto-software.com",
  },
  twitter: {
    card: 'summary_large_image',
    title:"Alto Software株式会社",
    description:"Alto Software株式会社は『デジタルの力で質の高い教育を全ての人が受けられる社会の実現』を目標として企業活動を行っています。",
    images: ['https://alto-software.com/img/ogp/opengraph-image.jpg'],
  },
}


type Props = {
    children: ReactNode
  }


const Layout = ({ children }: Props): ReactNode => {
    return (
    <html lang="ja">
        <head>
            <Suspense>
                <GoogleAnalytics />
            </Suspense>
        </head>
        <body>
            <Header />
            {children}
            <Footer />
      </body>
    </html>
    )
}


export default Layout;

