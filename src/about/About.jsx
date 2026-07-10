import { Box, Title, Text, Image, Button, ActionIcon } from "@mantine/core";
import Code from "../assets/code.svg";
import FullStack from "../assets/box.svg";
import Users from "../assets/users.svg";
import classes from "./About.module.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function About({ ref }) {
  return (
    <Box className={classes.about} ref={ref}>
      <Box className={classes.left}>
        <Box className={classes.skill}>
          <Image src={Code} alt="Code" className={classes.icon} />
          <Box className={classes.skillText}>
            <Title order={4}>Clean, maintainable code</Title>
            <Text>
              I care about readability, reuse, and building things that last.
            </Text>
          </Box>
        </Box>
        <Box className={classes.skill}>
          <Image src={FullStack} alt="Full Stack" className={classes.icon} />
          <Box className={classes.skillText}>
            <Title order={4}>Full-stack problem solving</Title>
            <Text>
              From UI to cloud infrastructure, I enjoy the whole process.
            </Text>
          </Box>
        </Box>
        <Box className={classes.skill}>
          <Image src={Users} alt="Users" className={classes.icon} />
          <Box className={classes.skillText}>
            <Title order={4}>User focused</Title>
            <Text>
              I build software that's intuitive and solves real problems.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className={classes.right}>
        <Title order={3}>About Me</Title>
        <Title order={2}>
          I enjoy turning complex problems into{" "}
          <span style={{ color: "var(--color-primary)" }}>simple</span>,
          <span style={{ color: "var(--color-primary)" }}> elegant </span>
          <span style={{ color: "var(--color-primary)" }}>solutions</span>.
        </Title>
        <Text>
          I'm a software engineer with experience building web applications,
          cloud-connected systems, and internal tools that help teams move
          faster.
        </Text>
        <Button rightSection={<FaGithub />}>
          <a target="_blank" href="https://github.com/Anthony9698/">
            See my work
          </a>
        </Button>
      </Box>
      <Box className={classes.contact}>
        <Title order={4}>Connect with me:</Title>
        <ActionIcon
          variant="transparent"
          component="a"
          target="_blank"
          href="https://www.linkedin.com/in/anthony-viera-4b58031aa/"
        >
          <FaLinkedin size={30} style={{ color: "var(--color-primary)" }} />
        </ActionIcon>
      </Box>
    </Box>
  );
}
