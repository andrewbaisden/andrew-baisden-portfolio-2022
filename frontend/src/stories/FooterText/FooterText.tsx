import React, { useState } from 'react';
import './FooterText.css';

import { useTheme } from '../../context/ThemeContext';

interface FooterTextProps {}

export const FooterText = ({ ...props }: FooterTextProps) => {
	const { activeTheme } = useTheme();

	const d = new Date();
	let year = d.getFullYear();

	const [currYear] = useState(year);

	return (
		<>
			<div className="footer-text">
				<p>
					This website was designed in&nbsp;
					<a
						href="https://www.figma.com/"
						target="_blank"
						rel="noopener noreferrer"
						className={activeTheme === 'light' ? 'footer-text-link-light-theme' : 'footer-text-link-dark-theme'}
					>
						Figma
					</a>
					&nbsp;and built using&nbsp;
					<a
						href="https://reactjs.org/"
						target="_blank"
						rel="noopener noreferrer"
						className={activeTheme === 'light' ? 'footer-text-link-light-theme' : 'footer-text-link-dark-theme'}
					>
						React
					</a>
					&nbsp;by Andrew Baisden.
				</p>
				<p>All Rights Reserved &reg; Copyright &copy; {currYear} Andrew Baisden.</p>
			</div>
		</>
	);
};

export default FooterText;
