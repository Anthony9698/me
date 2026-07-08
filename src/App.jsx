import { Box } from "@mantine/core";
import Navbar from "./navbar/Navbar";
import classes from "./App.module.scss";
import Hero from "./hero/Hero";

export default function App() {
  return (
    <Box className={classes.app}>
      <Navbar />
      <Hero />
    </Box>
  );
}
