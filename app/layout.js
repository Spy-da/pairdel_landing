import { Figtree } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import ThemeSwitcher from "./ThemeSwitcher";
import AnimCursor from "./components/AnimCursor";
const fig = Figtree({ subsets: ["latin"] });

//components
import Nav from "./components/Nav";



export const metadata = {
  title: "Pairdel",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fig.className}  bg-[#25A774]`}>
        <AnimCursor></AnimCursor>
        
        <Nav></Nav>
        
        
          <Providers>
            <ThemeSwitcher></ThemeSwitcher>
              {children}
          </Providers>
            
          
      </body>
    </html>
  );
}
