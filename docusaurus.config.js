// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.vsDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Budget Docs',
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DavidJoacaRo/Budget-Docs/blob/main/',
        },
        blog: false,
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
      //image: 'img/64x64px.png',
      
      navbar: {
        title: 'Budget Docs',
        logo: {
          //alt: 'Logo',
          src: 'img/64px.svg',
        },
        items: [
          {
            activeBasePath: 'docs',
            position: 'left',
            label: 'Wiki',
            to: 'wiki',
          },
          {
            activeBasePath: 'docs',
            position: 'left',
            label: 'Documentation',
            to: 'docs',
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
            title: 'Knowledge',
            items: [
              {
                label: 'Wiki',
                to: 'wiki',
              }, {
                label: 'Documentation',
                to: 'docs'
              }
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
                label: 'Budget Backrooms on Discord',
                href: 'https://discord.gg/WVuTB56ag4',
              },
              {
                label: 'Budget Backrooms on GitHub',
                href: 'https://github.com/DavidJoacaRo/Budget-Backrooms',
              },
              {
                label: 'Budget Docs on GitHub',
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
      metadata: [
        { name: "og:title", content: "Budget Docs - Yet another rewritten Wiki for Budget Backrooms" },
        {
            name: "og:description",
            content: "The All-In-One documentation website for any stuff related to Budget Backrooms.",
        },
        {
            name: "og:image",
            content: "https://davidjoacaro.github.io/Budget-Docs/assets/images/home_header-1c172a49bc29e4a2ab84026916bc7354.png",
        },
      ]
    }),
    markdown: {
      format: "detect"
    },
    headTags: [
      // Declare a <link> preconnect tag
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://davidjoacaro.github.io/Budget-Docs/',
        },
      },
      // Declare some json-ld structured data
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://davidjoacaro.github.io/Budget-Docs/',
          '@type': 'Website',
          name: 'Budget Docs',
          url: 'https://davidjoacaro.github.io/Budget-Docs/',
          logo: 'img/64px.svg',
        }),
      },
    ],
};

module.exports = config;
