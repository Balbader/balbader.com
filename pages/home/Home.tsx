'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	min-height: 100vh;
	background: #0a0a0a;
	color: #ffffff;
	display: flex;
	flex-direction: column;
	padding: 2rem;
`;

const Header = styled(motion.div)`
	font-size: clamp(2rem, 8vw, 6rem);
	font-weight: 200;
	letter-spacing: -2px;
	margin: 4rem 0;
`;

const Description = styled(motion.p)`
	font-size: clamp(1rem, 2vw, 1.5rem);
	font-weight: 300;
	max-width: 600px;
	line-height: 1.6;
	opacity: 0.8;
`;

const TechStack = styled(motion.div)`
	display: flex;
	gap: 1rem;
	margin-top: 4rem;
	flex-wrap: wrap;
`;

const TechItem = styled(motion.span)`
	padding: 0.5rem 1rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 20px;
	font-size: 0.9rem;
	opacity: 0.6;
`;

export default function Home() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const technologies = [
		'Web3',
		'Blockchain',
		'React',
		'Node.js',
		'Solidity',
		'TypeScript',
		'Next.js',
		'Tailwind CSS',
		'Framer Motion',
		'Styled Components',
		'Git',
		'GitHub',
	];

	return (
		<Container>
			<Header
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
				transition={{ duration: 0.8 }}
			>
				Balou Alba
				<motion.span
					style={{ opacity: 0.3, display: 'block', fontSize: '0.4em' }}
				>
					Fullstack Developer
				</motion.span>
			</Header>

			<Description
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				Crafting innovative web3 solutions and blockchain applications. Bridging
				the gap between cutting-edge technology and seamless user experiences.
			</Description>

			<TechStack>
				{technologies.map((tech, index) => (
					<TechItem
						key={tech}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.9 }}
						transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
					>
						{tech}
					</TechItem>
				))}
			</TechStack>
		</Container>
	);
}
