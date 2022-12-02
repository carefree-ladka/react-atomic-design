import CardHeader from "../molecules/CardHeader";
import CardContent from "../molecules/CardContent";
import CardFooter from "../molecules/CardFooter";
import { Project } from "../template/Projects";
export default ({ project }: { project: Project }) => {
  const { image, text, link, content } = project;

  return (
    <div>
      <CardHeader src={image} />
      <CardContent content={content} />
      <CardFooter link={link} text={text} />
    </div>
  );
};
