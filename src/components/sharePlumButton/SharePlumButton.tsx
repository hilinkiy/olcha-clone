import './SharePlumButton.scss'
import share from '@/assets/share.jpg'

export const SharePlumButton = () => {
	return (
		<div className='plum__button'>
			<img src={share} alt="" />
			<p className='plum__descr'>
				Ознакомится
			</p>
		</div>
	)
}