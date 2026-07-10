import { Title, Box, SimpleGrid } from "@mantine/core";
import classes from "./Projects.module.scss";
import Project from "./Project";
import LiveOaks from "../assets/liveoaks.png";
import CowBells from "../assets/cowbells.png";
import ElGym from "../assets/taco.png";
import Sazon from "../assets/sazon.jpg";

export default function Projects({ ref }) {
  return (
    <Box className={classes.projects} ref={ref}>
      <Title order={3}>Things I've built</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={"lg"}>
        <Project
          coverImage={LiveOaks}
          title="Live Oaks"
          description="Reviewed and redesigned parts of the Live Oaks Catering web experience to make the site feel more polished, easier to navigate, and better suited for catering/event customers."
          stack={["React", "Vite", "Vercel", "Mantine"]}
          link="https://live-oaks.vercel.app/"
        />
        <Project
          coverImage={CowBells}
          title="Cow Bells"
          description="Designed a playful restaurant website concept for Cowbells, focused on presenting the menu clearly, highlighting featured items, and giving the brand a fun, memorable online presence."
          stack={["React", "Vite", "Vercel", "Mantine"]}
          link="https://cow-bells.vercel.app/"
        />
        <Project
          coverImage={ElGym}
          title='Taqueria "El Gym"'
          description="Mobile-first digital menu design for a local taqueria, focused on clear pricing, bold branding, and easy-to-scan taco sections."
          stack={["React", "Vite", "Vercel", "Mantine"]}
          link="https://taqueria-el-gym-anthony9698s-projects.vercel.app/"
        />
        <Project
          coverImage={Sazon}
          title="Sazon Latino"
          description="Logo and digital menu poster concept with bold Latin-inspired visuals, friendly character branding, and social-media-ready menu presentation."
          stack={["React", "Vite", "Vercel", "Mantine"]}
          link="https://sazon-latino.vercel.app/"
        />
      </SimpleGrid>
    </Box>
  );
}
