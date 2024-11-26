import "./globals.css";
import Head from 'next/head';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${inter.className} antialiased`}>
        <title>Jared Ethan Limjoco</title>
        {children}
      </body>
    </html>
  );
}
