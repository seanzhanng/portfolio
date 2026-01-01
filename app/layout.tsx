import "./globals.css";

export const metadata = {
  title: "Sean Zhang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-10 flex justify-center">
        <div className="w-full lg:w-[40%] p-6">{children}</div>
      </body>
    </html>
  );
}
