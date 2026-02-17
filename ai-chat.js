// Enhanced AI Chatbot - Comprehensive Knowledge Base
const knowledgeBase = {
    // Personal Info
    name: "Ntandoyenkosi Gumede",
    email: "mazwi739@gmail.com",
    phone: "0722880633",
    linkedin: "https://www.linkedin.com/in/ntandoyenkosi-gumede-3428a3309/",
    
    // Professional Summary
    summary: "Results-driven Diploma in Informatics graduate with strong foundational skills in Business Analysis, Systems Analysis, IT Project Management, and Software Testing, and hands-on experience as a Business / Systems Analyst Intern in enterprise IT environments. Proven ability to elicit, analyse, and document functional and non-functional requirements, translate business needs into system specifications, and design system artefacts including UML diagrams. Experienced in database design and data modelling, defining business rules and validation logic, and supporting RESTful API documentation and testing. Exposure to system, integration, and user acceptance testing (UAT), as well as Agile project planning and risk identification across the full SDLC.",
    
    // Skills with percentages
    skills: {
        "Business Analyst": {
            percentage: 95,
            details: [
                "Requirements elicitation (stakeholder interviews, workshops, surveys, observation)",
                "Requirements documentation (BRD, FRD, use cases, user stories)",
                "Gap analysis and feasibility studies",
                "Business process modeling (BPMN, flowcharts)",
                "User Acceptance Testing (UAT) coordination",
                "Change management and stakeholder communication",
                "Process improvement and optimization",
                "Business case development"
            ]
        },
        "Systems Analyst": {
            percentage: 96,
            details: [
                "System design and architecture",
                "UML modeling (Use Case, Activity, Sequence, Class diagrams)",
                "Database design (ERD, normalization, data modeling)",
                "API documentation and testing (RESTful APIs, JSON)",
                "Data flow diagrams and process modeling",
                "Technical specifications documentation",
                "System integration planning",
                "Requirements traceability"
            ]
        },
        "IT Project Manager": {
            percentage: 50,
            details: [
                "Agile/Scrum methodologies",
                "Risk management and mitigation strategies",
                "Stakeholder management and communication",
                "Project planning, scheduling, and tracking",
                "Requirements traceability across project phases",
                "Documentation management and version control",
                "Supporting Agile and Waterfall methodologies",
                "Project reporting and status updates",
                "Cross-functional team collaboration"
            ]
        },
        "Java Full Stack Developer": {
            percentage: 50,
            details: [
                "Programming Languages: Java, JavaScript, SQL",
                "Backend: Core Java, OOP, Spring Boot, Hibernate, JPA",
                "Frontend: HTML5, CSS3, JavaScript, Bootstrap",
                "Web & API: RESTful APIs, JSON",
                "Databases: MySQL, PostgreSQL, Oracle",
                "Tools: IntelliJ IDEA, VS Code, Git, Maven",
                "Testing: JUnit, Postman",
                "Version Control: Git, GitHub"
            ]
        },
        "Database Administrator": {
            percentage: 60,
            details: [
                "Database design and normalization",
                "Entity Relationship Diagrams (ERD)",
                "SQL query optimization",
                "MySQL, PostgreSQL, Oracle",
                "Data modeling and schema design",
                "Database performance tuning",
                "Data integrity and validation"
            ]
        },
        "Software Tester": {
            percentage: 75,
            details: [
                "Test case creation and execution",
                "User Acceptance Testing (UAT)",
                "System testing and integration testing",
                "Test planning and strategy",
                "Bug tracking and reporting",
                "Regression testing",
                "API testing with Postman",
                "Test documentation"
            ]
        },
        "UI/UX Designer": {
            percentage: 85,
            details: [
                "User research and usability-focused design",
                "Wireframing, mockups, and prototyping",
                "User flows and information architecture",
                "Design systems and UI consistency",
                "Usability testing and iteration",
                "Responsive design principles",
                "User-centered design approach"
            ]
        }
    },
    
    // Projects
    projects: [
        {
            name: "Vehicle Information Management System (VIIMS)",
            role: "Business Analyst | System Analyst | UI/UX Designer (Intern)",
            description: "A centralized system designed to manage vehicle impoundment processes with a focus on efficiency, accuracy, and secure data handling.",
            responsibilities: [
                "Managed end-to-end vehicle impoundment workflows including capture, storage, towing, payments, release, and user management",
                "Conducted requirements gathering, analysis, and documentation",
                "Designed system architecture and database schema",
                "Created UML diagrams (Use Case, Activity, Sequence, ERD)",
                "Developed functional and technical documentation",
                "Designed UI screens and user flows aligned with business requirements",
                "Collaborated with stakeholders to validate requirements and design decisions"
            ],
            technologies: ["UML", "ERD", "Database Design", "Requirements Engineering", "UI/UX Design"]
        },
        {
            name: "GIIMS – Goods Impound Information Management System",
            role: "Business Analyst | System Analyst | UI/UX Designer (Intern)",
            description: "A system to manage impounded vehicles, including capture, storage, towing, release, and payment tracking.",
            responsibilities: [
                "Supported business analysis and process improvement for goods impound operations",
                "Participated in testing, data validation, and user acceptance testing (UAT)",
                "Documented business processes and workflows",
                "Assisted in system requirements specification"
            ],
            technologies: ["Business Process Modeling", "UAT", "Testing", "Documentation"]
        },
        {
            name: "Employee Leave Management System",
            role: "Business Analyst | System Analyst | UI/UX Designer | Frontend/Backend Developer",
            description: "A system for employees to submit leave requests, track approvals, and manage leave records efficiently.",
            responsibilities: [
                "Requirements gathering and user flow design",
                "Designed UI screens and functional specifications",
                "Supported frontend and backend implementation",
                "Test case creation and validation",
                "Developed database schema and data models",
                "Implemented business logic and validation rules"
            ],
            technologies: ["Java", "Spring Boot", "MySQL", "HTML/CSS", "JavaScript", "RESTful API"]
        }
    ],
    
    // Work Experience
    experience: {
        position: "Business/Systems Analyst Intern",
        company: "RainCloud group ",
        department: "IT Department",
        responsibilities: [
            "Collaborated with stakeholders to gather, analyze, and document functional and non-functional requirements",
            "Translated business requirements into system specifications and technical documentation",
            "Designed system architecture, database schemas (ERD), and UML diagrams",
            "Supported RESTful API documentation and testing using tools like Postman",
            "Participated in system, integration, and user acceptance testing (UAT)",
            "Contributed to Agile project planning, risk identification, and requirement traceability",
            "Designed UI/UX screens aligned with business requirements and user workflows",
            "Facilitated communication between technical teams and business stakeholders",
            "Created and maintained comprehensive project documentation"
        ]
    },
    
    // Education
    education: [
        {
            degree: "Diploma in Informatics",
            institution: "Durban University of Technology",
            status: "Completed"
        },
        {
            program: "FNB Software Developer Learnership",
            status: "Ongoing",
            focus: "Software Development, Java Programming, Full Stack Development"
        }
    ],
    
    // Core Competencies
    competencies: [
        "Requirements Engineering",
        "Business Process Analysis",
        "System Design & Architecture",
        "Database Design & Modeling",
        "UML Modeling",
        "API Testing & Documentation",
        "Agile/Scrum Methodologies",
        "Stakeholder Management",
        "Technical Documentation",
        "User Acceptance Testing",
        "Problem Solving",
        "Analytical Thinking",
        "Communication Skills",
        "Team Collaboration"
    ],
    
    // Tools & Technologies
    tools: {
        "Development": ["IntelliJ IDEA", "VS Code", "Eclipse"],
        "Version Control": ["Git", "GitHub"],
        "Build Tools": ["Maven", "Gradle"],
        "Database": ["MySQL Workbench", "PostgreSQL", "Oracle SQL Developer"],
        "API Testing": ["Postman", "Swagger"],
        "Project Management": ["JIRA", "Trello", "MS Project"],
        "Design": ["Figma", "Adobe XD", "Balsamiq"],
        "Documentation": ["MS Office Suite", "Confluence", "Draw.io"],
        "Modeling": ["Enterprise Architect", "Lucidchart", "Visual Paradigm"]
    }
};

