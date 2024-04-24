import { Icon } from '@chakra-ui/react';
import { MdOutlineAccountTree, MdPerson, MdOutlineSettingsSystemDaydream, MdOutlineArrowOutward, MdHome, MdLock, MdOutlineShoppingCart } from 'react-icons/md';

// Admin Imports
import ManageUsers from 'views/admin/dataTables/tables/users';
import ManageSubscriptions from 'views/admin/dataTables/tables/subscriptions';
import ManageAuth0Integrations from 'views/admin/dataTables/tables/auth0';
import SystemLogs from 'views/admin/default';
import UserActivityLogs from 'views/admin/marketplace';
import Playground from 'views/admin/playground';
// import RTL from 'views/admin/rtl';

// Auth Imports
// import SignInCentered from 'views/auth/signIn';

const routes = [
	{
		name: 'Manage Users',
		layout: '/admin',
		path: '/manage-users',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: ManageUsers
	},
	{
		name: 'Manage Subscriptions',
		layout: '/admin',
		path: '/manage-subscriptions',
		icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
		component: ManageSubscriptions,
		secondary: true
	},
	{
		name: 'Manage Auth0 Integrations',
		layout: '/admin',
		icon: <Icon as={MdOutlineAccountTree} width='20px' height='20px' color='inherit' />,
		path: '/manage-auth0-integrations',
		component: ManageAuth0Integrations
	},
	{
		name: 'System Logs',
		layout: '/admin',
		path: '/system-logs',
		icon: <Icon as={MdOutlineSettingsSystemDaydream} width='20px' height='20px' color='inherit' />,
		component: SystemLogs
	},
	{
		name: 'User Activity Logs',
		layout: '/admin',
		path: '/user-activity-logs',
		icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
		component: UserActivityLogs
	},
	{
		name: 'Playground',
		layout: '/admin',
		path: '/playground',
		icon: <Icon as={MdOutlineArrowOutward} width='20px' height='20px' color='inherit' />,
		component: Playground
	},
	// {
	// 	name: 'Sign In',
	// 	layout: '/auth',
	// 	path: '/sign-in',
	// 	icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
	// 	component: SignInCentered
	// },
	// {
	// 	name: 'RTL Admin',
	// 	layout: '/rtl',
	// 	path: '/rtl-default',
	// 	icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
	// 	component: RTL
	// }
];

export default routes;
