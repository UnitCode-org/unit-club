"use client"

import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion"
import FadeIn from "@/components/animations/FadeIn";

function Hero() {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div className="text-center flex flex-col gap-8" onClick={() => setIsVisible(!isVisible)}>
			<AnimatePresence>
				{!isVisible && (
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
			</AnimatePresence>
		</div>
	);
}

export default Hero;