// Simulated RAG Knowledge Base for Career Assistance

export interface SuggestedQuestion {
  id: string;
  category: string;
  question: string;
  tags: string[];
}

export const questionCategories = [
  {
    id: "resume",
    name: "Resume Improvement",
    icon: "FileEdit",
    color: "bg-blue-500"
  },
  {
    id: "career",
    name: "Career Growth",
    icon: "TrendingUp",
    color: "bg-green-500"
  },
  {
    id: "interview",
    name: "Interview Prep",
    icon: "MessageSquare",
    color: "bg-purple-500"
  },
  {
    id: "industry",
    name: "Industry Insights",
    icon: "Building",
    color: "bg-orange-500"
  },
  {
    id: "learning",
    name: "Learning & Development",
    icon: "BookOpen",
    color: "bg-teal-500"
  },
  {
    id: "networking",
    name: "Networking",
    icon: "Users",
    color: "bg-pink-500"
  }
];

export const suggestedQuestions: SuggestedQuestion[] = [
  // Resume Improvement
  {
    id: "resume-1",
    category: "resume",
    question: "How can I make my resume stand out to ATS systems?",
    tags: ["ats", "keywords", "formatting"]
  },
  {
    id: "resume-2",
    category: "resume",
    question: "What are the most important sections to include in my resume?",
    tags: ["structure", "sections", "layout"]
  },
  {
    id: "resume-3",
    category: "resume",
    question: "How do I quantify my achievements effectively?",
    tags: ["metrics", "achievements", "impact"]
  },
  
  // Career Growth
  {
    id: "career-1",
    category: "career",
    question: "What skills should I develop for career advancement?",
    tags: ["skills", "advancement", "development"]
  },
  {
    id: "career-2",
    category: "career",
    question: "How do I negotiate a salary increase?",
    tags: ["salary", "negotiation", "promotion"]
  },
  {
    id: "career-3",
    category: "career",
    question: "When is the right time to change careers?",
    tags: ["career-change", "timing", "transition"]
  },
  
  // Interview Prep
  {
    id: "interview-1",
    category: "interview",
    question: "How do I prepare for behavioral interview questions?",
    tags: ["behavioral", "star-method", "preparation"]
  },
  {
    id: "interview-2",
    category: "interview",
    question: "What questions should I ask the interviewer?",
    tags: ["questions", "engagement", "research"]
  },
  {
    id: "interview-3",
    category: "interview",
    question: "How do I handle technical interview challenges?",
    tags: ["technical", "coding", "problem-solving"]
  },
  
  // Industry Insights
  {
    id: "industry-1",
    category: "industry",
    question: "What are the fastest-growing tech skills in 2024?",
    tags: ["tech-trends", "skills", "demand"]
  },
  {
    id: "industry-2",
    category: "industry",
    question: "How is AI impacting different industries?",
    tags: ["ai", "automation", "future"]
  },
  {
    id: "industry-3",
    category: "industry",
    question: "What are the salary trends in my field?",
    tags: ["salary", "market", "compensation"]
  },
  
  // Learning & Development
  {
    id: "learning-1",
    category: "learning",
    question: "What online platforms are best for skill development?",
    tags: ["platforms", "courses", "education"]
  },
  {
    id: "learning-2",
    category: "learning",
    question: "How do I create an effective learning plan?",
    tags: ["planning", "goals", "strategy"]
  },
  {
    id: "learning-3",
    category: "learning",
    question: "What certifications are most valuable in my field?",
    tags: ["certifications", "credentials", "value"]
  },
  
  // Networking
  {
    id: "networking-1",
    category: "networking",
    question: "How do I build a professional network effectively?",
    tags: ["networking", "relationships", "building"]
  },
  {
    id: "networking-2",
    category: "networking",
    question: "What's the best way to use LinkedIn for career growth?",
    tags: ["linkedin", "social-media", "branding"]
  },
  {
    id: "networking-3",
    category: "networking",
    question: "How do I maintain professional relationships?",
    tags: ["relationships", "maintenance", "follow-up"]
  }
];

