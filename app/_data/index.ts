interface IProjects {
    title: string
    description: string
    tech: string[]
    github?: string
    url?: string
    projectPage?: string
}

export const projects: IProjects[] = [
    {
        title: "Real-time Chat Application",
        description: "Built a scalable chat application using Socket.io, React, and Node.js with real-time message delivery and typing indicators.",
        tech: ["React", "Node.js", "Socket.io", "Express"],
        // github: "https://github.com/cauanft",
    },
    {
        title: "E-commerce Platform",
        description: "Developed a full-featured e-commerce platform with Next.js, featuring cart management, user authentication, and payment integration.",
        tech: ["Next.js", "Prisma", "Stripe", "TypeScript"],
        github: "https://github.com/cauanft",
        url: "https://github.com/cauanft",
        projectPage: '/project/ecommerce'
    },
    {
        title: "Task Management System",
        description: "Created a collaborative task management system with real-time updates and team features.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/cauanft",
    },
]

export const experiences = [
    {
        role: "Senior Full Stack Developer",
        company: "TechCorp Solutions",
        period: "2021 - Present",
        description: "Lead developer for multiple high-impact projects, mentoring junior developers and implementing best practices.",
    },
    {
        role: "Full Stack Developer",
        company: "Digital Innovations",
        period: "2019 - 2021",
        description: "Developed and maintained various web applications using React, Node.js, and related technologies.",
    },
    {
        role: "Frontend Developer",
        company: "WebTech Studios",
        period: "2018 - 2019",
        description: "Focused on creating responsive and accessible web interfaces using modern JavaScript frameworks.",
    },
]
  
export const education = [
    {
        degree: "Bachelor's in Computer Science",
        institution: "Federal University of Technology",
        period: "2015 - 2019",
    },
    {
        degree: "Full Stack Web Development",
        institution: "Tech Bootcamp",
        period: "2018",
    },
]

export const links = {
    linkedIn: 'https://www.linkedin.com/in/cauantavares/',
    github: 'https://github.com/CauanFelipeTavares',
}