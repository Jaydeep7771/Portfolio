import { BarChart3, FileCheck, FileSearch, Figma, Gauge, KanbanSquare, LayoutPanelTop, MailCheck, PieChart, Presentation, Route, ScrollText, Server, Sheet, UsersRound, Workflow } from 'lucide-react'

export const navLinks = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact']

export const technicalSkills = [
  { name: 'SQL', icon: Server },
  { name: 'Power BI', icon: BarChart3 },
  { name: 'Excel', icon: Sheet },
  { name: 'Postman', icon: MailCheck },
  { name: 'REST APIs', icon: Route },
  { name: 'Magento', icon: LayoutPanelTop },
  { name: 'JIRA', icon: KanbanSquare },
  { name: 'Figma', icon: Figma },
  { name: 'Data Visualization', icon: PieChart }
]

export const functionalSkills = [
  { name: 'Requirements Gathering', icon: FileSearch },
  { name: 'User Stories', icon: ScrollText },
  { name: 'Agile & Scrum', icon: Workflow },
  { name: 'UAT Planning', icon: FileCheck },
  { name: 'Wireframing', icon: Presentation },
  { name: 'Stakeholder Management', icon: UsersRound },
  { name: 'Cost Optimization', icon: Gauge }
]

export const experience = [
  {
    company: 'Mindsprint India Digital',
    role: 'Junior Business Analyst',
    duration: 'Jul 2024 – Present',
    points: [
      'Analyzed sales and operational data using SQL and Excel.',
      'Built Power BI dashboards reducing reporting time by 40%.',
      'Created user stories and acceptance criteria for delivery teams.',
      'Improved customer experience efficiency and SLA adherence.'
    ]
  },
  {
    company: 'Super Dot Computers',
    role: 'Analyst',
    duration: 'Jan 2024 – Jun 2024',
    points: ['Performed data analysis for sales and operations.', 'Built reusable dashboards to simplify recurring reporting.']
  }
]

export const projects = [
  {
    name: 'Salesbuddy',
    summary: 'Automated sales reporting and reduced operational overhead.',
    metrics: ['25% reduction in manual entry', '15 hours/month saved', '50+ user stories authored'],
    details: [
      'Designed workflow improvements and reporting automation for sales teams.',
      'Partnered with stakeholders to prioritize backlog and author detailed user stories.',
      'Improved data quality and reporting speed for business review cycles.'
    ]
  },
  {
    name: 'Document Management Portal (Olam Agri)',
    summary: 'Built a shipment document system for streamlined approvals.',
    metrics: ['30+ active users', '20% reduction in processing errors', 'End-to-end UAT execution'],
    details: [
      'Created upload and approval workflows tailored to shipment processing.',
      'Collaborated with cross-functional teams to define requirements and test scenarios.',
      'Conducted UAT and ensured business-ready launch quality.'
    ]
  },
  {
    name: 'CGPOA (Corporate Guarantee & Power of Attorney)',
    summary: 'Designed approval workflow with analytics and AI-assisted forms.',
    metrics: ['30% manual reduction via AI autofill', 'Executive workflow automation', 'SAP integration enabled'],
    details: [
      'Defined role-based approvals for Directors and Business Heads.',
      'Built Power BI dashboards to monitor process performance.',
      'Contributed to AI-based form autofill capability and enterprise integration requirements.'
    ]
  }
]

export const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Delivered', value: '5+' },
  { label: 'Dashboards Built', value: '12+' },
  { label: 'SLA Compliance Improvement', value: '40%' }
]

export const strengths = [
  'Data Analysis',
  'Business Process Optimization',
  'Agile Delivery',
  'Stakeholder Management',
  'Power BI & SQL Expertise'
]
