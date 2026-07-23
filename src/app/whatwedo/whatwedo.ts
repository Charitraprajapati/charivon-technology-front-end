import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatwedo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatwedo.html',
  styleUrls: ['./whatwedo.css']
})
export class Whatwedo {

  selectedMenu: string = 'services';

  menuData: any = {

    services: [
      'Artificial Intelligence and Data & Analytics',
      'AI-led Data Centres',
      'Cloud',
      'Cognitive Business Operations',
      'Consulting',
      'Cybersecurity',
      'Enterprise Solutions',
      'Industrial Autonomy & Engineering',
      'Network Solutions and Services',
      'Sustainability Services',
      'TCS Interactive'
    ],

    technologies: [
      'Java',
      'Spring',
      'Spring Boot',
      'Angular',
      'React',
      'Node.js',
      'Docker',
      'Kubernetes',
      'Kafka',
      'Redis',
      'MySQL',
      'Oracle'
    ],

    industries: [
      'Banking',
      'Insurance',
      'Healthcare',
      'Education',
      'Retail',
      'Manufacturing',
      'Telecom',
      'Government',
      'Logistics',
      'Energy'
    ],

    products: [
      'ERP',
      'CRM',
      'HRMS',
      'Inventory Management',
      'School ERP',
      'Hospital Management',
      'Billing Software',
      'E-Commerce',
      'Payroll System',
      'Custom Applications'
    ],

    consulting: [
      'Digital Transformation',
      'Cloud Consulting',
      'IT Strategy',
      'Architecture Design',
      'AI Consulting',
      'Performance Optimization',
      'Security Consulting',
      'Migration Services',
      'Automation',
      'Business Intelligence'
    ]

  };

  changeMenu(menu: string): void {
    this.selectedMenu = menu;
  }

}