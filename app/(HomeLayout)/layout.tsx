import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
