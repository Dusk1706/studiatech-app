# StudiaTech Tutoring APP

This project enables users to offer and purchase online tutoring services. 
Users can register as tutors, list their tutoring services, and be contacted 
by those seeking assistance in a variety of subjects.

## Features
Role Switching: The user can seamlessly switch between the roles of a tutor and a student within the platform.

Profile Customization: The user has the ability to create and customize their profile, providing information 
relevant to both tutoring services offered and subjects they want to learn.

Service Listings: Users can list the tutoring services they offer, including details such as the title, price, category and more.

Real-Time Messaging: The platform incorporates a real-time messaging system, allowing tutors and students to communicate effectively.

## Technologies Used
Frontend: Next.js, Tailwind CSS
Backend: Node.js
Database: PostgreSQL
ORM: Prisma

## Getting Started
Clone the repository.
Install dependencies using npm install.
Configure environment variables, including Stripe API keys for payment integration.
Set up the database and run migrations with Prisma.
npx prisma db push
Run the application using yarn dev.
