// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '  Vuex Support',
  tagline: '',
  favicon: 'img/Favicon.png',

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
        
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: '',
          src: 'img/vue-logo-light.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'User Guides',
          },
          {
            type: 'docSidebar',
            href: 'docs/Create a Journey/Integration',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Integration',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Raise a ticket',
          },
        
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'Vue.ai Home',
                to: 'https://vue.ai/developer/',
              },
              {
                label: 'Solutions',
                to: 'https://vue.ai/solutions/',
              },
              {
                label: 'Partner Program',
                to: 'https://vue.ai/partners/',
              },
            ],
          },
          {
            title: 'Legal and Press',
            items: [
              {
                label: 'Privacy Policy',
                href: 'https://vue.ai/privacy-policy/',
              },
              {
                label: 'Terms of Service',
                href: 'https://vue.ai/license-terms-of-service/',
              },
              {
                label: 'GDPR',
                href: 'https://vue.ai/gdpr/',
              },
              {
                label: 'In the Press',
                href: 'https://vue.ai/press/',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Resource Center',
                to: 'https://vue.ai/resources/case-studies/',
              },
              {
                label: 'Pod Cast',
                href: 'https://vue.ai/resources/podcasts/',
              },
              {
                label: 'Customers',
                href: 'hhttps://vue.ai/customers/',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
