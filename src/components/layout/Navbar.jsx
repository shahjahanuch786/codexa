import { ArrowRight } from "lucide-react";
import ResourcesMenu from "./ResourcesMenu";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#09090B]/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-bold text-black">
            C
          </div>

          <span className="text-xl font-semibold tracking-tight text-white">
            CODEXA
          </span>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 text-sm text-zinc-400 lg:flex">

          <a
            href="#"
            className="transition-colors duration-300 hover:text-white"
          >
            Products
          </a>

          <ResourcesMenu />

          <Link
            to="/pricing"
            className="transition-colors duration-300 hover:text-white"
          >
            Pricing
          </Link>

          <a
            href="#"
            className="transition-colors duration-300 hover:text-white"
          >
            Enterprise
          </a>

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate("/auth")}
            className="hidden text-sm text-zinc-400 transition hover:text-white md:block"
          >
            Sign In
          </button>

          <button
            onClick={() => navigate("/auth")}
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition duration-300 hover:scale-105"
          >
            Get Started
            <ArrowRight size={16} />
          </button>

        </div>

      </div>

    </header>
  );
}