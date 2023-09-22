
import ImageDeveloper from "@/components/Images/imageDeveloper";
import SeparatorComponent from "@/components/separator";
import TextWriterHeader from "@/components/textWriterHeader";
import { TypesSvgIcons } from "@/domain/enums/typesSvgIcons";
import AboutMe from "@/pages/AboutMe/aboutMe";
import Nav from "@/pages/NavBar/Nav";



export default function Home() {

  return (
    <>
      <main className="bg-black ">
        <header className="grid grid-cols-1 md:grid-cols-5 min-h-min">
          <section className="col-span-3 p-7 h-full grid grid-rows-[auto,1fr]">
            <Nav classNames='' />
            <TextWriterHeader classNames="flex justify-center items-center h-full"
              textColor="blanco"
              text="Hello, i am Joel Velasco and software developer" />
          </section>
          <ImageDeveloper classNames="col-span-2" />
        </header>
        <section id="about-me" aria-label="Descripción de mi" className="min-h-min bg-slate-200 grid justify-items-center">
          <AboutMe classNames="pt-8 font-medium w-[80%]" />
        </section>
        <section id="skills" aria-label="Habilidades de mi" className="min-h-min bg-slate-200 grid justify-items-center h-[450px]">
          <div className="pt-8 font-medium w-[80%]">
            <h2 className="text-center">SKILLS</h2>
            <SeparatorComponent svgName={`${TypesSvgIcons.ADMIN_ICON}`}/>
          </div>

        </section>
      </main>
    </>
  )
}
