import "./Features.css";
import { Code2, Bug } from "lucide-react";

export default function Features() {
  return (
    <section className="features">

      <div className="features-header">

        <span className="section-label">
          AI CAPABILITIES
        </span>

        <h2>
          Everything you need to build with AI.
        </h2>

        <p>
          From idea to deployment, CODEXA helps you build
          faster with intelligent AI assistance.
        </p>

      </div>

      <div className="features-grid">

        {/* LEFT */}

        <div className="feature-column">

          <div className="feature-card">

            <div className="icon-box">
              <Code2 size={22} strokeWidth={2}/>
            </div>

            <h3>Generate Code</h3>

            <p>
              Create production-ready React,
              Next.js, Python and FastAPI code
              in seconds.
            </p>

          </div>

          <div className="feature-card">

            <div className="icon-box">
              <Bug size={22} strokeWidth={2}/>
            </div>

            <h3>Debug Faster</h3>

            <p>
              Understand errors instantly with
              AI suggestions and intelligent
              fixes.
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="editor-card">

          <div className="editor-top">

            <div className="editor-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="editor-title">
              CODEXA Workspace
            </div>

          </div>

        <div className="editor-body">

  <div className="explorer">

    <span className="explorer-title">EXPLORER</span>

    <ul>
      <li>📁 my-app</li>
      <li>📁 src</li>
      <li>📄 page.jsx</li>
      <li>📄 Hero.jsx</li>
      <li>📄 Navbar.jsx</li>
      <li>📄 package.json</li>
    </ul>

  </div>

  <div className="editor-main">

    <div className="editor-tabs">

      <span className="active-tab">
        page.jsx
      </span>

      <span>
        Hero.jsx
      </span>

    </div>

<pre>{`import Dashboard from "./Dashboard"

export default function Home(){

  return(

    <Dashboard />

  )

}`}</pre>

  </div>

  <div className="assistant-panel">

    <div className="assistant-badge">

      ● AI Assistant

    </div>

    <div className="chat-box">

      <p>Create a dashboard with analytics.</p>

    </div>

    <div className="chat-box reply">

      <p>Dashboard generated successfully.</p>

    </div>

    <input
      placeholder="Ask CODEXA..."
      disabled
    />

  </div>

</div> 

        </div>

      </div>
<div className="workspace-card">

  <div className="workspace-left">

    <span className="workspace-label">
      AI WORKSPACE
    </span>

    <h3>
      Build complete applications
      with one intelligent workspace.
    </h3>

    <p>
      Plan, generate code, debug, explain,
      and deploy your projects without
      switching between multiple tools.
    </p>

    <div className="workspace-buttons">

      <button>Generate UI</button>

      <button>Write API</button>

      <button>Fix Bugs</button>

      <button>Deploy</button>

    </div>

  </div>

  <div className="workspace-right">

    <div className="dashboard">

      <div className="dashboard-header">

        <span>Project Dashboard</span>

        <span className="status">
          ● Online
        </span>

      </div>

      <div className="dashboard-grid">

        <div className="mini-card">
          <h4>Files</h4>
          <p>128</p>
        </div>

        <div className="mini-card">
          <h4>Components</h4>
          <p>46</p>
        </div>

        <div className="mini-card">
          <h4>Tasks</h4>
          <p>18</p>
        </div>

        <div className="mini-card">
          <h4>Deploys</h4>
          <p>9</p>
        </div>

      </div>

    </div>

  </div>

</div>
    </section>
  );
}
