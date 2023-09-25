import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '392'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'b18'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'b74'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '635'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '503'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '2e9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '3ec'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '997'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '1a1'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'e20'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'd3c'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '1e2'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '3a8'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'ca4'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '9c9'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'a9c'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '406'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd6c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '04e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '65b'),
    routes: [
      {
        path: '/docs/AB',
        component: ComponentCreator('/docs/AB', 'e9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Audience Builder',
        component: ComponentCreator('/docs/Audience Builder', '2b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/create-a-journey',
        component: ComponentCreator('/docs/category/create-a-journey', '79b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Create a Journey/Experience',
        component: ComponentCreator('/docs/Create a Journey/Experience', '0b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Create a Journey/Journey',
        component: ComponentCreator('/docs/Create a Journey/Journey', '677'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Create a Journey/Modules',
        component: ComponentCreator('/docs/Create a Journey/Modules', 'be9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Create a Journey/strategy',
        component: ComponentCreator('/docs/Create a Journey/strategy', '547'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Create a Journey/Template',
        component: ComponentCreator('/docs/Create a Journey/Template', '49a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Email',
        component: ComponentCreator('/docs/Email', '7e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Integration',
        component: ComponentCreator('/docs/Integration', 'a15'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Metrics',
        component: ComponentCreator('/docs/Metrics', 'd90'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Models',
        component: ComponentCreator('/docs/Models', 'b32'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '526'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
