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
              I’m a full-stack developer and solopreneur passionate about building intelligent products where AI meets real-world impact.
              I specialize in Mastra.ai, Next.js, Tanstack, TypeScript with a focus on AI-driven web applications and agentic development crafting systems that don’t just respond, but think.
              <br />
              <br />
              I thrive where technology, creativity, and purpose intersect turning abstract ideas into well-designed, scalable solutions. My background in full-stack engineering and prompt engineering allows me to bridge frontend aesthetics, backend logic, and AI reasoning into cohesive products.
              <br />
              <br />
              If you’re passionate about AI innovation, developer empowerment, or building the future of hiring, I’d love to connect.
              <br />
            </p>
          </div>
        </div>
      </section>
  );
}
