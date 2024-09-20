import Header from "@/components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className="max-w-[800px] min-h-[100dvh] mx-auto p-4 bg-black text-white">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
