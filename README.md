# MelodicMuse Project

## Overview

MelodicMuse is a MERN stack project focused on creating a music summer camp website. It provides a platform for users to register, login, explore classes, book classes, and Interact with instructors and administrators.

## Features

1. User Authentication:

   - Login page with email and password fields, along with a link to the registration page.
   - Registration page with fields for name, email, password, confirm password, photo URL.
   - Social login options for convenience.
   - Validation and error handling for registration form.

2. Navbar and Footer:

   - Navbar with website logo/name, Home, Instructors, Classes, Dashboard, and user profile picture.
   - Conditional rendering of profile picture or login button based on user authentication status.
   - Footer with website logo/name, copyright, contact information

3. Homepage:

   - Top Slider Section
   - Popular Classes Section displaying relevant pictures of the top 6 classes based on the number of students.
   - Popular Instructors Section showing pictures of the top 6 instructors based on the number of students in their classes.
   - Gallery Section using React-awesome-reveal animation Library.

4. Instructors Page:

   - Here all instructors is displayed with their image, name, email, number of classes taken, and name of classes.
   - See Classes button to view classes taught by an instructor.

5. Classes Page:

   - Here all Music classes is displayed with their image, name, instructor name, available seats, and price.
   - Select Button to book a class (disabled if seats are not available or user is not logged in).
   - Highlighting class card background in red if no seats are available.

6. Student Dashboard:

   - This route accessible only to students.
   - My Selected Classes section displaying classes booked by the student.
   - Relevant information, such as class details, delete button, and pay button.
   - Ability to remove selected classes by clicking the delete button.
   - My Enrolled Classes section showing classes in which the student has successfully enrolled.
   - Payment page for finalizing payments and reducing available seats after successful payment.
   - Payment history page sorting payments in descending order.

7. Instructor Dashboard:+

   - Private dashboard accessible only to instructors.
   - Add a Class page with a form to add classes.
   - Automatically filled fields for instructor name and email.
   - Display of pending, approved, or denied status for each class.
   - Total Enrolled Students count for each class.
   - Feedback button for admin to provide feedback in case of denial.

8. Admin Dashboard:

   - Private dashboard accessible only to admins.
   - Manage Classes page displaying all classes added by instructors.
   - Approve, deny, and send feedback buttons for each class.
   - Ability to update class status and send feedback to instructors.
   - Manage Users page with relevant user information.
   - Make Instructor and Make Admin buttons to assign roles to users.

9. Additional Features:
   - Use of React Hook Form for the registration and login pages.
   - Dark/light theme toggle for the entire website
   - Responsive design for the entire website.
   - Use of TanStack Query (React Query)
   - Axios for making API calls
   - Implementation of JWT token for login and registration systems.
