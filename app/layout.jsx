import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://joinus.thriverealestatebrokers.com";
const TITLE = "Join Thrive: Keep More of What You Earn";
const DESCRIPTION =
  "A boutique brokerage in Greenville, SC for experienced agents. 90/10 split, a low $12,000 annual cap, a hands-on broker on every deal, and none of the franchise cut.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: "/assets/logos/favicon-leaf.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Thrive Real Estate Brokers",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/assets/images/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Join Thrive Real Estate Brokers: keep more of what you earn.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/images/og-preview.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
