import { ModeToggle } from '@/components/mode-toggle';
import HomePage from '@/pages/HomePage';
import { Heart } from 'lucide-react';

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			{/* Header */}
			<header className="row-start-1 flex gap-[24px] items-center justify-center">
				<ModeToggle />
				<h1 className="text-4xl font-bold">Balbader.com</h1>
			</header>

			{/* Main */}
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<HomePage />
			</main>

			{/* Footer */}
			<footer className="row-start-3 flex gap-[24px] items-center justify-center">
				<p>
					Made with{' '}
					<span className="text-red-500">
						<Heart />
					</span>
					by <a href="https://github.com/balbader">Balbader</a>
				</p>
			</footer>
		</div>
	);
}
