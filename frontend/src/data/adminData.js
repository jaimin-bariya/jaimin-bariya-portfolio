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
    } from "@/assets/images/logo";
  


const AllSocialMedia = [
    {
      name: "GitHub",
      logo: GitHubLogo,
      isEnable: true,
      url: "https://github.com/yourusername",
    },
    {
      name: "Codeforces",
      logo: CodeforcesLogo,
      isEnable: true,
      url: "https://codeforces.com/profile/yourusername",
    },
    {
      name: "LeetCode",
      logo: LeetCodeLogo,
      isEnable: true,
      url: "https://leetcode.com/yourusername",
    },
    {
      name: "LinkedIn",
      logo: LinkedInLogo,
      isEnable: true,
      url: "https://www.linkedin.com/in/yourusername",
    },
    {
      name: "Twitter (X)",
      logo: XLogo,
      isEnable: true,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "Dev.to",
      logo: DevToLogo,
      isEnable: true,
      url: "https://dev.to/yourusername",
    },
    {
      name: "Discord",
      logo: DiscordLogo,
      isEnable: false,
      url: "https://discord.com/users/yourid",
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
  










const WhatIamDoingNow = {
  
  lastUpdate: "December 1st, 2024",
  list: [
    "Working full-time",
    "Weight-lifting three times/week",
    "Building a replica of our home out of Lego",
    "Playing the demo disc for Dynasty Warriors: Origin",
    "Reading Fire and Blood by George R. R. Martin",
    "Redesigning this website for the nteenth time",
  ] 
}



const ToolBox = {
  tagline: "Master Your Craft with the Right Gear",

  ToolList: { 
    Technologies: [
      {
        name: "Programming Languages",
        list: ["Python", "JavaScript", "C++", "Java"],
      },
      {
        name: "Frameworks",
        list: ["React.js", "Node.js", "Django", "Flask"],
      },
      {
        name: "AI/ML Libraries",
        list: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face"],
      },
      {
        name: "Database Technologies",
        list: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
      },
    ],
  
    Tools: [
      {
        name: "Version Control",
        list: ["Git", "GitHub", "GitLab"],
      },
      {
        name: "IDEs/Editors",
        list: ["VS Code", "PyCharm", "Jupyter Notebook", "IntelliJ IDEA"],
      },
      {
        name: "Design Tools",
        list: ["Figma", "Adobe XD", "Canva"],
      },
      {
        name: "Project Management",
        list: ["Trello", "Jira", "Notion"],
      },
    ],
  
    Hardware: [
      {
        name: "Laptop/PC",
        list: ["MacBook Pro M1", "Dell XPS 15", "Custom-Built PC"],
      },
      {
        name: "Development Boards",
        list: ["Raspberry Pi", "Arduino", "Jetson Nano"],
      },
      {
        name: "Peripherals",
        list: ["Mechanical Keyboard", "Dual Monitors", "Graphics Tablet"],
      },
      {
        name: "AI-Specific Hardware",
        list: ["NVIDIA GPUs (RTX 3080 for ML training)"],
      },
    ],
  
    Platforms: [
      {
        name: "Cloud Platforms",
        list: ["AWS", "Google Cloud Platform", "Microsoft Azure"],
      },
      {
        name: "Collaboration",
        list: ["Slack", "Microsoft Teams", "Zoom"],
      },
      {
        name: "Learning Platforms",
        list: ["Coursera", "Udemy", "Khan Academy"],
      },
      {
        name: "Competitive Coding",
        list: ["Codeforces", "LeetCode", "HackerRank"],
      },
    ],


  }
};


const MyHobbies = [
  {
    name: "Playing Games 🎮",
    message: "Because who doesn't want to save the world, level up, and be a hero... all from the comfort of my couch? 😜"
  },

  {
    name: "Watching Anime & Movies 🍿",
    message: "Watching epic battles and heartwarming stories, one episode at a time... and pretending I can do those sick moves! 💥"
  },

  {
    name: "Going to the Gym 🏋️‍♂️",
    message: "Training for the day when my character’s strength stat finally maxes out. 💪"
  },

  {
    name: "Running 🏃‍♂️",
    message: "Chasing after that 'just one more level' feeling. 🏃‍♂️💨"
  },

  {
    name: "Stargazing ✨",
    message: "Waiting for aliens to invade or just wishing my life had a cool soundtrack. 🌌"
  },

  {
    name: "Reading 📚",
    message: "Feeding my brain with knowledge... or occasionally diving into a good fantasy novel. 📖🧙‍♂️"
  },

  {
    name: "Investing 📈",
    message: "Trying to turn my coins into EPIC loot—except it’s real life, so no respawns. 💰"
  }
];








export { AllSocialMedia, WhatIamDoingNow, ToolBox, MyHobbies};
  