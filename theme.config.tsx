import React from "react";

import { DocsThemeConfig } from "nextra-theme-docs";

import { FaGithub, FaDiscord } from 'react-icons/fa';

const config: DocsThemeConfig = {
  logo: <span>Medusa Plugin Ultimate</span>,
  project: {
    icon: <FaGithub />,
    link: "https://github.com/raideno/medusa-plugin-ultimate",
  },
  chat: {
    icon: <FaDiscord />,
    link: "https://discord.com/users/423897604330618883/users/423897604330618883",
  },
  docsRepositoryBase: "https://github.com/raideno/medusa-plugin-ultimate-documentation",
  darkMode: true,
  feedback: {

  },
  banner: {
    dismissible: true,
    key: "help-banner",
    text: (
      <span>
        📙 For any Help, Contact me on Discord{" "}
        <a className="underline" href="https://discord.com/users/423897604330618883/users/423897604330618883" target="_blank">
          (@raideno)
        </a>
        .
      </span>
    )
  },

  logoLink: "",
  
  // notFound: {
  //   content: "Not Found Page!",
  //   labels: "Not Found",
  // },

  sidebar: {
    defaultMenuCollapseLevel: 0,
    autoCollapse: true,
    toggleButton: true,
  },
  
  footer: {
    component: null,
    text: null,
  },
};

export default config;
