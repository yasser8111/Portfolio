import { ExternalLink, Code2 } from "lucide-react";
import Button from "./Button";

export default function ProjectButtons({ project, buttons }) {
  return (
    <div className="flex flex-wrap gap-3 mt-6" onClick={(e) => e.stopPropagation()}>
      <Button
        variant="primary"
        size="md"
        href={project.demoUrl || "#"}
        external
        icon={ExternalLink}
      >
        {buttons.liveDemo}
      </Button>
      <Button
        variant="dark"
        size="md"
        href={project.repoUrl || "#"}
        external
        icon={Code2}
      >
        {buttons.sourceCode}
      </Button>
    </div>
  );
}
