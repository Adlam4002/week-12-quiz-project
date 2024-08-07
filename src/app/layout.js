import { Exo_2 } from "next/font/google";
import "./globals.css";
import { Providers } from "@/Providers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { AuroraHero } from "@/components/Framer/AuroraHero";

const exo2 = Exo_2({ subsets: ["latin"], weights: [500, 800] });

export const metadata = {
  title: "QuizzyPop",
  description: "The UK's number 1 quiz platform for 6 years in a row",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo2.className}>
        <AuroraHero>
          <Header></Header>
          <Providers>{children}</Providers>
          <Footer></Footer>
        </AuroraHero>
      </body>
    </html>
  );
}
