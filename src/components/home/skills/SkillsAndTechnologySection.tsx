import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
];

export default function SkillsAndTechnologySection() {
  return (
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12 fade-in-up">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-3 justify-center fade-in-up">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
