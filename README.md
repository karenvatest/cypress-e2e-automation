
# 🚀 Cypress E2E Automation

## 📌 About the Project

This repository contains End-to-End (E2E) automation tests developed with Cypress and JavaScript.

The project focuses on automating user workflows for login and event management, applying the Page Object Model (POM), fixtures, and different testing strategies such as Smoke and Regression Testing.

## 🎯 Objectives

- Automate end-to-end user workflows.
- Apply the Page Object Model (POM) design pattern.
- Organize test cases into Smoke and Regression suites.
- Manage test data using JSON fixtures.
- Create reusable page methods and test steps.
- Validate application functionality through automated tests.
- Improve test organization and maintainability.

## 📚 Test Suites

### 🔐 1. Login

**Location:** `cypress/e2e/login/`

#### Smoke Testing
**File:** `login.smoke.cy.js`

**Objective:** Verify that the main login functionality works correctly.

**Focus:**
- Execute essential login scenarios.
- Validate critical user interactions.
- Check that the main login flow is working.

#### Regression Testing
**File:** `login.regression.cy.js`

**Objective:** Validate login functionality to ensure that new changes do not affect existing behavior.

**Focus:**
- Validate login scenarios.
- Check expected application responses.
- Verify existing functionality after changes.

### 🎟️ 2. EventHub

**Location:** `cypress/e2e/eventhub/`

#### Smoke Testing
**File:** `eventhub.smoke.cy.js`

**Objective:** Verify that the main EventHub functionality is accessible and working.

**Focus:**
- Validate essential event-related workflows.
- Check critical user interactions.
- Verify that the main functionality is available.

#### Regression Testing
**File:** `eventhub.regression.cy.js`

**Objective:** Validate EventHub functionality to identify potential regressions after application changes.

**Focus:**
- Automate event-related scenarios.
- Validate expected results.
- Verify that existing workflows continue to work.

## 🏗️ Project Architecture

### Page Object Model (POM)

The project uses the Page Object Model to separate page elements and interactions from test cases.

**Location:** `cypress/pages/`

| Page Object | Responsibility |
|---|---|
| `LoginPage.js` | Login page elements and interactions |
| `LoginPageEven.js` | Login-related page interactions |
| `RegisterPage.js` | Registration page elements and actions |
| `EventsPage.js` | Event page elements and interactions |
| `BookingPage.js` | Booking-related page elements and actions |

### 🗂️ Fixtures

**Location:** `cypress/fixtures/`

JSON fixtures are used to store and manage test data separately from test scripts.

| Fixture | Purpose |
|---|---|
| `loginData.json` | Login test data |
| `eventHubData.json` | EventHub test data |
| `example.json` | Cypress example fixture |

## 📁 Project Structure

```text
cypress-e2e-automation/
│
├── cypress/
│   ├── e2e/
│   │   ├── eventhub/
│   │   │   ├── eventhub.regression.cy.js
│   │   │   └── eventhub.smoke.cy.js
│   │   │
│   │   └── login/
│   │       ├── login.regression.cy.js
│   │       └── login.smoke.cy.js
│   │
│   ├── fixtures/
│   │   ├── eventHubData.json
│   │   ├── example.json
│   │   └── loginData.json
│   │
│   └── pages/
│       ├── BookingPage.js
│       ├── EventsPage.js
│       ├── LoginPage.js
│       ├── LoginPageEven.js
│       └── RegisterPage.js
│
├── cypress.config.js
├── package.json
└── README.md
```

## 🛠️ Technologies

- **Cypress** — End-to-End test automation
- **JavaScript** — Test scripting
- **Node.js & npm** — Runtime and package management
- **JSON Fixtures** — Test data management
- **Page Object Model (POM)** — Test architecture
- **Git & GitHub** — Version control


## 💡 Key Learnings

- Designing and organizing E2E test suites.
- Understanding the difference between Smoke and Regression Testing.
- Implementing the Page Object Model.
- Reusing page methods across test cases.
- Managing test data with JSON fixtures.
- Automating critical user workflows.
- Improving test maintainability and reusability.

## 🚀 Next Steps

- Expand E2E test coverage.
- Improve test data management.
- Integrate automated tests with GitHub Actions.
- Explore API test integration.
- Implement CI/CD execution workflows.

## 📌 Project Status

🟠 **In Progress** 

— Part of my learning journey from Manual QA to QA Automation.

## 👩‍💻 Author

**Karen Gisela Valdez Betancourt**

QA Manual Engineer | QA Automation in Progress

**⭐ Learning by building, testing, and automating.**
