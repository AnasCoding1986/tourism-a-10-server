Easy Tour
Easy Tour is a comprehensive tourism management website focusing on a specific category of tourist spots. This project offers a seamless user experience with features such as secure authentication, dynamic tour spot listings, and a user-friendly interface.

Live Site
Explore the live site: Easy Tour

Repositories
Client Repository: Client Repo
Server Repository: Server Repo
Features
Responsive Design: Optimized for mobile, tablet, and desktop views.
User Authentication: Secure login and registration with email and password, along with social media login options.
Tourist Spot Management: Users can add, view, update, and delete tourist spots.
Private Routes: Protected routes ensure only authenticated users can access specific pages.
Sorting and Filtering: Sort tourist spots by cost and view detailed information on each spot.
Interactive UI: Includes a banner slider, extra sections, and a detailed footer.
Dark/Light Theme Toggle: Enhances user experience with theme options.
Key Components
Navbar
Website name/logo
Home
All Tourists Spot
Add Tourists Spot (private/protected route)
My List (private/protected route)
Conditional buttons for Login/Register or User profile with logout option
Authentication
Login Page: Email and password authentication with additional social media login options.
Register Page: New user registration with password requirements.
Private Routes: Access control for adding, updating, and viewing user-specific data.
Pages
Home Page: Features a banner slider, tourists spots section, countries section, and extra sections.
Add Tourists Spot Page: Form to add new tourist spots (private/protected route).
All Tourists Spot Page: Displays all tourist spots with sorting functionality.
View Details Page: Detailed view of a specific tourist spot (private/protected route).
My List Page: User-specific list of added tourist spots in tabular form (private/protected route).
Update Page: Form to update existing tourist spots (private/protected route).
404 Page: Custom not found page.
Extra Features
Loading Spinner: Indicates data loading state.
Toast/Sweet Alerts: Notifications for CRUD operations and authentication feedback.
Environment Variables
Ensure to use environment variables to hide Firebase config keys and MongoDB credentials.

Getting Started
Prerequisites
Node.js
MongoDB
Firebase
Installation
Clone the repositories:
git clone https://github.com/AnasCoding1986/tourism-a-10-client.git

git clone https://github.com/AnasCoding1986/tourism-a-10-server.git

Install dependencies:
For the client:

cd tourism-a-10-client

npm install

For the server:

cd tourism-a-10-server

npm install

Set up environment variables:
Create a .env file in both the client and server directories and add your environment variables.

Run the application:
For the client:

npm start

For the server:

npm run dev

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
Distributed under the MIT License. See LICENSE for more information.






