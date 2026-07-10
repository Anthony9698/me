import { Box } from "@mantine/core";
import Navbar from "./navbar/Navbar";
import classes from "./App.module.scss";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";
import About from "./about/About";
import { useScrollIntoView } from "@mantine/hooks";

export default function App() {
  const { scrollIntoView: scrollToHome, targetRef: homeRef } =
    useScrollIntoView({
      offset: 80,
      duration: 700,
    });

  const { scrollIntoView: scrollToProjects, targetRef: projectsRef } =
    useScrollIntoView({
      offset: 80,
      duration: 700,
    });

  const { scrollIntoView: scrollToAbout, targetRef: aboutRef } =
    useScrollIntoView({
      offset: 80,
      duration: 700,
    });

  return (
    <Box className={classes.app}>
      <Navbar
        scrollToHome={scrollToHome}
        scrollToProjects={scrollToProjects}
        scrollToAbout={scrollToAbout}
      />
      <Hero ref={homeRef} />
      <Projects ref={projectsRef} />
      <About ref={aboutRef} />
    </Box>
  );
}
