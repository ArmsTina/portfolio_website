# My Portfolio Website

This repository contains the code for my personal portfolio website, designed to showcase my web development skills and projects.

This README is revised by Chat-GPT.

## Live Site

- [Live Portfolio Website](https://dyyang.netlify.app/)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contact](#contact)

## Description

This portfolio website serves as a comprehensive overview of my web development journey. It is structured to provide visitors with a clear understanding of my skills, projects, and experience. The site includes:

- **Home Page:** An introduction and overview of my background and skills.
- **Portfolio Pages (1-3):** Detailed showcases of my projects, including descriptions, images, and links to live demos and GitHub repositories.
- **Contact Page:** A form to send an email for easy communication.

## Features

- **Responsive Design:** Ensures optimal viewing experience on various devices.
- **Dark/Light Mode Toggle:** Provides user-friendly theme customization.
- **Dynamic UI Rendering:** Utilizes React for a smooth and interactive user experience.
- **Contact Form:** Implemented with Formik and Yup for efficient handling and validation.
- **Email Integration:** Uses EmailJS for seamless message delivery.

## Technologies Used

- **React:** For building the user interface.
- **TypeScript:** Refactored into TS
- **React Bootstrap:** For responsive and customizable UI components.
- **Formik:** For managing form state and handling form submissions.
- **Yup:** For form validation.
- **EmailJS:** For integrating email functionality into the contact form.
- **Custom CSS/SCSS:** For unique styling and animations.
- **npm/yarn:** For package management.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/ArmsTina/portfolio_website](https://github.com/ArmsTina/portfolio_website)
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd portfolio_website
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

## Environment Variables

This project uses environment variables to store sensitive information, such as EmailJS keys. You will need to create a `.env` file in the root directory of the project and add the following variables:

- `VITE_Mail_Public_Key`: Your EmailJS public key.
- `VITE_Mail_Service_Key`: Your EmailJS service key.
- `VITE_Mail_Template_Key`: Your EmailJS template key.

## Usage

1.  **Start the development server:**

    ```bash
    npm run dev
    ```

2.  **Open the website in your browser:**

    Navigate to `http://localhost:5173` in your web browser.

## Contact

For any inquiries or feedback, please feel free to contact me:

- **Email:** dongyoungyang.kr@gmail.com
