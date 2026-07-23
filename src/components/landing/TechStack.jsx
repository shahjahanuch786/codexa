import "./TechStack.css";

const technologies = [
  "OpenAI",
  "Anthropic",
  "Gemini",
  "Llama",
  "DeepSeek",
  "React",
  "FastAPI",
  "PostgreSQL",
];

export default function TechStack() {
  return (
    <section className="tech-stack">

      <div className="tech-header">
        <p className="tech-label">
          Trusted technologies behind CODEXA
        </p>

        <h2>
          Powered by the world's best AI and
          development tools.
        </h2>
      </div>

      <div className="tech-grid">
        {technologies.map((tech) => (
          <div className="tech-card" key={tech}>
            <span>{tech}</span>
          </div>
        ))}
      </div>

    </section>
  );
}