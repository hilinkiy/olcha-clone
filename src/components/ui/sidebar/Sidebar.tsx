import { Layout } from 'antd'
import { ChartBarStacked, Cherry, LayoutDashboard, MonitorSmartphone } from 'lucide-react'
import { useLocation, Link } from 'react-router-dom'
import './Sidebar.scss'

const { Sider } = Layout

export function Sidebar() {
	const location = useLocation()
	const links = [
		{
			icon: LayoutDashboard,
			title: 'Dashboard',
			link: '/admin'
		},
		{
			icon: MonitorSmartphone,
			title: 'Devices',
			link: '/admin/devices'
		},
		{
			icon: ChartBarStacked,
			title: 'Category',
			link: '/admin/category'
		},
	]

	return (
		< Sider trigger={null} className='aside' >
			<h1 className='admin__logo'>
				<Cherry width={40} height={40} />
				olcha
			</h1>
			<ul
				className='aside__menu'
			>
				{links.map((link, index) => (
					<Link to={link.link} key={index} className={`aside__link ${location.pathname === link.link ? 'active' : ''}`}>
						<link.icon />
						{link.title}
					</Link>
				))}
			</ul>
		</Sider >
	)
}