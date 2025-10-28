export interface Post {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	content: string;
	image: string;
	episode: string;
	time: string;
	author: string;
	alt: string;
}

export const posts: Post[] = [
	{
		slug: 'morning-news',
		author: 'Michael David',
		title: 'Morning News',
		date: '30 Nov 2021',
		time: '45 Minutes',
		episode: '12',
		excerpt:
			'Important policy changes from the Chief Medical Director’s office regarding patient care protocols and staff guidelines.',
		content:
			'Important policy changes from the Chief Medical Director’s office regarding patient care protocols and staff guidelines. This update includes new procedures for patient admission, updated guidelines for staff conduct, and changes to the electronic health records system. All staff are required to review these changes immediately.',
		image:
			'https://thumbs.dreamstime.com/b/office-work-place-7165793.jpg',
		alt: 'CMD Office'
	},
	{
		slug: 'newspaper-review',
		author: 'Mitchelle Armstrong',
		title: 'Newspaper Review',
		date: '30 Nov 2021',
		time: '45 Minutes',
		episode: '12',
		excerpt:
			'Details on the launch of our new Electronic Health Records (EHR) system, aimed at improving patient data management.',
		content:
			'Details on the launch of our new Electronic Health Records (EHR) system, aimed at improving patient data management. The new system will go live on December 15th. Training sessions are available for all staff members. Please contact the ICT department to schedule your training.',
		image:
			'https://images.pexels.com/photos/1181358/pexels-photo-1181358.jpeg?auto=compress&cs=tinysrgb&w=800',
		alt: 'Health Records'
	},
	{
		slug: "let's talk etiquette",
		author: 'Emmanuel David',
		title: "Let's Talk Etiquette",
		date: '01 Dec 2021',
		time: '45 Minutes',
		episode: '12',
		excerpt:
			'Scheduled maintenance of hospital information systems. Electronic health records will be temporarily unavailable.',
		content:
			'Scheduled maintenance of hospital information systems. Electronic health records will be temporarily unavailable from 10 PM on Friday, December 3rd, to 6 AM on Saturday, December 4th. We apologize for any inconvenience this may cause.',
		image:
			'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
		alt: 'ICT Maintenance'
	},
	{
		slug: 'ict-system-maintenance-notice-duplicate',
		author: 'James David',
		title: 'ICT: System Maintenance Notice',
		date: '01 Dec 2021',
		time: '45 Minutes',
		episode: '12',
		excerpt:
			'Scheduled maintenance of hospital information systems. Electronic health records will be temporarily unavailable.',
		content:
			'Scheduled maintenance of hospital information systems. Electronic health records will be temporarily unavailable from 10 PM on Friday, December 3rd, to 6 AM on Saturday, December 4th. We apologize for any inconvenience this may cause.',
		image:
			'https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000',
		alt: 'ICT Maintenance'
	},
	{
		slug: 'hr-staff-training-program',
		author: 'Bernard David',
		title: 'HR: Staff Training Program',
		date: '04 Dec 2021',
		time: '45 Minutes',
		episode: '12',
		excerpt:
			'Mandatory training sessions for all clinical and non-clinical staff. Registration deadline and schedule details inside.',
		content:
			'Mandatory training sessions for all clinical and non-clinical staff. Registration deadline and schedule details inside. Please register by December 10th to secure your spot. The training will cover new safety protocols and patient communication strategies.',
		image:
			'https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=800',
		alt: 'HR Training'
	},
	{
		slug: 'hr-staff-training-program-duplicate',
		author: 'Silicone David',
		title: 'HR: Staff Training Program',
		date: '04 Dec 2021',
		time: '45 Minutes',
		episode: '12',
		excerpt:
			'Mandatory training sessions for all clinical and non-clinical staff. Registration deadline and schedule details inside.',
		content:
			'Mandatory training sessions for all clinical and non-clinical staff. Registration deadline and schedule details inside. Please register by December 10th to secure your spot. The training will cover new safety protocols and patient communication strategies.',
		image:
			'https://t3.ftcdn.net/jpg/02/94/69/20/360_F_294692075_lHznNpWRsFYNvyjCt5QNElzU8vddCOao.jpg',
		alt: 'HR Training'
	}
];