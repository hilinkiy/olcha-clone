import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
const lng = localStorage.getItem('lng')
const defaultLng = JSON.parse(lng)

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: {
				catalog: 'Catalogue',
				searchCatalog: 'Search from catalogue',
				comparing: 'Comparing',
				basket: 'Cart',
				login: 'Login',
				plan: '0% installment plan',
				sales: 'Sales',
				draws: 'Draws',
				sell: 'Sell in olcha',
				laptop: 'Laptops',
				headphone: 'Headphones',
				phone: 'Phones',
				monitor: 'Monitors',
				tv: 'Tv',
				all: 'All',
				month: 'month',
				inInstallments: 'In installments',
				deliveryInformation: 'Information about delivery',
				delivery: "Standard Delivery",
				deliveryTime: "Delivery from 2 hours to 2 working days based on the delivery address",
				addToCart: 'Add to cart',
				emptyCart: 'Cart is empty',
				ovrPrice: "Overall price",
				order: "Make order",
			}
		},
		ru: {
			translation: {
				catalog: 'Каталог',
				searchCatalog: 'Поиск по каталогу',
				comparing: 'Сравнение',
				basket: 'Корзина',
				login: 'Войти',
				plan: '0% рассрочка',
				sales: 'Скидки',
				draws: 'Розыгрыши',
				sell: 'Продавайте на olcha',
				laptop: 'Ноутбуки',
				headphone: 'Наушники',
				phone: 'Телефоны',
				monitor: 'Мониторы',
				tv: 'Телевизоры',
				all: 'Все',
				month: 'в месяц',
				inInstallments: 'В рассрочку',
				deliveryInformation: 'Информация о доставке',
				delivery: "Стандартная доставка",
				deliveryTime: "Доставка от 2 часов до 2 рабочих дней исходя от адреса доставки",
				addToCart: 'Добавить в корзину',
				emptyCart: 'Корзина пуста',
				ovrPrice: "Общая стоимость",
				order: "Оформить заказ",
			}
		},
		uz: {
			translation: {
				catalog: 'Katalog',
				searchCatalog: 'Katalogan qidirish',
				comparing: 'Taqqoslash',
				basket: 'Savat',
				login: 'Kirish',
				plan: "0% to'lov rejasi",
				sales: 'Chegirmalar',
				draws: "O'yinlar",
				sell: 'Olchada soting',
				laptop: 'Noutbuklar',
				headphone: 'Quloqchinlar',
				phone: 'Telefonlar',
				monitor: 'Monitorlar',
				tv: 'Televizorlar',
				all: 'Hammasi',
				month: 'oyiga',
				inInstallments: "Bo'lib-bo'lib to'lash",
				deliveryInformation: "Yetkazib berish haqida ma'lumot",
				delivery: "Standart yetkazib berish",
				deliveryTime: "Yetkazib berish manzili bo'yicha 2 soatdan 2 ish kuniga qadar",
				addToCart: "Savatga qo'shish",
				emptyCart: "Savat bo'sh",
				ovrPrice: "Umumiy narxi",
				order: "Buyurtma berish",
			}
		}
	},
	lng: defaultLng
})

export default i18n