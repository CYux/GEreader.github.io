// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GEORGE ELIOT ARCHIVE',
  tagline: 'Reader',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: '/', // Serve the docs at the site's root
            /* other docs plugin options */
          // docItemComponent: require.resolve('./src/pages/index.js'),
        },
        blog: false, // Optional: disable the blog plugin
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
      image: 'img/docusaurus-social-card.jpg',
      navbar:{
        logo: {
          alt: 'ARCHIVE',
          src: 'img/logo.png',
          href: 'https://georgeeliotarchive.org/' 
        },
        hideOnScroll: true,
        items: [
          {to: 'https://georgeeliotarchive.org/', label: 'Archive', position: 'left', className: 'archive'},
          { type: 'html',
            value: "<strong>/</strong>",
            position: 'left'},
          {to: '/', label: 'Reader', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'middleMarchSidebar',
            position: 'left',
            label: 'Middlemarch',
          },
          {
            type: 'docSidebar',
            sidebarId: 'romolaSidebar',
            position: 'left',
            label: 'Romola',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      // footer: {
      //   style: 'dark',
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;