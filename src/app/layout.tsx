import type { Metadata } from "next";
import "./globals.css";
import ShamsTexNavbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "shams tex",
  description: "shams tex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className="min-h-screen max-h-full text-white"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/do88eynar/image/upload/v1746891177/ryhgysby9mz1ebgrw48m.webp')",
          backgroundSize: "cover", // اختياري: لتغطية الخلفية بالكامل
          backgroundPosition: "center", // اختياري: لتوسيط الصورة
          backgroundRepeat: "no-repeat", // اختياري: لمنع تكرار الصورة
          backgroundColor: "#000000", // لون الخلفية الافتراضي
          backgroundAttachment: "fixed",
          backdropFilter: "brightness(70%)",
          WebkitBackdropFilter: "brightness(70%)",
          backdropFilter: " blur(15px)",
        }}
      >
        <ShamsTexNavbar />
        {children}
       <Footer />
      </body>
    </html>
  );
}