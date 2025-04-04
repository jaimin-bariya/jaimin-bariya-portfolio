/** @format */

import {
  GitHubLogo,
  CodeforcesLogo,
  LeetCodeLogo,
  LinkedInLogo,
  XLogo,
  DevToLogo,
  DiscordLogo,
  FacebookLogo,
  GmailLogo,
  KaggleLogo,
  MediumLogo,
  SlackLogo,
  StackOverFlowLogo,
  YTLogo,
} from "@/assets/images";

const adminName = "Jaimin Bariyaaa";

console.log(import.meta.url); // Outputs the URL of this script

const AllSocialMedia = [
  {
    name: "GitHub",
    logo: GitHubLogo,
    isEnable: true,
    url: "https://github.com/jaimin-bariya",
  },
  {
    name: "Codeforces",
    logo: CodeforcesLogo,
    isEnable: true,
    url: "https://codeforces.com/profile/jaiminbariya",
  },
  {
    name: "LeetCode",
    logo: LeetCodeLogo,
    isEnable: true,
    url: "https://leetcode.com/u/jaimin-bariya/",
  },
  {
    name: "LinkedIn",
    logo: LinkedInLogo,
    isEnable: true,
    url: "https://www.linkedin.com/in/jaiminbariya/",
  },
  {
    name: "Twitter (X)",
    logo: XLogo,
    isEnable: true,
    url: "https://x.com/jaiminbariya_",
  },
  {
    name: "Dev.to",
    logo: DevToLogo,
    isEnable: true,
    url: "https://dev.to/jaiminbariya",
  },
  {
    name: "Discord",
    logo: DiscordLogo,
    isEnable: false,
    url: "https://discord.com/users/1154752660222791722",
  },
  {
    name: "Facebook",
    logo: FacebookLogo,
    isEnable: false,
    url: "https://facebook.com/yourusername",
  },
  {
    name: "Gmail",
    logo: GmailLogo,
    isEnable: false,
    url: "mailto:yourname@gmail.com",
  },
  {
    name: "Kaggle",
    logo: KaggleLogo,
    isEnable: false,
    url: "https://www.kaggle.com/yourusername",
  },
  {
    name: "Medium",
    logo: MediumLogo,
    isEnable: false,
    url: "https://medium.com/@yourusername",
  },
  {
    name: "Slack",
    logo: SlackLogo,
    isEnable: false,
    url: "",
  },
  {
    name: "Stack Overflow",
    logo: StackOverFlowLogo,
    isEnable: false,
    url: "https://stackoverflow.com/users/yourid/yourusername",
  },
  {
    name: "YouTube",
    logo: YTLogo,
    isEnable: false,
    url: "https://www.youtube.com/c/yourchannelname",
  },
];

const SocialLinks = {
  githubLink: "https://github.com/jaimin-bariya",
  codeforcesLink: "https://codeforces.com/profile/jaiminbariya",
  leetcodeLink: "https://leetcode.com/u/jaimin-bariya/",
  linkedInLink: "https://www.linkedin.com/in/jaiminbariya/",
  twitterLink: "https://x.com/jaiminbariya_",
  devToLink: "https://dev.to/jaiminbariya",
  discordLink: "https://discord.com/users/1154752660222791722", // You can remove this if isEnable: false
  facebookLink: "https://facebook.com/yourusername", // Remove or replace if needed
  gmailLink: "mailto:yourname@gmail.com", // Replace with your actual email if needed
  kaggleLink: "https://www.kaggle.com/yourusername", // Replace with your username
  mediumLink: "https://medium.com/@yourusername", // Replace with your username
  slackLink: "",
  stackOverflowLink: "https://stackoverflow.com/users/yourid/yourusername", // Replace with actual info
  youtubeLink: "https://www.youtube.com/c/yourchannelname", // Replace with your channel link
};

const WhatIamDoingNow = {
  lastUpdate: "January 10, 2025",
  list: [
    "Crafting Strong Resume",
    "Weight-lifting seven times/week",
    "Developing some unique projects",
    "Playing Nothing - ",
    "Reading Corporate Chanakya, Chanakya 100 Best Sutras",
  ],
};

