import React from "react";
import {
  Navbar,
  SocialMedia,
  Hero,
  DarkModeToggle,
  About,
  Projects,
  Graphics,
  Contact,
  Footer,
} from "./components";
import analytics from "./helpers/analytics";

function App() {
  analytics();
  return (
    <div className="App">
      <Navbar />
      <DarkModeToggle />
      <SocialMedia />
      <Hero />
      <About />
      <Projects />
      <Graphics />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
