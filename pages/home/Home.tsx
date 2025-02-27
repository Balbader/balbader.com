'use client';

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	min-height: 100vh;
	background: #0a0a0a;
	color: #ffffff;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	position: relative;
`;

const Content = styled.div`
	position: relative;
	z-index: 1;
`;

const Header = styled.div`
	font-size: clamp(2rem, 8vw, 6rem);
	font-weight: 200;
	letter-spacing: -2px;
	margin: 4rem 0;
`;

const SubHeader = styled.span`
	opacity: 0.3;
	display: block;
	font-size: 0.4em;
`;

const Description = styled.p`
	font-size: clamp(1rem, 2vw, 1.5rem);
	font-weight: 300;
	max-width: 600px;
	line-height: 1.6;
	opacity: 0.8;
`;

const SectionTitle = styled.h2`
	font-size: clamp(1.5rem, 4vw, 3rem);
	font-weight: 300;
	margin: 6rem 0 2rem;
	letter-spacing: -1px;
`;

const TechStack = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 4rem;
	flex-wrap: wrap;
`;

const TechItem = styled.span`
	padding: 0.5rem 1rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 20px;
	font-size: 0.9rem;
	opacity: 0.6;
`;

const ProjectGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 2rem;
	margin-top: 2rem;
`;

const ProjectCard = styled.div`
	background: rgba(255, 255, 255, 0.05);
	border-radius: 8px;
	padding: 1.5rem;
	transition: transform 0.3s ease;

	&:hover {
		transform: translateY(-5px);
	}
`;

const ProjectTitle = styled.h3`
	font-size: 1.2rem;
	margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
	font-size: 0.9rem;
	opacity: 0.7;
	line-height: 1.5;
`;

const AboutContent = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 3rem;
	margin-top: 2rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const AboutText = styled.div`
	font-size: 1rem;
	line-height: 1.8;
	opacity: 0.8;
`;

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 500px;
	margin-top: 2rem;
`;

const FormInput = styled.input`
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 4px;
	padding: 1rem;
	margin-bottom: 1rem;
	color: #ffffff;
	font-size: 1rem;

	&:focus {
		outline: none;
		border-color: rgba(255, 255, 255, 0.3);
	}
`;

const FormTextarea = styled.textarea`
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 4px;
	padding: 1rem;
	margin-bottom: 1rem;
	color: #ffffff;
	font-size: 1rem;
	min-height: 150px;

	&:focus {
		outline: none;
		border-color: rgba(255, 255, 255, 0.3);
	}
`;

const SubmitButton = styled.button`
	background: #ffffff;
	color: #0a0a0a;
	border: none;
	border-radius: 4px;
	padding: 1rem;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	transition: opacity 0.3s ease;

	&:hover {
		opacity: 0.9;
	}
`;

export default function Home() {
	const technologies = [
		'Web3',
		'Blockchain',
		'React',
		'Node.js',
		'Solidity',
		'TypeScript',
		'Next.js',
		'Tailwind CSS',
		'Ethereum',
		'Solana',
		'Polygon',
	];

	const projects = [
		{
			id: 1,
			title: 'DeFi Dashboard',
			description:
				'A comprehensive dashboard for tracking DeFi investments across multiple chains and protocols.',
		},
		{
			id: 2,
			title: 'NFT Marketplace',
			description:
				'A platform for artists to mint, showcase and sell their digital creations as NFTs.',
		},
		{
			id: 3,
			title: 'DAO Governance Tool',
			description:
				'A tool that simplifies the process of creating and managing decentralized autonomous organizations.',
		},
	];

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log('Form submitted');
	};

	return (
		<Container>
			<Content>
				<Header>
					Basil Albader
					<SubHeader>Fullstack Developer</SubHeader>
				</Header>

				<Description>
					Crafting innovative web3 solutions and blockchain applications.
					Bridging the gap between cutting-edge technology and seamless user
					experiences.
				</Description>

				<TechStack>
					{technologies.map((tech) => (
						<TechItem key={tech}>{tech}</TechItem>
					))}
				</TechStack>

				<SectionTitle id="work">Work</SectionTitle>
				<ProjectGrid>
					{projects.map((project) => (
						<ProjectCard key={project.id}>
							<ProjectTitle>{project.title}</ProjectTitle>
							<ProjectDescription>{project.description}</ProjectDescription>
						</ProjectCard>
					))}
				</ProjectGrid>

				<SectionTitle id="about">About</SectionTitle>
				<AboutContent>
					<AboutText>
						<p>
							I'm a fullstack developer with a passion for blockchain technology
							and web3 applications. With over 5 years of experience in the
							industry, I've worked on a variety of projects ranging from DeFi
							platforms to NFT marketplaces.
						</p>
						<br />
						<p>
							My approach combines technical expertise with a deep understanding
							of user experience, ensuring that the applications I build are not
							only functional but also intuitive and enjoyable to use.
						</p>
					</AboutText>
					<AboutText>
						<p>
							I believe in the transformative potential of blockchain technology
							and am committed to building solutions that contribute to a more
							decentralized and equitable digital future.
						</p>
						<br />
						<p>
							When I'm not coding, you can find me exploring new technologies,
							contributing to open-source projects, or sharing knowledge with
							the developer community.
						</p>
					</AboutText>
				</AboutContent>

				<SectionTitle id="contact">Contact</SectionTitle>
				<ContactForm onSubmit={handleSubmit}>
					<FormInput type="text" placeholder="Name" required />
					<FormInput type="email" placeholder="Email" required />
					<FormTextarea placeholder="Your message" required />
					<SubmitButton type="submit">Send Message</SubmitButton>
				</ContactForm>
			</Content>
		</Container>
	);
}
