import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import WelcomeSection from "../components/layout/WelcomeSection";
import FeatureCards from "../components/layout/FeatureCards";
import PromptBox from "../components/layout/PromptBox";

import "./Dashboard.css";


function Dashboard() {

  return (

    <div className="codexa-dashboard-layout">


      {/* Sidebar */}

      <aside className="codexa-dashboard-sidebar-wrapper">

        <Sidebar />

      </aside>



      {/* Main Workspace */}

      <main className="codexa-dashboard-main">


        <Header />



        <section className="codexa-dashboard-workspace">


          <WelcomeSection />


          <FeatureCards />


          <PromptBox />


        </section>


      </main>


    </div>

  );

}


export default Dashboard;