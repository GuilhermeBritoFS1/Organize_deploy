import "./globals.css";
import Header from "../components/header";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>OrgaNize</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
