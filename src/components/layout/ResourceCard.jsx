import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDown,
  BookOpen,
  GraduationCap,
  Sparkles,
  Code2,
  Users,
  Newspaper,
} from "lucide-react";

import ResourceCard from "./ResourceCard";

export default function ResourcesMenu() {
  return (
    <Menu as="div" className="relative">

      <Menu.Button className="flex items-center gap-1 transition duration-300 hover:text-white">

        Resources

        <ChevronDown
          size={16}
          className="transition-transform ui-open:rotate-180"
        />

      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 translate-y-3 scale-95"
        enterTo="opacity-100 translate-y-0 scale-100"
        leave="transition duration-150 ease-in"
        leaveFrom="opacity-100 translate-y-0 scale-100"
        leaveTo="opacity-0 translate-y-3 scale-95"
      >

        <Menu.Items className="absolute left-1/2 mt-6 w-[720px] -translate-x-1/2 rounded-3xl border border-white/10 bg-[#111111]/95 p-6 shadow-2xl backdrop-blur-3xl focus:outline-none">

          {/* Heading */}

          <div className="mb-6">

            <h3 className="text-lg font-semibold text-white">
              Resources
            </h3>

            <p className="mt-1 text-sm text-zinc-400">
              Learn everything about CODEXA.
            </p>

          </div>

          {/* Grid */}

          <div className="grid grid-cols-2 gap-3">

            <ResourceCard
              icon={<BookOpen size={20} />}
              title="Documentation"
              description="Complete platform documentation."
            />

            <ResourceCard
              icon={<GraduationCap size={20} />}
              title="Tutorials"
              description="Step-by-step learning guides."
            />

            <ResourceCard
              icon={<Sparkles size={20} />}
              title="AI Prompts"
              description="Ready-made prompts."
            />

            <ResourceCard
              icon={<Code2 size={20} />}
              title="API Reference"
              description="Integrate CODEXA APIs."
            />

            <ResourceCard
              icon={<Users size={20} />}
              title="Community"
              description="Join our Discord community."
            />

            <ResourceCard
              icon={<Newspaper size={20} />}
              title="Blog"
              description="Latest AI articles and news."
            />

          </div>

          {/* Footer */}

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">

            <p className="text-sm text-zinc-300">

              🚀 New

              <span className="ml-2 font-medium text-white">
                CODEXA Academy launches soon.
              </span>

            </p>

          </div>

        </Menu.Items>

      </Transition>

    </Menu>
  );
}