// Enhanced response function
function getResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    
    // Greetings
    if (msg.match(/\b(hi|hello|hey|greetings|good morning|good afternoon)\b/)) {
        return `👋 Hi! I'm ${knowledgeBase.name}'s AI assistant. I can tell you about:<br><br>
        • Skills and expertise<br>
        • Project experience<br>
        • Work history<br>
        • Education & qualifications<br>
        • Tools & technologies<br>
        • Contact information<br><br>
        What would you like to know?`;
    }
    
    // Contact Information
    if (msg.match(/\b(contact|email|phone|reach|call|get in touch|linkedin|connect)\b/)) {
        return `📧 <strong>Contact Information:</strong><br><br>
        <strong>Email:</strong> ${knowledgeBase.email}<br>
        <strong>Phone:</strong> ${knowledgeBase.phone}<br>
        <strong>LinkedIn:</strong> <a href="${knowledgeBase.linkedin}" target="_blank">View Profile</a><br><br>
        Feel free to reach out for opportunities, collaborations, or inquiries!`;
    }
    
    // About / Summary
    if (msg.match(/\b(about|who|summary|background|profile|introduce)\b/)) {
        return `<strong>About ${knowledgeBase.name}</strong><br><br>
        ${knowledgeBase.summary}<br><br>
        Would you like to know more about specific skills, projects, or experience?`;
    }
    
    // All Skills Overview
    if (msg.match(/\b(skills?|expertise|competenc|what can|abilities|proficienc)\b/) && !msg.includes("business") && !msg.includes("system") && !msg.includes("java")) {
        let response = `<strong>${knowledgeBase.name}'s Key Skills:</strong><br><br>`;
        for (let [skill, info] of Object.entries(knowledgeBase.skills)) {
            response += `<strong>• ${skill} (${info.percentage}%)</strong><br>`;
        }
        response += `<br>Ask about any specific skill for more details!`;
        return response;
    }
    
    // Business Analyst
    if (msg.match(/\b(business analyst|business analysis|ba|requirements|brd|frd)\b/)) {
        const ba = knowledgeBase.skills["Business Analyst"];
        let response = `<strong>Business Analysis Skills (${ba.percentage}%):</strong><br><br>`;
        ba.details.forEach(detail => {
            response += `• ${detail}<br>`;
        });
        return response;
    }
    
    // Systems Analyst
    if (msg.match(/\b(system analyst|systems analysis|uml|erd|system design)\b/)) {
        const sa = knowledgeBase.skills["Systems Analyst"];
        let response = `<strong>Systems Analysis Skills (${sa.percentage}%):</strong><br><br>`;
        sa.details.forEach(detail => {
            response += `• ${detail}<br>`;
        });
        return response;
    }
    
    // Project Manager
    if (msg.match(/\b(project manag|pm|agile|scrum|risk)\b/)) {
        const pm = knowledgeBase.skills["IT Project Manager"];
        let response = `<strong>IT Project Management Skills (${pm.percentage}%):</strong><br><br>`;
        pm.details.forEach(detail => {
            response += `• ${detail}<br>`;
        });
        return response;
    }
    
    // Java Developer
    if (msg.match(/\b(java|developer|programming|code|coding|spring|hibernate)\b/)) {
        const dev = knowledgeBase.skills["Java Full Stack Developer"];
        let response = `<strong>Java Full Stack Development Skills (${dev.percentage}%):</strong><br><br>`;
        dev.details.forEach(detail => {
            response += `• ${detail}<br>`;
        });
        return response;
    }
    
    // Database
    if (msg.match(/\b(database|dba|sql|mysql|postgresql|oracle)\b/)) {
        const db = knowledgeBase.skills["Database Administrator"];
        let response = `<strong>Database Administration Skills (${db.percentage}%):</strong><br><br>`;
        db.details.forEach(detail => {
            response += `• ${detail}<br>`;
        });
        return response;
    }
    
    // Testing
    if (msg.match(/\b(test|testing|qa|quality|uat)\b/)) {
        const test = knowledgeBase.skills["Software Tester"];
        let response = `<strong>Software Testing Skills (${test.percentage}%):</strong><br><br>`;
        test.details.forEach(detail => {
            response += `• ${detail}<br>`;
        });
        return response;
    }
    
    // UI/UX
    if (msg.match(/\b(ui|ux|design|wireframe|prototype|user interface)\b/)) {
        const ux = knowledgeBase.skills["UI/UX Designer"];
        let response = `<strong>UI/UX Design Skills (${ux.percentage}%):</strong><br><br>`;
        ux.details.forEach(detail => {
            response += `• ${detail}<br>`;
        });
        return response;
    }
    
    // All Projects
    if (msg.match(/\b(projects?|portfolio|work)\b/) && !msg.includes("viims") && !msg.includes("giims") && !msg.includes("leave")) {
        let response = `<strong>Key Projects:</strong><br><br>`;
        knowledgeBase.projects.forEach((project, index) => {
            response += `<strong>${index + 1}. ${project.name}</strong><br>`;
            response += `<em>Role: ${project.role}</em><br>`;
            response += `${project.description}<br><br>`;
        });
        response += `Ask about "VIIMS", "GIIMS", or "Leave Management" for more details!`;
        return response;
    }
    
    // VIIMS Project
    if (msg.match(/\b(viims|vehicle)\b/)) {
        const project = knowledgeBase.projects[0];
        let response = `<strong>${project.name}</strong><br><br>`;
        response += `<strong>Role:</strong> ${project.role}<br><br>`;
        response += `<strong>Description:</strong> ${project.description}<br><br>`;
        response += `<strong>Key Responsibilities:</strong><br>`;
        project.responsibilities.forEach(resp => {
            response += `• ${resp}<br>`;
        });
        response += `<br><strong>Technologies:</strong> ${project.technologies.join(", ")}`;
        return response;
    }
    
    // GIIMS Project
    if (msg.match(/\b(giims|goods)\b/)) {
        const project = knowledgeBase.projects[1];
        let response = `<strong>${project.name}</strong><br><br>`;
        response += `<strong>Role:</strong> ${project.role}<br><br>`;
        response += `<strong>Description:</strong> ${project.description}<br><br>`;
        response += `<strong>Key Responsibilities:</strong><br>`;
        project.responsibilities.forEach(resp => {
            response += `• ${resp}<br>`;
        });
        response += `<br><strong>Technologies:</strong> ${project.technologies.join(", ")}`;
        return response;
    }
    
    // Leave Management Project
    if (msg.match(/\b(leave|employee)\b/)) {
        const project = knowledgeBase.projects[2];
        let response = `<strong>${project.name}</strong><br><br>`;
        response += `<strong>Role:</strong> ${project.role}<br><br>`;
        response += `<strong>Description:</strong> ${project.description}<br><br>`;
        response += `<strong>Key Responsibilities:</strong><br>`;
        project.responsibilities.forEach(resp => {
            response += `• ${resp}<br>`;
        });
        response += `<br><strong>Technologies:</strong> ${project.technologies.join(", ")}`;
        return response;
    }
    
    // Experience
    if (msg.match(/\b(experience|job|work|position|intern|municipality|ethekwini)\b/)) {
        const exp = knowledgeBase.experience;
        let response = `<strong>Professional Experience:</strong><br><br>`;
        response += `<strong>Position:</strong> ${exp.position}<br>`;
        response += `<strong>Company:</strong> ${exp.company}<br>`;
        response += `<strong>Department:</strong> ${exp.department}<br><br>`;
        response += `<strong>Key Responsibilities:</strong><br>`;
        exp.responsibilities.forEach(resp => {
            response += `• ${resp}<br>`;
        });
        return response;
    }
    
    // Education
    if (msg.match(/\b(education|degree|diploma|university|study|studied|qualification|learnership)\b/)) {
        let response = `<strong>Education & Training:</strong><br><br>`;
        knowledgeBase.education.forEach(edu => {
            if (edu.degree) {
                response += `<strong>• ${edu.degree}</strong><br>`;
                response += `  ${edu.institution} - ${edu.status}<br><br>`;
            } else {
                response += `<strong>• ${edu.program}</strong><br>`;
                response += `  ${edu.status}<br>`;
                if (edu.focus) response += `  Focus: ${edu.focus}<br>`;
                response += `<br>`;
            }
        });
        return response;
    }
    
    // Tools & Technologies
    if (msg.match(/\b(tools?|technologies|software|applications|platforms)\b/)) {
        let response = `<strong>Tools & Technologies:</strong><br><br>`;
        for (let [category, toolList] of Object.entries(knowledgeBase.tools)) {
            response += `<strong>${category}:</strong> ${toolList.join(", ")}<br>`;
        }
        return response;
    }
    
    // Competencies
    if (msg.match(/\b(competenc|strengths|capabilities)\b/)) {
        let response = `<strong>Core Competencies:</strong><br><br>`;
        const half = Math.ceil(knowledgeBase.competencies.length / 2);
        for (let i = 0; i < knowledgeBase.competencies.length; i++) {
            response += `• ${knowledgeBase.competencies[i]}<br>`;
        }
        return response;
    }
    
    // Technologies specific
    if (msg.match(/\b(technologies|tech stack|stack)\b/)) {
        let response = `<strong>Technology Stack:</strong><br><br>`;
        response += `<strong>Languages:</strong> Java, JavaScript, SQL, HTML5, CSS3<br>`;
        response += `<strong>Frameworks:</strong> Spring Boot, Hibernate, JPA, Bootstrap<br>`;
        response += `<strong>Databases:</strong> MySQL, PostgreSQL, Oracle<br>`;
        response += `<strong>Tools:</strong> Git, Maven, Postman, IntelliJ, VS Code<br>`;
        response += `<strong>Methodologies:</strong> Agile, Scrum, Waterfall<br>`;
        return response;
    }
    
    // Default response
    return `I can help you learn about ${knowledgeBase.name}! Here are some things you can ask:<br><br>
    • "What are your skills?"<br>
    • "Tell me about your projects"<br>
    • "What's your experience?"<br>
    • "What tools do you use?"<br>
    • "Tell me about Business Analysis"<br>
    • "How can I contact you?"<br>
    • "What's your education?"<br>
    • "Tell me about VIIMS project"<br><br>
    What would you like to know?`;
}

