import React from 'react';
import { Box, Heading, List, ListItem, Center, ListItemProps, Text } from '@chakra-ui/react';
import design from '../database/index';
import { motion } from 'framer-motion';
import Image from 'next/image'
import { useRouter } from 'next/router';
const MotionListItem = motion<ListItemProps>(ListItem)
interface DesignDataList {
	title: string;
	subTitle: string;
	link: string;
	image: string;
}
interface DesignData {
	title: string;
	subTitle: string;
	icon: string;
	list: DesignDataList[];
}

const Tools: React.FC = () => {
	const { query } = useRouter();
	console.log("==================>query", query?.id);
	const id: string = `data${query?.id}`;

	const listData: DesignData = design[id] as any;
	console.log("==================>listData", listData);
	return (
		<Box w={"full"} mt={"20px"} >
			<Box w="full">
				<Heading as="h3" size="lg" textAlign="center">
					{listData?.title}
				</Heading>
				<Heading as="h5" size={"15px"} textAlign="center">
					{listData?.subTitle}
				</Heading>
				<Box p={6} boxShadow={"0px 0px 10px rgba(0,0,0,0.1)"} mt={10}>
					<List>
						{listData?.list?.map((item: DesignDataList, index: number) => {
							return (
								<MotionListItem key={index} borderBottom={"1px solid #eee"} py={5}
									animate={{
										opacity: 1,
										y: 0
									}}
									initial={{
										opacity: 0,
										y: -10
									}}
									whileHover={{
										x: 20,
									}}
								>
									<Box as={"a"} href={item.link} target={"_blank"} display={"flex"} alignItems={"center"}>
										<Center px={3} py={3} bg={"gray.200"} mr={5}>
											<Image
												src={`https://undesign.learn.uno${item.image}`}
												alt='123'
												width={30}
												height={30}
											></Image>
										</Center>
										<Box>
											<Heading as="h5" size={"14px"}>
												{item.title}
											</Heading>
											<Text as={"p"} size={"5px"} color={"gray.400"}>
												{item.subTitle}
											</Text>
										</Box>
									</Box>
								</MotionListItem>
							)
						})}
					</List>
				</Box>
			</Box>
		</Box>
	);
}


export default Tools;