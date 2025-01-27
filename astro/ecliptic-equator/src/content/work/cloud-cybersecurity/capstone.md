---
title: PinPag - Multicloud Infrastructure Monitoring
publishDate: 2024-01-26
img: /assets/pinpag.jpg
img_alt: Interactive dashboard showing real-time monitoring of cloud infrastructure and security metrics
description: |
  Developed and improved monitoring, security, and cost optimization solutions for PinPag's payment processing infrastructure across AWS and Azure clouds.
tags:
  - Cloud Infrastructure
  - Cybersecurity
  - FinOps
  - Monitoring
  - DevSecOps
---

## Project Overview

Phase 2 of PinPag's infrastructure project delivered critical improvements to their payment processing platform:

#### Infrastructure Restoration & Enhancement

- Rebuilt AWS data flows using S3, Lambda, Glue, and Athena
- Restored Azure monitoring using Blob Storage, Data Factory, and Data Explorer
- Fixed Wazuh SIEM with automated log retention policies

#### Security Improvements

- Integrated SemGrep for continuous code security scanning
- Created interactive network Connection Map for security group visualization
- Implemented multi-channel alerts (Twilio, Telegram, SMTP)
- Enhanced compliance with PCI-DSS and ISO 27001 standards
- Implemented ModSecurity 3.0 WAF with real-time threat detection

#### Monitoring & Visualization

- Centralized infrastructure monitoring in Grafana
- Real-time cost tracking across both clouds
- Resource utilization monitoring (CPU, RAM, network)
- Security incident tracking and alerting

#### Cost Optimization

##### AWS Monthly Costs

- Base scenario: $17.87
- Double usage: $32.17
- Triple usage: $48.26

##### Azure Monthly Costs

- Fixed cost: $278.98
- Storage: $2.08
- Data Factory: $131.91
- Data Explorer: $144.99

The project significantly improved PinPag's operational visibility and security posture while maintaining strict financial industry compliance requirements. Future enhancements include AI-powered infrastructure analysis, expanded WAF coverage, and enhanced vulnerability scanning capabilities.

#### Key Technologies

- Cloud: AWS (S3, Lambda, Glue, Athena), Azure (Blob, Data Factory, Data Explorer)
- Security: ModSecurity 3.0, SemGrep, Wazuh
- Monitoring: Grafana, Custom Python scripts
- Alert Systems: Twilio, Telegram, SMTP integration

This infrastructure now supports PinPag's role as a major payment processor, handling over 10,000 daily transactions for 20,000+ merchants while maintaining rigorous security standards.
