import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Get in <span className="text-blue-400">Touch</span>
        </h2>
        <p className="text-slate-400 mb-10">
          I'm open to junior roles, freelance work, and collaborations.
        </p>

        <div className="flex justify-center gap-8 text-3xl">
          <a
            href="https://github.com/Arushay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
          href="https://www.linkedin.com/in/arosha-a-9b679a1bb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:dinayman562@gmail.com"
            className="text-slate-400 hover:text-blue-400 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;