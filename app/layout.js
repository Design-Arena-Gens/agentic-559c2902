export const metadata = {
  title: "MayimavaStore ? Marketplace panafricaine",
  description:
    "La marketplace panafricaine con?ue pour connecter vendeurs, acheteurs et entrepreneurs ? travers toute l?Afrique.",
  metadataBase: new URL("https://agentic-559c2902.vercel.app"),
  openGraph: {
    title: "MayimavaStore ? Marketplace panafricaine",
    description:
      "La marketplace panafricaine con?ue pour connecter vendeurs, acheteurs et entrepreneurs ? travers toute l?Afrique.",
    url: "https://agentic-559c2902.vercel.app",
    siteName: "MayimavaStore",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MayimavaStore ? Marketplace panafricaine",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MayimavaStore ? Marketplace panafricaine",
    description:
      "La marketplace panafricaine con?ue pour connecter vendeurs, acheteurs et entrepreneurs ? travers toute l?Afrique.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
