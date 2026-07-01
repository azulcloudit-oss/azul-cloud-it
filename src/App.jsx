import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import WhyUs from './components/WhyUs.jsx'
import About from './components/About.jsx'
import QuoteForm from './components/QuoteForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <QuoteForm />
      </main>
      <Footer />
    </>
  )
}
