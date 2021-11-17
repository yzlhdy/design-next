import React from 'react';
import { Heading, Box, Grid, BoxProps, Center } from '@chakra-ui/react'
import { motion } from 'framer-motion';
const MotionBox = motion<BoxProps>(Box)
interface ListData {
	title: string;
	description: string;
}
const Main: React.FC = () => {

	const listData: ListData[] = [
		{
			title: 'Undesign',
			description: '123'
		},
		{
			title: 'Undesign',
			description: '123'
		}, {
			title: 'Undesign',
			description: '123'
		}, {
			title: 'Undesign',
			description: '123'
		}, {
			title: 'Undesign',
			description: '123'
		}, {
			title: 'Undesign',
			description: '123'
		}, {
			title: 'Undesign',
			description: '123'
		}
	]
	return (
		<Box py={10} >
			<Heading textAlign="center" fontSize="16">工具和资源</Heading>
			<Heading textAlign="center" fontSize="16" mt={5}>在每个类别中找到您需要的工具</Heading>
			<Box h={20}></Box>
			<Grid templateColumns={{
				md: 'repeat(3, 1fr)',
				base: 'repeat(2, 1fr)',
				xl: 'repeat(6, 1fr)'
			}} gap={6}>
				{
					listData.map((item, index) => {
						return (
							<MotionBox
								key={index}
								height="200px"
								width="200px"
								backgroundColor="pink"
								animation="fadeIn"
								whileHover={{
									y: -10,
								}}
							>
								<Center>
									{item.title}
								</Center>
							</MotionBox>
						)

					})
				}

			</Grid>
		</Box>
	);
}

export default Main;