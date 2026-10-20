import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-20 max-w-6xl mx-auto border-t border-charcoal-light">
      <div className="grid md:grid-cols-2 gap-16">
        
        <div>
          <h2 className="text-xs tracking-[0.2em] uppercase text-olive mb-8 font-medium">
            03 / Get in Touch
          </h2>
          <h3 className="text-5xl md:text-7xl font-serif text-offwhite leading-tight mb-6">
            Let's build <br />
            <span className="italic text-taupe-text">something.</span>
          </h3>
        </div>

        <div className="flex flex-col justify-end">
          <p className="text-taupe-text mb-8 font-light text-lg">
            I'm currently open to junior developer roles, internships, and freelance opportunities. 
            If you have a project or a position in mind, my inbox is always open.
          </p>
          
          <div className="flex flex-col gap-4">
            <a href="mailto:dinayman562@gmail.com" className="group flex items-center justify-between border-b border-charcoal-light pb-4 text-offwhite hover:border-olive transition-colors">
              <span className="tracking-widest uppercase text-sm">Email Me</span>
              <FaEnvelope className="text-taupe-text group-hover:text-olive transition-colors" />
            </a>
            <a href="https://linkedin.com/in/arosha-a-9b679a1bb" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-charcoal-light pb-4 text-offwhite hover:border-olive transition-colors">
              <span className="tracking-widest uppercase text-sm">LinkedIn</span>
              <FaLinkedin className="text-taupe-text group-hover:text-olive transition-colors" />
            </a>
            <a href="https://github.com/Arushay" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-charcoal-light pb-4 text-offwhite hover:border-olive transition-colors">
              <span className="tracking-widest uppercase text-sm">GitHub</span>
              <FaGithub className="text-taupe-text group-hover:text-olive transition-colors" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;