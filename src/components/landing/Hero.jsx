import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-black text-white">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl"></div>


      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8 pt-32">


        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 w-fit rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-400 backdrop-blur-xl"
        >
          ✨ Introducing CODEXA AI
        </motion.div>


        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="max-w-4xl text-[52px] md:text-[68px] font-medium leading-[1.05] tracking-[-0.03em]"
        >
          Build ambitious
          <br />
          software with AI.
        </motion.h1>


        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400"
        >
          Build websites, create AI agents, generate code,
          design interfaces, write content and automate
          your workflow from one powerful AI platform.
        </motion.p>


        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-12 flex flex-wrap gap-5"
        >

          <button
            onClick={() => navigate("/auth")}
            className="group flex items-center gap-2 rounded-full bg-white px-7 py-4 font-medium text-black transition duration-300 hover:scale-105"
          >

            Start Building

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />

          </button>


          <button
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-white transition hover:bg-white/10"
          >

            <Play size={16} />

            Watch Demo

          </button>


        </motion.div>



        {/* Hero Visual */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-[#080808]"
        >


          {/* Window Header */}

          <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between">


            <div className="flex items-center gap-2">

              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>


              <span className="ml-4 text-zinc-500 text-sm">
                CODEXA AI Workspace
              </span>


            </div>


            <span className="text-xs text-zinc-600">
              GPT-5 • Fast Mode
            </span>


          </div>




          <div className="p-10">


            {/* User */}

            <div className="rounded-2xl border border-white/10 bg-black p-6">


              <p className="mb-3 text-zinc-500">
                USER
              </p>


              <h3 className="text-xl leading-9">

                Create a modern SaaS dashboard for a fintech startup with authentication, analytics, AI assistant and responsive design.

              </h3>


            </div>




            {/* CODEXA Response */}

            <div className="mt-8 rounded-2xl border border-white/10 bg-[#090909] p-6">


              <p className="mb-5 text-zinc-500">
                CODEXA
              </p>



              <div className="space-y-4">


                {[
                  ["bg-emerald-500", "Understanding requirements..."],
                  ["bg-blue-500", "Planning application architecture..."],
                  ["bg-purple-500", "Generating React components..."],
                  ["bg-cyan-500", "Building FastAPI backend..."],
                  ["bg-orange-500", "Connecting PostgreSQL database..."],
                ].map(([color, text]) => (

                  <div key={text} className="flex items-center gap-3">

                    <div className={`w-2 h-2 rounded-full ${color}`}></div>

                    <span className="text-zinc-300">
                      {text}
                    </span>

                  </div>

                ))}


              </div>




              {/* Technology Tags */}

              <div className="mt-8 flex flex-wrap gap-3">


                {[
                  "React",
                  "FastAPI",
                  "TailwindCSS",
                  "PostgreSQL",
                  "Docker"
                ].map((item)=>(

                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
                  >
                    {item}
                  </span>

                ))}


              </div>



            </div>



          </div>


        </motion.div>



      </div>


    </section>
  );
}