// Simulated RAG Knowledge Base Responses
export const knowledgeBase = {
  resume: {
    ats: `To make your resume ATS-friendly:
    
    **Key Strategies:**
    • Use standard section headers (Experience, Education, Skills)
    • Include relevant keywords from job descriptions
    • Use simple, clean formatting without complex graphics
    • Save as both PDF and Word formats
    • Use standard fonts (Arial, Calibri, Times New Roman)
    
    **ATS Optimization Tips:**
    • Include specific job titles and company names
    • Use bullet points instead of paragraphs
    • Spell out acronyms at least once
    • Include both hard and soft skills mentioned in job postings`,
    
    structure: `Essential resume sections in order:
    
    **Must-Have Sections:**
    1. Contact Information
    2. Professional Summary/Objective
    3. Work Experience
    4. Education
    5. Skills
    
    **Optional Sections (when relevant):**
    • Certifications
    • Projects
    • Publications
    • Languages
    • Volunteer Work
    
    **Pro Tip:** Tailor section order based on your strongest qualifications for each role.`,
    
    metrics: `Quantifying achievements makes your impact clear:
    
    **Use Numbers When Possible:**
    • "Increased sales by 25% over 6 months"
    • "Managed a team of 12 developers"
    • "Reduced processing time by 40%"
    
    **Framework for Impact:**
    • Action Verb + Metric + Result + Timeframe
    • Example: "Implemented new CRM system, reducing customer response time by 50% within 3 months"
    
    **When Numbers Aren't Available:**
    • Focus on scope and scale
    • Mention technologies, tools, or processes used
    • Describe challenges overcome`
  },
  
  career: {
    skills: `High-demand skills for career advancement:
    
    **Technical Skills (Role-Dependent):**
    • Data Analysis & Visualization
    • AI/Machine Learning Basics
    • Cloud Computing (AWS, Azure, GCP)
    • Project Management Tools
    
    **Universal Skills:**
    • Communication & Presentation
    • Leadership & Team Management
    • Problem-Solving & Critical Thinking
    • Adaptability & Learning Agility
    
    **Emerging Skills:**
    • Digital Literacy
    • Emotional Intelligence
    • Cross-Cultural Competence
    • Sustainability Awareness`,
    
    salary: `Salary negotiation best practices:
    
    **Preparation Phase:**
    • Research market rates for your role and location
    • Document your achievements and contributions
    • Understand your company's compensation structure
    • Practice your pitch with specific examples
    
    **Negotiation Strategy:**
    • Lead with value, not personal needs
    • Propose a range rather than a single number
    • Consider total compensation package
    • Be prepared to negotiate timeline if immediate increase isn't possible
    
    **Key Timing:**
    • During performance reviews
    • After completing major projects
    • When taking on additional responsibilities`
  },
  
  interview: {
    behavioral: `Master behavioral interviews with the STAR method:
    
    **STAR Framework:**
    • **Situation:** Set the context
    • **Task:** Explain your responsibility
    • **Action:** Describe what you did
    • **Result:** Share the outcome
    
    **Common Behavioral Questions:**
    • "Tell me about a time you faced a challenge"
    • "Describe a time you showed leadership"
    • "How do you handle conflict?"
    • "Give an example of when you failed"
    
    **Preparation Tips:**
    • Prepare 5-7 stories covering different scenarios
    • Practice out loud to sound natural
    • Include specific metrics and outcomes
    • Show growth and learning from experiences`,
    
    questions: `Smart questions to ask interviewers:
    
    **About the Role:**
    • "What does success look like in this position?"
    • "What are the biggest challenges facing the team?"
    • "How do you measure performance?"
    
    **About Growth:**
    • "What opportunities exist for professional development?"
    • "What is the typical career path for this role?"
    • "How does the company support learning new skills?"
    
    **About Culture:**
    • "How would you describe the team dynamics?"
    • "What do you enjoy most about working here?"
    • "How does the company handle work-life balance?"`
  }
};

export const getRAGResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  // Keyword matching for different topics
  if (message.includes('ats') || message.includes('applicant tracking')) {
    return knowledgeBase.resume.ats;
  }
  
  if (message.includes('resume structure') || message.includes('resume sections')) {
    return knowledgeBase.resume.structure;
  }
  
  if (message.includes('quantify') || message.includes('metrics') || message.includes('achievements')) {
    return knowledgeBase.resume.metrics;
  }
  
  if (message.includes('skills') && message.includes('develop')) {
    return knowledgeBase.career.skills;
  }
  
  if (message.includes('salary') || message.includes('negotiate')) {
    return knowledgeBase.career.salary;
  }
  
  if (message.includes('behavioral') || message.includes('star method')) {
    return knowledgeBase.interview.behavioral;
  }
  
  if (message.includes('questions') && message.includes('interviewer')) {
    return knowledgeBase.interview.questions;
  }
  
  // General career guidance
  return `Thank you for your question! I'd be happy to help with your career development. 

**Based on current industry trends, here are some key insights:**

• **Market Focus:** Employers are prioritizing candidates with both technical skills and strong communication abilities
• **Skill Development:** Consider focusing on data literacy, digital collaboration tools, and adaptability
• **Career Strategy:** Build a portfolio of diverse experiences that demonstrate problem-solving and innovation

**Next Steps:**
• Review your professional goals and current skill gaps
• Network with professionals in your target roles
• Stay updated on industry trends and emerging technologies
• Consider pursuing relevant certifications or training

Would you like me to provide more specific guidance on any particular aspect of your career development?`;
};