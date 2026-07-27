# 🛡️ SAP BTP Incident Management System

A full-stack enterprise backend and OData service built using the **SAP Cloud Application Programming Model (CAP)**, **OData v4**, and **Node.js**.

## 🏗️ Architecture & Features
- **Domain Modeling:** Core Data Services (CDS) schema (`db/schema.cds`).
- **OData Services:** Exposing entities via OData v4 endpoints (`srv/cat-service.cds`).
- **Business Logic:** Custom event handlers for automatic priority formatting (`srv/cat-service.js`).
- **Fiori Annotations:** UI annotations configured for automated list reports (`srv/cat-service-ui.cds`).
- **Mock Data:** Pre-populated CSV records for testing (`db/data/`).

## 🚀 How to Run Locally

1. Clone this repository:
   ```bash
git clone [https://github.com/Banoth281/sap-incident-management.git](https://github.com/Banoth281/sap-incident-management.git)
cd sap-incident-management
   cd sap-incident-management