import "./Pricing.css";
import { useState } from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Pricing() {

  const navigate = useNavigate();

  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Hobby",
      description: "Perfect for trying Codexa AI.",
      monthly: "Free",
      yearly: "Free",
      button: "Get Started",
      featured: false,
      features: [
        "Unlimited public projects",
        "Basic AI generation",
        "Community support",
        "Deploy instantly",
        "1 Team member"
      ]
    },
    {
      name: "Pro",
      description: "Best for developers & creators.",
      monthly: "$19",
      yearly: "$15",
      button: "Start Pro",
      featured: true,
      features: [
        "Everything in Hobby",
        "Unlimited AI generations",
        "Private projects",
        "Priority support",
        "Advanced models",
        "Unlimited history"
      ]
    },
    {
      name: "Teams",
      description: "For growing startups.",
      monthly: "$49",
      yearly: "$39",
      button: "Choose Teams",
      featured: false,
      features: [
        "Everything in Pro",
        "Unlimited members",
        "Shared workspace",
        "Analytics",
        "Role permissions",
        "Team billing"
      ]
    },
    {
      name: "Enterprise",
      description: "Custom pricing for organizations.",
      monthly: "Custom",
      yearly: "Custom",
      button: "Contact Sales",
      featured: false,
      features: [
        "Dedicated infrastructure",
        "Custom AI models",
        "24/7 support",
        "SSO",
        "Unlimited storage",
        "Priority onboarding"
      ]
    }
  ];

  return (
    <section className="pricing">

      <div className="pricing-header">

        <span className="pricing-tag">
          Pricing
        </span>

        <h1>
          Choose the perfect plan
        </h1>

        <p>
          Flexible pricing designed for individuals,
          startups and enterprise teams.
        </p>

        <div className="billing-switch">

          <button
            className={billing === "monthly" ? "active" : ""}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>

          <button
            className={billing === "yearly" ? "active" : ""}
            onClick={() => setBilling("yearly")}
          >
            Yearly
            <span>Save 20%</span>
          </button>

        </div>

      </div>

      <div className="pricing-grid">

        {plans.map((plan, index) => (

          <div
            key={index}
            className={`pricing-card ${
              plan.featured ? "featured" : ""
            }`}
          >

            {plan.featured && (
              <div className="badge">
                Most Popular
              </div>
            )}

            <h3>{plan.name}</h3>

            <p>{plan.description}</p>

            <div className="price">

              {billing === "monthly"
                ? plan.monthly
                : plan.yearly}

              {plan.monthly !== "Free" &&
                plan.monthly !== "Custom" && (
                  <span>/mo</span>
              )}

            </div>

            <button
              onClick={() => navigate("/auth")}
            >
              {plan.button}
            </button>

            <div className="divider"></div>

            <ul>

              {plan.features.map((feature, i) => (

                <li key={i}>

                  <Check size={18} />

                  {feature}

                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>

    </section>
  );
}