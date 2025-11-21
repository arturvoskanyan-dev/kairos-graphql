import Genres from "@/components/layout/genres";
import Hero from "@/components/layout/hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center">
    <div className="pb-12">
      {/* <Button>Click me</Button> */}
      <Hero />
      <Genres />
    </div>
  );
}
