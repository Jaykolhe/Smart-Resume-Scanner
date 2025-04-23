# Smart Resume Screener

The **Smart Resume Screener** is a web application designed to upload, search, and manage resumes efficiently. The application leverages advanced technologies such as **React**, **Tailwind CSS**, **Spring Boot**, **PostgreSQL**.

## Features

- **Resume Upload**: Allows users to upload resumes in various formats.
- **Resume Search**: Enables users to search for resumes based on keywords.
- **Resume View**: Displays extracted text and metadata (e.g., upload timestamp).
- **Responsive Design**: Fully responsive, with mobile-first design using Tailwind CSS.
- **Error Handling**: Includes error boundaries to gracefully handle unexpected errors.

## Tech Stack

### Frontend:
- **React**: For building the UI components and handling state.
- **Tailwind CSS**: For utility-first CSS to style the application.
- **Vite**: A modern build tool for fast development and optimized builds.

### Backend:
- **Spring Boot**: For building a RESTful backend API to handle file uploads, search, and other functionalities.
- **PostgreSQL**: For storing resume data and metadata.

## Use Case

The **Smart Resume Screener** is designed for HR professionals or hiring managers who need to screen resumes efficiently. By uploading resumes to the system and searching for key skills or job titles, users can quickly identify relevant candidates. The application supports the extraction of text from resumes to allow for easier searchability and filtering.

## Architecture

- **Frontend**: Built with **React** and styled using **Tailwind CSS**. It communicates with the backend via RESTful APIs.
- **Backend**: Built with **Spring Boot** and handles resume uploads, searches, and metadata extraction. The backend also includes a file upload service, a resume search API, and an API to retrieve the extracted data.
- **Database**: **PostgreSQL** is used for storing metadata and resume-related information.
## Setup Instructions

### Prerequisites
- **Node.js** (for frontend)
- **Java 11+** (for backend)

### 1. Clone the Repository
```bash
git clone  https://github.com/Jaykolhe/Smart-Resume-Scanner.git
cd Smart-Resume-Scanner
