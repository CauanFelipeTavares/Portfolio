interface IProjects {
    title: string
    description: string
    tech: {
        name: string
        url: string
    }[]
    github?: string
    url?: string
    projectPage?: string
}

export const projects: IProjects[] = [
    {
        title: 'CV Creator',
        description: 'Developed a platform using Next.js with features for creating personalized CVs, allowing users to add elements and structure their resumes dynamically.',
        tech: [
            { name: 'Next.js', url: 'https://nextjs.org/' },
            { name: 'Prisma', url: 'https://www.prisma.io/' },
            { name: 'Tailwind', url: 'https://tailwindcss.com/' },
            { name: 'Shadcn/ui', url: 'https://ui.shadcn.com/' },
        ],
        github: 'https://github.com/CauanFelipeTavares/CV-Creator',
    },
    {
        title: 'Smart Contract',
        description: 'Built a full-stack platform for creating and authenticating digital contracts, enhancing contract structuring with AI.',
        tech: [
            { name: 'React (CRA)', url: 'https://create-react-app.dev/' },
            { name: 'ExpressJS', url: 'https://expressjs.com/' },
            { name: 'Gateway (Asaas)', url: 'https://www.asaas.com/' },
            { name: 'OpenAI API', url: 'https://openai.com/' },
        ],
        url: 'http://smartcontract.codesotech.com.br/',
    },
    {
        title: 'Codeso Tech',
        description: 'Built a SaaS platform for creating and managing Telegram message bots, allowing users to configure messages and settings.',
        tech: [
            { name: 'Node.js', url: 'https://nodejs.org/en' },
            { name: 'MongoDB', url: 'https://www.mongodb.com/' },
            { name: 'PM2', url: 'https://pm2.keymetrics.io/' },
            { name: 'Socket.io', url: 'https://socket.io/' },
        ],
        url: 'https://codesotech.com.br/',
    },
]

export const experiences = [
    {
        role: 'Principal Full Stack Developer',
        company: 'Codeso Tech',
        period: '2022 - Present',
        description: 'As a Full-Stack Developer and founder of Codeso Tech, I have developed and implemented complete technological solutions for various projects, including automation and web platforms.',
    },
    {
        role: 'Bot Developer',
        company: 'Codeso Tech',
        period: '2021 - 2022',
        description: 'Specialized in developing intelligent bots for process automation and data extraction, focusing on efficiency and system integration.',
    },
]
  
export const education = [
    {
        degree: 'Technologist, Systems Analysis and Development',
        institution: 'Fatec Rio Preto',
        period: '2022 - 2024',
    },
    {
        degree: 'Technical Course Integrated into High School, Electronics Technician',
        institution: 'Etec Philadelpho Gouvêa Netto',
        period: '2019 - 2021',
    },
]

export const links = {
    linkedIn: 'https://www.linkedin.com/in/cauantavares',
    github: 'https://github.com/CauanFelipeTavares',
    whatsappContact: 'https://api.whatsapp.com/send/?phone=5517992318569&text&type=phone_number&app_absent=0',
    mailto: 'mailto:tavarescauanf@gmail.com'
}