import './globals.css'

export const metadata = {
  title: 'Dôme Douze - Gestion d\'artistes émergents',
  description: 'On aide les artistes à structurer leur carrière, clarifier leur image et atteindre leur prochain niveau.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
