// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://moonrisesunset.github.io',
  integrations: [
    starlight({
      title: 'Projects',
			customCss:[
				'./src/styles/starlight.css',
				'@fontsource-variable/inter'
				
			],
			social: {
				github: 'https://github.com/MoonriseSunset',
			},
			favicon: './src/assets/starlightfavicon.png',
			sidebar: [
				{
					label: 'Start Here',
					items:[{label: 'Home',link: '/projects'}],
					collapsed: false,
				},
        {
					label: 'General',
					autogenerate: {directory: 'projects/main'},
					collapsed: false,
				},
				{
					label: 'School Projects',
					autogenerate: {directory: 'projects/school-projects'},
					collapsed: false,
				},
				{
					label: 'Personal',
					autogenerate: {directory: 'projects/personal'},
					collapsed: false,
				},
			],
		}),
  ],
});