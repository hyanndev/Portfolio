import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Cases from './components/sections/Cases'
import Contact from './components/sections/Contact'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Hero from './components/sections/Hero'
import MoreProjects from './components/sections/MoreProjects'
import Stack from './components/sections/Stack'

export default function App() {
  return (
    <>
      <Header />
      <main id="topo" className="mx-auto max-w-[1120px]">
        <Hero />
        <Experience />
        <Cases />
        <Stack />
        <MoreProjects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
