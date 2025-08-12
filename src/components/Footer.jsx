import { FaInstagram, FaLinkedin, FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className='w-full py-4 bg-black-100/55 text-white flex justify-center gap-6'>
			<a
				href='https://www.instagram.com/_shokiraliyev_/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaInstagram size={24} />
			</a>
			<a
				href='https://t.me/A_Shokiraliyev'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaTelegramPlane size={24} />
			</a>
			<a
				href='https://www.linkedin.com/in/azizbek-shokiraliyev-88b6432b4/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaLinkedin size={24} />
			</a>
		</footer>
	)
}

export default Footer
