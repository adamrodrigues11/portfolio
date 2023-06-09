const projects = [
    {
        id: "0",
        slug: "music-festival",
        title: "Hello World Music Festival",
        category: "Academic Project",
        description: "A mock music festival website and ticket management system.",
        thumbnail: {
            path: "/images/projects/internal-project.jpg",
            alt: "A screenshot of the Hello World Music Festival website homepage."
        },
        image: {
            path: "/images/projects/internal-project-erd.png",
            alt: "ERD for the application database."
        },
        technologies: [
            "C#",
            "ASP.NET",
            "MS SQL",
            "Bootstrap",
            "Azure"
        ],
        links: {
            github: "https://github.com/CAddison4/Festival-App",
            demo: "https://internalproject.azurewebsites.net/"
        },
        demoLogin: {
            email: "admin@home.com",
            password: "P@ssw0rd!"
        }
    },
    {
        id: "1",
        slug: "agilitek-solutions",
        title: "Agilitek Solutions",
        category: "Industry Project",
        description: "A data explorer and tool for analyzing correlations in a large customer dataset.",
        thumbnail: {
            path: "/images/projects/industry-project.jpg",
            alt: "A screenshot of the Agilitek Solutions application segment details page."
        },
        image: {
            path: "/images/projects/industry-project-architecture.png",
            alt: "Cloud architecture diagram for the application."
        },
        technologies: [
            "React.js",
            "Node.js",
            "AWS",
            "PostgreSQL",
            "Tailwind CSS",
            "SST"
        ],
        links: {
            demo: "https://d3j8hsov25hvsw.cloudfront.net/"
        },
        demoLogin: {
            email: "agilitek",
            password: "Agilitek2023!"
        }
    }
]

export default projects;