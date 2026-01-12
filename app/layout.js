import "./globals.css";

export const metadata = {
  title: "Portfolio Khadafi",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
