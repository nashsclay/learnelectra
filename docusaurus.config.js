/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Electra Project Education',
  tagline: 'To learn, educate, and grow',
  url: 'https://educate.electraproject.org',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'electraproject', // Usually your GitHub org/user name.
  projectName: 'learnelectra', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Learn Electra',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/doc1', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Dev Talk', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/doc1',
            },
          ],
        },
        {
	  title: 'Electra Project Community',
	  items: [
	    {
	      label: 'Discord',
	      href: 'https://discordapp.com/invite/B8F7Jdv',
	    },
	    {
	      label: 'Main Website',
	      href: 'https://electraproject.org'
	    },
          ],
        }, 
	{
          title: 'Development',
          items: [
            {
              label: 'Docusaurus Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Dev Talk',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
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
