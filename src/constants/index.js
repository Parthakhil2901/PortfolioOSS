const navLinks = [
  { id: 1, name: "Projects", type: "finder" },
  { id: 3, name: "Contact", type: "contact" },
  { id: 4, name: "Resume", type: "resume" },
];

const navIcons = [
  { id: 1, img: "/icons/wifi.svg" },
  { id: 2, img: "/icons/search.svg" },
  { id: 3, img: "/icons/user.svg" },
  { id: 4, img: "/icons/mode.svg" },
];

const wallpapers = [
  { src: "/images/wallpaper.png", tone: "dark" },
  { src: "/images/wallpaper1.png", tone: "light" },
  { src: "/images/wallpaper2.jpg", tone: "dark" },
];

export { wallpapers };

const dockApps = [
  { id: "finder", name: "Portfolio", icon: "finder.png", canOpen: true },
  { id: "safari", name: "Articles", icon: "safari.png", canOpen: true },
  { id: "photos", name: "Gallery", icon: "photos.png", canOpen: true },
  { id: "contact", name: "Contact", icon: "contact.png", canOpen: true },
  { id: "terminal", name: "Skills", icon: "terminal.png", canOpen: true },
  { id: "trash", name: "Archive", icon: "trash.png", canOpen: false },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript"] },
  { category: "Mobile", items: ["React Native", "Expo"] },
  { category: "Styling", items: ["Tailwind CSS", "Sass", "CSS"] },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Firebase", "Supabase", "RUST"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  { category: "Dev Tools", items: ["Git", "GitHub", "Docker"] },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#111111",
    link: "https://github.com/Parthakhil2901",
  },
  {
    id: "gmail",
    text: "Email",
    icon: "/icons/gmail.svg",
    bg: "#1f2937",
    link: "mailto:akhileshshukla2901@gmail.com",
  },
  {
    id: "leetcode",
    text: "LeetCode",
    icon: "/icons/leetcode.svg",
    bg: "#0f172a",
    link: "https://leetcode.com/u/Akkhi/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/akhilesh-shukla-5b7283248/",
  },
];

const photosLinks = [
  { id: 1, icon: "/icons/gicon1.svg", title: "Library" },
  { id: 2, icon: "/icons/gicon2.svg", title: "Memories" },
  { id: 3, icon: "/icons/file.svg", title: "Places" },
  { id: 4, icon: "/icons/gicon4.svg", title: "People" },
  { id: 5, icon: "/icons/gicon5.svg", title: "Favorites" },
];

