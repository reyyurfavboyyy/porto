"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between items-center">
        <h1
          onClick={() => scrollTo("home")}
          className="font-semibold tracking-wide cursor-pointer"
        >
          Portofolio
        </h1>
        <ul className="flex gap-8 text-sm opacity-80">
          <li
            onClick={() => scrollTo("home")}
            className="hover:opacity-100 cursor-pointer"
          >
            home
          </li>
          <li
            onClick={() => scrollTo("skills")}
            className="hover:opacity-100 cursor-pointer"
          >
            skills
          </li>
          <li
            onClick={() => scrollTo("projects")}
            className="hover:opacity-100 cursor-pointer"
          >
            projects
          </li>
          <li
            onClick={() => scrollTo("contact")}
            className="hover:opacity-100 cursor-pointer"
          >
            contact
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-10 pt-32 overflow-hidden"
      >
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="w-10 h-px bg-white opacity-60" />

          <h2 className="text-5xl md:text-6xl font-light">
            M. Rayhan <br /> Khadafi
          </h2>

          <p className="opacity-70 text-lg">
            Frontend Developer / UI Designer
          </p>

          <button
            onClick={() => scrollTo("contact")}
            className="border border-white/40 rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition"
          >
            Contact
          </button>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-[500px] md:h-[650px]"
        >
          <Image
            src="/profiles-1.jpg"
            alt="Profile"
            fill
            className="object-cover grayscale"
            priority
          />
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="px-10 py-32 max-w-7xl mx-auto"
      >
        <h3 className="text-4xl font-light mb-16">
          Selected <br /> Works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2, 3, 4].map((item) => (
            <Link key={item} href={`/projects/${item}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative w-full h-[320px] overflow-hidden">
                  <Image
                    src={`/projects-${item}.jpg`}
                    alt={`Project ${item}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
                    <div className="p-6 translate-y-4 group-hover:translate-y-0 transition duration-500">
                      <h4 className="text-xl font-light">
                        Project {item}
                      </h4>
                      <p className="text-sm opacity-70 mt-1">
                        Next.js • Tailwind CSS
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <h4 className="text-lg font-light">
                    Project {item}
                  </h4>
                  <span className="text-sm opacity-60">
                    visit my project
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-10 py-32 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-light mb-6">
            About Me
          </h3>
          <p className="opacity-70 leading-relaxed">
            Saya siswa SMK Taruna Bhakti jurusan Rekayasa Perangkat Lunak yang fokus
            pada pengembangan website modern, terutama frontend.
            Terbiasa membangun UI responsif menggunakan Next.js dan
            Tailwind CSS.
          </p>
        </motion.div>
      </section>

{/* SKILLS */}
<section id="skills" className="px-10 py-32 max-w-5xl mx-auto">
  <h3 className="text-3xl font-light mb-10">
    Skills
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
    {[
      { title: "HTML", desc: "Membangun struktur web yang rapi dan semantik." },
      { title: "CSS", desc: "Mengatur layout, animasi, dan responsivitas." },
      { title: "JavaScript", desc: "Logika interaksi dan behavior website." },
      { title: "Tailwind", desc: "Utility-first CSS untuk workflow cepat." },
      { title: "Next.js", desc: "Framework React dengan SEO & performa." },
      { title: "React", desc: "Component-based UI yang reusable." },
      { title: "Git", desc: "Version control & kolaborasi tim." },
      { title: "Figma", desc: "Design UI/UX sebelum proses coding." },
    ].map((skill) => (
      <motion.div
        key={skill.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="border border-white/10 rounded-lg p-4 opacity-80 hover:opacity-100 hover:border-white/30 transition"
      >
        <h4 className="font-light mb-1">
          {skill.title}
        </h4>
        <p className="text-xs opacity-70 leading-relaxed">
          {skill.desc}
        </p>
      </motion.div>
    ))}
  </div>
</section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-10 py-32 max-w-4xl mx-auto text-center"
      >
        <h3 className="text-3xl font-light mb-6">
          Let’s Connect
        </h3>
        <p className="opacity-70 mb-8">
          Tertarik kerja sama atau ingin lihat project lainnya?
        </p>

        <div className="flex justify-center gap-6 text-sm">
          <a
            href="mhmmdrayhan55@gmail.com"
            className="opacity-70 hover:opacity-100"
          >
            Email
          </a>
          <a
            href="https://wa.me/+6285171728902"
            className="opacity-70 hover:opacity-100"
            >
              whatsapp
          </a>
          <a
            href="https://www.instagram.com/mhmmd.kdfi__"
            className="opacity-70 hover:opacity-100"
          >
            Instagram
          </a>
                    <a
            href="https://github.com/reyyurfavboyyy"
            target="_blank"
            className="opacity-70 hover:opacity-100"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-10 py-16 border-t border-white/10 text-sm opacity-60 flex justify-between">
        <span>© 2025 Khadafi</span>
        <span>Frontend Developer</span>
      </footer>

    </main>
  );
}
