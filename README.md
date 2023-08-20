# T3A2 Full Stack Application (Part A): BookSwapU - Book Exchange Web Application

# R1. Description of the Website

## Purpose

Our project aims to develop a comprehensive textbook exchange platform that enables students at the University of Technology, Sydney (UTS) to efficiently exchange textbooks with one another. This platform empowers students to manage their textbook needs independently, eliminating the need for university intervention. The system can be scaled for use by all universities in Sydney, across Australia, and potentially be extended to the general public. The platform will facilitate user registration, book management, inventory tracking, search capabilities, and messaging for seamless book swapping.

Some of the benefits of this approach become immediately obvious.

**Student Empowerment** - Students gain autonomy and control over their textbook needs, streamlining the exchange process.

**Cost Savings** - The platform promotes financial savings by enabling students to exchange textbooks instead of purchasing new ones.

**Sustainability and Environmental Impact** - Encourages sustainable practices by reducing the demand for new textbooks and minimizing waste.

**Enhanced Collaboration** - Facilitates collaboration and interaction between students across different universities.

## Functionality and Features

**User Registration and Authentication**

* Students can register using their university email in a standard sign-up process. Secure authentication mechanisms will ensure the privacy and security of user accounts.

* Users can create and manage their profiles, including contact information and university details.

**Book Management**

* Registered users can add, update, and delete books from their inventory.

* Book details, such as Title, Author, Condition, Owner, Edition, Year, and Status, will be stored in the system.

**Inventory Tracking**

* Each user maintains an inventory of available books they are willing to exchange.

* Inventory entries include book information like, Title, Author, Condition, Edition, Year, and Status.

**Search Functionality**

* Users can search for books based on Title and Author.

* A the search function will return a list of books and relevant information including the owner. This can be carried out on a user's own inventory.

**Listing of Desired Books and their Owners**

* When a user searches for specific books, the platform will display one or more instances of a title along with the owners username and other book details. Multiple users can be in posession of a particular title.

**Communication via Messaging**

* Users can communicate directly with other users who have the desired books for exchange.

* The platform enables messaging features to facilitate book swapping discussions.

* Users will receive messages through the system to stay informed about potential exchange opportunities.

## Target Audience

The proposed book exchange web application is targeted primarily towards university students, with the initial focus on UTS university students and later expanding to other universities in Sydney, the rest of Australia, and potentially to the general public. The target audience can be further broken down into the following categories:

* **University Students:** The primary target audience comprises university students from UTS and other universities in Sydney and Australia. These students are seeking an efficient and convenient way to exchange textbooks with their peers. They are tech-savvy and comfortable with using web applications for various purposes.

* **Textbook Owners:** Students who own textbooks they no longer need are a specific subset of the target audience. They are interested in making their textbooks available for exchange and may be looking for specific textbooks they need for their courses.

* **Textbook Seekers:** Students actively seeking specific textbooks for their courses are another key audience. They want to find textbooks they need without having to purchase them, and the application provides a platform for them to search for these books among their peers.

* **University Community:** As the application extends its reach to other universities and potentially the general public, the target audience expands to include students, faculty, and staff members from various universities, as well as individuals who are looking for a platform to exchange books.

* **Book Enthusiasts:** Individuals who have an interest in reading beyond their academic studies can also benefit from the application. They might want to explore and exchange books on various topics with other users.

The application aims to serve a diverse group of users, ranging from university students in need of textbooks for their courses to those who want to make their unused textbooks available for exchange. By catering to these different user needs, the application seeks to create a vibrant community of book exchange enthusiasts and facilitate seamless textbook swapping among students within universities and beyond.

## Technology Stack

The proposed book exchange web application (BookSwapU) will be developed using the MERN technology stack, which stands for MongoDB, Express.js, React.js, and Node.js. Each component of the stack serves a specific purpose and contributes to the overall functionality and user experience of the application.

### MongoDB (Database)

MongoDB is a NoSQL database that provides a flexible and scalable data storage solution. In the context of the book exchange application, MongoDB will be used to store information related to users, books, users' inventories, and messages. Collections for users, books, inventory items, and messages can be defined to organize and store the data efficiently. MongoDB's document-based structure allows for easy storage and retrieval of complex data structures, making it suitable for storing user profiles, book details, and inventory information.

### Express.js (Backend Framework)

Express.js is a web application framework for Node.js that simplifies the process of building server-side applications. It provides a set of tools and utilities for creating routes, handling requests and responses, and managing middleware. In the book exchange application, Express.js will be used to create APIs for user authentication, book management, search functionality, and inventory management. It will handle the communication between the frontend and the database, as well as manage the business logic of the application.

### React.js (Frontend Library)

React.js is a JavaScript library for building user interfaces. It allows for the creation of dynamic and interactive frontend components. In the book exchange application, React.js will be used to develop the user interface, including pages for user registration and login, book listing, search results, user inventory management, and messaging display. React's component-based architecture enables the development of reusable UI components that enhance the user experience.

### Node.js (Runtime Environment)

Node.js is a runtime environment that allows JavaScript to be executed on the server side. It provides a non-blocking, event-driven architecture, making it efficient for handling multiple concurrent connections. Node.js will be used as the backend runtime environment for the book exchange application. It will run the Express.js server, handle API requests, and interact with the MongoDB database.

### Additional Libraries and Tools

