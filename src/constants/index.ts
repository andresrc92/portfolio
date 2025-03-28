import {python, cpp, ros, pytorch, atos, axxiome, genba, seedorina, nodeJs, opencv, docker, linux, react, tensorflow, cuda, github, pria_demo, paretto, tmini, autodesk, arduino, kicad} from "../assets";

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


export const highlights = [
  {title: "Embodied AI", thumbnail: pria_demo, desc: "Capstone project for my specializacion in Robotics & AI. The project uses a robot arm and a RGB camera to collect a dataset automatically. Then a model is trained so the robot can determine how to approach the object from looking at it.", icons: [pytorch, opencv, ros], link: "https://www.youtube.com/watch?v=PSGrWwR8Rug&ab_channel=AndresRivas" },
  {title: "Paretto", thumbnail: paretto, desc: "Paretto is a robotic paletizing system by Genba. Through its user friendly drag and drop interface allows anyone to setup the robot for their own products. Along with paletizing pattern setup, it provides ease of integration for production monitoring. ", icons: [linux, docker, python], link: "https://www.youtube.com/watch?app=desktop&v=Z5VM_sedjFc&ab_channel=GENBA-Automatizaci%C3%B3nyRob%C3%B3tica" },
  {title: "Seedbot", thumbnail: tmini, desc: "Seedorina's seedbot T-Mini provides automated seed handling. It is programmable for ensuring seed placing precision, and provides cloud monitoring and setup allowing for a more efficient production.", icons: [autodesk, arduino, kicad], link: "https://www.subrayado.com.uy/los-robots-sembrar-seedorina-estan-nominados-los-premios-nova-n812565" },
  {title: "Teleoperated manipulator", thumbnail: pria_demo, desc: "Custom robotic manipulator for autonomous or remote operation. The system is composed of five Teknic's servomotors, four Dynamixel, two RTSP cameras, two DC linear actuators and a pneumatic clamp. The robot tool can be dettached electromagnetically.", icons: [ros, opencv, cpp]},
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