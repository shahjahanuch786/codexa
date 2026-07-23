import {
  MessageSquare,
  FolderOpen,
  FileText,
  Database,
  LayoutTemplate,
  Bot,
  History,
  Crown,
  Users,
  Settings,
  ChevronDown,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="dashboard-sidebar">

      {/* Logo */}
      <div className="dashboard-logo">

        <div className="dashboard-logo-icon">
          <div className="dashboard-logo-cube"></div>
        </div>

        <div className="dashboard-logo-text">
          <h2>
            CODEXA <span>AI</span>
          </h2>
        </div>

      </div>

      {/* Workspace */}
      <div className="dashboard-workspace-btn">

        <div className="dashboard-workspace-left">

          <div className="dashboard-workspace-circle">
            C
          </div>

          <span>Codexa Workspace</span>

        </div>

        <ChevronDown size={18} />

      </div>

      {/* Menu */}
      <nav className="dashboard-menu">

        <div className="dashboard-menu-item dashboard-menu-active">
          <MessageSquare size={20} />
          <span>Chat With AI</span>
        </div>

        <div className="dashboard-menu-item">
          <FolderOpen size={20} />
          <span>Projects</span>
        </div>

        <div className="dashboard-menu-item">
          <FileText size={20} />
          <span>Documents</span>
        </div>

        <div className="dashboard-menu-item">
          <Database size={20} />
          <span>Knowledge Base</span>
        </div>

        <div className="dashboard-menu-item">
          <LayoutTemplate size={20} />
          <span>Templates</span>
        </div>

        <div className="dashboard-menu-item">
          <Bot size={20} />
          <span>AI Agents</span>
        </div>

        <div className="dashboard-menu-item">
          <History size={20} />
          <span>History</span>
        </div>

      </nav>

      {/* Bottom */}
      <div className="dashboard-sidebar-bottom">

        <div className="dashboard-upgrade">
          <Crown size={20} />
          <span>Upgrade Plan</span>
        </div>

        <div className="dashboard-menu-item">
          <Users size={20} />
          <span>Invite Members</span>
        </div>

        <div className="dashboard-menu-item">
          <Settings size={20} />
          <span>Settings</span>
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;