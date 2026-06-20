import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Join Thrive: Keep More of What You Earn",
  description:
    "A boutique brokerage in Greenville, SC for experienced agents. 90/10 split, a low $12,000 annual cap, a hands-on broker on every deal, and none of the franchise cut.",
  icons: {
    icon: "/assets/logos/favicon-leaf.png",
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
