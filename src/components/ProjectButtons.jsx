import React from "react";
import { ExternalLink, Code2 } from "lucide-react";
import Button from "./Button";

const ProjectButtons = ({ project, buttons }) => (
  <div className="flex flex-wrap gap-3 mt-6">
    <Button
      href={project.demoUrl || "#"}
      external
      variant="primary"
      className="hover-dark"
      icon={ExternalLink}
    >
      {buttons.liveDemo}
    </Button>
    <Button
      href={project.repoUrl || "#"}
      external
      variant="dark"
      className="hover-blue"
      icon={Code2}
    >
      {buttons.sourceCode}
    </Button>
  </div>
);

export default ProjectButtons;
