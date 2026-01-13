// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: './src/assets/logo.png',
			logo: {
        		src: './src/assets/logo.png',
      		},
			title: 'PID Tuning Academy',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Learn PID',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Learn how PID works', slug: 'pid/example' },
					],
				},
				{
					label: 'PID Simulator',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'PID simulation', slug: 'pid/example' },
					],
				},
				{
					label: 'Learn FeedForward',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Learn how FeedForward works', slug: 'ff/example' },
					],
				},
				{
					label: 'FeedForward Simulator',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'FF simulation', slug: 'ff/example' },
					],
				},
			],
		}),
	],
});
