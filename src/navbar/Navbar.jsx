import {
  Box,
  Image,
  NavLink,
  Button,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Drawer,
  Burger,
} from "@mantine/core";
import Logo from "../assets/me_2_logo.svg";
import classes from "./Navbar.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineNightlightRound } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

export default function Navbar() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  const [burgerOpened, { toggle: toggleBurger }] = useDisclosure(false);

  const isDark = computedColorScheme === "dark";

  return (
    <Box className={classes.navbar}>
      <Burger
        className={classes.burger}
        opened={burgerOpened}
        onClick={toggleBurger}
        size="sm"
      />
      <Drawer
        opened={burgerOpened}
        onClose={toggleBurger}
        padding="md"
        size="sm"
      >
        <NavLink label="Home" />
        <NavLink label="Projects" />
        <NavLink label="About" />
        <NavLink label="Contact" />
      </Drawer>
      <Box className={classes.navLinks}>
        <NavLink className={classes.navLink} label="Home" />
        <NavLink className={classes.navLink} label="Projects" />
        <NavLink className={classes.navLink} label="About" />
        <NavLink className={classes.navLink} label="Contact" />
      </Box>
      <ActionIcon
        variant="transparent"
        className={classes.themeToggle}
        onClick={() => setColorScheme(isDark ? "light" : "dark")}
      >
        {isDark ? (
          <MdOutlineWbSunny size={20} />
        ) : (
          <MdOutlineNightlightRound size={20} />
        )}
      </ActionIcon>
    </Box>
  );
}
