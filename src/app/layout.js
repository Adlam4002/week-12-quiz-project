import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/Providers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QuizzyPop",
  description: "The UK's number 1 quiz platform for 6 years in a row",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <Providers>{children}</Providers>
        <Footer></Footer>
      </body>
    </html>
  );
}
