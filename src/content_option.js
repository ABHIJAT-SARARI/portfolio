import me from "./me.png"
import dataad from "./image/datasna.png"
import meta1 from "./image/meta.png"
import deep from "./image/deep.png"
import ai from "./image/ai.png"
import io from "./image/io.png"
import icon from "./image/icon.png"


const logotext = "AS";
const meta = {
    title: "Abhijat Sarari",
    description: "I'm Abhijat, Certified Data Sciencetist and AI Engineer, cybersecurity enthuist.",
};

const introdata = {
    title: "Hi, I'm Abhijat Sarari",
    animated: {
        first: "Data Scientist",
        second: "Visionary",
        third: "AI Engineer",
        fourth: "Programmer",
        fifth: " Developer",
        sixth: "Analyst",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: "My name is Abhijat , I am interested to talk about Artificial Intelligence, Machine Learning and Cosmo's. I am a quick learner and prefer result oriented workenvironment.",
    your_img_url: me,
};

const dataabout = {
    title: "Who am I?",
    aboutme: " As a proactive learner and quick adaptor to new technologies, I have been able to stay ahead of the curve in the field of Artificial Intelligence and data science. With a strong foundation in machine learning, statistical modeling, and programming languages such as C++, Python, and SQL, I have a unique skill set that sets me apart from others. ",
};
const worktimeline = [{
}
];

const skills = [{
        name: "Python",
    },
    
    {
        name: "C++",
    },
    
    {
        name: "Data Science",
    },
    
    {
        name: "AI",
    },

    {
        name: "Azure",
    },

    {
        name: "GCP",
    },

    {
        name: "JavaScript",
    },

    {
        name: "Data Analyst",
    },
];

const dataportfolio = [{
        img: dataad,
        description: "Google Cybersecurity Certificate have completed eight courses, developed by Google, that include hands-on, practice-based assessments.",
        link: "https://www.credly.com/earner/earned/badge/079ce03a-bfbd-4a7b-9fdb-e74d9a7ab6d0",
    },
    {
        img: meta1,
        description: "The Meta Back-End Developer Certificate is awarded to learners who complete a series of courses on back-end development. ",
        link: "https://www.credly.com/badges/2efef1f0-2923-40bb-88f4-7d344fdffbb9/public_url",
    },
    {
        img: deep,
        description: "The Deep Learning Specialization will help you understand the foundational concepts in deep learning. ",
        link: "https://www.credly.com/badges/927697d7-ecf4-42ec-90b2-95fe03ca48d3/public_url",
    },
    {
        img: ai,
        description: "Azure AI Engineer Associate certification validates the skills and knowledge required to build, manage, and deploy AI solutions that leverage Azure Cognitive Services.",
        link: "https://www.credly.com/badges/dc7116d8-97d7-4344-9dc9-d1faca9a5791/public_url",
    },
    {
        img: icon,
        description: "CBDC-Express is a revolutionary digital wallet application that empowers users to manage Central Bank Digital Currencies (CBDCs) seamlessly.",
        link: "https://youtu.be/duQZ7WTIq1o",
    },
    {
        img: io,
        description: "The Cosmic Connection Engine is an Android app that empowers users to submit their product ideas and receive personalized cosmic inspirations.",
        link: "https://youtu.be/bOyGTHqiDus",
    },  
    
];

const contactConfig = {
    YOUR_EMAIL: "abhijat.sarari@studentambassadors.com",
    description: "Looking forward to hearing from you!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "SERVICE_ID",
    YOUR_TEMPLATE_ID: "TEMPLATE_ID",
    YOUR_USER_ID: "USER_ID (PUBLIC_KEY)",
};

const socialprofils = {
    github: "https://github.com/abhijatsarari",
    linkedin: "https://linkedin.com/in/abhijatsarari",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};