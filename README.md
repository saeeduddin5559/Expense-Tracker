# Expense Tracker Application

## Overview
This is a simple Expense Tracker application built using React, Redux, and Axios. It allows users to manage their expenses by adding, editing, and deleting entries. 

# Technologies Used
- React
- Redux
- Axios
- React Router
- Framer Motion (for animations)
- CSS for styling

## Features
- Add new expenses
- Edit existing expenses
- Delete expenses
- View all expenses in a list
- Responsive design

## Installation and Setup

To run the application locally, follow these steps:

1. **Clone the repository:**
git clone <repository-url> cd <repository-directory>

## Install Dependencies
npm install

## Start JSON Server In the terminal, run:
npx json-server --watch db.json --port 5000

## Run the React Application In a new terminal window, start the React app:
npm start

-------------------------------------------------------------------------------
## Testing Features
This section outlines various features you can test in the Expense Tracker application to ensure its functionality.

## 1. Home Page
Test Navigation: Click on the "Expense Tracker" box on the home page to navigate to the expenses list.
## 2. Adding Expenses
Test Adding an Expense:

Navigate to the "Add Expense" page.
Fill out the expense form with valid details:
Description: e.g., "Dinner"
Amount: e.g., "50"
Date: e.g., "2024-10-07"
Type: Select one of the types (Food, Transport, Entertainment, Other).
Submit the form and verify that the expense is added to the list.
## Test Validation:

Attempt to submit the form with empty fields or invalid data (e.g., amount exceeding 9,999,999).
Ensure appropriate error messages are displayed, such as "All fields are required" or "Amount must be less than 9,999,999".
## 3. Viewing Expenses
## Test Expense List:
Navigate to the "Expense List" page.
Check that all added expenses are displayed with their descriptions, amounts, dates, and types.
Ensure the total expenses amount is calculated correctly and displayed at the top of the list.
Test Categorization:
Verify that expenses are categorized correctly by type, and the sum for each category is displayed.
## 4. Editing Expenses
Test Editing an Expense:

Click the "Edit" button next to an existing expense.
Change the details (e.g., description or amount) and submit the form.
Verify that the expense list reflects the updated details.
Test Error Handling:

Try editing an expense with invalid data and ensure that appropriate error messages are shown.
## 5. Deleting Expenses
Test Deleting an Expense:
Click the "Delete" button next to an expense.
Confirm the deletion in the prompt.
Verify that the expense is removed from the list after confirmation.
## 6. Navigation
Test Navigation:
Use the back button in the forms to return to the previous page.
Ensure that navigating to non-existent routes redirects to an error page.
## 7. Responsive Design
Test Responsiveness:
Resize the browser window or use a mobile device to test the application's layout and functionality.
Ensure all components are displayed correctly on various screen sizes.
