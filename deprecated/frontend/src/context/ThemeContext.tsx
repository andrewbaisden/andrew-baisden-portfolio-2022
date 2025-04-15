import { useState, createContext, useContext, useEffect } from 'react';

interface ThemeContextProps {
	activeTheme: string;
	setActiveTheme: any;
	inactiveTheme: string;
}

const ThemeContext = createContext({} as ThemeContextProps);

export const useTheme = () => useContext(ThemeContext);

function ThemeContextProvider(props: any): any {
	const [activeTheme, setActiveTheme] = useState('light');
	const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

	useEffect(() => {
		document.body.dataset.theme = activeTheme;
	}, [activeTheme]);

	useEffect(() => {
		const savedTheme = window.localStorage.getItem('theme');
		savedTheme && setActiveTheme(savedTheme);
	}, []);

	useEffect(() => {
		document.body.dataset.theme = activeTheme;
		window.localStorage.setItem('theme', activeTheme);
	}, [activeTheme]);

	const value = { activeTheme, setActiveTheme, inactiveTheme };

	return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>;
}

export default ThemeContextProvider;
