const shadows = [
  {
    name: "Google docs",
    shadow: "0 0 0 0.75pt #d1d1d1, 0 0 3pt 0.75pt #ccc",
    border: "0",
  },
  {
    name: "Google Account Login",
    shadow:
      "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
    border: "0",
  },
  {
    name: "Google Notification",
    shadow:
      "0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.2)",
    border: "0",
  },
  {
    name: "Google Cards",
    shadow: "0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)",
    border: "0",
  },
  {
    name: "Udacity Chapters",
    shadow: "0 0 20px 0 rgba(0, 0, 0, 0.12)",
    border: "0",
  },
  {
    name: "Udacity Buttons",
    shadow: "12px 15px 20px rgba(0, 0, 0, 0.1)",
    border: "0",
  },
  {
    name: "Udacity Testimonial",
    shadow:
      "0 0 4px 0 rgba(17,22,26,.16), 0 2px 4px 0 rgba(17,22,26,.08), 0 4px 8px 0 rgba(17,22,26,.08), 0 -3px #02b3e4",
    border: "0",
  },
  {
    name: "Angular",
    shadow: "0 6px 6px rgba(10,16,20,.15), 0 0 52px rgba(10,16,20,.12)",
    border: "0",
  },
  {
    name: "MDLBlog Cards",
    shadow: "0 2px 5px rgba(0, 0, 0, 0.4)",
    border: "0",
  },
  {
    name: "Android.com Slider",
    shadow: "-25px 50px 30px rgba(0,0,0,0.125)",
    border: "0",
  },
  {
    name: "I/O 2015",
    shadow:
      "0px 2px 5px 0px rgba(0,0,0,0.16), 0px 2px 5px 0px rgba(0,0,0,0.23)",
    border: "0",
  },
  {
    name: "medium post",
    shadow: "0 1px 4px rgba(0,0,0,.04)",
    border: "1px solid rgba(0,0,0,.09)",
  },
  {
    name: "medium bottom",
    shadow: "0 4px 2px -2px rgba(0,0,0,.05)",
    border: "0",
  },
  {
    name: "testmysite.io",
    shadow: "0 0 25px rgba(0,0,0,.05)",
    border: "1px solid #f1f4ff",
  },
  {
    name: "flipkart search",
    shadow: "0 2px 4px 0 rgba(0, 0, 0, 0.23)",
    border: "0",
  },
  {
    name: "LinkedIn Post",
    shadow: "0 0 0 1px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2)",
    border: "0",
  },
  {
    name: "Digital Ocean",
    shadow: "0 2px 4px rgba(3,27,78,.06)",
    border: "1px solid #e5e8ed",
  },
  {
    name: "Telegram login",
    shadow:
      "0 1px 1px rgba(97,127,152,.2), 1px 0 0 rgba(97,127,152,.1), -1px 0 0 rgba(97,127,152,.1)",
    border: "0",
  },
  {
    name: "LinkedIn Home Welcome Screen",
    shadow: "0 0 0 1px rgba(0,0,0,0.15), 0 4px 6px rgba(0,0,0,0.2)",
    border: "none",
  },
  {
    name: "Chat Button Widget",
    shadow: "0 1px 6px rgba(0,0,0,.1), 0 2px 24px rgba(0,0,0,.2)",
    border: "0",
  },
  {
    name: "Simple Material UI Button",
    shadow: "0 2px 5px 0 rgba(0, 0, 0, 0.225)",
    border: "0",
  },
  {
    name: "Android 10 Highlights",
    shadow: "4px 12px 47px 0 rgba(0,0,0,.1)",
    border: "0",
  },
  {
    name: "Github button",
    shadow: "0 0 0 .2em rgba(3,102,214,.3)",
    border: "0",
  },
  {
    name: "Rounded Box",
    shadow: "0px 3px 8px 0 rgba(219, 219, 219, 0.56)",
    border: "0",
  },
  {
    name: "colored box labels",
    shadow: "1px 1px 2px #e5e5e5",
    border: "0",
  },
  {
    name: "spotify login box shadow",
    shadow: "1px 0px 11px 6px rgba(0,0,0,0.49)",
    border: "0",
  },
  {
    name: "Instagram login box shadow",
    shadow: "1px 0px 11px 6px rgba(0,0,0,0.49)",
    border: "0",
  },
  {
    name: "AirBnb Landing Page Card",
    shadow: "0 16px 40px rgba(0,0,0,0.12)",
    border: "0",
  },
  {
    name: "Aisha Aqeel",
    shadow: "5px 10px #888888",
    border: "1px solid",
  },
  {
    name: "Floating Button",
    shadow: "0px 17px 10px -10px rgba(0,0,0,0.4)",
    border: "1px solid",
  },
  {
    name: "Anime.to search",
    shadow: "0 0 10px 0 rgba(0, 0, 0, 0.15)",
    border: "0",
  },
  {
    name: "Solid New",
    shadow: "10px 10px #888, -10px -10px #f4f4f4, 0px 0px 5px 5px #cc6600",
    border: "0",
  },
  {
    name: "Nice and Crispy",
    shadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.5)",
    border: "0",
  },
  {
    name: "Zeit",
    shadow: "rgba(0, 0, 0, 0.12) 0px 5px 10px 0px",
    border: "0",
  },
  {
    name: "Firebase Landing Page",
    shadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)",
    border: "1px solid #eceff1",
  },
  {
    name: "Twitter Tweet Button",
    shadow: "rgba(0, 0, 0, 0.08) 0px 8px 28px",
    border: "0",
  },
  {
    name: "Waze",
    shadow:
      "0 1px 1px rgba(2,219,238,.2), 1px 0 0 rgba(5,180,223,.1), -1px 0 0 rgba(5,158,215,.1)",
    border: "0",
  },
  {
    name: "Bitbucket",
    shadow:
      "0 1px 1px rgba(38,132,255,.2), 1px 0 0 rgba(38,132,255,.1), -1px 0 0 rgba(0,81,206,.1)",
    border: "0",
  },
  {
    name: "Udemy Courses",
    shadow: "0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1)",
    border: "0",
  },
  {
    name: "Netflix Login Modal",
    shadow: "0 0 8px 0 rgba(0,0,0,.32)",
    border: "0",
  },
  {
    name: "Paytm",
    shadow:
      "0 0 15px 0 rgba(0,0,0,0.03), 0 20px 40px 10px rgba(224,224,224,0.2)",
    border: "0",
  },
  {
    name: "Google Calendar",
    shadow:
      "0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12)",
    border: "1px",
  },
  {
    name: "Inside Shadow",
    shadow: "inset 0 0 10px 0 rgba(95, 71, 71, 0.35)",
    border: "0",
  },
  {
    name: "Amazon Button",
    shadow: " 0 2px 5px rgba(0,0,0,0.54), 0 12px 3px rgba(0,0,0,0.32)",
    border: "0",
  },
  {
    name: "npm - Button",
    shadow: "inset 4px 4px 0 #fff, 7px 7px 0 rgba(128, 83, 35, 0.2)",
    border: "3px solid #000",
  },
  {
    name: "Glitch - Main Window",
    shadow: "4px 4px #c3c3c3",
    border: "1px solid #c3c3c3",
  },
  {
    name: "Codementor - Feature Card",
    shadow: "0 6px 12px 0 rgba(51,51,51,0.1)",
    border: "1px solid #e8f5f9",
  },
  {
    name: "Netlify Sign Up",
    shadow: "0 0 0 1px rgba(255,255,255,.1), 0 2px 4px 0 rgba(14,30,37,.12)",
    border: "0",
  },
  {
    name: "Dimly Lit",
    shadow: "0 0 11px rgba(33,33,33,.2)",
    border: "1px solid #ccc",
  },
  {
    name: "Codepen Material Design",
    shadow: " 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    border: "0",
  },
  {
    name: "Bulma.io",
    shadow: "0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02)",
    border: "0",
  },
  {
    name: "Spectre.css",
    shadow: "0 .25rem 1rem rgba(48,55,66,.15)",
    border: "0",
  },
  {
    name: "SemanticUI",
    shadow: "0 1px 3px 0 #d4d4d5,0 0 0 1px #d4d4d5",
    border: "0",
  },
  {
    name: "UIKit",
    shadow: "0 5px 15px rgba(0,0,0,0.08)",
    border: "0",
  },
  {
    name: "Leaf",
    shadow: "0px 1px 2px 1px rgba(0,0,0,0.12)",
    border: "0",
  },
  {
    name: "MaterializeCSS",
    shadow:
      "0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)",
    border: "0",
  },
  {
    name: "Quicken Loans Shadow",
    shadow: "0 20px 30px 0 #e5e5e5",
    border: "2px solid #2081bf",
  },
  {
    name: "Google Search Recommendation",
    shadow: "0 4px 6px 0 rgba(32,33,36,0.28)",
    border: "0",
  },
  {
    name: "gaana.com Login Box",
    shadow: "1px 0px 11px 6px rgba(0,0,0,0.49)",
    border: "0",
  },
  {
    name: "AWS Solutions Box",
    shadow: "0 1px 3px 0 rgba(0,0,0,.3), 0 0 0 1px rgba(0,0,0,.04)",
    border: "1px solid #232f3e",
  },
  {
    name: "Internet Explorer",
    shadow: "5px 5px 5px rgba(68,68,68,0.6), rgb(68,68,68),",
    border: "0",
  },
  {
    name: "Fury",
    shadow: "0px 0px 10px 4px #e0e0e0",
    border: "1px solid #daf1ff",
  },
  {
    name: "Reddit",
    shadow: "00px 17px 10px -10px #e0e0e0",
    border: "1px solid #FF0000",
  },
  {
    name: "Facebook Login Button",
    shadow: "0 3px 8px rgba(0, 0, 0, .3)",
    border: "0 solid",
  },
  {
    name: "Youtube Search",
    shadow: "rgba(0, 0, 0, 0) 0px 1px 2px 0px inset",
    border: "1px solid rgb(204, 204, 204)",
  },
  {
    name: "whatsappWeb Dropdown",
    shadow: "0 2px 5px 0 rgba(0,0,0,0.26), 0 2px 10px 0 rgba(0,0,0,0.16)",
    border: "0",
  },
  {
    name: "Zapier Homepage",
    shadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
    border: " 1px solid #e6e6e6",
  },
  {
    name: "Auth0 Homepage",
    shadow:
      "rgba(0, 0, 0, 0.05) 0px 0.1rem 0.3rem, rgba(0, 0, 0, 0.05) 0px 0.1rem 0.2rem, rgba(0, 0, 0, 0.05) 0px 0.5rem 1.5rem",
    border: "0",
  },
  {
    name: "Hacktoberfest Infobox",
    shadow: "0px 50px 100px rgba(0,0,0,0.2)",
    border: "0",
  },
  {
    name: "Slack Homepage",
    shadow: "0 1rem 2rem rgba(0,0,0,.1)",
    border: "0",
  },
  {
    name: "Stackoverflow SignUp",
    shadow: "inset 0 1px 0 #66bfff",
    border: "1px solid #07c",
  },
  {
    name: "CallOfDuty Homepage button",
    shadow: "inset 0px 0px 5px #81898c",
    border: "1px solid #81898c",
  },
  {
    name: "ING Broker PL",
    shadow: "0 3px 2px #bbb",
    border: "1px solid #bbb",
  },
  {
    name: "LinkedIn SignIn",
    shadow:
      "inset 0 0 0 1px #0073b1, inset 0 0 0 2px rgba(0,0,0,0), inset 0 0 0 1px rgba(0,0,0,0)",
    border: "0",
  },
  {
    name: "Facebook SignUp",
    shadow: "inset 0 1px 1px #a4e388",
    border: "1px solid",
  },
  {
    name: "Jira dropdown",
    shadow: "0 4px 8px -2px rgba(9,30,66,0.25), 0 0 1px rgba(9,30,66,0.31)",
    border: "0",
  },
  {
    name: "Bing Searchbar",
    shadow: "0 0 0 1px rgba(0,0,0,.1), 0 2px 4px 1px rgba(0,0,0,.18)",
    border: "0",
  },
  {
    name: "Dribbble Searchbox",
    shadow: "0px 8px 20px rgba(0,0,0,0.06)",
    border: "0",
  },
  {
    name: "Soft Neumorphism",
    shadow: "11px 11px 22px #b5b5b5, -11px -11px 22px #ffffff",
    border: "0",
  },
  {
    name: "Neon pink",
    shadow: "0 20px 50px rgba(240, 46, 170, 0.7)",
    border: "0",
  },
  {
    name: "gradient shadow",
    shadow:
      "5px 5px rgba(0, 98, 90, 0.4), 10px 10px rgba(0, 98, 90, 0.3), 15px 15px rgba(0, 98, 90, 0.2), 20px 20px rgba(0, 98, 90, 0.1), 25px 25px rgba(0, 98, 90, 0.05)",
    border: "0",
  },
  {
    name: "Classic Lamp inset Shadow",
    shadow:
      "0 -20px 15px -10px rgba(255, 255, 0, 0.3) inset, 0 20px 15px -10px rgba(255, 255, 0, 0.3) inset, 0 0 10px rgba(0, 0, 0, 0.1)",
    border: "0",
  },
  {
    name: "Upward gradient shadow",
    shadow:
      "0 5px rgba(93, 64, 55, 0.4), 0 10px rgba(93, 64, 55, 0.3), 0 15px rgba(93, 64, 55, 0.2), 0 20px rgba(93, 64, 55, 0.1), 0 25px rgba(93, 64, 55, 0.05), -5px 5px 40px rgba(100, 0, 0, 0.4);",
    border: "0",
  },
  {
    name: "Starbucks",
    shadow:
      "0 11px 15px 0 rgba(0, 0, 0, 0.1), 0 9px 46px 8px rgba(0, 0, 0, 0.06), 0 24px 38px 3px rgba(0, 0, 0, 0.07)",
    border: "1.5px solid rgba(0, 0, 0, .12)",
  },
  {
    name: "Disney +",
    shadow: "rgb(0 0 0 / 50%) 0px 0px 18px 0px)",
    border: "1px solid rgba(151, 151, 151, 0.34)",
  },
  {
    name: "Magherrita",
    shadow:
      "11px 11px 0 0 rgba(0, 0, 0, 0.9), 9px 9px 0 8px rgba(0, 0, 0, 0.06), 24px 24px 0 3px rgba(0, 0, 0, 0.09)",
    border: "2px solid rgba(255,255,0,0.8)",
  },
  {
    name: "Digital Ocean box",
    shadow: "0 2px 4px rgba(1,14,40,.05);",
    border: "1px solid #e5e5e5",
  },
  {
    name: "Paper Shadow",
    shadow: "inset 5px 5px 50px -10px rgba(158,155,158,0.15)",
    border: "50px",
  },
  {
    name: "Github MarketPlace Card",
    shadow: "0 4px 10px 1px rgba(0,0,0,.2)",
    border: "0",
  },
  {
    name: "Zomato Search",
    shadow: "rgba(28, 28, 28, 0.08) 0px 2px 8px",
    border: "1px solid rgb(232, 232, 232)",
  },
];
export default shadows;
