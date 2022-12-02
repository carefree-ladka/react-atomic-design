import Card from "../organisms/Card";

export interface Project {
  id: string;
  text: string;
  image: string;
  link: string;
  content: string;
}

interface ProjectData<T> {
  data: T[];
}

export default <T extends Project>({ data }: ProjectData<T>) => (
  <div>
    {data?.map((project) => (
      <div
        key={project.id}
        className="project"
        style={{
          border: "1px solid #000",
          height: "300px",
          width: "400px",
          marginBottom: "1rem"
        }}
      >
        <Card project={project} />
      </div>
    ))}
  </div>
);
