const shadows = [
  {
    name: "Google Docs",
    shadow: "0 0 0 0.75pt #d1d1d1, 0 0 3pt 0.75pt #ccc",
    border: "0",
  },
  {
    name: "Google - Login",
    shadow:
      "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
    border: "0",
  },
  {
    name: "Google - Notification",
    shadow:
      "0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.2)",
    border: "0",
  },
  {
    name: "Google - Card",
    shadow: "0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)",
    border: "0",
  },
  {
    name: "Udacity - Chapter",
    shadow: "0 0 20px 0 rgba(0, 0, 0, 0.12)",
    border: "0",
  },
  {
    name: "Udacity - Button",
    shadow: "12px 15px 20px rgba(0, 0, 0, 0.1)",
    border: "0",
  },
  {
    name: "Udacity - Testimonial",
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
    name: "Mdlblog - Card",
    shadow: "0 2px 5px rgba(0, 0, 0, 0.4)",
    border: "0",
  },
  {
    name: "Android.com - Slider",
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
    name: "Medium - Post",
    shadow: "0 1px 4px rgba(0,0,0,.04)",
    border: "1px solid rgba(0,0,0,.09)",
  },
  {
    name: "Medium - Card",
    shadow: "0 4px 2px -2px rgba(0,0,0,.05)",
    border: "0",
  },
  {
    name: "Testmysite.io",
    shadow: "0 0 25px rgba(0,0,0,.05)",
    border: "1px solid #f1f4ff",
  },
  {
    name: "Flipkart - Search",
    shadow: "0 2px 4px 0 rgba(0, 0, 0, 0.23)",
    border: "0",
  },
  {
    name: "Linkedin - Post",
    shadow: "0 0 0 1px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2)",
    border: "0",
  },
  {
    name: "Digitalocean",
    shadow: "0 2px 4px rgba(3,27,78,.06)",
    border: "1px solid #e5e8ed",
  },
  {
    name: "Telegram - Login",
    shadow:
      "0 1px 1px rgba(97,127,152,.2), 1px 0 0 rgba(97,127,152,.1), -1px 0 0 rgba(97,127,152,.1)",
    border: "0",
  },
  {
    name: "linkedin - Home",
    shadow: "0 0 0 1px rgba(0,0,0,0.15), 0 4px 6px rgba(0,0,0,0.2)",
    border: "none",
  },
  {
    name: "MaterialUi - Button",
    shadow: "0 2px 5px 0 rgba(0, 0, 0, 0.225)",
    border: "0",
  },
  {
    name: "Android.com - Android 10",
    shadow: "4px 12px 47px 0 rgba(0,0,0,.1)",
    border: "0",
  },
  {
    name: "Github - Button",
    shadow: "0 0 0 .2em rgba(3,102,214,.3)",
    border: "0",
  },
  {
    name: "Spotify - Login",
    shadow: "1px 0px 11px 6px rgba(0,0,0,0.49)",
    border: "0",
  },
  {
    name: "Instagram - Login",
    shadow: "1px 0px 11px 6px rgba(0,0,0,0.49)",
    border: "0",
  },
  {
    name: "Airbnb",
    shadow: "0 16px 40px rgba(0,0,0,0.12)",
    border: "0",
  },
  {
    name: "Anime.to",
    shadow: "0 0 10px 0 rgba(0, 0, 0, 0.15)",
    border: "0",
  },
  {
    name: "Zeit",
    shadow: "rgba(0, 0, 0, 0.12) 0px 5px 10px 0px",
    border: "0",
  },
  {
    name: "Firebase",
    shadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)",
    border: "1px solid #eceff1",
  },
  {
    name: "Twitter - Button",
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
    name: "Udemy",
    shadow: "0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1)",
    border: "0",
  },
  {
    name: "Netflix",
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
    name: "Amazon - Button",
    shadow: " 0 2px 5px rgba(0,0,0,0.54), 0 12px 3px rgba(0,0,0,0.32)",
    border: "0",
  },
  {
    name: "Npmjs.com - Button",
    shadow: "inset 4px 4px 0 #fff, 7px 7px 0 rgba(128, 83, 35, 0.2)",
    border: "3px solid #000",
  },
  {
    name: "Glitch",
    shadow: "4px 4px #c3c3c3",
    border: "1px solid #c3c3c3",
  },
  {
    name: "Codementor",
    shadow: "0 6px 12px 0 rgba(51,51,51,0.1)",
    border: "1px solid #e8f5f9",
  },
  {
    name: "Netlify",
    shadow: "0 0 0 1px rgba(255,255,255,.1), 0 2px 4px 0 rgba(14,30,37,.12)",
    border: "0",
  },
  {
    name: "Codepen",
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
    name: "UIkit",
    shadow: "0 5px 15px rgba(0,0,0,0.08)",
    border: "0",
  },
  {
    name: "Leaf",
    shadow: "0px 1px 2px 1px rgba(0,0,0,0.12)",
    border: "0",
  },
  {
    name: "Materialize CSS",
    shadow:
      "0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)",
    border: "0",
  },
  {
    name: "Google Search",
    shadow: "0 4px 6px 0 rgba(32,33,36,0.28)",
    border: "0",
  },
  {
    name: "Gaana.com",
    shadow: "1px 0px 11px 6px rgba(0,0,0,0.49)",
    border: "0",
  },
  {
    name: "Aws",
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
    border: "1px solid #ff0000",
  },
  {
    name: "Facebook - Button",
    shadow: "0 3px 8px rgba(0, 0, 0, .3)",
    border: "0 solid",
  },
  {
    name: "Youtube - Search",
    shadow: "rgba(0, 0, 0, 0) 0px 1px 2px 0px inset",
    border: "1px solid rgb(204, 204, 204)",
  },
  {
    name: "Whatsapp web",
    shadow: "0 2px 5px 0 rgba(0,0,0,0.26), 0 2px 10px 0 rgba(0,0,0,0.16)",
    border: "0",
  },
  {
    name: "Zapier",
    shadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
    border: " 1px solid #e6e6e6",
  },
  {
    name: "Auth0",
    shadow:
      "rgba(0, 0, 0, 0.05) 0px 0.1rem 0.3rem, rgba(0, 0, 0, 0.05) 0px 0.1rem 0.2rem, rgba(0, 0, 0, 0.05) 0px 0.5rem 1.5rem",
    border: "0",
  },
  {
    name: "Hacktoberfest",
    shadow: "0px 50px 100px rgba(0,0,0,0.2)",
    border: "0",
  },
  {
    name: "Slack",
    shadow: "0 1rem 2rem rgba(0,0,0,.1)",
    border: "0",
  },
  {
    name: "Stackoverflow",
    shadow: "inset 0 1px 0 #66bfff",
    border: "1px solid #07c",
  },
  {
    name: "Callofduty.com",
    shadow: "inset 0px 0px 5px #81898c",
    border: "1px solid #81898c",
  },
  {
    name: "linkedin - Login",
    shadow:
      "inset 0 0 0 1px #0073b1, inset 0 0 0 2px rgba(0,0,0,0), inset 0 0 0 1px rgba(0,0,0,0)",
    border: "0",
  },
  {
    name: "Facebook - Signup",
    shadow: "inset 0 1px 1px #a4e388",
    border: "1px solid",
  },
  {
    name: "jira",
    shadow: "0 4px 8px -2px rgba(9,30,66,0.25), 0 0 1px rgba(9,30,66,0.31)",
    border: "0",
  },
  {
    name: "Bing - Searchbar",
    shadow: "0 0 0 1px rgba(0,0,0,.1), 0 2px 4px 1px rgba(0,0,0,.18)",
    border: "0",
  },
  {
    name: "Dribbble - Search",
    shadow: "0px 8px 20px rgba(0,0,0,0.06)",
    border: "0",
  },
  {
    name: "Neumorphism",
    shadow: "11px 11px 22px #b5b5b5, -11px -11px 22px #ffffff",
    border: "0",
  },
  {
    name: "Starbucks",
    shadow:
      "0 11px 15px 0 rgba(0, 0, 0, 0.1), 0 9px 46px 8px rgba(0, 0, 0, 0.06), 0 24px 38px 3px rgba(0, 0, 0, 0.07)",
    border: "1.5px solid rgba(0, 0, 0, .12)",
  },
  {
    name: "Digitalocean",
    shadow: "0 2px 4px rgba(1,14,40,.05);",
    border: "1px solid #e5e5e5",
  },
  {
    name: "Paper",
    shadow: "inset 5px 5px 50px -10px rgba(158,155,158,0.15)",
    border: "50px",
  },
  {
    name: "Github Marketplace",
    shadow: "0 4px 10px 1px rgba(0,0,0,.2)",
    border: "0",
  },
  {
    name: "Zomato - Search",
    shadow: "rgba(28, 28, 28, 0.08) 0px 2px 8px",
    border: "1px solid rgb(232, 232, 232)",
  },
];
export default shadows;
