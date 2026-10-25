import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import NavLinks from './ui/dashboard/nav-links';
export default function RootLayout({
children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} >
        <div className="flex min-h-screen flex-col md:flex-row">
          <NavLinks />
          <main className="flex-1 p-4 md:p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
