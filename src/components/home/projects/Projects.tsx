import { Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with cutting-edge technologies.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Project Two",
    description: "An innovative solution for complex business challenges.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Project Three",
    description: "A scalable platform designed for performance and reliability.",
    tech: ["Next.js", "AWS", "Docker"],
  },
];

export default function ProjectsSection() {
  return (
      <section id="projects" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12 fade-in-up">
              <Rocket className="h-6 w-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  className="p-6 hover:shadow-lg transition-all duration-300 fade-in-up"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

  );
}
