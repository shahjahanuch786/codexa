import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResourcesMenu() {
  const [open, setOpen] = useState(false);

  const resources = [
    ["Changelog", "#"],
    ["Blog", "#"],
    ["Docs", "#"],
    ["Community", "#"],
    ["Help", "#"],
    ["Workshops", "#"],
    ["Forum", "#"],
    ["Careers", "#"],
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-zinc-300 hover:text-white transition">

        Resources

        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />

      </button>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-4 w-[330px] rounded-2xl border border-white/10 bg-[#111111] p-5 shadow-2xl"
          >

            <div className="grid grid-cols-2 gap-y-4">

              {resources.map(([title, link]) => (

                <a
                  key={title}
                  href={link}
                  className="text-sm text-zinc-400 hover:text-white transition"
                >
                  {title}
                </a>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}