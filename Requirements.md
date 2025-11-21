Requirements for SauceDemo Test Automation Project

1. Introduction
This document defines functional and non-functional requirements for automated testing of the SauceDemo web application using Cypress.
The goal is to develop an in-house automation solution covering frontend, backend (mocked via intercepts), and API-like scenarios (via stubs/mocks).
SauceDemo is used as the Application Under Test (AUT) because it is public, stable, and suitable for training automation practices.

2. Scope
The automation will cover:
Frontend (UI)
	•	Login functionality
	•	Product listing and product details
	•	Cart operations
	•	Checkout flow
	•	Sorting
	•	Header/menu interactions
	•	Logout flow
Backend/API (mocked or simulated)
SauceDemo does not expose official public API → backend will be covered through:
	•	cy.intercept() stubbing responses
	•	Simulated REST endpoints (stubbed GET/POST)
	•	Fixture-based test data
	•	Error-state simulation (500, 404, empty lists)

3. Functional Requirements
3.1 Login
	•	User can log in with valid credentials
	•	Invalid username/password shows correct error message
	•	Locked-out user cannot log in
	•	Login page loads correctly
	•	User is redirected to Inventory page after successful login
3.2 Inventory (Products Page)
	•	Products list loads successfully
	•	Product details open correctly
	•	Sorting options:
	•	Name (A→Z)
	•	Name (Z→A)
	•	Price (Low→High)
	•	Price (High→Low)
	•	Add to cart buttons work
	•	Remove from cart buttons work
	•	Header cart icon updates correctly
3.3 Cart
	•	Cart page loads successfully
	•	Items appear correctly
	•	Item quantity is correct
	•	Removing items works
3.4 Checkout
	•	Checkout Step 1 requires mandatory fields
	•	Checkout Step 2 displays correct summary
	•	Order completes successfully
	•	Confirmation page appears

4. Non-Functional Requirements
4.1 Cross-Browser
Tests should run at least in:
	•	Chrome
	•	Edge
	•	(Optional) Firefox
4.2 Performance (light)
	•	Page should load within reasonable limits (<3 seconds)
	•	API/Intercept responses simulated within 100–300 ms
4.3 Security
	•	No passwords logged
	•	Credentials stored in fixtures or environment variables
4.4 Reliability
	•	Tests must be independent
	•	Each test must clean up (new session)

5. Test Types
5.1 Smoke Tests
	•	Login with valid credentials
	•	Add a product to cart
	•	Complete checkout
5.2 Sanity Tests
	•	Login page loads
	•	Products page loads
	•	Cart icon updates
5.3 Regression Tests
Full coverage of:
	•	Login (positive & negative)
	•	Products (sorting, details, adding/removing)
	•	Cart functionality
	•	Full checkout flow
	•	Menu navigation
5.4 API/Backend (Simulated)
	•	Simulate GET /products
	•	Simulate POST /login
	•	Simulate POST /checkout
	•	Error handling scenarios:
	•	500 Server Error
	•	404 Not Found
	•	Empty product list response

6. Test Data Requirements
All test data must live in cypress/fixtures:
Example:
fixtures/
  users.json
  products.json
  checkout.json
users.json contains:
	•	valid user
	•	locked user
	•	invalid credentials

products.json contains:
	•	mocked products list
	•	empty list mock

7. Testing Approach
7.1 Cypress Best Practices
	•	Use Page Object Model (optional but recommended)
	•	Use custom commands for reusable logic
	•	Use fixtures instead of hardcoding
	•	Keep tests isolated per feature
7.2 Structure
cypress/
  e2e/
    smoke/
    sanity/
    regression/
    features/
      login/
      products/
      cart/
      checkout/
  fixtures/
  support/
8. Git Workflow Requirements (mentor requirement)
Atomic PRs
	•	Each PR must contain only work for a single test/feature
	•	Example branch:
            tests/jira-001-login-positive
    •   PR must NOT mix fixes + tests
	•	Every commit must be isolated to its purpose

9. Out of Scope
	•	Backend database validation
	•	Performance load testing
	•	Cross-device mobile testing (optional)

10. Acceptance Criteria
A student has successfully completed the assignment when:
	•	Project has clear folder structure
	•	Requirements documented (this file)
	•	Test cases written BEFORE automation
	•	FE + mocked BE tests implemented
	•	Cypress fixtures used
	•	PRs are atomic and traceable
	•	Git repo clean and well structured