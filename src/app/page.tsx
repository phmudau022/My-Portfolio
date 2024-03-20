import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { LanguageItem, Project } from '@/components';
import Head from 'next/head';
import { nsfasPic, fastFoodPic, listPic, jsIcon, htmlIcon, cssIcon, reactIcon, flutterIcon, exIcon, javaIcon, nodeIcon, pyIcon, sqlIcon, fireIcon, typeIcon } from '@/assets';
import { LanguageType, ProjectType } from '@/schema';

const Home = () => {

  const projects: ProjectType[] = [
    {
      id: "14964325-53b2-5700-b1e1-395969abf8b4",
      title: "Fast Food App",
      desc: "A mobile app for ordering fast food from various restaurants. It lets users browse menus, customize orders, and track deliveries, offering convenience and skipping lines.",
      image: fastFoodPic
    },
    {
      id: "81e2f203-aea6-5be3-aae5-eddec74935ee",
      title: "List App",
      desc: "A digital tool for organizing tasks, goals, and activities. Users can create, prioritize, and categorize lists, set reminders, and collaborate with others.",
      image: listPic
    },
    {
      id: "c3f90d22-398a-5621-ad8f-b908be4dd55c",
      title: "Nsfas App",
      desc: "An app for managing student financial aid in South Africa. It allows students to check funding status, apply for aid, submit documents, and communicate with NSFAS.",
      image: nsfasPic
    },
  ]

  const languages: LanguageType[] = [
    {
      id: "",
      title: "JavaScript",
      image: jsIcon
    },
    {
      id: "",
      title: "Html",
      image: htmlIcon
    },
    {
      id: "",
      title: "Css",
      image: cssIcon
    },
    {
      id: "",
      title: "React.js",
      image: reactIcon
    },
    {
      id: "",
      title: "Flutter",
      image: flutterIcon
    },
    {
      id: "",
      title: "TypeScript",
      image: typeIcon
    },
    {
      id: "",
      title: "React Native",
      image: reactIcon
    },
  ]
  const language: LanguageType[] = [

    {
      id: "",
      title: "Java",
      image: javaIcon
    },
    {
      id: "",
      title: "Python",
      image: pyIcon
    },
    {
      id: "",
      title: "Sql",
      image: sqlIcon
    },
    {
      id: "",
      title: "Firebase",
      image: fireIcon
    },
    {
      id: "",
      title: "Node.js",
      image: nodeIcon
    },
    {
      id: "",
      title: "express.js",
      image: exIcon
    },
  ]

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Im Mudau Phumula - Software Developer</title>
        <meta name="description" content="Portfolio of Im Mudau Phumula - Software Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl font-bold mb-4 text-center">I'm Mudau Phumula</h1>
        <h2 className="text-lg font-semibold mb-8 text-gray-600 text-center">Software Developer</h2>

        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-x-8 justify-center w-full px-4 md:px-8">
          {/* Front-end Card */}
          <div className="bg-white shadow-md rounded-lg mb-8 w-full sm:w-96">
            <div className="p-8 w-full">
              <h3 className="text-lg font-semibold mb-4">Front-end</h3>
              <ul className=" pl-0 list-none flex flex-col gap-y-2">
                {
                  languages.map((item) => (
                    <li className='w-full h-max '>
                      <LanguageItem
                        image={item.image}
                        title={item.title}
                        key={item.id}
                      />
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          {/* Back-end Card */}
          <div className="bg-white shadow-md rounded-lg mb-8 w-full sm:w-96">
            <div className="p-8">
              <h3 className="text-lg font-semibold mb-4">Back-end</h3>
              <ul className=" pl-0 list-none flex flex-col gap-y-2">
                {
                  language.map((item) => (
                    <li className='w-full h-max '>
                      <LanguageItem
                        image={item.image}
                        title={item.title}
                        key={item.id}
                      />
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center mx-auto max-w-md px-4">
          <p className="text-lg mb-4">About Me:</p>
          <p className="text-gray-600 justify-center">
            I'm a passionate software developer with a strong foundation in both front-end and back-end technologies.
            My journey in software development started with a curiosity for building interactive websites using HTML, CSS, and JavaScript.
            Over the years, I've honed my skills in frameworks like Flutter for front-end development and SQL for back-end development.
            I strive to create efficient, scalable, and user-friendly applications that leave a positive impact on users' lives.
          </p>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="flex flex-col md:flex-row flex-wrap gap-x-8 gap-y-4 px-4 gap-y-8">
            {
              projects.map((project) => (
                <Project
                  image={project.image}
                  title={project.title}
                  desc={project.desc}
                  key={project.id}
                />
              ))
            }
          </div>
        </div>

        {/* Follow Me section */}
        <div className="flex gap-4 mt-8 items-center">
          <p className='flex-1 text-lg font-semibold text-gray-700'>Follow Me ------ </p>
          <a href="https://www.linkedin.com/in/phumula-mudau-29a4aa242/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-500 text-4xl hover:text-blue-700 cursor-pointer" />
          </a>
          <a href="https://github.com/phmudau022" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 text-4xl hover:text-gray-600 cursor-pointer" />
          </a>
          <a href="https://aiapply.co/r/65fb25894d6c8" download="your-resume.pdf" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Download Resume
          </a>
        </div>

      </div>
    </div>
  );
};

export default Home
