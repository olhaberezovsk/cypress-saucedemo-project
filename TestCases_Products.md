# Test Cases - Products Feature (SauceDemo)
## 1. Overview
This document describes manual test cases for the **Products (Inventory)** feature of the SauceDemo application. 
These test cases will later be automated using Cypress.
---
## 2. Preconditions
Application URL is accessible: https://www.saucedemo.com
User is logged in as a standard user
Inventory page is loaded
Test data is available
---
## 3. Smoke Test Cases
| ID | Test Type | Title | Preconditions | Steps | Expected Result |
|----|----------|--------|----------------|--------|------------------|
| PR-SM-01 | Smoke | Products list loads | User is logged in | Open Products page | Products are displayed |
| PR-SM-02 | Smoke | Add product to cart | Products visible | Click "Add to cart" | Cart badge updates to 1 |
---
## 4. Sanity Test Cases
| ID | Test Type | Title | Preconditions | Steps | Expected Result |
|----|----------|--------|----------------|--------|------------------|
| PR-SA-01 | Sanity | Product images visible | Products page loaded | Observe products | Images are displayed |
| PR-SA-02 | Sanity | Product price visible | Products page loaded | Check prices | Prices are displayed |
| PR-SA-03 | Sanity | Cart badge updates | Cart empty | Add one product | Cart badge shows 1 |
---
## 5. Regression Test Cases
| ID | Test Type | Title | Preconditions | Steps | Expected Result |
|----|----------|--------|----------------|--------|------------------|
| PR-RG-01 | Regression | Add multiple products | Products page | Add 2–3 products | Cart badge shows correct count |
| PR-RG-02 | Regression | Remove product from products page | Product added | Click "Remove" | Product removed from cart |
| PR-RG-03 | Regression | Navigate to product details | Products visible | Click product title | Product details page opens |
| PR-RG-04 | Regression | Navigate back to products | On product details page | Click Back | Products page opens |
| PR-RG-05 | Regression | Product sorting A-Z | Products visible | Select A-Z sorting | Products sorted correctly |
| PR-RG-06 | Regression | Product sorting Z-A | Products visible | Select Z-A sorting | Products sorted correctly |
| PR-RG-07 | Regression | Product sorting Low-High | Products visible | Select Low-High | Products sorted correctly |
| PR-RG-08 | Regression | Product sorting High-Low | Products visible | Select High-Low | Products sorted correctly |
---
## 6. Negative Test Cases
| ID | Test Type | Title | Preconditions | Steps | Expected Result |
|----|----------|--------|----------------|--------|------------------|
| PR-NG-01 | Negative | Add product without login | User logged out | Try to access inventory | User redirected to login |
| PR-NG-02 | Negative | Open product with broken link | Simulated broken link | Click product | Error page or safe redirect |
---
## 7. UI Validation Test Cases
| ID | Test Type | Title | Preconditions | Steps | Expected Result |
|----|----------|--------|----------------|--------|------------------|
| PR-UI-01 | UI | Products page title | Products page loaded | Check title | Title is correct |
| PR-UI-02 | UI | Sorting dropdown visible | Products page loaded | Check dropdown | Dropdown visible |
| PR-UI-03 | UI | Add to cart button visible | Products page loaded | Check buttons | Buttons visible |
---
## 8. Postconditions
User remains logged in
Cart state updated correctly after test execution
---
## 9. Mapping to Automation
These test cases will be automated using:
Cypress UI tests
Cypress fixtures (`products.json`)
Custom Cypress commands
Atomic PR strategy