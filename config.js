/* Sam Tech Builds — single source of truth for contact details, pricing and content.
   Edit values here; index.html and script.js read from window.SITE. */
window.SITE = {
  contact: {
    email: "mdsham1403@gmail.com",
    // ⚠ PLACEHOLDER — REPLACE BEFORE LAUNCH. No WhatsApp number existed in the project.
    // Country code + number, digits only, no "+" or spaces (e.g. "919876543210").
    // While this is a placeholder, every WhatsApp button is hidden automatically.
    whatsapp: "91XXXXXXXXXX",
    whatsappMessage: "Hi Sam Tech Builds, I'd like to discuss a project.",
    github: "https://github.com/MdSham1403",
    linkedin: "https://www.linkedin.com/in/md-shameer/",
    location: "Chennai, Tamil Nadu, India"
  },

  services: [
    { icon: "web", title: "Website Development", service: "Website Development",
      blurb: "Business websites, landing pages, portfolio websites, and responsive web experiences." },
    { icon: "app", title: "Custom Web Applications", service: "Custom Web Applications",
      blurb: "Business tools, internal management systems, trackers, and custom application development." },
    { icon: "chart", title: "Excel Automation & Dashboards", service: "Excel Automation & Dashboards",
      blurb: "Automated reporting, MIS dashboards, Excel workflows, and data visualization." },
    { icon: "auto", title: "Business Process Automation", service: "Business Process Automation",
      blurb: "Workflow optimization, repetitive task automation, and operational tools." },
    { icon: "api", title: "API & Chatbot Integration", service: "API & Chatbot Integration",
      blurb: "API integrations, chatbot functionality, and connecting different business systems." },
    { icon: "hex", title: "Digital Solutions", service: "Other",
      blurb: "Tailored technology solutions based on individual business requirements." }
  ],

  // links: only real, verified URLs. type "live" = hosted demo, "code" = source repository.
  // A project with no links renders as a card without a link. preview = CSS preview style.
  projects: [
    { featured: true, name: "UAM InsightX", kind: "Portfolio project", preview: "dash",
      tags: ["Flask", "React"],
      desc: "Excel reporting and analytics dashboard that handles UAM operational reporting and visual insights.",
      stats: [["53,880", "Total records"], ["40,343", "Completed"], ["13,537", "Pending"]],
      links: [] },
    { featured: true, name: "MoviezHub", kind: "Portfolio project", preview: "stream",
      tags: ["Django", "HLS", "Cloudinary", "Bunny"],
      desc: "Movie streaming web application using Cloudinary and Bunny for media storage and streaming infrastructure, with adaptive HLS playback.",
      links: [{ type: "live", label: "View Live Project", url: "https://moviezhub14.up.railway.app/" }] },
    { featured: true, name: "BizFlow", kind: "Portfolio project", preview: "flow",
      tags: ["React", "Vite", "Supabase"],
      desc: "Business workflow application designed to organise and manage business operations.",
      links: [] },
    { featured: true, name: "UAM Connect", kind: "Portfolio project", preview: "mobile",
      tags: ["Progressive Web App"],
      desc: "Private, mobile-first team coordination app focused on operational roles and internal communication.",
      links: [] },
    { name: "Multiplayer Mini-Games Platform", kind: "Portfolio project", preview: "grid",
      tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      desc: "Real-time multiplayer gaming platform with live game rooms, leaderboards, and an admin panel.",
      links: [{ type: "live", label: "View Live Project", url: "https://minigames-fawn-theta.vercel.app/" }] },
    { name: "Multi-Tenant Restaurant SaaS", kind: "Portfolio project", preview: "dash",
      tags: ["Django", "React", "PostgreSQL"],
      desc: "POS and restaurant management system with multiple tenants, staff tracking, session ledgers, menu management, and table billing.",
      links: [{ type: "live", label: "View Live Project", url: "https://posprosystem.netlify.app/" }] },
    { name: "TubeGrab — YouTube Downloader", kind: "Portfolio project", preview: "stream",
      tags: ["React", "Node.js", "yt-dlp"],
      desc: "Clean web UI for downloading YouTube videos in multiple formats, with an Express, yt-dlp and ffmpeg backend.",
      links: [{ type: "live", label: "View Live Project", url: "https://yttubegrab.netlify.app/" }] },
    { name: "Ops Performance Tracker", kind: "Portfolio project", preview: "dash",
      tags: ["React Context", "Recharts", "IndexedDB"],
      desc: "Operations analytics dashboard that reads large daily spreadsheet logs to flag SLA breaches and track turnaround time (TAT).",
      links: [{ type: "live", label: "View Live Project", url: "https://ituamdashboard.netlify.app/" }] }
  ],

  skills: [
    { icon: "code", title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Vite"] },
    { icon: "server", title: "Backend", items: ["Python", "Flask", "Django", "REST APIs"] },
    { icon: "db", title: "Database & Cloud", items: ["Supabase", "Firebase", "SQL", "Cloudinary"] },
    { icon: "auto", title: "Automation & Analytics", items: ["Excel", "Advanced Excel", "Data Reporting", "MIS Dashboards", "Workflow Automation"] },
    { icon: "tool", title: "Development Tools", items: ["Git", "GitHub", "VS Code", "Postman"] }
  ],

  process: [
    { title: "Understand", text: "Understand the business requirement and objectives." },
    { title: "Plan", text: "Define the solution, features, and implementation approach." },
    { title: "Build", text: "Design, develop, and test the solution." },
    { title: "Deliver", text: "Deploy the solution and provide necessary support." }
  ],

  // Prices are kept exactly as specified. Do not change without the owner's approval.
  pricing: {
    note: "Final pricing depends on project requirements, scope, and complexity.",
    items: [
      { name: "Landing Page", tag: "Website", service: "Website Development", price: "₹1,999–₹4,999" },
      { name: "Business Website", tag: "Website", service: "Website Development", price: "₹4,999+" },
      { name: "Student Tracker", tag: "Tracker", service: "Custom Web Applications", price: "₹1,999" },
      { name: "Inventory Tracker", tag: "Tracker", service: "Custom Web Applications", price: "₹2,499" },
      { name: "Excel Automation", tag: "Automation", service: "Excel Automation & Dashboards", price: "₹1,999" },
      { name: "MIS Dashboard", tag: "Dashboard", service: "Excel Automation & Dashboards", price: "₹2,999" },
      { name: "Monthly Maintenance", tag: "Support", service: "Other", price: "₹999" }
    ]
  }
};
