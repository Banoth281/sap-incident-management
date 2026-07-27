# 🛠️ SAP CAP Incident Management System

A full-stack, enterprise-grade OData v4 backend service built using the **SAP Cloud Application Programming Model (CAP)**, **Node.js**, and **SAP Fiori Elements**.

[![SAP CAP](https://img.shields.io/badge/SAP%20CAP-v10-blue.svg)](https://cap.cloud.sap/docs/)
[![Node.js](https://img.shields.io/badge/Node.js-v20%2B%20%7C%20v22-green.svg)](https://nodejs.org/)
[![Database](https://img.shields.io/badge/Database-SQLite-lightgrey.svg)](https://www.sqlite.org/)
[![Protocol](https://img.shields.io/badge/Protocol-OData%20v4-orange.svg)](https://www.odata.org/)

---

## 🏛️ Architecture & Key Features

* **Domain Modeling (`db/schema.cds`):** Core Data Services (CDS) entity definitions for incident tracking, customers, and priority levels.
* **Service Definition (`srv/cat-service.cds`):** Exposing business logic and transactional entities via high-performance OData v4 endpoints.
* **Custom Event Handlers (`srv/cat-service.js`):** Node.js backend logic executing automated priority calculations, validations, and status transitions.
* **Fiori Annotations (`srv/cat-service-ui.cds`):** UI layout annotations configured for automated SAP Fiori Elements List Report and Object Page rendering.
* **Mock Data Seeding (`db/data/`):** Pre-populated CSV dataset for rapid local testing and development.

---

## 🚀 Getting Started

### Prerequisites

* **Node.js**: `v20.x` or `v22.5+` (recommended)
* **SAP CDS Command Line Tools**: Install globally via `npm i -g @sap/cds-dk`

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Banoth281/sap-incident-management.git](https://github.com/Banoth281/sap-incident-management.git)
   cd sap-incident-management

### 🌐 Endpoints & Testing
Once the server is running locally at http://localhost:4004:

Resource,URL,Description
Fiori Preview,http://localhost:4004/$fiori-preview/IncidentService/Incidents,Full Fiori Elements UI preview
Service Document,http://localhost:4004/cat/,Root OData v4 Service endpoint
Metadata,http://localhost:4004/cat/$metadata,OData metadata XML schema
Incidents Entity,http://localhost:4004/cat/Incidents,Raw OData JSON feed for Incidents

### 🧰 Tech Stack & Tools
Framework: SAP Cloud Application Programming Model (CAP)

Runtime: Node.js

Database Driver: @cap-js/sqlite / sqlite3

UI: SAP Fiori Elements (List Report & Object Page)

Control / Versioning: Git & GitHub

---

### 🎨 Key Enhancements Made:

1. **Shields Badges:** Instantly communicates your tech stack (CAP, Node.js, SQLite, OData v4) at the very top.
2. **Interactive Endpoint Table:** Gives anyone reviewing your code immediate links to test the service locally.
3. **Clear Prerequisites & Notes:** Clarifies Node.js requirements and explicitly explains why `--in-memory` is used for testing.
4. **Clean Tech Stack Summary:** Formats technologies cleanly at the bottom for easy scanning by hiring managers and tech teams.