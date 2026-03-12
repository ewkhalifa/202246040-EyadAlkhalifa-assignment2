# Technical Documentation – Assignment 2 Portfolio Website

## Overview
This project is a personal portfolio website developed for Assignment 2.  
It builds on the previous portfolio by adding more interactivity, dynamic behavior, and better user feedback using JavaScript.

The goal was to create a website that feels more modern and responsive to user actions.

## Main Features

### 1. Dynamic Greeting
The website displays a greeting message that changes depending on the time of day.  
For example:
- Good Morning
- Good Afternoon
- Good Evening

This feature makes the page feel more personal and dynamic.

### 2. Theme Toggle with localStorage
The website includes a dark/light theme toggle.  
When the user changes the theme, the preference is saved in `localStorage`.

#### How it works:
- JavaScript detects when the user clicks the theme button
- The selected theme is applied to the page
- The preference is stored in `localStorage`
- When the page reloads, the saved theme is loaded automatically

This demonstrates basic JavaScript data handling.

### 3. Responsive Navigation Menu
A mobile navigation menu is included for smaller screen sizes.  
Users can open and close the menu using a button.

This improves the usability of the site on phones and tablets.

### 4. Contact Form Validation
The contact form checks user input before submission.

#### Validation includes:
- Required fields must not be empty
- Invalid input is rejected
- The user receives feedback through error or success messages

This improves the user experience and ensures the user understands what happened.

## User Feedback and Error Handling
The project includes basic feedback to communicate clearly with the user.

Examples:
- Error messages when form fields are empty or invalid
- A success message when the form is completed correctly
- Clear feedback when the user interacts with the page

This is important because the assignment requires the application to always give the user feedback.

## Animation and Transitions
CSS transitions and hover effects are used to improve the visual experience.

Examples:
- Smooth hover effects on buttons or links
- Smooth visual transitions when changing theme or interacting with elements
- Improved visual responsiveness for user actions

These effects are simple and helpful rather than distracting.

## Technologies Used
- **HTML5** for page structure
- **CSS3** for styling, layout, and transitions
- **JavaScript** for interactivity and dynamic behavior
- **localStorage** for saving theme preference

## File Responsibilities

### `index.html`
Contains the structure of the portfolio website:
- Navigation
- Hero/About section
- Projects or content sections
- Contact form

### `css/styles.css`
Contains:
- Layout styling
- Responsive design
- Theme styles
- Transitions and hover effects

### `js/script.js`
Contains JavaScript logic for:
- Dynamic greeting
- Theme switching
- Saving theme with `localStorage`
- Mobile menu interaction
- Form validation and feedback

## Challenges and Solutions

### Challenge 1: Making the portfolio more interactive
In Assignment 1, the site was mostly static.  
To improve it for Assignment 2, JavaScript was added so the page responds to user input.

### Challenge 2: Saving user preference
To make the experience more personalized, `localStorage` was used to remember the selected theme.

### Challenge 3: Improving communication with the user
Form validation and feedback messages were added so users know when something goes wrong or when their action succeeds.

## Conclusion
This Assignment 2 portfolio shows clear progress beyond Assignment 1 by adding:
- Dynamic content
- Data handling with JavaScript
- Better user feedback
- Improved interactivity
- A more modern user experience