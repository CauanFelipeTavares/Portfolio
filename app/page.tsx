'use client'

import { GitBranchIcon, Linkedin, Mail, AppWindowIcon, MessageCircle, LucideMessageSquareMore } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from './_components/animated-section'
import { education, experiences, links, projects } from './_data'

export default function Home() {

  return (
    <main className='min-h-screen bg-[#0C0C24]'>

      {/* Introduction Section */}
      <AnimatedSection className='min-h-screen flex items-center justify-center px-4 relative'>
        <div className='absolute inset-0 bg-[#1F1F3F] opacity-50 pattern-grid'></div>
        <div className='max-w-4xl mx-auto text-center relative z-10'>
          <div className='flex flex-col items-center'>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='w-48 h-48 mb-8 rounded-full overflow-hidden relative border-4 border-white/10'
            >
              <Image
                src='https://github.com/CauanFelipeTavares.png'
                alt='Cauan Felipe Tavares'
                fill
                className='object-cover'
                priority
              />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className='text-5xl md:text-7xl font-bold text-white mb-6'
            >
              Cauan Felipe Tavares
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className='text-xl md:text-2xl text-gray-300 mb-8'
            >
              Full Stack Developer specializing in JavaScript technologies
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className='flex justify-center gap-4'
            >
              <Button variant='secondary' size='lg' asChild>
                <Link href={links.github} target='_blank'>
                  <GitBranchIcon className='mr-2 h-5 w-5' />
                  GitHub
                </Link>
              </Button>
              <Button variant='secondary' size='lg' asChild>
                <Link href={links.linkedIn} target='_blank'>
                  <Linkedin className='mr-2 h-5 w-5' />
                  LinkedIn
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection className='py-20 bg-[#1F1F3F]'>
        <div className='max-w-4xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-white mb-8'>About Me</h2>
          <p className='text-gray-300 text-lg leading-relaxed'>
            I am a self-taught Full Stack Developer with a strong passion for building scalable and efficient web solutions. My journey began during the pandemic, with just a computer, a strict lockdown, and a deep curiosity for development. I immersed myself in online courses, focusing on web technologies, and quickly transitioned into freelancing, where I discovered my expertise in bot development—an area I continue to explore today.
            <br /><br />
            With experience developing over 20 complete web projects, I have worked with React, ExpressJS, API development, server configuration, and database management. I am also skilled in automation, web scraping, and integrating messaging platforms like Telegram and WhatsApp.
          </p>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection className='py-20 bg-[#0C0C24]'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-white mb-12'>Featured Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className='bg-[#1F1F3F] border-none p-6 h-full transition-colors duration-200 hover:bg-[#2A2A4F]'>
                  <h3 className='text-xl font-semibold text-white mb-3'>{project.title}</h3>
                  <p className='text-gray-300 mb-4'>{project.description}</p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 bg-[#0C0C24] text-gray-300 rounded-full text-sm ${tech.url && 'cursor-pointer hover:underline'}`}
                        onClick={() => tech.url ? window.open(tech.url) : null}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  <div className='flex gap-2 mb-2'>
                    { project.github && <Button variant='outline' size='sm' asChild>
                      <Link href={project.github} target='_blank'>
                        <GitBranchIcon className='mr-2 h-4 w-4' />
                        View Code
                      </Link>
                    </Button> }
                    { project.url && <Button variant='outline' size='sm' asChild>
                      <Link href={project.url} target='_blank'>
                        <AppWindowIcon className='mr-2 h-4 w-4' />
                        View Project
                      </Link>
                    </Button> }
                  </div>
                  { project.projectPage && <Button
                      variant='link'
                      className='text-gray-300 block w-full text-right'
                    >
                      <Link
                        href={project.projectPage}
                      >
                        ...more details
                      </Link>
                    </Button> }
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection className="py-20 bg-[#1F1F3F]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-gray-600 pl-6 pb-6"
              >
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection className="py-20 bg-[#0C0C24]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1F1F3F] border-none p-6">
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection className="py-20 bg-[#1F1F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
          <p className="text-gray-300 mb-8">
            I am always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href={links.mailto}>
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href={links.whatsappContact}>
                <LucideMessageSquareMore className="mr-2 h-5 w-5" />
                Message on Whatsapp
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href={links.linkedIn}>
                <MessageCircle className='mr-2 h-5 w-5' />
                Message on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}