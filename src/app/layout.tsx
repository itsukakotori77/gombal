import type { Metadata } from "next"
import localfont from 'next/font/local'
import '@/src/assets/styles/globals.scss'
import SEO from "./seo"

export const metadata: Metadata = {
   title: 'Portfolio Nunu',
   description: 'none',
}

export const font = localfont({
   src: [
      {
         path: '@/src/assets/fonts/Montserrat-Light.ttf',
         weight: '200',
         style: 'normal',
      },
      {
         path: '@/src/assets/fonts/Montserrat-Black.ttf',
         weight: '400',
         style: 'normal',
      },
      {
         path: '@/src/assets/fonts/Montserrat-SemiBold.ttf',
         weight: '600',
         style: 'normal',
      },
      {
         path: '@/src/assets/fonts/Montserrat-Bold.ttf',
         weight: '700',
         style: 'normal',
      },
      {
         path: '@/src/assets/fonts/Montserrat-Medium.ttf',
         weight: '500',
         style: 'normal',
      },
      {
         path: '@/src/assets/fonts/Montserrat-SemiBold.ttf',
         weight: '600',
         style: 'normal',
      },
   ]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <SEO/>
      <body className={font.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}