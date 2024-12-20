// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://moonrisesunset.github.io',
  integrations: [	
    starlight({
      title: "Moonrise's Site",
			customCss:[
				'./src/styles/starlight.css',
				'@fontsource-variable/inter',
				'@fontsource-variable/sometype-mono',
				'@fontsource-variable/noto-sans',
			],
			social: {
				github: 'https://github.com/MoonriseSunset',
			},
			favicon: './src/assets/starlightfavicon.png',
      		logo: {src:'./src/assets/Logo.png',},
			sidebar: [
				{
					label: 'Start Here',
					items:[
						{label: 'Home',link: '/'}
					
					],
					collapsed: false,
				},
        {
					label: 'Personal',
					autogenerate: {directory: '/personal'},
					collapsed: false,
				},
				{
					label: 'School Projects',
					autogenerate: {directory: '/school-projects'},
					collapsed: false,
				},
			],
		}),
  ],
});