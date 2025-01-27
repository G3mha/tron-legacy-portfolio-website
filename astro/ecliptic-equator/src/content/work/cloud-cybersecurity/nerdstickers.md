---
title: NerdStickers - Security Audit (Pentesting)
publishDate: 2024-06-01
img: /assets/nerdstickers.jpg
img_alt: Security assessment dashboard showing vulnerability scan results
description: |
  Conducted comprehensive penetration testing for an e-commerce platform, 
  discovering and remediating critical vulnerabilities that prevented significant financial losses.
tags:
  - Cybersecurity
  - OWASP
  - Penetration Testing
  - Python
---

## Project Overview

Conducted a blackbox security assessment for NerdStickers' e-commerce platform, focusing on identifying and ranking critical vulnerabilities found during the pentest. Delivered a report with remediation plans and security improvement recommendations.

#### Technical Implementation

- Developed a Python-based port scanner for network exploration
- Utilized industry-standard security tools:
  - Burp Suite for web application testing
  - Metasploit for exploitation frameworks
  - Wireshark for network analysis
- Documented the security findings, following OWASP guidelines

#### Key Findings

Identified critical vulnerabilities:

- 2 Cross-Site Scripting (XSS) vulnerabilities in deprecated WordPress version
- 1 Spam Bombing vulnerability due to inadequate input sanitization
- 1 SSH Brute-Force vulnerability through exposed legacy DNS records

#### Impact & Results

- Prevented potential five-figure financial losses
- Provided remediation plans for all vulnerabilities found

## Technical Stack

- Security Tools:
  - Burp Suite
  - Metasploit
  - Wireshark
  - Custom Python tools
- Testing Frameworks:
  - OWASP Testing Guide
  - Custom testing scripts
