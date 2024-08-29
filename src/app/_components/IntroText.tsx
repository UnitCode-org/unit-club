"use client"

import FadeIn from "@/components/animations/FadeIn";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';

function IntroText() {
	const [firstIntro, setFirstIntro] = useState(true);
	const [secondIntro, setSecondIntro] = useState(false);

	useEffect(() => {
		setTimeout(function () {
			setFirstIntro(false);
		}, 3000);
		setTimeout(function () {
			setSecondIntro(true);
		}, 4000);
		setTimeout(function () {
			setSecondIntro(false);
		}, 7000);
	}, []);

	return (
		<div className="text-center flex flex-col gap-8">
			<AnimatePresence>
				{firstIntro && (
					<>
						<FadeIn>
							<h3 className="font-medium text-unit-gray-30 text-lg">WELCOME TO THE</h3>
						</FadeIn>
						<FadeIn delay={0.5}>
							<h1 className="font-bold text-9xl font-albert-sans text-unit-gray-20">UNIT CLUB</h1>
						</FadeIn>
						<FadeIn delay={1}>
							<h2 className="font-medium text-unit-gray-30 text-lg">BY UNIT NETWORK</h2>
						</FadeIn>
					</>
				)}
				{secondIntro && (
					<>
						<FadeIn>
							<h3 className="font-medium text-unit-gray-30 text-lg">WELCOME TO THE UNIT CLUB.</h3>
						</FadeIn>
						<FadeIn delay={0.5}>
							<h1 className="font-medium text-unit-gray-30 text-lg">YOUR GATEWAY TO EXCLUSIVE<br /> EXPERIENCES AND ELITE CONNECTIONS</h1>
						</FadeIn>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}

export default IntroText;