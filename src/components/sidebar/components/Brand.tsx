// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';
import MaurisourceLogo from 'assets/img/logo/logo_dark.png';

// Custom components
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {
	//   Chakra color mode
	// let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			<img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={MaurisourceLogo}
                  style={{ cursor: "pointer", borderRadius: "50%", margin: "10px"}}
                />
			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
