/** @format */

import leetcodeLogo from "@assets/images/logo/leetcode.webp";
import GitHubLogo from "@assets/images/logo/github.avif"
import CodeForceLogo from "@assets/images/logo/codeforces.png"





const AllBadges = [
  {
    name: "leetcode",
    logo: leetcodeLogo,
    link: "https://leetcode.com/u/jaimin-bariya/",
    badges: ["https://assets.leetcode.com/static_assets/others/Top_SQL_50.gif"],
  },
];

const AllHackathons = [
  {
    name: "Odoo",
    description: "Hackathon Wins: Highlight any hackathons you’ve won or placed highly in. Include brief descriptions of the projects, your role, the technologies used, and any prizes.",
    technology: ["react", "django", "tailwind"]
  },
  {
    name: "Amazon ML Hackathon",
    description: "Hackathon Wins: Highlight any hackathons you’ve won or placed highly in. Include brief descriptions of the projects, your role, the technologies used, and any prizes.",
    technology: ["Ml", "NLP", "DL"],
  },
 

];



const PlatFormIUse = [
    {
        name: "LeetCode",
        logo: leetcodeLogo,
        link: "https://leetcode.com/u/jaimin-bariya/",
    },
    {
      name: "GitHub",
      logo: GitHubLogo,
      link: "https://github.com/jaimin-bariya",
    },
    {
      name: "Codeforce",
      logo: CodeForceLogo,
      link: "https://codeforces.com/profile/jaiminbariya",
  },

]



const CompetitionNames = [
  {
    name: "Leetcode Weekly 100",
    platform: "LeetCode",
    rank: "1",
    prize: "10,000",
    link: ""
  },
  {
    name: "Leetcode Weekly 100",
    platform: "LeetCode",
    rank: null,
    prize: null,
    link: ""
  },
  {
    name: "Leetcode Weekly 100",
    platform: "LeetCode",
    rank: "101",
    prize: "Laptop",
    link: ""
  },
  

]



export { AllBadges, AllHackathons, PlatFormIUse, CompetitionNames };
