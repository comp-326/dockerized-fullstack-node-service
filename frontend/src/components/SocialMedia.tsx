/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { Stack } from '@mui/material';
import { Facebook, LinkedIn, Twitter, YouTube } from '@mui/icons-material';

const SocialMedia = () => {
	return (
		<div>
			<h1>Some social media follow up</h1>
			<Stack
				direction={'row'}
				sx={{ justifyContent: 'center', cursor: 'pointer' }}
			>
				<Facebook fontSize="large" sx={{ color: 'blue', cursor: 'pointer' }} />
				<Twitter fontSize="large" sx={{ color: 'blue', cursor: 'pointer' }} />
				<LinkedIn fontSize="large" sx={{ color: 'blue', cursor: 'pointer' }} />
				<YouTube fontSize="large" sx={{ color: 'red', cursor: 'pointer' }} />
			</Stack>
		</div>
	);
};

export default SocialMedia;
