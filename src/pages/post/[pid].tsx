
import React from 'react';
import { useRouter } from 'next/router'

import Head from 'next/head'


const Post: React.FC = () => {

	const router = useRouter()
	const { pid } = router.query
	console.log(pid)
	return (
		<div>
			<Head>
				<title>About</title>
				<meta name="测试Header" content="测试" />
			</Head>
			<p>{pid}</p>
			<button onClick={() => {
				router.push('/about')
			}}>About</button>
		</div>
	);
}

export default Post;