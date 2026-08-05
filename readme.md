# 🛠️ SAP CAP Incident Management System

[![SAP CAP CI](https://github.com/Banoth281/sap-incident-management/actions/workflows/ci.yml/badge.svg)](https://github.com/Banoth281/sap-incident-management/actions/workflows/ci.yml)

Enterprise-grade Incident Management System built using the **SAP Cloud Application Programming Model (CAP)**, **Node.js**, **OData v4**, **SQLite**, and **SAP Fiori Elements**.

This project demonstrates enterprise backend development using SAP technologies, including CDS data modeling, OData services, business logic implementation, and automated CI with GitHub Actions.

---

# 📖 Overview

The SAP CAP Incident Management System provides a complete backend service for managing incidents through SAP Fiori Elements.

The application demonstrates:

- Enterprise CDS data modelling
- OData v4 service development
- SAP Fiori Elements UI
- Custom business logic
- SQLite database integration
- GitHub Actions CI pipeline

---

# 🚀 Features

- ✅ Incident Management
- ✅ Customer Management
- ✅ Priority Management
- ✅ Status Tracking
- ✅ SAP Fiori Elements UI
- ✅ OData v4 APIs
- ✅ CDS Data Models
- ✅ SQLite Database
- ✅ GitHub Actions CI
- ✅ Automated Validation

---

# 🏗️ Architecture

```
                    +-------------------------+
                    |     SAP Fiori UI        |
                    +-----------+-------------+
                                |
                                |
                     OData v4 Services
                                |
                                |
                    +-----------v-------------+
                    |    SAP CAP Services     |
                    |   (Node.js + CDS)       |
                    +-----------+-------------+
                                |
                                |
                     Business Logic (JS)
                                |
                                |
                    +-----------v-------------+
                    |      SQLite Database    |
                    +-------------------------+
```

---

# 🧰 Technology Stack

| Technology | Purpose |
|------------|---------|
| SAP CAP | Backend Framework |
| Node.js | Runtime |
| SAP CDS | Data Modelling |
| OData v4 | RESTful Services |
| SQLite | Database |
| SAP Fiori Elements | UI |
| GitHub Actions | CI/CD |
| Express.js | Web Framework |

---

# 📁 Project Structure

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