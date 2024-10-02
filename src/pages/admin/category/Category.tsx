import CategoryTable from '@/components/ui/category_table/CategoryTable'
import CategoryModal from '@/components/ui/categoryModal/CategoryModal'

export default function AdminCategory() {
	return (
		<div>
			<div className='admin__header-block'>
				<h2 className='admin__nav-title'>
					Categories
				</h2>
				<CategoryModal />
			</div>
			<CategoryTable />
		</div>
	)
}