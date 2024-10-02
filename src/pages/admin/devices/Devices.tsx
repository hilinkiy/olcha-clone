import Modal from '@/components/ui/modal/Modal'
import './Devices.scss'
import Tablet from '@/components/ui/table/Table'

export default function AdminDevices() {
	return (
		<div>
			<div className='admin__header-block'>
				<h2 className='admin__nav-title'>
					Devices
				</h2>
				<Modal />
			</div>
			<Tablet />
		</div>
	)
}