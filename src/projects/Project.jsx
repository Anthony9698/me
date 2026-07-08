import { Card, Box, Image, Title, Text, Chip } from "@mantine/core";
import classes from "./Projects.module.scss";
import { getColorFromWord } from "../utils/WordColor";

export default function Project({ coverImage, title, description, stack }) {
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
    </Card>
  );
}
