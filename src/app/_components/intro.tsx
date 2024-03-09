import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-5 mb-5 md:mb-5">
      <section>
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        PARS
      </h1>
      <h4 className="md:text-4xl text-center md:text-left text-lg font-bold tracking-tighter leading-tight">
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
