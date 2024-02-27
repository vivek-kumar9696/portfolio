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
  username: "Vivek Kumar",
  title: "Hi all, I'm Vivek",
  subTitle: emoji(
    " I have a Master's degree in Information Science and strong background in Quantum Computing. I'm eager to take on roles that involve solving scaling problems, implementing new features, and managing increased web traffic." 
    +"I am actively looking for Machine Learning Engineer / Software Engineer roles.My technical toolkit includes Go, Java, and Node.js for "+
    "building backend systems. Through my academic and professional journey,"+
    " I've developed a deep understanding of Deep Learning and Natural Language Processing."
  ),
  resumeLink:
    "https://drive.google.com/file/d/14Z6OK5clSyazIBrqGNtfhANk8wm_DiBN/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mayank3aj3769",
  linkedin: "https://www.linkedin.com/in/mayank-raj77",
  gmail: "mayank.raj15310@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: " Proficient in building microservices in node.js/typescript, Java and Go and applied Deep Learning",
  skills: [
    emoji(
      "⚡ Develop highly scalable event-driven microservices architecture."
    ),
    //emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stevens Institute of Technology",
      logo: require("./assets/images/stevens logo.png"),
      subHeader: "Master of Science in Machine Learning ",
      duration: "September 2022 - December 2023",
      descBullets: ["GPA : 3.5/4" ,
        "Relevant Coursework: Artificial Intelligence, Deep Learning, Natural Language Processing,Computational Cognitive Science, Web Mining, Machine Learning - fundamentals and applications, Data Mining - II"],
    },
    {
      schoolName: "Manipal Institute of Technology",
      logo: require("./assets/images/manipal-logo.jpg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "Graduated in August 2020",
      descBullets: ["Graduation thesis got published in an international IEEE conference"]
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Microservices", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "90%"
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "80%"
    },
    {
      Stack:"Natural Language Processing",
      progressPercentage:"85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Deep Learning Intern",
      company: "Micron",
      companylogo: require("./assets/images/micron-logo.jpg"),
      date: "May 2023 – July 2023",
      desc: "Silicon Systems AI Team",
      descBullets: [
        "Optimized data pipeline achieving a 30% faster retrieval of test parameter embedding ",
        "Designed a distributed Deep Learning model using PyTorch Lightning to improve the electronic design automation process by 17%.",
        "Trained the GCN model on a multi-GPU cluster using Pytorch DDP"
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Byjus",
      companylogo: require("./assets/images/byjus-logo.png"),
      date: "June 2021 – July 2022",
      desc:"Supply Chain Tech. team",
      descBullets:[
        "Developed microservices using Node.js and Java as per REST architecture to meet the requirements of over 2 million inventory requests used for global delivery of retail products",
        "Reduced the latency by 42% using an event driven architecture using Apache Kafka. ",
        "Enhanced the UI using html/css and React.js to improve user experience for the platform or seamless project management"
      ]
    },
    {
      role: "Trainee Software Engineer",
      company: "kloudone",
      companylogo: require("./assets/images/kloudone-logo.png"),
      date: "Aug 2020 – Jan 2021",
      descBullets: ["Built and deployed microservices in Go using gRPC for Accuknox, a container security platform. Leveraged Apache KafKa for event stream, Docker for containerization.",
      " Improved CI/CD (Continuous Integration/Continuous Deployment ) pipeline using Jenkins to reduce downtime by 27%",
      "Leveraged Apache KafKa for event stream, Docker for containerization. Improved CI/CD (Continuous Integration/Continuous Deployment ) pipeline using Jenkins to reduce downtime by 27%"]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */



// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Projects covering various applications of Deep Learning and backend development",
  projects: [
      {
      image: require("./assets/images/git-logo.png"),
      projectName: "LLM for sentiment analysis of global financial market conditions",
      projectDesc: " Developed a sentiment analysis system for specific set of industries by utilizing the massive volume of online news stories. Scraped the news articles from global media platforms using the newsdata.io API and stock market data using yahoo finance API Labelled the articles using VADER sentiment analyzer package and built a transformer based model consisting of pre-trained weights of BERT, RoBERTa and linear layers.Used mean-squared-error as loss function and RMSProp as optimizer. Finally obtained the pearson correlation score of 0.87 between average stock price and sentiment score of a sector to validate the results " ,
      footerLink: [{
          name: "Visit Website",
          url: "https://github.com/mayank3aj3769/Machine-Learning-Projects/blob/11548fc1881932d000cfa9ddf6e6635c7c999573/Sentiment%20Analysis%20of%20market%20conditions%20based%20on%20global%20news%20reports.ipynb"
        }]
    },{
      image: require("./assets/images/git-logo.png"),
      projectName:'Lexical Complexity Score Prediction Challenge ',
      projectDesc:" Prepared a cutting-edge transformer-based deep learning model to accurately predict the lexical complexity scores of single words within English sentences trained on a dataset of over 500000 sentences in English language Pre-processed the tokens by removing special characters, expanded the contractions, eliminating stop words, performed stemming and lemmatization on the tokens Model architecture used pre-trained BERT and RoBERTa models followed by a series of 6 linear layers cross-entropy loss as error rate of 0.0947",
      footerLink:[{
        name:'Visit Website',
        url:'https://github.com/mayank3aj3769/Machine-Learning-Projects/tree/11548fc1881932d000cfa9ddf6e6635c7c999573/Lexical%20Complexity%20Score%20Predictor%20using%20a%20BERT%20Based%20model'
      }]
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
      title: "Deep Neural Network approach for navigation of autonomous vehicle",
      subtitle:
        " Designed a CNN-based Deep Learning model using over 200,000 real-world images and sensor data, integrating image compression and normalization techniques for GPU memory optimization. Published in IEEE, 6th International Conference for Convergence in Technology as first author. Citations – 4, h- index -1",
      image: require("./assets/images/IEEE-logo.png"),
      imageAlt: "IEEE Logo",
      footerLink: [
        {
          name: "Research Paper",
          url: "https://ieeexplore.ieee.org/abstract/document/9418189"
        },
        {
          name: "git repository",
          url: "https://github.com/mayank3aj3769/Autonomous-vehicle.git"
        }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "mayank.raj15310@gmail.com",
  display: true
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
  //openSource,
  bigProjects,
  achievementSection,
  //blogSection,
  //talkSection,
  //podcastSection,
  contactInfo,
  //twitterDetails,
  isHireable
};
