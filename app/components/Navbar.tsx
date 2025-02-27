'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Styled components for the navbar
// Fixed navigation container positioned on the right side
const NavContainer = styled.nav`
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	width: 80px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

// Container for the navigation links
const NavLinks = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

// Individual link container with 90-degree rotation
const NavLink = styled.div`
	position: relative;
	transform: rotate(90deg);
	margin: 1rem 0;
`;

/**
 * Navbar Component
 *
 * A vertical navigation bar fixed to the right side of the screen.
 * Features hover effects and animated links using Framer Motion.
 */
const Navbar = () => {
	// State to track which link is currently being hovered
	const [activeLink, setActiveLink] = useState<string | null>(null);

	return (
		<NavContainer>
			<NavLinks>
				{/* Work navigation link */}
				<NavLink
					onMouseEnter={() => setActiveLink('work')}
					onMouseLeave={() => setActiveLink(null)}
				>
					<Link href="/work">
						<motion.span
							style={{
								fontWeight: activeLink === 'work' ? 600 : 400,
								fontSize: '1rem',
								letterSpacing: '0.05em',
								color: '#fff',
								textDecoration: 'none',
								display: 'block',
							}}
							whileHover={{ scale: 1.1 }} // Animation on hover
							transition={{ duration: 0.2 }}
						>
							Work
						</motion.span>
					</Link>
				</NavLink>

				{/* About navigation link */}
				<NavLink
					onMouseEnter={() => setActiveLink('about')}
					onMouseLeave={() => setActiveLink(null)}
				>
					<Link href="/about">
						<motion.span
							style={{
								fontWeight: activeLink === 'about' ? 600 : 400,
								fontSize: '1rem',
								letterSpacing: '0.05em',
								color: '#fff',
								textDecoration: 'none',
								display: 'block',
							}}
							whileHover={{ scale: 1.1 }} // Animation on hover
							transition={{ duration: 0.2 }}
						>
							About
						</motion.span>
					</Link>
				</NavLink>

				{/* Contact navigation link */}
				<NavLink
					onMouseEnter={() => setActiveLink('contact')}
					onMouseLeave={() => setActiveLink(null)}
				>
					<Link href="/contact">
						<motion.span
							style={{
								fontWeight: activeLink === 'contact' ? 600 : 400,
								fontSize: '1rem',
								letterSpacing: '0.05em',
								color: '#fff',
								textDecoration: 'none',
								display: 'block',
							}}
							whileHover={{ scale: 1.1 }} // Animation on hover
							transition={{ duration: 0.2 }}
						>
							Contact
						</motion.span>
					</Link>
				</NavLink>
			</NavLinks>
		</NavContainer>
	);
};

export default Navbar;
