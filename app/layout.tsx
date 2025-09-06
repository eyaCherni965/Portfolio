import "./globals.css";
import Head from "next/head";

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/jpg" href="/imgs/portfolio.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
