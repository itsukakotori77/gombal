import React from "react"

interface IProps {
   title?: string
   description?: string
   richlink?: string
   url?: string
   color?: string
}

export default function SEO({
   title = 'Rahandanu',
   description = 'Portfolio Rahandanu',
   richlink = '/favicon/richlink.jpg',
   url = process.env.SITE_URL || 'https://rahandanu.vercel.app',
   color = '#FFFFFF',
 }: IProps) {
   return (
     <>
       <head>
         <meta name="language" content="english" />
         <meta httpEquiv="content-type" content="text/html" />
         <meta name="robots" content="index,follow" />
         <meta
           httpEquiv="Content-Security-Policy"
           content="upgrade-insecure-requests"
         />
         <title>{`${title}`}</title>
         <link rel="shortcut icon" href="/favicon/favicon.ico" />
         <link rel="apple-touch-icon" href="/favicon/apple-icon.png" />
         <meta name="title" content={`${title}`} />
         <meta name="description" content={description} />
         {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          /> */}
         <meta property="og:type" content="website" />
         <meta property="og:url" content={url} />
         <meta property="og:title" content={`${title}`} />
         <meta property="og:description" content={description} />
         <meta name="og:image" content={`${url}${richlink}`} />
 
         <meta property="twitter:card" content="summary_large_image" />
         <meta property="twitter:url" content={url} />
         <meta property="twitter:title" content={`${title}`} />
         <meta property="twitter:description" content={description} />
         <meta property="twitter:image" content={`${url}${richlink}`} />
         <meta name="msapplication-TileColor" content={color} />
         <meta
           name="msapplication-TileImage"
           content="/favicon/ms-icon-144x144.png"
         />
         <meta name="theme-color" content={color} />
 
         <link
           rel="apple-touch-icon"
           sizes="57x57"
           href="/favicon/apple-icon-57x57.png"
         />
         <link
           rel="apple-touch-icon"
           sizes="60x60"
           href="/favicon/apple-icon-60x60.png"
         />
         <link
           rel="apple-touch-icon"
           sizes="72x72"
           href="/favicon/apple-icon-72x72.png"
         />
         <link
           rel="apple-touch-icon"
           sizes="76x76"
           href="/favicon/apple-icon-76x76.png"
         />
         <link
           rel="apple-touch-icon"
           sizes="114x114"
           href="/favicon/apple-icon-114x114.png"
         />
         <link
           rel="apple-touch-icon"
           sizes="120x120"
           href="/favicon/apple-icon-120x120.png"
         />
         <link
           rel="apple-touch-icon"
           sizes="144x144"
           href="/favicon/apple-icon-144x144.png"
         />
         <link
           rel="apple-touch-icon"
           sizes="152x152"
           href="/favicon/apple-icon-152x152.png"
         />
         <link
           rel="apple-touch-icon"
           sizes="180x180"
           href="/favicon/apple-icon-180x180.png"
         />
         <link
           rel="icon"
           type="image/png"
           sizes="192x192"
           href="/favicon/android-icon-192x192.png"
         />
         <link
           rel="icon"
           type="image/png"
           sizes="32x32"
           href="/favicon/favicon-32x32.png"
         />
         <link
           rel="icon"
           type="image/png"
           sizes="96x96"
           href="/favicon/favicon-96x96.png"
         />
         <link
           rel="icon"
           type="image/png"
           sizes="16x16"
           href="/favicon/favicon-16x16.png"
         />
         <link rel="manifest" href="/favicon/manifest.json" />
       </head>
     </>
   )
 }
 