import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Products from "../components/Products"
import TechStack from "../components/TechStack"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
