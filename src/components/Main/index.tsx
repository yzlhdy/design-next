import React from 'react';
import { Heading, Box, Grid, BoxProps, Center, Text, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import NextLink from 'next/link'
const MotionBox = motion<BoxProps>(Box)
interface ListData {
	icon: string;
	name: string;
}
const Main: React.FC = () => {
	const { colorMode } = useColorMode()
	console.log("==================>theme", colorMode);

	const listData: ListData[] = [
		{
			"icon": "💡",
			"name": "Inspiration"
		},
		{
			"icon": "🎨",
			"name": "Colors"
		},
		{
			"icon": "🌈",
			"name": "Gradients"
		},
		{
			"icon": "🔤",
			"name": "Typography"
		},
		{
			"icon": "🏷️",
			"name": "Logos"
		},
		{
			"icon": "🎭",
			"name": "Templates"
		},
		{
			"icon": "💼",
			"name": "Templates for Powerpoint"
		},
		{
			"icon": "📋",
			"name": "Code snippets"
		},
		{
			"icon": "⚗️",
			"name": "Generators"
		},
		{
			"icon": "💠",
			"name": "Icons"
		},
		{
			"icon": "💠❤️",
			"name": "Open Source Icons"
		},
		{
			"icon": "⚡",
			"name": "Animations"
		},
		{
			"icon": "️🖼️",
			"name": "Illustrations"
		},
		{
			"icon": "️👻",
			"name": "404 Illustrations"
		},
		{
			"icon": "️🧊",
			"name": "3D Illustrations"
		},
		{
			"icon": "🌄",
			"name": "Backgrounds"
		},
		{
			"icon": "📏",
			"name": "Upscalers"
		},
		{
			"icon": "✂️",
			"name": "Remove Background"
		},
		{
			"icon": "⚜️",
			"name": "Patterns"
		},
		{
			"icon": "📷",
			"name": "Photos"
		},
		{
			"icon": "🎞️",
			"name": "Videos"
		},
		{
			"icon": "🎵",
			"name": "Audios"
		},
		{
			"icon": "✒️",
			"name": "Mockups"
		},
		{
			"icon": "📐",
			"name": "Design patterns"
		},
		{
			"icon": "📱",
			"name": "Prototyping"
		},
		{
			"icon": "🤷",
			"name": "Design Research"
		},
		{
			"icon": "✍️",
			"name": "Copywriting"
		},
		{
			"icon": "🦾",
			"name": "No-code Website builder"
		},
		{
			"icon": "🚀",
			"name": "No-code Automations"
		},
		{
			"icon": "🤖",
			"name": "Artificial Intelligence"
		},
		{
			"icon": "✅",
			"name": "Checklists"
		},
		{
			"icon": "♿",
			"name": "Accessibility"
		},
		{
			"icon": "🗂️",
			"name": "Styleguides"
		},
		{
			"icon": "🎮",
			"name": "Game design"
		},
		{
			"icon": "😷",
			"name": "COVID-19"
		},
		{
			"icon": "📈",
			"name": "Trends"
		},
		{
			"icon": "⚙️",
			"name": "API"
		},
		{
			"icon": "☁️",
			"name": "Serverless"
		},
		{
			"icon": "👨‍💻",
			"name": "Monitoring"
		},
		{
			"icon": "🔨",
			"name": "Tools"
		},
		{
			"icon": "⌚",
			"name": "Productivity"
		},
		{
			"icon": "📦",
			"name": "Productivity System"
		},
		{
			"icon": "🌐",
			"name": "Browser extensions"
		},
		{
			"icon": "🧠",
			"name": "Focus"
		},
		{
			"icon": "📖",
			"name": "Learning"
		},
		{
			"icon": "🔄",
			"name": "Mental models"
		},
		{
			"icon": "📚",
			"name": "Books"
		},
		{
			"icon": "💪",
			"name": "Skills list"
		},
		{
			"icon": "👛",
			"name": "Coupons"
		},
		{
			"icon": "📑",
			"name": "Curated lists"
		},
	]
	return (
		<Box py={10} >
			<Heading textAlign="center" fontSize="16">工具和资源</Heading>
			<Heading textAlign="center" fontSize="16" mt={5}>在每个类别中找到您需要的工具</Heading>
			<Box h={20}></Box>
			<Grid templateColumns={{
				md: 'repeat(3, 1fr)',
				base: 'repeat(1, 1fr)',
				xl: 'repeat(6, 1fr)'


			}} gap={[1, 3, 4, 7]}>
				{
					listData.map((item, index) => {
						return (
							<MotionBox
								key={index}
								height={180}
								bg="block"
								cursor={'pointer'}
								animation="fadeIn"
								borderRadius={10}
								boxShadow={"0px 0px 10px rgba(0,0,0,0.1)"}
								backgroundColor={colorMode === "light" ? "#fff" : "#000"}
								whileHover={{
									y: -11,
								}}
							>
								<NextLink href={`/tools?id=${index}`}>
									<Center height={'100%'} >
										<Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
											<Text >{item.icon}</Text>
											<Text textAlign={"center"} mt={3} >{item.name}</Text>
										</Box>
									</Center>
								</NextLink>

							</MotionBox>
						)

					})
				}

			</Grid>
		</Box>
	);
}

export default Main;