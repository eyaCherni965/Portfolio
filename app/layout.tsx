import "./globals.css";
import { Analytics } from "@vercel/analytics/react"; // Pour Vercel Analytics
import Script from "next/script"; // Pour Google Analytics

export const metadata = {
  title: "Portfolio Eya Cherni",
  description: "Portfolio de Eya Cherni, développeuse",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/jpg" href="/imgs/portfolio.png" />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3P9T2MK1J8"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3P9T2MK1J8');
            `,
          }}
        />
      </head>
      <body>
        {children}
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
