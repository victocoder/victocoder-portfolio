import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import { ModeToggle } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Work />
    </div>
  );
}
