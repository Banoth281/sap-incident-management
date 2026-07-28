# 🛠️ SAP CAP Incident Management System

A full-stack, enterprise-grade OData v4 backend service built using the **SAP Cloud Application Programming Model (CAP)**, **Node.js**, and **SAP Fiori Elements**.

---

## 🧰 Tech Stack & Tools

![SAP CAP](https://img.shields.io/badge/SAP%20CAP-0070F3?style=for-the-badge&logo=sap&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![OData v4](https://img.shields.io/badge/OData-v4-006699?style=for-the-badge)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![SAP Fiori](https://img.shields.io/badge/SAP%20Fiori-0070F3?style=for-the-badge&logo=sap&logoColor=white)

---

## 🏛️ Architecture & Key Features

* **Domain Modeling (`db/schema.cds`):** Core Data Services (CDS) entity definitions establishing relationships for incidents, customers, and priority levels.
* **OData v4 Service Definition (`srv/cat-service.cds`):** Exposes transactional business entities through high-performance OData v4 endpoints.
* **Custom Event Logic (`srv/cat-service.js`):** Node.js backend handlers executing real-time priority calculations, input validations, and status transitions.
* **SAP Fiori Annotations (`srv/cat-service-ui.cds`):** Metadata annotations driving automated SAP Fiori Elements rendering (List Report & Object Page).
* **Automated Data Seeding (`db/data/`):** Pre-populated CSV datasets for immediate zero-config testing in local development environments.

---

## 🚀 Key Architectural Enhancements

* **Visual Tech Stack Badges:** Integrated dynamic status badges highlighting core enterprise dependencies for rapid technical evaluation.
* **Streamlined Local Testing:** Centralized service access via a single endpoint, providing immediate entry to the OData service cockpit and Fiori Elements UI preview.
* **Environment-Safe Configuration:** Outlined precise Node.js runtime and database driver specifications to ensure consistent cross-environment setup and prevent execution conflicts.
* **Scannable Architecture Overview:** Formatted project components—including CDS entity schemas, OData endpoints, and custom event handlers—for quick reference by technical reviewers.

---

## 📁 Project Structure

```text
sap-incident-management/
├── db/                   # Data domain models & mock data
│   ├── data/             # CSV files for initial database seeding
│   └── schema.cds        # CDS entity definitions
├── srv/                  # Service definitions and custom logic handlers
│   ├── cat-service.cds   # OData service endpoints
│   └── cat-service.js    # Event handlers and business logic
├── images/               # Screenshots and UI assets for documentation
│   └── fiori-incident-list.png  # Fiori UI preview image
├── package.json          # Project dependencies and CAP scripts
├── mta.yaml              # Multi-Target Application deployment descriptor
└── readme.md             # Project documentation
```
## 🌐 Endpoints & Testing

Once the server is running (`cds watch`), open **[http://localhost:4004](http://localhost:4004)** in your browser to access:

* **Service Cockpit:** Overview of all active endpoints and services.
* **OData Metadata:** Inspect entity definitions via `/odata/v4/incident/$metadata`.
* **Fiori UI Preview:** Launch the web interface for managing incident records.

---

### 🖥️ SAP Fiori Web Application UI

The dynamic user interface is built using **SAP Fiori Elements** based on annotations defined in the CDS services.

![SAP Fiori Elements - Incidents List Report](./fiori-incident-list.png)

### Features & Capabilities:
* **Filter Bar:** Search across incident records and filter dynamically by `status` or `priority`.
* **List Report Table:** Displays active incidents, complete with unique `Incident ID`, `Title`, `Priority`, and `Status`.
* **Action Buttons:** Built-in table action options including custom logic triggers (e.g., `Close Incident`, `Delete`).
* **Object Page Navigation:** Click on any row to open the full detail view for a specific incident.

---

### 👤 Author

* **Developer:** Santhosh Banoth