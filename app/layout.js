import { Navbar } from "./_components/Navbar";
import "./globals.css";


export const metadata = {
  title: "Home | Su-Sanchar",
  description: "We are aerospace company specializing in Defense",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
