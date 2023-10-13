
import ImageDeveloper from "@/components/Images/imageDeveloper";
import TextWriterHeader from "@/components/textWriterHeader";
import AboutMe from "@/pages/AboutMe/aboutMe";
import Contact from "@/pages/Contact/contact";
import Nav from "@/pages/NavBar/Nav";
import Skills from "@/pages/Skills/skills";
import Works from "@/pages/Works/works";


export default function Home() {

  return (
    <>
      <main className="bg-black ">
        <header className="grid grid-cols-1 md:grid-cols-5 min-h-min">
          <section className="col-span-3 p-7 h-full grid grid-rows-[auto,1fr]">
            <Nav classNames='' />
            <TextWriterHeader classNames="flex justify-center items-center h-full"
              textColor="blanco"
              text="Hello, i'm Joel Velasco and software developer" />
          </section>
          <ImageDeveloper classNames="col-span-2" />
        </header>
        <section id="about-me" aria-label="Descripción de mi" className="min-h-min bg-slate-200 grid justify-items-center">
          <AboutMe classNames="pt-8 font-medium w-[80%]" />
        </section>
        <section id="skills" aria-label="Habilidades de mi" className="min-h-min bg-slate-200 grid justify-items-center">
          <Skills classNames="pt-8 font-medium w-[80%]" />
        </section>
        <section id="works" aria-label="Trabajos hechos por mi" className="min-h-min bg-slate-200 grid justify-items-center">
          <Works classNames="pt-8 font-medium w-[80%]"/>
        </section>
        <section id="contact_me" aria-label="Sección para contactarme" className="min-h-min bg-slate-200 grid justify-items-center">
          <Contact classNames="pt-8 font-medium w-[80%]"/>
        </section>
        <p className="p-12">Hola</p>
      </main>
    </>
  )
}
