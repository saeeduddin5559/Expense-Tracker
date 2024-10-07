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
npm run start:server

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
Test Validation:

Attempt to submit the form with empty fields or invalid data (e.g., amount exceeding 9,999,999).
Ensure appropriate error messages are displayed, such as "All fields are required" or "Amount must be less than 9,999,999".
## 3. Viewing Expenses
Test Expense List:
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



![image](https://github.com/user-attachments/assets/7f533d93-0d0a-415c-a7f8-ea43623893aa)

![image](https://github.com/user-attachments/assets/e6c34e6d-c507-4854-becd-3776f8978b44)

![image](https://github.com/user-attachments/assets/07861ed8-8da4-427a-8520-3e2d626e3166)

![image](https://github.com/user-attachments/assets/88ff235c-157f-4e3d-8b5f-d45dacb5a556)

![image](https://github.com/user-attachments/assets/6f4d77b9-3a12-481c-a6a3-22c8a34ca65c)

![image](https://github.com/user-attachments/assets/796b494c-efaf-4c6a-abbe-b63c737e4acb)

![image](https://github.com/user-attachments/assets/4a5fa626-f0b6-4b31-a226-ccea45dd8b15)
![image](https://github.com/user-attachments/assets/ece14034-d285-4004-b444-1e5375abca4d)

![image](https://github.com/user-attachments/assets/73172ec8-8c52-4801-879c-d9061328efad)

![image](https://github.com/user-attachments/assets/81c03a68-3f2f-4a78-b9c0-f3a601137a2c)

![image](https://github.com/user-attachments/assets/2a90e8d7-a48a-4477-90ab-88af18983178)

![image](https://github.com/user-attachments/assets/86ee52c1-e2a7-4635-9e06-6fe29a6738d4)

![image](https://github.com/user-attachments/assets/593c8130-3c01-4207-9a47-b06a642c4a50)

