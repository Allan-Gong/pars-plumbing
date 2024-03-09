import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <section>
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        PARS
      </h1>
      <h4 className="text-center md:text-left text-lg">
        Plumbing services in WA
      </h4>
      
    </section>
    <section>
      <p className="text-4xl">IMAN: <Link href="tel:206-899-7743">206-899-7743</Link></p>
      <p className="text-4xl">AMIN: <Link href="tel:425-469-5033">425-469-5033</Link></p>
    </section>
    </section>
  );
}
