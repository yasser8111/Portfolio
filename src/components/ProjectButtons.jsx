import React from "react";
import { ExternalLink, Code2 } from "lucide-react";
import Button from "./Button";

const ProjectButtons = ({ project, buttons }) => (
  <div className="flex flex-wrap gap-3 mt-6">
    {project.demoUrl && project.demoUrl !== "#" && (
      <Button
        href={project.demoUrl}
        external
        variant="primary"
        className="hover-dark"
        icon={ExternalLink}
      >
        {buttons.liveDemo}
      </Button>
    )}
    {project.repoUrl && project.repoUrl !== "#" && (
      <Button
        href={project.repoUrl}
        external
        variant="outline"
        className="hover-dark"
        icon={Code2}
      >
        {buttons.sourceCode}
      </Button>
    )}
  </div>
);

export default ProjectButtons;
