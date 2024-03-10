import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="sm:py-5 py-5 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            PARS Plumbing
          </h3>
          <div className="flex flex-col lg:flex-row justify-end place-items-stretch lg:pl-4 lg:w-1/2">
            <a
              href="tel:206-899-7743"
              className="h-full mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              206-899-7743
            </a>
            <a
              href="mailto:parsplumbing@gmail.com"
              className="h-full mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              parsplumbing@gmail.com
            </a>
            
          </div>
        </div>
        <p className="mt-2 mb-2">© 2024 PARS Plumbing. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
