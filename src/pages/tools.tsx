import React from 'react';
import { Box, Heading, List, VStack, ListItem, Center } from '@chakra-ui/react';
import Image from 'next/image';
import { DesignDataList, data } from '../database/index';

const Tools: React.FC = () => {
	const str: string = "https://collectui.com"
	const respFunc = (str: string) => {
		return "<img src=" + str.replace(/^(http:\/\/[^\/]+).*$/, '$1').replace('http://', '') + ">"
	}

	console.log("==================>str", respFunc(str));
	return (
		<Box w={"full"} mt={"20px"} >
			<Box w="full">
				<Heading as="h3" size="lg" textAlign="center">
					{data.title}
				</Heading>
				<Heading as="h5" size={"15px"} textAlign="center">
					{data.subTitle}
				</Heading>
				<Box p={6} boxShadow={"0px 0px 10px rgba(0,0,0,0.1)"} mt={10}>
					<List>
						{data.list.map((item: DesignDataList, index: number) => {
							return (
								<ListItem key={index} borderBottom={"1px solid #eee"} py={5}>
									<Box as={"a"} href={item.link} target={"_blank"} display={"flex"} alignItems={"center"}>
										<Center px={2} py={2} bg={"gray.200"}>
											32
										</Center>
										<Box>
											<Heading as="h5" size={"14px"}>
												{item.title}
											</Heading>
											<Heading as={"p"} size={"12px"} color={"gray.400"}>
												{item.subTitle}
											</Heading>
										</Box>
									</Box>
								</ListItem>
							)
						})}
					</List>
				</Box>
			</Box>
		</Box>
	);
}

export default Tools;