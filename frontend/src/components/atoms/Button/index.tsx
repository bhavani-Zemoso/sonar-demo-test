import { Button, Stack } from '@mui/material';
import React from 'react';

const ButtonComponent = () => {
	return (
		<Stack spacing={2} direction='row'>
			<Button variant='text'>Text</Button>
			<Button variant='contained'>Contained</Button>
			<Button variant='outlined'>Outlined</Button>
		</Stack>
	);
};

export default ButtonComponent;
