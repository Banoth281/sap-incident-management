# 🛠️ SAP CAP Incident Management System

A full-stack, enterprise-grade OData v4 backend service built using the **SAP Cloud Application Programming Model (CAP)**, **Node.js**, and **SAP Fiori Elements**.

[![SAP CAP](https://img.shields.io/badge/SAP%20CAP-v10-blue.svg)](https://cap.cloud.sap/docs/)
[![Node.js](https://img.shields.io/badge/Node.js-v20%2B%20%7C%20v22-green.svg)](https://nodejs.org/)
[![Database](https://img.shields.io/badge/Database-SQLite-lightgrey.svg)](https://www.sqlite.org/)
[![Protocol](https://img.shields.io/badge/Protocol-OData%20v4-orange.svg)](https://www.odata.org/)

---

## 🏛️ Architecture & Key Features

* **Domain Modeling (`db/schema.cds`):** Core Data Services (CDS) entity definitions establishing relationships for incidents, customers, and priority levels.
* **OData v4 Service Definition (`srv/cat-service.cds`):** Exposes transactional business entities through high-performance OData v4 endpoints.
* **Custom Event Logic (`srv/cat-service.js`):** Node.js backend handlers executing real-time priority calculations, input validations, and status transitions.
* **SAP Fiori Annotations (`srv/cat-service-ui.cds`):** Metadata annotations driving automated SAP Fiori Elements rendering (List Report & Object Page).
* **Automated Data Seeding (`db/data/`):** Pre-populated CSV datasets for immediate zero-config testing in local development environments.

---

## 🚀 Getting Started

### Prerequisites

Ensure your environment meets the following baseline requirements before continuing:

* **Node.js:** `v20.x` or `v22.5+` *(LTS recommended)*
* **SAP CDS Development Kit:** Install globally via terminal:
  ```bash
  npm install -g @sap/cds-dk

---

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone (https://github.com/Banoth281/sap-incident-management.git)

---

## 🧰 Tech Stack & Tools

![SAP CAP](https://img.shields.io/badge/Framework-SAP%20CAP-blue?style=for-the-badge&logo=sap)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-green?style=for-the-badge&logo=node.js)
![SQLite](https://img.shields.io/badge/Database-SQLite-lightgrey?style=for-the-badge&logo=sqlite)
![SAP Fiori](https://img.shields.io/badge/UI-SAP%20Fiori%20Elements-0070F3?style=for-the-badge&logo=sap)
![Git](https://img.shields.io/badge/Version%20Control-Git%20%26%20GitHub-181717?style=for-the-badge&logo=github)

---

## 🚀 Key Features & Architectural Enhancements

* **Visual Tech Stack Badges:** Integrated dynamic status badges highlighting core enterprise dependencies (**SAP CAP**, **Node.js**, **SQLite**, **OData v4**) for rapid technical evaluation.
* **Streamlined Local Testing:** Centralized service access via a single endpoint, providing immediate entry to the OData service cockpit and Fiori Elements UI preview.
* **Environment-Safe Configuration:** Outlined precise Node.js runtime and database driver specifications to ensure consistent cross-environment setup and prevent execution conflicts.
* **Scannable Architecture Overview:** Formatted project components—including CDS entity schemas, OData endpoints, and custom event handlers—for quick reference by technical reviewers.


### 🌐 Endpoints & Testing

Once the server is running, open **[http://localhost:4004](http://localhost:4004)** in your browser to access the service cockpit, OData metadata, and Fiori UI previews.

---

## 📁 Project Structure

```text
sap-incident-management/
├── db/                       # Data domain models & mock data
│   ├── data/                 # CSV files for initial database seeding
│   └── schema.cds            # CDS entity definitions
├── srv/                      # Business services & UI layout
│   ├── cat-service.cds       # OData service definition
│   ├── cat-service.js        # Node.js event handlers & custom logic
│   └── cat-service-ui.cds    # SAP Fiori UI annotations
├── package.json              # Project dependencies & CDS configuration
└── README.md                 # Project documentation

---

---

## 👤 Author & License

* **Developer:** [Banoth]