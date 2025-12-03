import { Footprints, Github, Globe, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-900 shadow-md  py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-white">
        {/* logo */}
        <p className="font-bold flex items-center gap-1 text-sm md:text-lg">
          © {new Date().getFullYear()}   <Footprints className="w-5 h-5 md:w-7 md:h-7 text-red-500" />  PathGuide. All rights reserved.
        </p>

        {/* links */}
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <a href="https://ruese.dev" target='_blank' className="hover:text-red-500 transition-colors">
            <Globe size={25} />
          </a>

          <a href="mailto:contact@ruese.dev" className="hover:text-red-500 transition-colors">
            <Mail size={25} />
          </a>
          <a href="https://linkedin.com/in/winner-omoregie-035178299" target='_blank' className="hover:text-red-500 transition-colors">
            <Linkedin size={25} />
          </a>
          <a href="https://github.com/osas706" target='_blank' className="hover:text-red-500 transition-colors">
            <Github size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
