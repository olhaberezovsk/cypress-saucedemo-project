# Test Plan for SauceDemo Automation Project

## 1. Objective
The goal of this test plan is to define the testing strategy, scope, priorities, and approach for automated testing of the SauceDemo application using Cypress.
This project is created as an in-house test automation solution for educational and demonstration purposes.

## 2. Scope of Testing
### 2.1 In Scope (Covered by Automation)
Login functionality
Products page
Product sorting
Cart functionality
Checkout flow
Logout
UI validations
Mocked backend/API testing using `cy.intercept()`
### 2.2 Out of Scope
Load and stress testing
Real backend/database validation
Mobile device testing (optional for future)

## 3. Test Levels
### 3.1 Frontend (UI)
UI elements visibility
Navigation between pages
Form validations
User interactions and flows
### 3.2 Backend / API (Simulated)
Because SauceDemo does not provide a public API:
API responses will be simulated using `cy.intercept()`
Fixtures will be used as backend data sources
Error scenarios will be simulated (500, 404, empty data)

## 4. Test Types
### 4.1 Smoke Testing
Purpose: verify that the core system works.
Smoke tests include:
Login with valid credentials
Add item to cart
Complete checkout
### 4.2 Sanity Testing
Purpose: verify that basic functionality works after changes.
Sanity tests include:
Login page loads
Inventory page loads
Cart badge updates
Checkout form loads
### 4.3 Regression Testing
Purpose: ensure that existing functionality is not broken.
Regression includes:
All login scenarios (positive, negative, locked user)
Products sorting
Add/remove products from cart
Full checkout flow
Menu navigation
Logout
### 4.4 API / Backend (Mocked)
Mock GET products
Mock POST login
Mock POST checkout
Mock error responses

## 5. Test Priorities
### Highest Priority:
Login (positive)
Add to cart
Checkout success flow
### Medium Priority:
Login negative scenarios
Product sorting
Removing items from cart
### Lower Priority:
UI cosmetic checks
Optional error simulations

## 6. Test Data Management
All test data will be stored in `cypress/fixtures`
Separate files for:
users.json
products.json
checkout.json
No hardcoded data inside test files
Sensitive data will not be stored in the repository

## 7. Test Environment
Browser: Chrome (primary)
Optional: Firefox, Edge
OS: Windows / macOS
Test URL: https://www.saucedemo.com

## 8. Test Automation Approach
Cypress is used as the main automation framework
Page Object Model may be applied optionally
Custom Cypress commands will be used for reusability
Each test must be:
Independent
Repeatable
Isolated
No dependency between tests

## 9. Test Execution Strategy
Smoke tests will be executed first
Sanity tests after every major update
Regression tests before final validation
API mock tests executed with frontend tests

## 10. Defect Reporting
Defects will be documented via:
GitHub Issues
PR comments
Each defect will include:
Steps to reproduce
Actual result
Expected result
Screenshot/video (if available)

## 11. Entry and Exit Criteria
### Entry Criteria:
Application is accessible
Cypress is installed
Requirements are documented
Test cases are written
### Exit Criteria:
All smoke tests passed
No critical defects open
Test execution report generated

## 12. Risks and Mitigation
| Risk | Mitigation |
|------|------------|
| Application instability | Use mocks and stubs |
| Data dependency | Use fixtures |
| Test flakiness | Use explicit waits and intercepts |

## 13. Git & PR Strategy
Atomic PRs only
One feature per branch
Example branch name: tests/jira-001-login-positive
No mixed changes in one PR