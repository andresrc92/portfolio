import {python, cpp, ros, pytorch, atos, axxiome, genba, seedorina, javascript, nodeJs, opencv, docker, linux, react, tensorflow, cuda, github} from "../assets";

export const services = [
    { title: "Python", icon: python },
    { title: "C++", icon: cpp },
    { title: "ROS", icon: ros },
    { title: "PyTorch", icon: pytorch },
  ];

export const tools = [
  {title: "Programming", icons: [python, cpp, nodeJs]},
  {title: "Artificial Inteligence", icons:[pytorch, tensorflow, cuda]},
  {title: "Frameworks", icons:[ros, react, opencv]},
  {title: "Tools", icons:[linux, github, docker]}
]


export const experience = [
  {
    title: "Support Specialist",
    company_name: "Axxiome",
    icon: axxiome,
    iconBg: "#ffffff",
    date: "Jun 2013 - Jun 2018",
    points: [
      "Technical assistance to company offices and employees across the Americas.",
      "IT infrastructure maintenance, server management in Linux and Windows.",
      "Virtualization and VoIP services setup."
    ],
  },
  {
    title: "IoT Engineer",
    company_name: "Atos",
    icon: atos,
    iconBg: "#ffffff",
    date: "Dec 2018 - Dec 2020",
    points: [
      "Completed internship, gaining a strong foundation in IoT protocols and Web full stack development.",
      "Architected Linux systems, deployed with docker and docker-compose, developed using Git version control.",
      "Deployed an IoT platform for development and integration with real world sensors.",
    ],
  },
  {
    title: "Robotics Engineer",
    company_name: "Seedorina",
    icon: seedorina,
    iconBg: "#ffffff",
    date: "Dec 2018 - Dec 2021",
    points: [
      "Took on exciting challenges on product design and prototyping.",
      "Responsible of mechatronic systems design and manufacturing.",
      "Electronic circuit board design, test and assembly.",
    ],
  },
  {
    title: "Robotics Software Engineer",
    company_name: "Genba",
    icon: genba,
    iconBg: "#ffffff",
    date: "Jul 2020 - Dec 2024",
    points: [
      "Responsible of succesful delivery of Industrial Automation projects.",
      "Project management applying agile methodologies.",
      "Software development on Computer Vision and Robotics real world applications.",
      "Support and development of IoT systems.",
    ],
  },
];