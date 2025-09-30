import "./globals.css";
import { Header } from "@/src/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main id="main" className="layout-px layout-py">
          {children}
        </main>
      </body>
    </html>
  );
}
