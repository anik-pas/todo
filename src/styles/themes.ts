import type { Theme, Themes } from '../models/theme.interface';

const light: Theme = {
	name: 'light',
	colors: {
		backgroundPrimary: '#4682b4',
		backgroundSecondary: '#edf0f1',
    backgroundAccent: '#4682b4',

    linkDefault: '#fdf5f5',
    linkActive: '#ffcc00',

	},
};

const dark: Theme = {
	name: 'dark',
	colors: {
		backgroundPrimary: '#021626',
		backgroundSecondary: '#1b2126',
    backgroundAccent: '#042b4b',

    linkDefault: '#fdf5f5',   // белый для неактивных
    linkActive: '#66d9ff',

	},
};

export const themes: Themes = {
	light,
	dark,
};

