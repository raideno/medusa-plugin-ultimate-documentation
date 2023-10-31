import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Medusa Plugin Ultimate</span>,
  head: (
    <div className="w-full py-2 flex flex-row items-center justify-center bg-[#ab570a]">
      <div className="font-bold text-white">
        ⚠️IMPORTANT⚠️: The doc is still being built / completed, feel free to DM
        if you need help.
      </div>
    </div>
  ),
  project: {
    icon: undefined,
    link: "https://github.com/raideno/medusa-plugin-ultimate",
  },
  chat: {
    icon: undefined,
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/raideno/medusa-plugin-ultimate",
  footer: {
    text: "Medusa Ultimate Plugin Docs",
  },
};

export default config;
