import React from 'react';
// import Link from 'next/link'

import Head from 'next/head'
import { motion } from 'framer-motion';
import { Box, BoxProps, } from '@chakra-ui/layout';
const MotionBox = motion<BoxProps>(Box)

const About: React.FC = () => {
	return (
		<div>
			<Head>
				<title>About</title>
				<meta name="测试Header" content="测试" />
			</Head>
			<motion.div
				style={{
					width: '200px',
					height: '200px',
					backgroundColor: 'green',
				}}
				animate={{ rotate: 360, opacity: 0 }}
			></motion.div>
			<MotionBox
				height="200px"
				width="200px"
				backgroundColor="pink"
				animation="fadeIn"
				whileHover={{
					scale: 1.1,
				}}
			/>
		</div>
	);
}

export default About;