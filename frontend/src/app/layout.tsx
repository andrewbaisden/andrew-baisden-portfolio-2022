import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from './context/ThemeContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrew Baisden - Portfolio",
  description: "Andrew Baisden, born and raised in London, England, is an accomplished Software Developer, Content Creator, and Technical Writer. Proficient in JavaScript and React, Andrew excels in developing user-friendly and captivating applications.",
  keywords: [
    "Software Developer", 
    "Software Engineer", 
    "Software", 
    "Full Stack Developer", 
    "Full Stack", 
    "Full-Stack Developer", 
    "Full-Stack", 
    "Front-End Developer", 
    "FrontEnd Developer", 
    "Front-End Web Developer", 
    "Web Developer", 
    "Website Development", 
    "Website Design", 
    "Freelancer", 
    "Freelancer London", 
    "Andrew Baisden", 
    "AndrewBaisden", 
    "Andrew", 
    "Baisden", 
    "Baisden Andrew", 
    "BaisdenAndrew", 
    "Developer", 
    "Designer", 
    "Front-End", 
    "Back-End", 
    "Frontend", 
    "Backend", 
    "Andrew Baisden Developer", 
    "Andrew Baisden Frontend Developer", 
    "Andrew Baisden Full Stack", 
    "Andrew Baisden Full-Stack", 
    "Developer London", 
    "Web Developer London", 
    "React Developer", 
    "React", 
    "ReactJS", 
    "React Developer London", 
    "JavaScript", 
    "JavaScript Developer", 
    "Developer JavaScript", 
    "MERN Stack", 
    "MERN", 
    "SQL Developer", 
    "Express Developer", 
    "Node Developer", 
    "Nodejs Developer", 
    "Blogging", 
    "Writing", 
    "Technical Writing", 
    "Python", 
    "TypeScript", 
    "React Native",
    "Django", 
    "Content Creator"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
