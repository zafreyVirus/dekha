
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IconSection from "@/components/IconSection";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import TeamSection from "@/components/Team";
import Image from "next/image";

export default function Home() {
  return (
<div>
  <Hero />
  <About />
  <IconSection/>
  <Services />
  <CoreValues/>
  <Partners/>
  {/* <TeamSection/> */}
</div>
  );
}