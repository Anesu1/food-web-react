import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import Collaborators from "./components/Collaborators";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MoreAbout from "./components/MoreAbout";
import OurProjects from "./components/OurProjects";
import Services from "./components/Services";
import SimpleSnackbar from "./styled/SnackBar";

function App() {
  const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});

const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };


window.onload = handleClick;

  return (
    <>
      <Header />
      <Banner />
      <About   />
	  <SimpleSnackbar open={open} setOpen={setOpen} />
	  <MoreAbout />
      {/* <Services /> */}
      {/* <OurProjects /> */}
      <Collaborators />
      <Clients />
      
      <Contact />
      <Footer />
    </>
  );
}

export default App;
