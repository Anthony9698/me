import { Card, Box, Image, Title, Text, Chip, Button } from "@mantine/core";
import classes from "./Projects.module.scss";
import { getColorFromWord } from "../utils/WordColor";

export default function Project({
  coverImage,
  title,
  description,
  stack,
  link,
}) {
  return (
    <Card
      className={classes.projectCard}
      shadow="md"
      padding="lg"
      radius="md"
      withBorder
    >
      <Image
        src={coverImage}
        alt="Project Image"
        className={classes.projectImage}
      />
      <Box className={classes.projectContent}>
        <Title order={3} className={classes.projectTitle}>
          {title}
        </Title>
        <Text className={classes.projectDescription}>{description}</Text>
        <Box className={classes.projectStack}>
          {stack?.map((tech, index) => (
            <Chip
              key={index}
              styles={{
                label: {
                  backgroundColor: getColorFromWord(tech),
                  color: "white",
                  fontWeight: "bold",
                },
              }}
            >
              {tech}
            </Chip>
          ))}
        </Box>
      </Box>
      <Button variant="light">
        <a target="_blank" href={link}>
          View App
        </a>
      </Button>
    </Card>
  );
}
