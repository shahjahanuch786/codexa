import "./Stats.css";

const stats = [
  {
    number: "15+",
    title: "AI Models",
  },
  {
    number: "50K+",
    title: "Developers",
  },
  {
    number: "99.9%",
    title: "Uptime",
  },
  {
    number: "24/7",
    title: "AI Assistant",
  },
];

const models = [
  "GPT-5",
  "Claude",
  "Gemini",
  "Llama",
  "DeepSeek",
  "Qwen",
  "Mistral",
];

export default function Stats() {
  return (
    <section className="stats-section">

      <div className="stats-header">

        <span className="section-tag">
          TRUSTED BY MODERN BUILDERS
        </span>

        <h2>
          Everything you need to build
          <br />
          modern software with AI.
        </h2>

        <p>
          CODEXA combines multiple AI models into one powerful workspace
          for developers, designers and creators.
        </p>

      </div>

      <div className="stats-grid">

        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h3>{item.number}</h3>
            <span>{item.title}</span>
          </div>
        ))}

      </div>

      <div className="models">

        {models.map((model, index) => (
          <div className="model-pill" key={index}>
            {model}
          </div>
        ))}

      </div>

    </section>
  );
}