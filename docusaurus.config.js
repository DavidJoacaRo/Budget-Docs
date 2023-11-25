// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.vsDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Budget Backrooms',
  tagline: 'Official Wiki & Documentation for your fellow, low-budget Project!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://davidjoacaro.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Budget-Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DavidJoacaRo', // Usually your GitHub org/user name.
  projectName: 'Budget Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DavidJoacaRo/Budget-Docs/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DavidJoacaRo/Budget-Docs/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/64x64px.png',
      navbar: {
        title: 'Budget Backrooms Documentation',
        logo: {
          alt: 'Logo',
          src: 'img/64px.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'MainSide',
            position: 'left',
            label: 'Wiki',
          },
          {
            href: 'https://github.com/DavidJoacaRo/Budget-Docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Wiki',
                to: '/docs/Wiki/About Wiki',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Steam',
                href: 'https://store.steampowered.com/app/2589200/Budget_Backrooms/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/WVuTB56ag4',
              },
              {
                label: 'Game GitHub Repository',
                href: 'https://github.com/DavidJoacaRo/Budget-Backrooms',
              },
              {
                label: 'Wiki Repository',
                href: 'https://github.com/DavidJoacaRo/Budget-Docs',
              },
            ],
          },
        ],
        copyright: `we need a copyright footer?`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    markdown: {
      format: "detect"
    }
};

module.exports = config;
