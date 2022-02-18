import React from 'react';
import './ContactText.css';

interface ContactTextProps {}

export const ContactText = ({ ...props }: ContactTextProps) => {
	return (
		<>
			<div className="contact-text">
				<p>
					At the moment I am in a full-time role however I am still open to talking about other projects or even some
					light freelance programming or writing jobs. You can reach me here at{' '}
					<a href="mailto:andrewbaisden@gmail.com">andrewbaisden@gmail.com</a>. I look forward to hearing from you!
				</p>
			</div>
		</>
	);
};

export default ContactText;
