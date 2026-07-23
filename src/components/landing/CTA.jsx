import "./CTA.css";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate();

  return (
    <section className="cta">

      <div className="cta-container">

        <h2>
          Try Codexa now.
        </h2>

        <button
          onClick={() => navigate("/auth")}
          className="cta-btn"
        >
          Sign Up
          <ArrowRight size={20} strokeWidth={2.2} />
        </button>

      </div>

    </section>
  );
}