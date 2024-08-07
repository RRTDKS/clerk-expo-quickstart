import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function AdminLayout() {
	return (
		<Tabs>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='home' size={size} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name='browse'
				options={{
					title: 'Browse Cars',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='car' size={size} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name='admin'
				options={{
					title: 'Admin',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='settings' size={size} color={color} />
					)
				}}
			/>

			<Tabs.Screen
				name='dealership'
				options={{
					title: 'Dealership',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='business' size={size} color={color} />
					)
				}}
			/>

<Tabs.Screen
				name='profile'
				options={{
					title: 'Profile',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='person' size={size} color={color} />
					)
				}}
			/>
		</Tabs>
	)
}