const gallery = [
  {
    id: 1,
    name: "1.jpg",
    icon: "/images/gallery/1.jpg",
    imageUrl: "/images/gallery/1.jpg",
    fileType: "img",
    kind: "file",
  },
  {
    id: 2,
    name: "2.jpg",
    icon: "/images/gallery/2.jpg",
    imageUrl: "/images/gallery/2.jpg",
    fileType: "img",
    kind: "file",
  },
  {
    id: 3,
    name: "3.jpg",
    icon: "/images/gallery/3.jpg",
    imageUrl: "/images/gallery/3.jpg",
    fileType: "img",
    kind: "file",
  },
  {
    id: 4,
    name: "4.jpg",
    icon: "/images/gallery/4.jpg",
    imageUrl: "/images/gallery/4.jpg",
    fileType: "img",
    kind: "file",
  },
  {
    id: 5,
    name: "5.jpg",
    icon: "/images/gallery/5.jpg",
    imageUrl: "/images/gallery/5.jpg",
    fileType: "img",
    kind: "file",
  },
  {
    id: 6,
    name: "6.jpg",
    icon: "/images/gallery/6.jpg",
    imageUrl: "/images/gallery/6.jpg",
    fileType: "img",
    kind: "file",
  },
  {
    id: 7,
    name: "7.jpg",
    icon: "/images/gallery/7.jpg",
    imageUrl: "/images/gallery/7.jpg",
    fileType: "img",
    kind: "file",
  },
  {
    id: 8,
    name: "8.jpg",
    icon: "/images/gallery/8.jpg",
    imageUrl: "/images/gallery/8.jpg",
    fileType: "img",
    kind: "file",
  },
  {
    id: 9,
    name: "9.webp",
    icon: "/images/gallery/9.webp",
    imageUrl: "/images/gallery/9.webp",
    fileType: "img",
    kind: "file",
  },
];

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 5,
      name: "RailNetra",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[15vh] right-20",
      children: [
        {
          id: 1,
          name: "RailNetra Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The RailNetra platform is an intelligent railway monitoring and optimization system designed to reduce congestion and improve operational efficiency across rail networks.",
            "Instead of a basic tracking system, it processes real-time data streams and applies algorithmic optimization to reduce delays by up to 20–30% in simulated scenarios.",
            "Think of it as giving railways a decision-making engine—analyzing multiple routes, predicting bottlenecks, and handling scheduling for thousands of passengers in real time.",
            "It's built using modern web technologies and optimization algorithms, ensuring fast performance, scalable architecture, and the ability to handle large-scale transportation data efficiently.",
          ],
        },
        {
          id: 2,
          name: "RailNetra",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Parthakhil2901/RailNetra",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "RailNetra.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
    {
      id: 6,
      name: "Legalese",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Legalese Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "The Legalese platform is an AI-powered legal document simplification tool designed to make complex legal text easy to understand.",
            "Instead of manually decoding lengthy contracts, it uses NLP techniques to reduce reading complexity by up to 40–60% in structured test cases.",
            "Think of it like having a legal translator—breaking down dense clauses into simple, human-readable language in seconds.",
            "It's built using modern AI/NLP pipelines and scalable backend architecture, ensuring fast processing, high accuracy, and seamless handling of large documents.",
          ],
        },
        {
          id: 2,
          name: "Legalese",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Parthakhil2901/Legalese",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Legalese.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },
    {
      id: 7,
      name: "Checkmate",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Checkmate Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Checkmate system is a smart attendance management platform designed to automate and secure attendance tracking.",
            "Instead of manual roll calls, it processes real-time inputs and reduces attendance fraud by up to 80% in controlled scenarios.",
            "Think of it like a digital invigilator—tracking presence accurately while saving hours of administrative effort.",
            "It's built with scalable backend systems and optimized data handling, ensuring reliable performance even with hundreds of concurrent users.",
          ],
        },
        {
          id: 2,
          name: "Checkmate",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Parthakhil2901/Checkmate-Advanced-Attendance-System",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Checkmate.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
    {
      id: 8,
      name: "Nexora",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Nexora Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Nexora platform is a modern productivity and digital experience system designed to streamline workflows and enhance user engagement.",
            "Instead of fragmented tools, it integrates multiple functionalities into a unified interface, improving task efficiency by up to 30% in usage testing.",
            "Think of it like a personal digital workspace—bringing together tools, insights, and automation in one place.",
            "It's built using modern full-stack technologies, ensuring fast performance, responsive design, and scalability for real-world usage.",
          ],
        },
        {
          id: 2,
          name: "Nexora",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Parthakhil2901/Nexora",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Nexora.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",

  children: [
    {
      id: 1,
      name: "Akhilesh.jpg",
      icon: "/images/profile.webp", // put your image here
      fileType: "img",
      kind: "file",
      position: "top-10 left-10",
    },
    {
      id: 2,
      name: "about.txt",
      icon: "/icons/file.svg",
      fileType: "txt",
      kind: "file",
      position: "top-10 left-32",

      // 🔥 MATCHES Text.jsx EXPECTATION
      subtitle: "About Me",

      description: [
        "Hey! I'm Akhilesh 🚀",
        "A B.Tech CSE student passionate about building impactful tech.",
        "I work across Full Stack Development, AI/ML, System Design, and DevOps.",
        "Built projects like RailNetra, Legalese, Checkmate, and Nexora.",
        "Currently focused on cracking MAANG, winning hackathons, and building scalable systems.",
        "Let’s build something crazy 🔥",
      ],
    },
  ],
};
const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [],
};

const GALLERY_LOCATION = {
  id: 5,
  type: "gallery",
  name: "Gallery",
  icon: "/images/folder.png",
  kind: "folder",
  children: gallery,
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
  gallery: GALLERY_LOCATION, // 🔥 FIXED CONNECTION
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  image: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
  INITIAL_Z_INDEX,
  WINDOW_CONFIG,
};