// Initialize chat when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🤖 Enhanced AI Chat initializing...');
    
    const chatToggle = document.getElementById('ai-chat-toggle');
    const chatWindow = document.getElementById('ai-chat-window');
    const chatClose = document.getElementById('ai-chat-close');
    const chatMessages = document.getElementById('ai-chat-messages');
    const chatInput = document.getElementById('ai-chat-input');
    const chatSend = document.getElementById('ai-chat-send');
    
    // Check if elements exist
    if (!chatToggle || !chatWindow) {
        console.error('❌ Chat elements not found!');
        return;
    }
    
    console.log('✅ Chat elements found!');
    
    // Open chat
    chatToggle.addEventListener('click', function() {
        console.log('Chat button clicked!');
        chatWindow.classList.add('active');
        
        // Add welcome message if chat is empty
        if (chatMessages.children.length === 0) {
            addMessage('ai', `👋 Hi! I'm ${knowledgeBase.name}'s AI assistant. I have comprehensive knowledge about skills, projects, experience, education, tools, and contact info. What would you like to know?`);
        }
    });
    
    // Close chat
    chatClose.addEventListener('click', function() {
        chatWindow.classList.remove('active');
    });
    
    // Send message
    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;
        
        // Add user message
        addMessage('user', text);
        chatInput.value = '';
        chatInput.style.height = 'auto';
        
        // Show typing indicator
        const typingMsg = addMessage('ai', '<div class="typing-indicator"><span></span><span></span><span></span></div>');
        
        // Get response after short delay
        setTimeout(function() {
            typingMsg.remove();
            const response = getResponse(text);
            addMessage('ai', response);
        }, 600);
    }
    
    // Send on button click
    chatSend.addEventListener('click', sendMessage);
    
    // Send on Enter key
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Auto-resize textarea
    chatInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 120) + 'px';
    });
    
    // Add message to chat
    function addMessage(type, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message ' + (type === 'user' ? 'user-message' : 'ai-message');
        
        // Format text
        messageDiv.innerHTML = text;
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        return messageDiv;
    }
    
    console.log('✅ Enhanced AI Chat ready with comprehensive knowledge!');
});