const ToolBox = {
  tagline: "Master Your Craft with the Right Gear",

  ToolList: {
    Technologies: [
      {
        name: "Programming Languages",
        list: ["Python", "JavaScript", "C++", "SQL"],
      },
      {
        name: "Frameworks",
        list: ["React.js", "Flask"],
      },
      {
        name: "AI/ML Libraries",
        list: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face"],
      },
      {
        name: "Database Technologies",
        list: ["MySQL", "PostgreSQL", "Firebase"],
      },
    ],

    Tools: [
      {
        name: "Version Control",
        list: ["Git", "GitHub"],
      },
      {
        name: "IDEs/Editors",
        list: ["VS Code", "PyCharm", "Jupyter Notebook"],
      },
      {
        name: "Design Tools",
        list: ["Canva"],
      },
      {
        name: "Project Management",
        list: ["Notion"],
      },
    ],

    Hardware: [
      {
        name: "Laptop/PC",
        list: ["Asus TUF Gaming F15"],
      },
      {
        name: "Development Boards",
        list: [],
      },
      {
        name: "Peripherals",
        list: ["Mechanical Keyboard"],
      },
      {
        name: "AI-Specific Hardware",
        list: [],
      },
    ],

    Platforms: [
      {
        name: "Cloud Platforms",
        list: ["AWS"],
      },
      {
        name: "Collaboration",
        list: ["Slack", "Zoom"],
      },
      {
        name: "Learning Platforms",
        list: ["Coursera", "Udemy", "Khan Academy", "YouTube"],
      },
      {
        name: "Competitive Coding",
        list: ["Codeforces", "LeetCode"],
      },
    ],
  },
};

const MyHobbies = [
  {
    name: "Playing Games 🎮",
    message:
      "Because who doesn't want to save the world, level up, and be a hero... all from the comfort of my couch? 😜",
  },

  {
    name: "Watching Anime & Movies 🍿",
    message:
      "Watching epic battles and heartwarming stories, one season at a time... 😁 💥",
  },

  {
    name: "Going to the Gym 🏋️‍♂️",
    message:
      "Training for the day when my character’s strength stat finally maxes out. 💪",
  },

  {
    name: "Running 🏃‍♂️",
    message: "Chasing after that 'just one more level' feeling. 🏃‍♂️💨",
  },

  {
    name: "Stargazing ✨",
    message:
      "Waiting for aliens to invade and just wishing my life had a cool soundtrack. 🌌",
  },

  {
    name: "Reading 📚",
    message:
      "Feeding my brain with knowledge... and occasionally diving into a good fantasy novel. 📖🧙‍♂️",
  },

  {
    name: "Investing 📈",
    message:
      "Trying to turn my coins into EPIC loot—except it’s real life, so no respawns. 💰",
  },
];

const FourTierMasteryData = {
  2024: [
    {
      name: "Primary", // Don't Change this,
      which: "AI/ML Developer 🤖💡",
      desc: [
        "This is where I spend most of my time mastering Artificial Intelligence and Machine Learning to build cutting-edge solutions.",
        "From deep learning to NLP, I’m diving into it all!",
      ],
      skillTags: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing (NLP)",
        "Data Science",
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Model Deployment",
        "Data Visualization",
      ],
    },
    {
      name: "Secondary", // Don't Change this,
      which: "Full-Stack Developer 💻🔧",
      desc: [
        "Web development is my second focus! I use React for the frontend and Flask for the backend to build powerful, interactive apps that integrate AI seamlessly.",
      ],
      skillTags: [
        "React",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Flask",
        "APIs",
        "RESTful API",
        "Version Control",
        "Git",
        "GitHub",
        "State Management",
        "Redux",
        "Context API",
      ],
    },
    {
      name: "Third", // Don't Change this,
      which: "Competitive Programmer 🧩💪",
      desc: [
        "I keep my problem-solving skills sharp by constantly working on data structures and algorithms. This keeps me ready for any coding challenge and tech interview. 💻⚡",
        "In short, I like to make money and fame through competitions",
      ],
      skillTags: ["DSA", "Kaggle", "Leetcode weekly", "Codeforce"],
    },
    {
      name: "Fourth", // Don't Change this,
      which: "Game Development with AI 🎮🤖",
      desc: [
        "Games powered by AI are more than just fun—they offer innovative ways to engage with technology.",
        "I explore how AI can create smarter NPCs, procedural content, and dynamic gameplay.",
      ],
      skillTags: [],
    },
  ],
};

export {
  AllSocialMedia,
  WhatIamDoingNow,
  ToolBox,
  MyHobbies,
  SocialLinks,
  adminName,
  FourTierMasteryData,
};
