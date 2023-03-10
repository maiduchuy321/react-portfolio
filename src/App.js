import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Project";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import LineGradient from "./components/LineGradient";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* HOME */}
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      {/* END HOME */}

      <LineGradient />
      {/* SKILLS */}
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      {/* END SKILLS */}

      <LineGradient />

      {/* PROJECTS */}
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      {/* END PROJECTS */}

      <LineGradient />

      {/* TESTIMONALS */}
      <div className="w-5/6 mx-auto">
        <Testimonials />
      </div>
      {/* END TESTIMONALS */}

      <LineGradient />

      {/* CONTACT */}
      <div className="w-5/6 mx-auto">
        <Contact />
      </div>
      {/* END CONTACT */}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
