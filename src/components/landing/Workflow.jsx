import "./Workflow.css";

import {
  PencilLine,
  Cpu,
  Rocket,
  ArrowRight,
} from "lucide-react";

export default function Workflow() {
  return (
    <section className="workflow">

      <div className="workflow-container">

        {/* Header */}

        <div className="workflow-header">

          <span className="workflow-label">
            HOW IT WORKS
          </span>

          <h2>
            Build software in minutes.
          </h2>

          <p>
            From idea to production, CODEXA handles everything.
          </p>

        </div>

        {/* Workflow */}

        <div className="workflow-grid">

          {/* STEP 1 */}

          <div className="workflow-column">

            <div className="workflow-top">

              <div className="step-icon">
                <PencilLine size={28} strokeWidth={2} />
              </div>

              <span className="step-number">
                01
              </span>

              <div className="step-line"></div>

              <ArrowRight
                size={22}
                className="step-arrow"
              />

            </div>

            {/* Card 1 */}
            <div className="workflow-card">

    <h3>Describe your idea</h3>

    <p>
        Tell CODEXA what you want to build in natural language.
    </p>

    <div className="idea-box">

        <span className="idea-label">
            Your Idea
        </span>

        <div className="idea-input">

            <p>
                Create a modern fintech dashboard with authentication,
                analytics and invoice management.
            </p>

            <button className="send-btn">
                ↗
            </button>

        </div>

    </div>

    <div className="idea-tags">

        <span>Fintech</span>
        <span>Dashboard</span>
        <span>Analytics</span>
        <span>Auth</span>
        <span>Invoices</span>
        <span>Payments</span>

    </div>

</div>

          </div>

          {/* STEP 2 */}

          <div className="workflow-column">

            <div className="workflow-top">

              <div className="step-icon">
                <Cpu size={28} strokeWidth={2} />
              </div>

              <span className="step-number">
                02
              </span>

              <div className="step-line"></div>

              <ArrowRight
                size={22}
                className="step-arrow"
              />

            </div>

            {/* Card 2 */}
            <div className="workflow-card">

    <h3>AI builds everything</h3>

    <p>
        CODEXA understands your request and creates the complete
        application automatically.
    </p>

    <div className="progress-box">

        <div className="progress-item complete">
            <span className="status"></span>
            <span>Understanding your request</span>
        </div>

        <div className="progress-item complete">
            <span className="status"></span>
            <span>Planning project architecture</span>
        </div>

        <div className="progress-item active">
            <span className="status"></span>
            <span>Generating React components...</span>
        </div>

        <div className="progress-item">
            <span className="status"></span>
            <span>Creating backend API</span>
        </div>

        <div className="progress-item">
            <span className="status"></span>
            <span>Connecting database</span>
        </div>

    </div>

    <div className="overall-progress">

        <div className="progress-text">

            <span>Overall Progress</span>

            <span>72%</span>

        </div>

        <div className="progress-bar">

            <div className="progress-fill"></div>

        </div>

    </div>

</div>

          </div>

          {/* STEP 3 */}

          <div className="workflow-column">

            <div className="workflow-top">

              <div className="step-icon">
                <Rocket size={28} strokeWidth={2} />
              </div>

              <span className="step-number">
                03
              </span>

            </div>

            {/* Card 3 */}
            <div className="workflow-card">

    <h3>Project Ready</h3>

    <p>
        Your application is generated and ready to preview,
        download or deploy.
    </p>

    <div className="dashboard-preview">

        <div className="dashboard-header">

            <span>Dashboard Preview</span>

            <span className="live-status">
                ● Live
            </span>

        </div>

        <div className="dashboard-grid">

            <div className="dashboard-box">
                <small>Files</small>
                <h4>128</h4>
            </div>

            <div className="dashboard-box">
                <small>Components</small>
                <h4>46</h4>
            </div>

            <div className="dashboard-box">
                <small>API Routes</small>
                <h4>18</h4>
            </div>

            <div className="dashboard-box">
                <small>Deploys</small>
                <h4>9</h4>
            </div>

        </div>

    </div>

    <div className="tech-tags">

        <span>React</span>
        <span>FastAPI</span>
        <span>PostgreSQL</span>
        <span>Tailwind</span>

    </div>

    <button className="workspace-btn">

        Open Workspace

        <span>→</span>

    </button>

</div>

          </div>

        </div>

      </div>

    </section>
  );
}