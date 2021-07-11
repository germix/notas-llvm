const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Notas LLVM',
  tagline: 'Notas LLVM',
  url: 'https://germix.github.io',
  baseUrl: '/notas-llvm/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'germix', // Usually your GitHub org/user name.
  projectName: 'notas-llvm', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Notas LLVM',
      logo: {
        alt: 'Notas LLVM',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/germix',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Germán Martínez, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
