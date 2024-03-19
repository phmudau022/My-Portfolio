import Head from 'next/head';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Im Mudau Phumula - Software Developer</title>
        <meta name="description" content="Portfolio of Im Mudau Phumula - Software Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl font-bold mb-4">I'm Mudau Phumula</h1>
        <h2 className="text-lg font-semibold mb-8 text-gray-600">Software Developer</h2>

        <div className="grid grid-cols-2 gap-8">
          {/* Front-end Card */}
          <div className="bg-white shadow-md rounded-lg">
            <div className="p-8">
              <h3 className="text-lg font-semibold mb-4">Front-end</h3>
              <ul className="list-disc pl-6">
                <li className="mb-2">HTML</li>
                <li className="mb-2">CSS</li>
                <li className="mb-2">JavaScript</li>
                <li className="mb-2">React.js</li>
                <li className="mb-2">Flutter</li>
                <li>React Native</li>
              </ul>
            </div>
          </div>

          {/* Back-end Card */}
          <div className="bg-white shadow-md rounded-lg">
            <div className="p-8">
              <h3 className="text-lg font-semibold mb-4">Back-end</h3>
              <ul className="list-disc pl-6">
                <li className="mb-2">Java</li>
                <li className="mb-2">Python</li>
                <li className="mb-2">SQL</li>
                <li className="mb-2">Firebase</li>
                <li >Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center mx-auto max-w-md">
          <p className="text-lg mb-4">About Me:</p>
          <p className="text-gray-600">
            I'm a passionate software developer with a strong foundation in both front-end and back-end technologies.
            My journey in software development started with a curiosity for building interactive websites using HTML, CSS, and JavaScript.
            Over the years, I've honed my skills in frameworks like Flutter for front-end development and SQL for back-end development.
            I strive to create efficient, scalable, and user-friendly applications that leave a positive impact on users' lives.
          </p>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Project 1 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="data:image/jpeg;base64,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"  className="mb-4" />
              <p className="text-lg font-semibold mb-2">Fast Food App</p>
              <p className="text-gray-600">A mobile application for ordering fast food items online. This app provides a user-friendly interface for browsing through available food items, customizing orders, and making secure payments.</p>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnl1KrR_2wT5a-OqtPbhkKTQzeiCQxIxAgS6h41GKTUk5XKnkejkN0VwNFXQ&s"  className="mb-4" />
              <p className="text-lg font-semibold mb-2">List App</p>
              <p className="text-gray-600">A productivity application for creating and managing to-do lists. Users can add tasks, set deadlines, prioritize items, and mark tasks as completed. The app offers a clean and intuitive interface for efficient task management.</p>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8aJmF0vi0QTKCL6NTsiNozZpCLrKHaDUHEMss6jBkCZjBXn2GGZ8DxNRuA&s"  className="mb-4" />
              <p className="text-lg font-semibold mb-2">NSFAS App</p>
              <p className="text-gray-600">An educational finance application aimed at students to manage their NSFAS (National Student Financial Aid Scheme) accounts. The app allows students to track disbursements, view balances, submit required documents, and receive notifications about funding statuses.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
