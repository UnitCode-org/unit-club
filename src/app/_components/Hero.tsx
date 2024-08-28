"use client"

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion"
import FadeIn from "@/components/animations/FadeIn";
import CustomCursor from "@/components/animations/CustomCursor";

function Hero() {
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
			<CustomCursor opacityDelay={1} opacityDuration={0.5}>
				<div className="fixed -top-8 -left-14">
					<p className="font-medium text-unit-gray-20 text-nowrap">CLICK TO ENTER</p>
					<div className="bg-unit-gray-50 rounded-full p-1.5 h-fit w-fit opacity-50 mx-auto mt-3.5">
						<div className="bg-unit-gray-20 rounded-full p-2.5 h-fit w-fit">
						</div>
					</div>
				</div>
			</CustomCursor>
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

export default Hero;