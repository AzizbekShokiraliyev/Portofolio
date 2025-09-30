import {
	backend,
	creator,
	css,
	figma,
	firstTestimonial,
	gearXpert,
	git,
	html,
	javascript,
	mobile,
	mui,
	project2,
	project3,
	reactjs,
	secondTestimonial,
	tailwind,
	thirdTestimonial,
	threejs,
	web,
} from '../assets'

// Import Tekisky separately
import tekisky from '../assets/company/tekisky.png'

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
]

const services = [
	{
		title: 'Frontend Developer',
		icon: web,
	},
	{
		title: 'UI/UX Designer',
		icon: creator,
	},
	{
		title: 'React.js Developer',
		icon: mobile,
	},
	{
		title: 'Vue.js Developer',
		icon: backend,
	},
]

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},

	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'figma',
		icon: figma,
	},

	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Material Ui',
		icon: mui,
	},
	,
	{
		name: 'git',
		icon: git,
	},
]

const experiences = [
	{
		title: 'Vue.js Developer',
		company_name: 'SmartWare',
		icon: tekisky,
		iconBg: '#383E56',
		date: 'Sep 2024 - July 2025',
		points: [
			'Designed and implemented responsive front-end interfaces for high-traffic web applications using HTML, CSS, and JavaScript, ensuring seamless user experiences across devices and browsers.',
			'Collaborated with UX/UI designers and back-end engineers to translate business requirements into functional, high-performance digital products.',
			'Optimized website performance and scalability, achieving faster load times, improved SEO, and consistent compatibility across modern browsers and mobile platforms.',
			'Developed and maintained a reusable component library to enhance code efficiency and reduce future development time.',
			'Actively participated in agile development processes, including sprint planning, design discussions, and code reviews, contributing to improved code quality and team productivity.',
		],
	},
]

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.',
		name: 'MD Mustaqeem',
		designation: 'Ecommerce',
		company: 'QuickMart',
		image: firstTestimonial,
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Huzaif does.",
		name: 'Abdul Raheman',
		designation: 'Ecommerce Business',
		company: 'justbuyz',
		image: secondTestimonial,
	},
	{
		testimonial:
			"After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'James Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: thirdTestimonial,
	},
]

const projects = [
	{
		name: 'SmartWare',
		description:
			'SmartWare is a modernized web platform rebuilt from its previous version, showcasing the updated design, enhanced functionality, and improvements made to deliver a more engaging and efficient user experience.',
		tags: [
			{
				name: 'vue',
				color: 'blue-text-gradient',
			},
			{
				name: 'bootstrap',
				color: 'white-text-gradient',
			},
		],
		image: project2,
		source_code_link: 'https://github.com/Azizbek0604/SmartWareCompany',
	},
	{
		name: 'E-QUEUE',
		description:
			'E-Queue is a digital queue management system for hospitals, designed to help patients register, track, and manage their turn efficiently, reducing wait times and improving the overall patient experience.',
		tags: [
			{
				name: 'vue',
				color: 'blue-text-gradient',
			},
		],
		image: gearXpert,
		source_code_link: 'https://github.com/',
	},
	{
		name: 'BukxaraMedical',
		description:
			'Bukhara Hospital’s website provides information on all services and staff, with a simple design as requested by the hospital team, ensuring easy navigation for all hospital visitors.',
		tags: [
			{
				name: 'vue',
				color: 'blue-text-gradient',
			},
			{
				name: 'scss',
				color: 'white-text-gradient',
			},
		],
		image: project3,
		source_code_link: 'https://github.com/',
	},
]

export { experiences, projects, services, technologies, testimonials }
