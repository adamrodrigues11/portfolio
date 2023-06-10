import Project from '../components/Project'

export default function Projects() {
    return(
        <section id="projects" className="pt-24">
            <h2 className="text-3xl font-bold">Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-auto-fit-350 justify-items-center gap-8">
                <Project
                    title='Hello World Music Festival'
                    category='BCIT Internal Project'
                    thumbnail='/images/projects/internal-project.jpg'
                    technologies={['C#', 'ASP.NET', 'MS SQL', 'Entity Framework', 'Razor Pages', 'Bootstrap', 'Azure']}
                    github='https://github.com/CAddison4/Festival-App'
                    demo='https://internalproject.azurewebsites.net/'
                    description={
                        <p className='text-sm sm:text-base'>I worked as the database lead in a team of four developers to build a fully-functional website and ticket management system for a mock music festival. My main responsibilities included devising a normalized database schema for the application, and implementing the database using MS SQL and Entity Framework. I also contributed to the development of the UI using Razor Pages and Bootstrap, and deployed the database and application to Azure.</p>
                    }
                />
                <Project
                    title='Agilitek Solutions'
                    category='Industry Project'
                    thumbnail='/images/projects/industry-project.jpg'
                    technologies={['React.js', 'Node.js', 'AWS', 'PostgreSQL', 'Tailwind CSS', 'SST']}
                    demo='https://d3j8hsov25hvsw.cloudfront.net/'
                    description={
                        <p className='text-sm sm:text-base'>I worked on a project for a <a href='https://agiliteksolutions.com/' target='_blank' rel='noreferrer'>Agilitek Solutions</a> to build a data explorer and tool for analyzing correlations in an anonymized customer dataset with 100,000’s of transaction records. The application allows an analyst to group customers into custom segments based on their demographics or transaction records in order to generate targeted comparisons and marketing insights. My main responsibilities included leading the design and implementation of the segment details page (both the UI and associated API endpoints), and contributing to the design of the overall application architecture.</p>
                    }
                />
            </div>
      </section>
    )
}