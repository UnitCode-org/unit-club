import IntroText from "@/app/_components/IntroText";
import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between cursor-none">
      <Navbar />
      <IntroText />
      <Footer />
    </main>
  );
}
