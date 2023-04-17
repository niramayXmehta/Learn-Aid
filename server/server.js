const express = require('express');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
var Authentication_Router = require('./login.js');
const cors = require('cors'); // Add this line


app.use(cors({
  origin: "http://localhost:3000", // the URL of your React app
  credentials: true,
}));

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.set("view-engine", "ejs");

app.use(Authentication_Router)

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );
};


const modules = [
  { id: 1, title: 'Introduction to Digital Skils', lecturer: 'Thanush Curtis', image: '/images/digital-skills.jpg' },
  { id: 2, title: 'Getting started with word', lecturer: 'Will Smith', image: '/images/word.jpg' },
  { id: 3, title: 'Staying safe in Online', lecturer: 'Bob Wills', image: '/images/online-safety.jpg' },
  { id: 4, title: 'Coding for Kids', lecturer: 'Chris Nolens', image: '/images/coding-kids.jpg' },
];


const moduleDescriptions = {
    1: 'Welcome to the Introduction to Digital Skills module! In this course, we will explore the fundamental concepts and tools necessary for navigating the digital world. Whether you are new to technology or looking to enhance your existing skills, this module will provide a solid foundation for digital literacy. We will cover topics such as computer basics, internet navigation, online safety and security, and digital communication. By the end of this module, you will have a greater understanding of how to use digital tools effectively and responsibly.',
    2: 'Welcome to the Getting Started with Word module! In this course, we will explore the basic features and tools of Microsoft Word, a popular word processing program. You will learn how to create, format, and edit documents, as well as how to use templates, styles, and themes to enhance your documents. Additionally, we will cover features such as spell-checking, track changes, and document sharing. By the end of this module, you will have the skills necessary to create professional-looking documents using Microsoft Word.',
    3: 'Welcome to the Staying Safe Online module! In this course, we will explore ways to protect yourself and your personal information while using the internet. You will learn about common online threats such as phishing scams, malware, and identity theft, as well as strategies to avoid them. Additionally, we will cover best practices for creating strong passwords, managing your social media presence, and staying safe while shopping and banking online. By the end of this module, you will have the knowledge necessary to navigate the internet safely and securely.',
    4: 'Welcome to the Coding for Kids module! In this course, children will learn the basics of coding and computer programming. They will learn how to use programming languages such as Scratch, Python or JavaScript to create their own projects and games. Additionally, they will learn key concepts such as loops, variables, and conditional statements. This course is designed to be fun and engaging for kids, while also teaching them valuable skills for the future. By the end of this module, your child will have the tools necessary to continue exploring the world of coding and programming.',

  };


const module1Content1 = {

  1: 'Digital skills are the abilities and knowledge needed to use digital technology effectively. They include the ability to use computers, tablets, smartphones, and other digital devices, as well as the ability to use digital tools such as social media, search engines, and video conferencing. Digital skills are essential for navigating the modern world, and they are becoming increasingly important in the workplace. In fact, 90% of employers believe that digital skills are important for job success.',
  2: 'A computer is an electronic device that can be programmed to perform a set of instructions. Computers are used to process data, which can be anything from text and images to music and video. Computers are used in a wide variety of applications, including word processing, web browsing, and video games. They are also used in many industries, including healthcare, education, and business.',
  3: 'The internet is a global network of computers that connects people all over the world. It is made up of millions of smaller networks, called internet service providers (ISPs), which are connected to each other. The internet is used to send and receive data, which can be anything from text and images to music and video. The internet is used in a wide variety of applications, including web browsing, email, and video conferencing. It is also used in many industries, including healthcare, education, and business.',
  4: 'Online browsing is the act of using a web browser to view and interact with web pages on the internet. Web browsers are software applications that allow users to access and view web pages. Popular web browsers include Google Chrome, Mozilla Firefox, and Microsoft Edge. Web browsers are used to access a wide variety of websites, including social media, news, and shopping sites. They are also used to access email, video conferencing, and online banking.',

};


app.get('/api/modules', (req, res) => {
    res.json(modules);
  });
  
  app.get('/api/modules/:id', (req, res) => {
    const moduleId = parseInt(req.params.id);
    const module = modules.find((m) => m.id === moduleId);
    if (module) {
      res.json(module);
    } else {
      res.status(404).send('Module not found');
    }
  });
  
  app.get('/api/module-descriptions/:id', (req, res) => {
    const moduleId = req.params.id;
    const moduleDescription = moduleDescriptions[moduleId];
    if (moduleDescription) {
      res.json({ description: moduleDescription });
    } else {
      res.status(404).send('Module description not found');
    }
  });

  app.get('/api/module-content/:id', (req, res) => {
    const moduleId = req.params.id;
    const moduleContent = module1Content1[moduleId.toString()];
    if (moduleContent) {
      res.json({ content: moduleContent });
    } else {
      res.status(404).send('Module content not found');
    }
  });

  ///login page
  app.get("/", (req, res) => {
    res.render("Login.ejs")
})

  app.use('/images', express.static('images'));
app.listen(8000,()=>{ 
    console.log("Server started on port 8000")
})

  