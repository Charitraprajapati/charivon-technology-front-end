import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-industries',
  imports: [CommonModule],
  templateUrl: './industries.html',
  styleUrls: ['./industries.css']
})
export class Industries {

  industries = [

    {
      icon: 'fas fa-building',
      title: 'Enterprise',
      description: 'Scalable enterprise software, ERP, CRM, workflow automation and digital transformation solutions.'
    },

    {
      icon: 'fas fa-landmark',
      title: 'Financial Services',
      description: 'Secure software solutions, digital banking platforms, payment integrations and financial applications.'
    },

    {
      icon: 'fas fa-heartbeat',
      title: 'Healthcare',
      description: 'Healthcare management systems, cloud applications and secure digital healthcare solutions.'
    },

    {
      icon: 'fas fa-graduation-cap',
      title: 'Education',
      description: 'Learning management systems, student portals, examination platforms and e-learning solutions.'
    },

    {
      icon: 'fas fa-university',
      title: 'Government',
      description: 'Citizen service portals, e-governance platforms and secure public sector applications.'
    },

    {
      icon: 'fas fa-industry',
      title: 'Manufacturing',
      description: 'Production monitoring, inventory management, ERP and business process automation.'
    },

    {
      icon: 'fas fa-shopping-cart',
      title: 'Retail & Commerce',
      description: 'E-commerce platforms, digital commerce, inventory systems and customer engagement solutions.'
    },

    {
      icon: 'fas fa-truck',
      title: 'Logistics',
      description: 'Supply chain management, shipment tracking and logistics automation platforms.'
    }

  ];

}