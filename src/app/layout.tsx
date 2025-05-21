import './globals.css';
import { MuseoModerno, Poppins, Inter } from '@next/font/google';
export const metadata = {
  title: 'natan',
  description: 'Portfolio de Natan',
}

const museoModerno = MuseoModerno({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={museoModerno.className}>{children}</body>
    </html>
  )
}
