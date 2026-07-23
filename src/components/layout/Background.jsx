import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#09090B]">

      {/* Blue */}
      <motion.div
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -100, 150, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-cyan-500 opacity-30 blur-[180px]"
      />

      {/* Purple */}
      <motion.div
        animate={{
          x: [0, -200, 100, 0],
          y: [0, 120, -80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-0 w-[700px] h-[700px] rounded-full bg-indigo-600 opacity-30 blur-[200px]"
      />

      {/* Pink */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-1/2 w-[550px] h-[550px] rounded-full bg-fuchsia-500 opacity-20 blur-[170px]"
      />

    </div>
  );
}