import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './Swiper.scss'

import { Navigation, Pagination } from 'swiper/modules'

export function Sliper() {
	return (
		<>
			<div className='container swiper__content'>
				<Swiper navigation={true} modules={[Navigation]} className="swiper">
					<SwiperSlide className='swiper__slide'>Slide 1</SwiperSlide>
					<SwiperSlide className='swiper__slide'>Slide 2</SwiperSlide>
					<SwiperSlide className='swiper__slide'>Slide 3</SwiperSlide>
					<SwiperSlide className='swiper__slide'>Slide 4</SwiperSlide>
					<SwiperSlide className='swiper__slide'>Slide 5</SwiperSlide>
					<SwiperSlide className='swiper__slide'>Slide 6</SwiperSlide>
					<SwiperSlide className='swiper__slide'>Slide 7</SwiperSlide>
					<SwiperSlide className='swiper__slide'>Slide 8</SwiperSlide>
					<SwiperSlide className='swiper__slide'>Slide 9</SwiperSlide>
				</Swiper>
				<Swiper pagination={{
					clickable: true,
				}} modules={[Pagination]} className="swiper">
					<SwiperSlide className='swiper__slide'>Slide 1</SwiperSlide>
					<SwiperSlide className='swiper__slide'>Slide 2</SwiperSlide>
					<SwiperSlide className='swiper__slide'>Slide 3</SwiperSlide>
					<SwiperSlide className='swiper__slide'>Slide 4</SwiperSlide>
					<SwiperSlide className='swiper__slide'>Slide 5</SwiperSlide>
					<SwiperSlide className='swiper__slide'>Slide 6</SwiperSlide>
					<SwiperSlide className='swiper__slide'>Slide 7</SwiperSlide>
					<SwiperSlide className='swiper__slide'>Slide 8</SwiperSlide>
					<SwiperSlide className='swiper__slide'>Slide 9</SwiperSlide>
				</Swiper>
			</div >
		</>
	)
}
