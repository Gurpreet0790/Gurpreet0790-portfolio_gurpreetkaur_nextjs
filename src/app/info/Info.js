/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(255,207,103)", "rgb(211,50,29)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  nav_menu: [
    {
      link:"home",
      title:"Home"
    },
    {
      link:"about",
      title:"About"
    },
    {
      link:"techstack",
      title:"Tech Stack"
    },
    {
      link:"professional",
      title:"Professional Experience"
    },
    {
      link:"sideprojects",
      title:"Projects"
    },
    {
      link:"contact",
      title:"Contact"
    }
  ],
  socials: [
    {
      link: "https://github.com/Gurpreet0790",
      icon: "/github.svg",
      label: "github",
    },
    {
      link: "www.linkedin.com/in/reet03",
      icon: "/linkedin.svg",
      label: "linkedin",
    },
    {
      link: "tel:+1 604-807-0722",
      icon: "/mobile.svg",
      label: "mobile",
    },
    {
      link: "mailto:gurpreetkaur.chd03@gmail.com",
      icon: "/email.svg",
      label: "email",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Welcome to my tech space! Backed by a Diploma and B.Tech in Computer Science, I’m passionate about programming and tech innovation.For the past 8+ years, I've immersed myself in the ever-evolving world of Mobile Application development, creating innovative and impactful user experiences.\n\nI specialize in building sophisticated user interfaces with Swift, SwiftUI, and React Native, while also possessing a solid foundation in Android, Flutter, and the Phoenix framework. This diverse toolkit allows me to approach development with versatility and a broad understanding of the mobile ecosystem.\n\nBeyond development, I am proficient in Continuous Integration and Continuous Deployment (CI/CD), utilizing tools such as CircleCI, Bitrise, and Fastlane to automate processes and ensure smooth, efficient releases.\n\nThroughout my career, I've contributed to over 15 iOS apps and 3+ React Native applications, spanning a wide range of industries from Banking to Social Media and Messaging. With experience in every stage of the app lifecycle—from concept to deployment—I'm well-equipped to handle projects from start to finish.\n\nWhat truly drives me is my insatiable appetite for learning. Technology is always evolving, and I thrive on staying ahead of the curve, embracing new tools, frameworks, and innovations to enhance my craft.\n\nIf you're looking for a dedicated, adaptable mobile app developer to take on your next project, let's connect. With my passion, expertise, and commitment to quality, I’m ready to help you create something truly extraordinary.",
  techStack: [
    {
      name: "Android Studio",
      image: "/android-studio.svg"
    },
    {
      name: "CircleCI",
      image: "/circleci.svg"
    },
    {
      name: "Fastlane",
      image: "/fastlane.svg"
    },
    {
      name: "Firebase",
      image: "/firebase.svg"
    },
    {
      name: "Flutter",
      image: "/flutter.svg"
    },
    {
      name: "GIT",
      image: "/git.svg"
    },
    {
      name: "JavaScript",
      image: "/javascript.svg"
    },
    {
      name: "Next.js",
      image: "/nextjs.svg"
    },
    {
      name: "Node.js",
      image: "/nodejs.svg"
    },
    {
      name: "Phoenix Framework",
      image: "/phoenix.svg"
    },
    {
      name: "React",
      image: "/react.svg"
    },
    {
      name: "Swift",
      image: "/swift.svg"
    },
    {
      name: "SwiftUI",
      image: "/swift.svg"
    },
    {
      name: "TypeScript",
      image: "/typescript.svg"
    },
    {
      name: "VS Code",
      image: "/vs-code.svg"
    },
    {
      name: "Xcode",
      image: "/xcode.svg"
    },
  ],
  experience: [
      {
            company: "FIS Global",
            designation: "Senior Software Engineer",
            location: "Mohali",
            duration: "Jan 2020 - Sep 2023",
            achievement: [],
            isWork: true,
            responsibilities: ["Spearheaded the development 3+ iOS Applications and 2 React Native banking applications, resulting in a 30% increase in user engagement and a 25% reduction in transaction processing time.",
              "Implemented advanced state management techniques using Redux Toolkit, improving app performance by 40% and reducing bug reports by 50%.",
              "Orchestrated the migration of legacy iOS apps to React Native, reducing codebase complexity by 35% and enabling faster feature rollouts across platforms.",
              "Mentored a team of 5 junior developers, fostering a culture of code quality and best practices, resulting in a 20% increase in team productivity.",
              "Optimized CI/CD pipelines using CircleCI and Fastlane, reducing build times by 45% and enabling daily releases with 99.9% uptime."
            ]
          },
          {
            company: "IDS Infotech Limited (IDS)",
            designation: "Senior Software Engineer",
            location: "Chandigarh",
            duration: "Dec 2018 - Jan 2020",
            achievement: [],
            isWork: true,
            responsibilities: ["Engineered critical features for a high-traffic e-commerce app using Swift, leading to a 28% increase in conversion rates and a 15% boost in customer retention.",
              "Developed and maintained native iOS applications, focusing on performance, user experience, and code quality",
              "Implemented comprehensive unit and integration testing strategies, increasing code coverage from 60% to 95% and reducing post-release defects by 40%.",
              "Collaborated with UX designers to create an intuitive, accessibility-compliant interface, improving the app's App Store rating from 3.8 to 4.6 stars.",
              "Introduced performance monitoring tools, identifying and resolving bottlenecks that improved app load times by 35%."
            ]
          },
      {
            company: "Chetal International Group",
            designation: "Senior iOS Developer",
            location: "Chandigarh",
            duration: "Mar 2018 - Nov 2018",
            achievement: [],
            isWork: true,
            responsibilities: ["Engineered critical features for a high-traffic e-commerce app using Swift, leading to a 28% increase in conversion rates and a 15% boost in customer retention.",
              "Developed and maintained native iOS applications, focusing on performance, user experience, and code quality",
              "Implemented comprehensive unit and integration testing strategies, increasing code coverage from 60% to 95% and reducing post-release defects by 40%.",
              "Collaborated with UX designers to create an intuitive, accessibility-compliant interface, improving the app's App Store rating from 3.8 to 4.6 stars.",
              "Introduced performance monitoring tools, identifying and resolving bottlenecks that improved app load times by 35%."
            ]
          },
          {
            company: "Outline Systems India Pvt. Ltd",
            designation: "Senior iOS Developer",
            location: "Chandigarh",
            duration: "Jul 2015 - Feb 2018",
            achievement:
              ["Received the \"Magnificent Multi-tasker\" award for successfully managing multiple high-priority projects simultaneously, consistently delivering ahead of schedule."],
            isWork: true,
            responsibilities: ["Developed iOS applications for diverse industries including E-commerce, Social Networking, Fitness, Audio Streaming, and Hospitality",
              "Successfully led a team of 6 members to deliver 7 number of iOS projects on time and within budget, exceeding client expectations",
              "Optimized app bundle size, achieving a 40% reduction and significantly improving download and update rates.",
              
            ]
          },
          {
            company: "SmartBuzz Web Solutions",
            designation: "iOS Developer",
            location: "Chandigarh",
            duration: "Aug 2014 - Jul 2015",
            achievement: [],
            isWork: true,
            responsibilities: [" Directed the development of a flagship iOS app for a major retail client, resulting in a 200% increase in mobile sales within the first quarter of launch.",
              "Implemented advanced Swift techniques such as protocol-oriented programming and functional reactive programming, reducing codebase complexity by 30%.",
              "Mentored a team of 3 iOS developers, introducing code reviews and pair programming practices that improved code quality and reduced bug density by 45%.",
              "Established a modular architecture for the app, enabling parallel development and reducing time-to-market for new features by 35%."
            ]
          },
          {
            company: "Net Set Software Pvt. Ltd",
            designation: "iOS Developer",
            location: "Mohali",
            duration: "Jan 2013 - Aug 2014",
            achievement: [],
            isWork: true,
            responsibilities: ["Developed and launched 3+ iOS applications using Objective-C, including a professional messaging app that garnered over 500,000 downloads in its first year.",
              "Implemented complex UI designs using Auto Layout and custom animations, improving user engagement metrics by 40%.",
              "Integrated RESTful APIs and implemented efficient caching strategies, reducing server load by 30% and improving app responsiveness.",
            ]
          },
      {
        degree: "Bachelor Of Technology - Computer Science & Engineering",
        college: "Swami Vivekanand Institute",
        university: "Punjab Technical University",
        duration: "2009 - 2012",
        achievement:
          ["Elected as Class Representative for consecutive 3 years", "worked as General Secretary for an year."],
        isWork: false,
      },
      {
        degree: "Diploma of Computer Engineering",
        college: "Govt. Polytechnic College",
        university: "Punjab Technical University",
        duration: "2006 - 2009",
        achievement: ["Elected as Class Representative for consecutive 3 years"],
        isWork: false,
      },
  ],
  sideProjects: [
      {
        name: "Earth Hero: Climate Change",
        link: "https://apps.apple.com/us/app/earth-hero-climate-change/id1458057746",
        description: "The \"Earth Hero app\" empowers users to track and reduce their carbon footprint by providing personalized sustainability goals, challenges, and tips, fostering a more eco-conscious lifestyle.",
        isWebsite: false
      },
      {
        name: "Ford Money",
        link: "https://apps.apple.com/de/app/ford-money-germany/id1529352336",
        description: "The \"Ford Money Banking app\" offers convenient authentication via fingerprint or Face ID, allowing secure access to account information and transactions. Users can swiftly open additional day and/or fixed-term deposit accounts and access a secure mailbox, order transfers, and benefit from regular updates with bug fixes, new modules, and multi-language support",
        isWebsite: false
      },
      {
        name: "FCB Bank",
        link: "https://apps.apple.com/in/app/first-citizens/id1495642922",
        description: "The \"FCB app\" provides standard features including funds transfer, account statements, balance reviews, Cards management, and payments. Architecture uses SSL, face ID, fingerprint, and multi-factor authentication",
        isWebsite: false
      },
      {
        name: "Renasant Mobile",
        link: "https://apps.apple.com/us/app/renasant-mobile/id784522920",
        description: "The \"Renasant Bank app\" is available to all Renasant Bank consumers.It allows you to check balances, make transfers, deposit checks, and find locations.",
        isWebsite: false
      },
      {
        name: "BOH Mobile Banking",
        link: "https://apps.apple.com/us/app/boh-mobile-banking/id500266693",
        description: "The \"BOH Mobile Banking app\" helps you manage your money quickly and easily — anytime, anywhere. Whether checking your balance, depositing a check, paying a bill or transferring funds, going mobile delivers a new level of convenience, speed and security.",
        isWebsite: false
      },
      {
        name: "BSoChill",
        link: "https://apps.apple.com/in/app/bsochill-fun-for-all/id1217992999",
        description: "The \"BSoChill app\" was developed for staying connected with friends and family. Users can post images, videos, and stories, share content, and earn points, redeemable for rewards or cash; premium plans offer extra features",
        isWebsite: false
      },

  ],
};

