import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Balbader.com',
};

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/work', label: 'Work' },
	{ href: '/contact', label: 'Contact' },
];

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const isLoggedIn = cookies().has('auth-token');

	return (
		<html lang="en">
			<body className={`${inter.className} text-black bg-white`}>
				<header>
					<nav className="h-navBar bg-black text-white flex items-center justify-end p-5">
						<div className="flex items-center">
							{navLinks.map(({ href, label }) => (
								<Link
									className="mr-8 text-inherit hover:underline"
									key={href}
									href={href}
								>
									{label}
								</Link>
							))}
						</div>
					</nav>
				</header>

				<main className="flex w-full p-10">{children}</main>
			</body>
		</html>
	);
}
