interface DisplayData {
  [key: string]: {
    title: string;
    paragraphs: string[];
  };
}

const display: DisplayData = {
  default: {
    title: 'Get Started',
    paragraphs: [
      '',
      'Use the career, personal, and hobbies icons to navigate through different sections.',
      'Then, open up folders to view the text files within. Click any text file to read the contents in this display window.',
      '',
      'Alternatively, if you prefer navigating with a Unix shell you can use the cd command in the terminal below to navigate.'
    ]
  },
  statistics: {
    title: 'Freelance Stats',
    paragraphs: [
      'I have been freelancing part-time since the beginning of 2023. In that time I have worked on a wide variety of projects for clients, from full stack web applications, to cloud software, and APIs.',
      'I have developed: APIs that have served millions of users, software that can upscale and optimize thousands of images per hour, and React front-ends with perfect Lighthouse scores.',
      'I have maintained: A 5-star rating on Upwork.com (where I do some of my freelancing), long-lasting and positive client relations, and repeat customers.'
    ]
  },
  software: {
    title: 'Production Software',
    paragraphs: [
      "USDA Grow Zone: This is an API that I developed to translate the users's IP address to their respective USDA grow zone for a client's nursery site. This API was developed on a Node.js server that used a combination of worker threads and instance scaling to handle large amounts of traffic and request concurrency. This software automatically let users know if the product they were viewing was compatible with their zone. The application had a fallback state that allowed users to find their own USDA grow zone if it encountered any issues (VPNs, application errors, etc.). This software handled tens of thousands of requests per day and never encountered any errors due to major testing before production and the simplicity of the pipeline.",
      "Image UPOP: This is Node.js software that leverages AI image upscaling, image compression (optimized for web), file conversion to .webp, and an optional image resizing method to produce all images in the same size. This software was used to solve a client's issue with product photos and UPOP'd (Upscaled & Optimized) over 1,500 images resulting in many images having a resolution increase, graininess and bluriness removed, and resulting file sizes decreased by an average of 50%. Overall this software improved the quality of all product photos, reduced their file sizes, and produced all images in a universal aspect ratio.",
      "Chatbot Server: This is an API that handles varying types of chatbots via preset configurations and leverages OpenAI's GPT-3.5 model. It has three main configurations: SupportBot, FriendlyBot, and RandoBot. SupportBot acts as a support bot and can be provided company and product information to respond to informational requests instantaneously. FriendlyBot can be themed (for example, like a cat or dog) and responds to general conversation. RandoBot is used to generate random information given a theme."
    ]
  },
  github: {
    title: 'GitHub Contributions',
    paragraphs: [
      '',
      'OpenAI: Resolved a TypeScript bug in the OpenAI Node.js library related to the instantiation method for new client configuration. Added a default parameter of "new Configuration()" to prevent fallback cases that methods did not exist on. This also led to the removal of dozen of conditional checks which overall improved performance. The library authors were working on a v4 version for months and when they released version 4, I received thanks for my "thoughtful and thorough" fix, and the issue was fixed by them in version 4. I also responded to several issues in cases where the issue was not related to library issues or there were known workarounds.',
      'Others: '
    ]
  },
  'chakra-ui': {
    title: 'Chakra UI V3',
    paragraphs: [
      'At the time of writing this, I have not yet heard a response to my request to help with Chakra UI version 3. As an avid user and fan of Chakra UI I am hopeful that I will hear back and be able to start contributing soon!',
      'I have been using Chakra UI for almost a year and have fallen in love with the configuration and simplicity of creating custom components. Since it was developed specifically for React it comes with many base components and states that make it very quick and easy to create attractive front-ends.'
    ]
  },
  'early-life': {
    title: 'Early Life',
    paragraphs: [
      '~~ a kid and the internet ~~',
      'In rural Kansas, young C.J. lived a simple life until his stepfather, a master electrician, installed a receiving tower on their property. A short time later, he also purchased a rare RGB lit family desktop, a treasure from eBay.',
      "With the computer came the gateway to the internet, and C.J. was captivated. Online, he discovered RuneScape, an enchanting world of quests and treasures. But C.J.'s curiosity led him deeper, uncovering secrets of altering the game's code.",
      'Late nights were spent attempting to bend the rules, but the servers always held firm. Undeterred, C.J. shifted his focus to creating custom RuneScape servers. His tireless efforts nurtured a passion for software engineering.',
      "Years later, C.J. rediscoverd his passion to become a successful software engineer, shaping the digital realm. His journey from rural Kansas, ignited by a his stepfather's efforts, showcased the power of curiosity and determination in shaping one's destiny."
    ]
  },
  'adult-life': {
    title: 'Adult Life',
    paragraphs: [
      '',
      'My name is C.J., and my journey has been a winding road of determination and passion. When I was just 18, I lost my father. His passing shook the foundation of my world, and college, at the time, felt like an unattainable dream. Life had thrown me a curveball, and I needed to figure out how to navigate it on my own.',
      'Fast forward to age 29. I had spent a decade chasing my dreams relentlessly. I returned to education, completing a full-stack web development boot camp. It was intense, challenging, and exactly what I needed to reignite my passion for coding. With every line of code I wrote, I felt like I was one step closer to the future I had envisioned.',
      "But a boot camp alone wasn't enough. I knew I needed to keep learning, keep growing. I devoured online courses, dedicating hundreds of hours to mastering my craft. My days were a juggling act - freelance development projects paid the bills while I spent every spare moment learning and creating my own projects. There were sleepless nights and moments of frustration, but my determination never wavered.",
      'Each project I took on was a stepping stone, an opportunity to expand my skills and make a name for myself. I watched my portfolio grow, from simple websites to complex applications. I was building not just websites but my future.',
      "Today, I stand here, more determined than ever. I'm ready to take the next leap in my journey. I want to work with a passionate and intelligent team, to collaborate, innovate, and create something remarkable. The obstacles I've overcome have only fueled my hunger for success, and I know that the path ahead is bright with possibilities.",
      "Life might throw curveballs, but I've learned that with determination, a love for learning, and a relentless pursuit of my dreams, I can turn those curveballs into opportunities. My journey is far from over, and I'm excited to see where it takes me next."
    ]
  },
  programming: {
    title: 'Programming',
    paragraphs: [
      '~~ a long lost passion ~~',
      "I have a deep and abiding passion for programming, with a particular focus on full-stack web application development. It's a world where creativity meets logic, and where I can bring my ideas to life in the digital realm.",
      "Whether I'm crafting the front-end user experience with sleek, intuitive interfaces or diving into the back-end to build robust, efficient databases and server systems, I find the process endlessly captivating.",
      "What I love most about programming is the endless learning journey it offers. Technology is constantly evolving, and there's always something new to explore, whether it's a cutting-edge framework, a more elegant coding pattern, or a revolutionary web technology. This dynamic nature keeps me engaged and motivated to stay at the forefront of the field.",
      "Moreover, the ability to solve real-world problems and create meaningful solutions through programming is incredibly rewarding. It's a skill that allows me to make a tangible impact in a rapidly digitizing world, and I relish every opportunity to tackle complex challenges and produce elegant, functional solutions.",
      "In essence, programming, especially full-stack web development, is more than just a skill or profession to me – it's a lifelong passion that I'm committed to nurturing and growing. It's the canvas upon which I paint my digital dreams and the vehicle through which I aim to shape a brighter, tech-driven future."
    ]
  },
  environment: {
    title: 'Environment',
    paragraphs: [
      '',
      'I hold a profound interest in environmental conservation and the profound impact that our species has on the planet. While the scale of this challenge may seem daunting, I firmly believe that innovative solutions hold the key to addressing it.',
      'My personal commitment to environmental stewardship takes shape in various ways. Adopting a vegan lifestyle is one of them, recognizing the significant reduction in greenhouse gas emissions and resource consumption it entails. At home, I am dedicated to minimizing wastefulness through conscious consumption and reducing single-use plastics. Additionally, I prioritize recycling to ensure that materials are repurposed instead of ending up in landfills.',
      "For me, the environment isn't just a concern; it's a call to action. I believe that by making thoughtful choices in our daily lives and supporting innovations that prioritize sustainability, we can work together to protect and preserve our precious planet for future generations."
    ]
  },
  'high-school': {
    title: 'High School',
    paragraphs: [
      'Perry-Lecompton High School',
      'During my high school years, I attended Perry-Lecompton High School, a place where opportunities in technology education were quite limited. It was a small school with a tight-knit community, but when it came to tech classes, choices were scarce. However, I was determined to make the most of what was available.',
      'I eagerly enrolled in every tech-related class that our school had to offer, even if it meant being the sole student in one of them. In that particular class, I had the unique experience of one-on-one instruction, which allowed me to dive deep into the subject matter. It was a challenging yet rewarding experience, and it fueled my passion for technology even further.',
      "In addition to being the lone student in one class, I also served as a teacher's assistant in another. This role allowed me to not only expand my knowledge but also to share my enthusiasm for technology with my peers. It was a chance to be a part of something bigger, despite the limited resources available.",
      'While my high school might not have provided an abundance of tech classes, it did have a strong focus on Math and Science education. These subjects became my refuge, offering a wealth of knowledge and opportunities for learning. The availability of these classes allowed me to develop a solid foundation in critical thinking and problem-solving skills, which would prove invaluable as I pursued my passion for technology beyond high school.',
      "In retrospect, my high school journey, though unconventional in terms of tech education, laid the groundwork for my future endeavors. It taught me to seize every opportunity, even if it meant being the sole student or taking on the role of a teacher's assistant. My experiences in Math and Science classes nurtured my curiosity and set the stage for my later pursuits in technology and software engineering."
    ]
  },
  college: {
    title: 'Colleges',
    paragraphs: [
      '',
      'At the age of 18, I embarked on an exciting journey into the world of higher education, enrolling in college to pursue a degree in Mechanical Engineering. The prospect of learning about the intricate mechanics of the world around us, from machines to systems, filled me with anticipation and a thirst for knowledge.',
      'However, life can be unpredictable, and at a time when I was fully immersed in my academic pursuits, a profound personal challenge arose. My beloved father passed away, leaving me as his sole heir. Suddenly, my responsibilities shifted from textbooks and exams to handling his estate and ensuring his affairs were in order.',
      'In time, as the estate matters were resolved, I began to explore opportunities for continuing my education and pursuing my dreams once more. This chapter of my life, marked by both personal loss and the resilience to face adversity, ultimately shaped the person I am today. It instilled in me a profound appreciation for the importance of education and the determination to pursue my passion for technology and engineering, no matter the obstacles in my path.',
      '[Colorado State University & Full Stack Academy]',
      'My journey back into the world of education led me to a remarkable opportunity - a Full Stack Web Developer bootcamp offered through Full Stack Academy in partnership with my local institution, Colorado State University. This intensive program was a pivotal turning point in my pursuit of a career in technology. Throughout the bootcamp, I delved deep into the realm of full stack web application development, honing my skills in JavaScript, React, Node, Express, and PostgreSQL. It was a dynamic and hands-on learning experience that allowed me to build a solid foundation in the tools and technologies essential to modern web development.',
      'One of the highlights of the bootcamp was our comprehensive exploration of Agile methodology, which emphasized the importance of collaboration, adaptability, and iterative development. This approach fostered effective teamwork, enabling us to work cohesively on a range of challenging projects. In addition to mastering the technical aspects of web development, we delved into essential computer science concepts, such as data structures and algorithms. These fundamentals added depth to my skill set, empowering me to not only create functional web applications but also optimize their performance and efficiency. The bootcamp was a transformative experience that not only enhanced my technical proficiency but also nurtured my ability to work effectively in a collaborative, fast-paced development environment.'
    ]
  },
  'pc-games': {
    title: 'PC Games',
    paragraphs: [
      '',
      `Gaming has been a cherished lifelong hobby of mine, even though the demands of life have reduced the time I can dedicate to it. Recently, titles like "Baldur's Gate 3" and "Elden Ring" have captured my attention, offering immersive worlds and engaging gameplay that remind me of the magic of storytelling in games. These experiences allow me to momentarily escape reality and dive into rich, fantastical universes where every decision shapes the narrative.`,
      `When I do find some free time, I always gravitate towards the classics that have stood the test of time. "RuneScape" remains a constant companion, offering a vast virtual realm to explore and adventures to embark upon. "Satisfactory" and other problem-solving and simulation games are like mental playgrounds, challenging my strategic thinking and creativity. While my gaming hours may be limited these days, the passion for immersive storytelling and problem-solving that games offer still burns brightly within me.`
    ]
  },
  'board-games': {
    title: 'Board Games',
    paragraphs: [
      '',
      `Board games are more than just a hobby for me; they're a cherished social experience that brings friends together. Gathering at the local "Game Guild" is a tradition I hold dear, where we engage in thrilling battles of wits and strategy. Strategy games like "Coup," "Clue," and "Zombicide" are personal favorites, as they challenge our tactical thinking and offer endless opportunities for unexpected twists and turns. It's incredible how these games can create moments of suspense, laughter, and camaraderie, all within the confines of a board.`,
      `But it's not all seriousness; humor also plays a big part in our board game sessions. Card games like "Exploding Kittens" and "Cards Against Humanity" infuse our gatherings with laughter and lightheartedness. They provide a delightful contrast to the more intense strategy games and ensure that every game night is a well-rounded, memorable experience. Board games have become a cherished part of my life, offering not just entertainment but also a wonderful way to bond with friends and create lasting memories.`
    ]
  },
  community: {
    title: 'Modding Communities',
    paragraphs: [
      '',
      `My fascination with game modding communities has been a delightful and creative outlet within the gaming world. These communities are vibrant hubs where enthusiasts like me come together to enhance, tweak, and personalize our favorite games. One of my most rewarding experiences was with "Elden Ring," where I contributed by creating a character appearance randomizer in the form of a web app. It's incredibly satisfying to see how such a tool can inject new life and unpredictability into a game, allowing players to embark on fresh adventures with every character creation.`,
      `But "Elden Ring" is just one example. I've delved into various modding communities, from the enchanting realms of "Skyrim" to the eco-conscious gameplay of "ECO" and the epic fantasy of "Baldur's Gate 3." Each community is a treasure trove of creativity, innovation, and collaboration, and I've had the privilege of witnessing firsthand how passionate gamers can transform and elevate the gaming experience. These communities are not only a testament to the enduring appeal of these games but also a testament to the limitless potential of player-driven content creation within the gaming world.`,
      'Thus far I have only taken small strides in the areas of mod and plugin development, but after I achieve my career goals, I intend to return to these hobbies!'
    ]
  },
  plugins: {
    title: 'Game Plugins',
    paragraphs: [
      '',
      `My fascination with game plugins, particularly in the context of "RuneScape 3" and "Old School RuneScape," has been an exciting journey of innovation and problem-solving. These plugins, which serve as overlays for the game, are like digital companions, offering real-time assistance and enhancing the gameplay experience. What truly excites me is the technical wizardry behind these creations, as they read and interpret pixels from the game screen to provide valuable insights and utilities for players.`,
      `Over time, I've dived deep into the world of "RuneScape 3" plugin development, crafting tools that aid players in various aspects of the game. Whether it's optimizing resource gathering routes, tracking in-game statistics, or streamlining complex tasks, these plugins have the power to transform the gaming experience. The process of conceptualizing, coding, and refining these tools has been both challenging and immensely rewarding, as it's allowed me to blend my passion for gaming with my love for software development. In the end, these plugins are a testament to the limitless creativity and ingenuity that players can bring to the gaming world, making virtual adventures even more immersive and enjoyable for everyone.`,
      'Thus far I have only taken small strides in the areas of mod and plugin development, but after I achieve my career goals, I intend to return to these hobbies!'
    ]
  },
  travel: {
    title: 'Travel & Nature',
    paragraphs: [
      '',
      'Traveling has always been a source of profound joy and inspiration in my life. Exploring the diverse landscapes and cultures within the United States has allowed me to gain a deeper appreciation for the beauty and variety that exists within my own country. From the bustling streets of New York City to the serene national parks of the Southwest, each corner of the United States has something unique to offer. These journeys have not only broadened my horizons but also instilled in me a sense of wanderlust that constantly drives me to seek new adventures.',
      'One of the most unforgettable travel experiences was living in a van for a month in the breathtaking landscapes of Iceland. It was a journey marked by spontaneity and a deep connection to nature. Waking up to the sight of glaciers, cascading waterfalls, and volcanic terrain was a daily occurrence. It was a reminder that the world is vast and full of wonders waiting to be discovered. This nomadic lifestyle allowed me to embrace simplicity and immerse myself in the raw, untamed beauty of Iceland. These travels have not only enriched my life with unforgettable memories but have also deepened my appreciation for the boundless wonders of our planet.'
    ]
  },
  campsites: {
    title: 'Camping & Backpacking',
    paragraphs: [
      '',
      "Camping and backpacking represent the ultimate escape for me, a chance to disconnect from the hustle and bustle of society and immerse myself in the tranquility of the wilderness. There's a profound sense of liberation in strapping everything I need to survive onto my back and venturing out into the great outdoors. It's a journey of self-reliance and resilience, where every step brings me closer to nature's untouched beauty.",
      "In the wilderness, I find solace in the simplicity of life. The sound of a crackling campfire, the star-studded skies above, and the crisp, clean air ground me in the present moment. Whether it's a remote backpacking trip through the mountains or a serene lakeside campsite, each excursion offers a unique opportunity to reconnect with the natural world and rediscover the essence of life stripped down to its bare essentials. These moments of solitude in the wild are where I feel most alive and at peace, a testament to the enduring allure of the great outdoors."
    ]
  }
};

export default display;
