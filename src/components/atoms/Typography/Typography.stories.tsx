import Typography from "./Typography";

export default {
  component: Typography,
  title: "atom/Typography"
};

export const TypographyStory = () => {
  parent;
  return (
    <div className="md">
      <Typography type="h1">H1 sed dolores dolores</Typography>
      <Typography type="h2">H2 quod nisi facilis</Typography>
      <Typography type="h4">H4 Amet dolorem fugit molestiae quod.</Typography>
      <Typography>
        Base text: At labore similique nobis.{" "}
        <Typography weight="semibold">Lorem</Typography>
      </Typography>
      {/* <Typography > */}
      {/* <Typography text="At labore similique sed reprehenderit non nobis fugiat."> */}
      {/* <Typography text="Reiciendis non possimus qui corporis." /> */}
      {/* {/* </Typography> */}
    </div>
  );
};
