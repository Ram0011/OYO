import { Inter } from "next/font/google";
import Header1 from "../components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Image from "next/image";
import Head from "next/head";
import Header4 from "@/components/Header4";
import Footer from "@/components/Footer";
import Header5 from "@/components/Header5";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>OYO: India's best hotel Booking site for Sanitized Stay</title>

      </Head>

      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-20">
        <div className="my-14">
          <Image src={'/Banner1.avif'} alt="banner1" width={200} height={200} className="w-full h-80 my-10" priority={true} />
        </div>
        <div className="mb-14">
          <Image src={'/Banner2.avif'} alt="banner1" width={200} height={200} className="w-full h-40 my-10" priority={true} />
        </div>
        <Header4 />
      </div>
      <Header5 />
      <Footer />

    </div>
  );
}
