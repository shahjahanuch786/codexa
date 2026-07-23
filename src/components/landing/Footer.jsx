import "./Footer.css";

export default function Footer(){

  return (

    <footer className="footer">


      <div className="footer-main">


        <div className="footer-brand">

          <h2>
            CODEXA
          </h2>

          <p>
            Build, launch and scale software<br/>
            with the power of AI.
          </p>


          <div className="footer-social">

            <a href="#">X</a>
            <a href="#">GH</a>
            <a href="#">in</a>
            <a href="#">DC</a>

          </div>

        </div>



        <div className="footer-column">

          <h4>
            Product
          </h4>

          <a href="#">AI Builder</a>
          <a href="#">Templates</a>
          <a href="#">Pricing</a>
          <a href="#">Enterprise</a>

        </div>



        <div className="footer-column">

          <h4>
            Resources
          </h4>

          <a href="#">Documentation</a>
          <a href="#">Guides</a>
          <a href="#">API</a>
          <a href="#">Blog</a>

        </div>



        <div className="footer-column">

          <h4>
            Company
          </h4>

          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
          <a href="#">Security</a>

        </div>


      </div>



      <div className="footer-bottom">


        <span>
          © 2026 CODEXA Inc. All rights reserved.
        </span>


        <div>

          <a href="#">Privacy</a>
          <a href="#">Terms</a>

        </div>


      </div>


    </footer>

  );

}