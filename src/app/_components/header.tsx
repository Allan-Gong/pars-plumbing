import Link from "next/link";

const Header = () => {
  return (
    <section className="mb-10">
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-1 mt-4">
      <Link href="/" className="hover:underline">
        PARS Plumbing 
      </Link>
    </h2>
    <p>IMAN: <Link href="tel:206-899-7743">206-899-7743</Link></p>
    <p>AMIN: <Link href="tel:425-469-5033">425-469-5033</Link></p>
    </section>
  );
};

export default Header;
