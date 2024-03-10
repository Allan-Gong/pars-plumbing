import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex md:justify-between mt-2 mb-2 md:mb-2">
      <section>
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        PARS
      </h1>
      <h4 className="md:text-4xl md:text-left text-lg font-bold tracking-tighter leading-tight">
        Plumbing services in WA
      </h4>
      
    </section>
    <section className="mt-5 tracking-tighter leading-tight">
      <p className="lg:text-2xl sm:text-sm	 md:text-sm	">Call: <Link href="tel:206-899-7743">206-899-7743</Link></p>
      <p className="lg:text-2xl sm:text-sm	 md:text-sm	">Email: <Link href="mailto:parsplumbing@gmail.com">parsplumbing@gmail.com</Link></p>
    </section>
    </section>
  );
}
