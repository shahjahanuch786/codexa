import {
  Bell,
  CircleHelp,
  Command,
  Zap,
} from "lucide-react";


function Header() {

  return (

    <header className="codexa-dashboard-header">


      <div className="codexa-dashboard-header-left">

        <h1 className="codexa-dashboard-header-title">
          Chat With AI
        </h1>


        <p className="codexa-dashboard-header-description">
          Break down lengthy texts into concise summaries to grasp.
        </p>


      </div>



      <div className="codexa-dashboard-header-right">


        <button className="codexa-dashboard-upgrade-button">

          <Zap size={18} />

          <span>
            Upgrade
          </span>

        </button>



        <button className="codexa-dashboard-icon-button">

          <CircleHelp size={20} />

        </button>



        <button className="codexa-dashboard-icon-button">

          <Bell size={20} />

        </button>



        <button className="codexa-dashboard-icon-button">

          <Command size={20} />

        </button>


      </div>


    </header>

  );

}


export default Header;