* **JWT (JSON Web Tokens):** JWT will be used for user authentication and authorization. It allows the application to generate and verify secure tokens for users, ensuring a secure session.

* **Bcrypt:** The BCrypt library lets you hash and salt plaintext passwords in Node.js which are then stored in the database. The frontend would also use bycrypt to encode a submitted plaintext password, and then send it on to the server.

* **ViTest, Jest and Supertest:** Vitest is the unit testing framework built on top of Vite. It is used to test componenents in React. Supertest is a Node.js library and when used together with Jest, allows developers and testers to write automated tests for routes and endpoints.

# R2. Dataflow Diagram

# R3. Application Architecture Diagram

# R4. User Stories

These user stories cover the main functionality of the Book Exchange Application. They can serve as a starting point for designing and implementing the respective features of a full stack MERN application. It is from these stories that the tasks specified in my Trello board (R6) are derived.

**User Account Management:**

* As a user, I want to create an account (sign-up) using my university email to access the textbook exchange platform.

* As a user, I want to log in securely using my credentials to manage my textbook inventory.

* As a user, I want to be able to view and update my account information (profile) like username, email and password.

**Book Management:**

* As a user, I want to view the textbooks in my inventory.

* As a user, I want filter the textbooks that I view as my inventory can get quite large.

* As a user, I want to add new textbooks to my inventory, providing details like title, author, edition, and condition.

* As a user, I want to update the details of the books in my inventory, such as condition and availability status.

* As a user, I want to remove books from my inventory that I no longer wish to exchange.

**Search and Discovery:**

* As a student, I want to search for specific textbooks by entering the title or author's name.

* As a user, I want to view a list of matching texbooks together with the identity of the user that owns the book.

* As a user, I want to see additional information about the books like the edition, year the book was published, status and condition of the textbooks in the search results.

**Book Request and Exchange Process:**

* As a user, I want to directly message other users who have the textbooks I want to exchange.

* As a user, I want to receive a message through the platform from other students with whom I have requested an exchange.

* As a user, I want to be messaged through the platform when another user wants to exchange books from my inventory.

* As a user, I want to initiate a book exchange by proposing a swap to another user with a message.

* As a user, I want to accept or reject a proposed book exchange offer from another student with a message.

* As a user, I want to be able to exhange contact details or nominate a meeting place to swap books.

These user stories outline the various features and functionalities of the proposed textbook exchange web application. Each user story addresses specific needs and requirements of students, ensuring a comprehensive and user-centric experience for all parties involved in the book exchange process.

# R5. Wireframe Diagrams

# R6. Trello Board

We have settled on an Agile Kanban style approach to project management. Each card has a general heading which describes the web page that will be implemented by that block of work. Each web page is covered by two cards. One card represents all the frontend development work. The other card represents all the backend development work.

Each pair of cards contains one or more of user stories (outlined in R4) in it's description, which detail the functionality that will be implemented (frontend and backend).

Each card contains a coding requirement checklist. Each item (or task) is checked off by the developer when completed.

Please note that there isn't always a perfect mapping between user stories and Trello cards. For example, code which loads the 'Profile' page (or component) needs to be added to the 'Profile' link in the navbar component. So there is some crossover work between components. This type of work has been recorded in the cards. Collaboration between developers is required to avoid any conflicts.

The Trello board is divided into the following columns (a standard approach). All cards created will be initially placed in the Todo list and move into the "In Progress" column based on priority.

* **To Do:** Work that is yet to be commenced.
* **In Progress:** Work that is actively being undertaken.
* **Review:** Work that is completed and awaiting review. This may be a code review or it may be a requirement that is evaluated against the rubric criteria. If the item under review fails it is flagged and sent back to **"In Progress"**.
* **Completed:** Work that is completely finished and had passed the review stage.

Cards 1 and 2 have to be carried out first as this is the setup of the project infrastructure. Cards 22 to 25 are carried out in the post development phase. Cards 22 and 23 (User Acceptance Testing) are done independently of each other. All other cards can be assigned to different members of the development team and can largely be carried out independently with collaboration taking place at points where components interact.

We have calculated 14 days to complete the project. Progress will be tracked by recording a standup each day in this section of the Trello board below. A summary of the work done will be posted along with a snapshot of the Trello board.

***<p align="left">Figure 1</p>***
![Trello-Board](docs/trello-main.png)
***<p align="center">Trello Board at the Start of Day 1</p>***

## Link to Trello Workspace

https://trello.com/b/EmuuACLM/bookswapu

## To Do List

***<p align="left">Figure 2</p>***
![Todo-List](docs/todo-list.png)
***<p align="center">Complete list of Trello Cards Representing Blocks of Work</p>***

## Sample Checklists

***<p align="left">Figure 3</p>***
![Checklist-1](docs/checklist-1.png)
***<p align="center">Setup Checklist for the Frontend</p>***

***<p align="left">Figure 4</p>***
![Checklist-2](docs/checklist-2.png)
***<p align="center">Checklist for the Login Page</p>***

***<p align="left">Figure 5</p>***
![Checklist-3](docs/checklist-3.png)
***<p align="center">Checklist for the Login API Route</p>***

***<p align="left">Figure 6</p>***
![Checklist-4](docs/checklist-4.png)
***<p align="center">Checklist for the Messaging Feature View</p>***

