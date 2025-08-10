// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

//Plugins

// https://astro.build/config
export default defineConfig({
  site: 'https://moonrisesunset.github.io',
  integrations: [	
    starlight({

		plugins: [],

      title: "Moonrise's Portfolio",
	  components:{
		  Footer: './src/components/Footer.astro',
	  },
			customCss:[
				'./src/styles/starlight.css',
				'@fontsource-variable/inter',
				'@fontsource-variable/sometype-mono',
				'@fontsource-variable/noto-sans',
				'@fontsource-variable/atkinson-hyperlegible-next',
			],

			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/MoonriseSunset' },
			],

			favicon: './assets/starlightfavicon.png',
      		logo: {src:'./src/assets/Logo.png',},
			sidebar: [
			
				//Top Section
				{
					label: 'Start Here',
					items:[
						{label: 'Landing Page',link: '/'},
						{label: 'About',link: '/about/'},
						{label: 'Projects',link: '/project-overview/'},
						{label: 'Changelog',link: '/changelog/'},
						{label: 'Thanks',link: '/thanks/'},
					
					],
					collapsed: false,
				},

				//Personal Project Section
        		{
					label: 'Personal Projects',
					autogenerate: {directory: '/personal'},
					collapsed: false,
				},

				//School Project Section
				{
					label: 'School Projects',
					autogenerate: {directory: '/school-projects'},
					collapsed: false,
				},
			], //end sidebar config

		}), //end starlight config

  ], //end Integrations
});