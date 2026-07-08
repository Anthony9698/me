import { Box, Title, Text, Image } from "@mantine/core";
import classes from "./Hero.module.scss";
import ReactIcon from "../assets/react.webp";
import TypeScriptIcon from "../assets/ts.png";
import PythonIcon from "../assets/python.webp";
import AWSIcon from "../assets/aws.webp";
import Torc from "../assets/torc4.png";

export default function Hero() {
  return (
    <Box className={classes.hero}>
      <Box className={classes.intro}>
        <Title>
          I build software that makes complex workflows
          <Title c="portfolioGreen.5">simple.</Title>
        </Title>
        <Text>
          I design and build software for mission-critical workflows,
          operational visibility, and autonomous systems.
        </Text>
        <Box className={classes.techStack}>
          <Box className={classes.tech}>
            <Image src={ReactIcon} alt="React" />
            <Text>React</Text>
          </Box>
          <Box className={classes.tech}>
            <Image src={TypeScriptIcon} alt="TS" />
            <Text>TypeScript</Text>
          </Box>
          <Box className={classes.tech}>
            <Image src={PythonIcon} alt="Python" />
            <Text>Python</Text>
          </Box>
          <Box className={classes.tech}>
            <Image src={AWSIcon} alt="AWS" />
            <Text>AWS</Text>
          </Box>
        </Box>
      </Box>
      <Image className={classes.laptop} src={Torc} alt="Torc" />
    </Box>
  );
}
