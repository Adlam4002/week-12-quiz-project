import { Exo_2 } from "next/font/google";
import "./globals.css";
import { Providers } from "@/Providers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { AuroraHero } from "@/components/Framer/AuroraHero";
import { SessionProvider } from "next-auth/react";

// Override default cache strategy
export const fetchCache = { cache: "no-store", next: { revalidate: 0 } };
// export const fetchCache = "default-no-store"; // Allow any cache option to be passed to fetch but if no option is provided then set the cache option to 'no-store'. This means that even fetch requests before dynamic functions are considered dynamic.

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
          <SessionProvider>
            <Header></Header>
            <Providers>{children}</Providers>
            <Footer></Footer>
          </SessionProvider>
        </AuroraHero>
      </body>
    </html>
  );
}
