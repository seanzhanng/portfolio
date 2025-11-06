import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="pt-20 mx-auto w-2/5">{children}</div>
      </body>
    </html>
  );
}
