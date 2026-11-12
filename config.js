/* Sam Tech Builds — single source of truth for contact details, pricing and content.
   Edit values here; index.html and script.js read from window.SITE. */
window.SITE = {
  contact: {
    email: "samtechbuilds@gmail.com",
    // Country code + number, digits only, no "+" or spaces. If invalid, WhatsApp buttons hide automatically.
    whatsapp: "917358680064",
    whatsappMessage: "Hi Sam Tech Builds, I'd like to discuss a project.",
    github: "https://github.com/MdSham1403",
    linkedin: "https://www.linkedin.com/in/samtechbuilds/",
    location: "Chennai, Tamil Nadu, India"
  },

  // Three primary specialisations.
  services: [
    { icon: "web", title: "Web Development", service: "Web Development",
      blurb: "Fast, responsive websites that present your business clearly and turn visitors into enquiries.",
      items: ["Business websites", "Landing pages", "Portfolio websites", "Responsive development", "Website redesign", "Contact and enquiry integrations"] },
    { icon: "chart", title: "Dashboards & Data Analytics", service: "Dashboards & Data Analytics",
      blurb: "Turn scattered spreadsheets into clear dashboards and reports you can act on.",
      items: ["Excel dashboards", "MIS reporting", "Sales and inventory tracking", "Data visualization", "Automated reporting", "Custom reporting applications"] },
    { icon: "auto", title: "Business Automation & Custom Software", service: "Business Automation & Custom Software",
      blurb: "Custom tools that replace repetitive manual work and keep your operations in one place.",
      items: ["Business management applications", "Workflow automation", "Enquiry and customer management", "Custom admin dashboards", "API integrations and AI features", "Automated notifications"] }
  ],
  additional: ["Logo and branding design", "Social media creatives", "Digital posters", "Google Business Profile setup", "Basic SEO", "Website maintenance and technical support", "AI chatbot integration", "Telegram bot integration", "Digital invitations and personalized photo frames"],

  // Featured software products (live demos). Feature lists are the intended scope: delete anything the app does not actually do.
  featured: [
    { key: "cf", accent: "#8b5cf6", name: "CentreFlow", category: "Education Management System",
      tagline: "Everything an education centre needs to manage its daily operations.",
      url: "https://centreflow.netlify.app/",
      desc: "A student and education centre management application that brings enquiries, admissions, student records, fees, attendance and reporting together.",
      problem: "Education centres often track enquiries, admissions, fees and attendance in separate notebooks and spreadsheets, so follow-ups slip and balances are hard to see.",
      solution: "One application where an enquiry becomes an admission, the student profile keeps its history, and fees, attendance and reports are all in the same place.",
      highlights: ["Operational dashboard and KPIs", "Enquiry and follow-up tracking", "Enquiry-to-admission conversion", "Fee collection with partial payments", "Printable fee receipts", "Batch-wise attendance"],
      features: ["Operational dashboard and KPIs", "Student enquiry management", "Follow-up tracking", "Enquiry-to-admission conversion", "Student profiles and activity history", "Fee collection and partial payments", "Outstanding balance tracking", "Printable fee receipts", "Batch-wise attendance management", "Reports and CSV exports"],
      tech: ["React", "Vite", "TypeScript", "localStorage"] },
    { key: "sp", accent: "#38d9c8", name: "StockPilot", category: "Inventory & Sales Management",
      tagline: "Smarter inventory control. Simpler sales management.",
      url: "https://salesstockpilot.netlify.app/",
      desc: "A business inventory and sales application for managing products, suppliers, customers, stock movements, invoices and sales performance.",
      problem: "Small businesses lose track of stock, miss low-stock items and struggle to connect what was sold with what is left and what it earned.",
      solution: "Products, stock movements, suppliers, customers and invoices live together, so every sale updates stock and the reports show sales, inventory and profit.",
      highlights: ["Business dashboard and KPIs", "Product and SKU management", "Stock-in, stock-out and adjustments", "Low-stock alerts", "Multi-item sales invoices", "Sales, inventory and profit reports"],
      features: ["Business dashboard and KPIs", "Product and SKU management", "Stock-in, stock-out and adjustments", "Inventory movement history", "Low-stock alerts", "Supplier management", "Customer management", "Multi-item sales invoices", "Payment tracking", "Invoice printing", "Sales, inventory and profit reports"],
      tech: ["React", "Vite", "TypeScript", "localStorage"] },
    { key: "op", accent: "#7fb7ff", name: "OpsPulse MIS", category: "Operations Analytics & MIS Reporting",
      tagline: "Transform operational data into actionable business insights.",
      url: "https://opspulsemis.netlify.app/",
      desc: "An operations analytics and MIS reporting application that imports existing records, validates the data, analyses performance and generates reports.",
      problem: "Operational data sits in CSV and Excel files that are slow to clean, easy to get wrong and hard to turn into a management report.",
      solution: "Import the file you already have, map columns, catch bad and duplicate rows before they count, then read performance in dashboards and export reports.",
      highlights: ["Operational KPI dashboard", "CSV and Excel imports with column mapping", "Data validation and duplicate detection", "Employee and department performance", "SLA analytics", "CSV, Excel and printable exports"],
      features: ["Operational KPI dashboard", "CSV and Excel imports", "Import preview and column mapping", "Data validation", "Duplicate detection", "Rejected-row reports", "Operational records management", "Search, filtering and sorting", "Employee and department performance", "SLA analytics", "Management reports", "CSV, Excel and printable exports"],
      tech: ["React", "Vite", "TypeScript"] }
  ],
  compare: [
    { name: "CentreFlow", manages: "Education-centre operations and student information.", start: "Enquiries and admissions.", out: "Fee receipts, attendance and follow-up records." },
    { name: "StockPilot", manages: "Products, inventory movements and sales.", start: "Stock and sales entered as they happen.", out: "Invoices and sales, stock and profit reports." },
    { name: "OpsPulse MIS", manages: "Analyses existing operational records into management insights.", start: "CSV or Excel files you already have.", out: "KPI dashboards, SLA analytics and exports." }
  ],

  // Status is part of "kind". Only live demo links that exist are listed. Confirm statuses before launch.
  projects: [
    { featured: true, name: "UAM InsightX", kind: "Personal project · Prototype", preview: "dash",
      tags: ["Flask", "React"],
      desc: "Excel reporting and analytics dashboard that handles UAM operational reporting and visual insights.",
      stats: [["53,880", "Total records"], ["40,343", "Completed"], ["13,537", "Pending"]],
      links: [] },
    { featured: true, name: "MoviezHub", kind: "Personal project · Live demo", preview: "stream",
      tags: ["Django", "HLS", "Cloudinary", "Bunny"],
      desc: "Movie streaming web application using Cloudinary and Bunny for media storage and streaming infrastructure, with adaptive HLS playback.",
      links: [{ type: "live", label: "View Live Project", url: "https://moviezhub14.up.railway.app/" }] },
    { featured: true, name: "BizFlow", kind: "Personal project · Prototype", preview: "flow",
      tags: ["React", "Vite", "Supabase"],
      desc: "Business workflow application designed to organise and manage business operations.",
      links: [] },
    { featured: true, name: "UAM Connect", kind: "Personal project · In planning", preview: "mobile",
      tags: ["Progressive Web App", "React", "Supabase"],
      desc: "Private, mobile-first team coordination app focused on operational roles and internal communication.",
      links: [] },
    { name: "Multiplayer Mini-Games Platform", kind: "Personal project · Live demo", preview: "grid",
      tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      desc: "Real-time multiplayer gaming platform with live game rooms, leaderboards, and an admin panel.",
      links: [{ type: "live", label: "View Live Project", url: "https://minigames-fawn-theta.vercel.app/" }] },
    { name: "Multi-Tenant Restaurant SaaS", kind: "Personal project · Live demo", preview: "dash",
      tags: ["Django", "React", "PostgreSQL"],
      desc: "POS and restaurant management system with multiple tenants, staff tracking, session ledgers, menu management, and table billing.",
      links: [{ type: "live", label: "View Live Project", url: "https://posprosystem.netlify.app/" }] },
    { name: "TubeGrab — YouTube Downloader", kind: "Personal project · Live demo", preview: "stream",
      tags: ["React", "Node.js", "yt-dlp"],
      desc: "Clean web UI for downloading YouTube videos in multiple formats, with an Express, yt-dlp and ffmpeg backend.",
      links: [{ type: "live", label: "View Live Project", url: "https://yttubegrab.netlify.app/" }] },
    { name: "Ops Performance Tracker", kind: "Personal project · Live demo", preview: "dash",
      tags: ["React Context", "Recharts", "IndexedDB"],
      desc: "Operations analytics dashboard that reads large daily spreadsheet logs to flag SLA breaches and track turnaround time (TAT).",
      links: [{ type: "live", label: "View Live Project", url: "https://ituamdashboard.netlify.app/" }] }
  ],

  skills: [
    { icon: "code", title: "Frontend Development", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Vite", "Responsive Web Design", "UI/UX Implementation"] },
    { icon: "server", title: "Backend & Application Development", items: ["Python", "Flask", "Django", "Node.js Fundamentals", "REST APIs", "Authentication & Authorization", "CRUD Operations"] },
    { icon: "db", title: "Database, Cloud & Storage", items: ["Supabase", "Firebase", "SQL", "PostgreSQL", "Cloudinary", "Netlify"] },
    { icon: "chart", title: "Data Analytics & BI", items: ["Microsoft Excel", "Advanced Excel", "MIS Reporting", "Interactive Dashboards", "Data Visualization", "Business Performance Tracking", "Data Cleaning & Processing", "Automated Reporting"] },
    { icon: "auto", title: "Automation & AI Integrations", items: ["Python Automation", "Workflow Automation", "AI API Integration", "LLM Integration", "AI Chatbot Integration", "Telegram Bot Integration", "Third-Party API Integration"] },
    { icon: "tool", title: "Development & Deployment Tools", items: ["Git", "GitHub", "Visual Studio Code", "Postman", "Claude Code", "Netlify Deployment", "Application Debugging"] },
    { icon: "hex", title: "Additional Digital Capabilities", items: ["Website SEO Fundamentals", "Google Business Profile Setup", "Digital Branding", "Graphic Design", "Website Maintenance", "IT Technical Support"] }
  ],

  process: [
    { title: "Discover", text: "Understand your business, requirements and goals." },
    { title: "Plan", text: "Define the solution, scope, features and estimated timeline." },
    { title: "Build", text: "Design, develop and test the solution." },
    { title: "Deliver & Support", text: "Deploy the solution and provide agreed post-delivery support." }
  ],

  // Introductory prices and scope are editable here. Confirm the scope limits before launch.
  pricing: {
    note: "These are introductory starting prices, not fixed quotations. Final pricing depends on your requirements. Hosting, domain names, paid third-party services and revisions beyond the agreed rounds are not included unless stated in your quote.",
    items: [
      { name: "Landing Page", tag: "Web", service: "Web Development", price: "From ₹2,999", detail: "One responsive page with an enquiry form. One revision round.", cta: "Get this started" },
      { name: "Portfolio Website", tag: "Web", service: "Web Development", price: "From ₹3,999", detail: "Up to five responsive pages. Two revision rounds.", cta: "Get this started" },
      { name: "Business Website", tag: "Web", service: "Web Development", price: "From ₹5,999", detail: "Up to eight pages, enquiry integration and basic SEO setup. Two revision rounds.", cta: "Get this started" },
      { name: "Excel Dashboard", tag: "Analytics", service: "Dashboards & Data Analytics", price: "From ₹1,999", detail: "Cleaned data, summary dashboard, charts and filters built on your Excel data.", cta: "Get this started" },
      { name: "Custom Software", tag: "Software", service: "Business Automation & Custom Software", price: "Request a quote", detail: "Scoped after a requirements discussion.", cta: "Request a quote" },
      { name: "Business Automation", tag: "Automation", service: "Business Automation & Custom Software", price: "Request a quote", detail: "Scoped around the workflow you want to automate.", cta: "Request a quote" }
    ]
  },

  faq: [
    ["What types of websites do you build?", "Business websites, landing pages and portfolio websites, plus redesigns of existing sites. All are built to work on phones and desktops."],
    ["Can you create a website for my small business?", "Yes. Small businesses are a good fit. We start with what you need customers to do, such as call, enquire or visit, and build around that."],
    ["Do you build custom business applications?", "Yes. These include enquiry and customer management tools, admin dashboards and workflow apps. Scope and price are agreed after a requirements discussion."],
    ["Can you automate my Excel reporting?", "In most cases, yes. If your reports repeat the same steps each week or month, those steps can usually be automated. Share a sample and we will tell you what is realistic."],
    ["Can you create dashboards for my business?", "Yes. We build Excel dashboards and web-based reporting dashboards for sales, inventory, operations and similar data."],
    ["Do you provide website maintenance?", "Yes, as agreed support after delivery. What it covers and what it costs is confirmed in your quote."],
    ["How long does a project take?", "It depends on scope. We give an estimated timeline in the plan before work starts, and tell you if anything changes."],
    ["How do I request a quotation?", "Send the enquiry form below or message us on WhatsApp with a short description. We reply with questions or a proposed scope and price."],
    ["Do you work with remote clients?", "Yes. We are based in Chennai and work with clients across India remotely, using chat, calls and shared files."],
    ["Can I request custom features?", "Yes. Describe what you need and we will say whether it fits the scope, needs a separate quote, or is better done another way."]
  ]
};
