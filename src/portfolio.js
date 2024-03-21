/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gurucharan Raju",
  // title: "Hi all, I'm Guru",
  subTitle: emoji(
   "Hi there, I’m Gurucharan Raju. Take a look around, and you’ll get a sense of my journey in tech—from being a dedicated student with top grades to tackling real-world challenges with code and data. My educational path has been a solid foundation, with a 4.0 GPA for my Master's at California State University and strong performance during my Bachelor’s at Bangalore University. I’m well-versed in coding with Java, Python, and I have solid experience in handling RDBMS and NOSQL databases. n my professional life, I’ve worn many hats. I’ve built systems that handle large data using Microservice Architecture and Kafka Distributed platform at Rakuten and used data to create ML models to predict how students stick with their studies at CSULB. Teaching others and leading teams to get things done efficiently is something I’m proud of. Whether it’s through guiding interns or streamlining workflows, I’m all about making things run smoothly. But it’s not all about the technical stuff. As someone who’s started a travel app, I know what it means to take an idea and turn it into something people use and love. That balance between making cool tech and understanding what people need is really important to me."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1DLoMUX9gy_RP1NipJwXx_56FvHbSVjzn/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/guru449",
  linkedin: "https://www.linkedin.com/in/gurucharan49/",
  gmail: "contactgurucharan.r@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  leetcode: "https://leetcode.com/GC49/",
  hackerRank: "https://www.hackerrank.com/profile/contactguruchar1",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "",
  skills: [
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  backendSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],

  frontEndSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
  ],
  
  programmingLang: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fa-solid fa-c"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fa-solid fa-c"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "c#",
      fontAwesomeClassname: "fa-solid fa-c"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fa-solid fa-database"
    },
    {
      skillName: "noSQL",
      fontAwesomeClassname: "fa-solid fa-c"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University Long Beach",
      logo: require("./assets/images/CSULB_Logo.webp"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - May 2025",
      desc: "GPA: 4.0/4.0",
      descBullets: [
        "Coursework: Advanced Analysis of Alogorithms, Software Engineering, Advanced Artificial Intelligence, Pattern Recognition",
      ]
    },
    {
      schoolName: "Bangalore University",
      logo: require("./assets/images/BULogo.jpeg"),
      subHeader: "Bachelor of Engineering in Information Science",
      duration: "July 2016 - July 2020",
      desc: "Ranked top 10% in the program.",
      descBullets: ["Coursework: Algorithm and Data Structures, Database Management Systems, Operating System, Object Oriented Programming, Cybersecurity, Machine Learning"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer",
      company: "California State University" + "\n Long Beach",
      companylogo: require("./assets/images/CSULB_Logo.webp"),
      date: "February 2024 – Present",
      desc: "Contributions - \n 1. Developed predictive models using Transformation and XGBoost models for tabular data to analyze and forecast student retention and attrition rates, achieving high accuracy and providing actionable insights for educational strategy refinement" + 
      "\n 2. Utilized advanced analytics techniques in Databricks to preprocess and transform large datasets, ensuring data quality and relevancy for the application which significantly enhanced the decision-making process for academic programs management."
    },
    {
      role: "Software Engineer",
      company: "Rakuten",
      companylogo: require("./assets/images/Rakuten_Logo.webp"),
      date: "January 2020 – July 2023",
      desc: "Contributions - \n 1. Developed a highly scalable async bulk processing project, leveraging Kafka queues for reliable upload/download of 50k+ records via FTP and REST API, streamlining data ingestion processes" + 
      "\n 2. Implemented advanced splitting and sorting of large files(~20GB) using Java stream APIs and Python libraries that increased download speed by 20x" + 
      "\n 3. Achieved over 80% code coverage by implementing more than 200 JUnit tests using Mockito and PowerMockito. Ensured code quality and reliability through the utilization of Spot Bugs, Checkstyle, and PMD"
    },
    {
      role: "Software Architect",
      company: "BurgWalden",
      companylogo: require("./assets/images/Burg.jpeg"),
      date: "April 2022 – June 2022",
      desc: "Contributions -  \n 1.  Pioneered transformative technical solutions for startup operations, spearheading intricate database architecture, seamless CSV data transfer integration with MongoDB, and sophisticated AWS deployment strategies." + 
      "\n 2. Ideated and implemented top grossing features such as company ranking and tag-based searching, resulting in an average annual profit increase of $500k for investors",
      footerLink: [
        {
          name: "Visit",
          url: "https://burgwalden.com/"
        }
      ]
    },
    {
      role: "Co-Founder",
      company: "Yana",
      companylogo: require("./assets/images/Yana.webp"),
      date: "December 2021 – July 2022",
      desc: "Contributions -  \n 1.  Leveraged entrepreneurial abilities to design and develop a travel app." + 
      "\n 2. Liaised between product, UX and tech requirements by defining the product roadmap, strategy, user stories,architecture, system design and development. Currently running app with 100+ users and 4.5/5 rating",
      footerLink: [
        {
          name: "Visit",
          url: "https://play.google.com/store/apps/details?id=com.travelstories&pli=1"
        }
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      projectName: "Enhance Instruction Level Parallelism",
      projectDesc: "Enhancing ILP through Advanced Loop Unrolling and Dynamic Memory Disambiguation",
      footerLink: [
        {
          name: "Visit",
          url: "https://github.com/guru449/EnhanceInstructionLevelParallelism"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Covid Detection through CNN",
      projectDesc: "Developed a classification model using convolutional neural networks (CNNs) using VGG16 architecture and Keras framework to detect COVID-19 infection patterns inlung x-rays with accuracies close to 95%",
      footerLink: [
        {
          name: "Visit",
          url: "https://burgwalden.com/"
        }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

//Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

//Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

//Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "Phone: +15623504778",
  email_address: "Email: contactgurucharan.r@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
