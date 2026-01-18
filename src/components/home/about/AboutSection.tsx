import { User } from "lucide-react";

export default function AboutSection() {
  return (
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto fade-in-up">
            <div className="flex items-center gap-3 mb-8">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate full-stack developer with a focus on creating
              beautiful, functional, and user-centered digital experiences.
              With expertise in modern web technologies, I bring ideas to life
              through clean code and thoughtful design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>
        </div>
      </section>
  );
}
