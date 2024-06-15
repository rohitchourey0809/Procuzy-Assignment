# Medium Article Scraper

## Description

Medium Article Scraper is a web application that scrapes articles from Medium based on a given topic. It leverages Express.js for the backend, MongoDB for data storage, and React with Chakra UI and Framer Motion for a smooth and visually appealing frontend experience.

## Features

- Search for Medium articles by topic
- Display article titles, authors, publication dates, and URLs
- Smooth, animated transitions for the article list
- Simple and intuitive user interface

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/rohitchourey0809/Procuzy-frontend.git
    
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Set up MongoDB:
    - Ensure you have MongoDB Atlas or a local MongoDB instance running.
    - Update the MongoDB URI in `index.js` with your MongoDB connection string.

4. Start the backend server:
    ```bash
    node index.js
    ```

### Frontend

1. Navigate to the `client` directory:
    ```bash
    cd client
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Enter a topic in the input field and click the "Search" button.
3. The application will scrape Medium articles based on the provided topic and display them with smooth animations.

## Endpoints

### POST /scrape

Scrape articles from Medium based on the given topic.

- **Request body:**
    ```json
    {
      "topic": "technology"
    }
    ```

- **Response:**
    ```json
    [
      {
        "title": "Article Title",
        "author": "Author Name",
        "publicationDate": "Publication Date",
        "url": "Article URL"
      },
      ...
    ]
    ```

### GET /medium/topic

Fetch all scraped articles from the database.

- **Response:**
    ```
   [
    {
        "title": "Tech Jobs & Internships Released on June 15, 2024 Saturday",
        "author": "",
        "publicationDate": "Sat, 15 Jun 2024 05:13:16 GMT",
        "url": "https://medium.com/@munotesandsolution/tech-jobs-internships-released-on-june-15-2024-saturday-584b427b378d?source=rss------technology-5"
    },
    {
        "title": "Tech Updates for the Week -Top 5",
        "author": "",
        "publicationDate": "Sat, 15 Jun 2024 05:10:24 GMT",
        "url": "https://medium.com/@jaxl-editors/tech-updates-for-the-week-top-5-ffd4465d0a24?source=rss------technology-5"
    },
    {
        "title": "The Future of Search: An Interview with Perplexity AI CEO Aravind Srinivas",
        "author": "",
        "publicationDate": "Sat, 15 Jun 2024 05:07:10 GMT",
        "url": "https://mr-oceanblue.medium.com/the-future-of-search-an-interview-with-perplexity-ai-ceo-aravind-srinivas-ea5ddf98cd31?source=rss------technology-5"
    },
    {
        "title": "The Evolution of Media: \nFrom Traditional to Digital Age",
        "author": "",
        "publicationDate": "Sat, 15 Jun 2024 05:07:04 GMT",
        "url": "https://medium.com/@umairali271/the-evolution-of-media-from-traditional-to-digital-age-20c10702ba2c?source=rss------technology-5"
    },
    {
        "title": "Driving Diversity In Tech: Innovative Approaches For An Inclusive Future",
        "author": "",
        "publicationDate": "Sat, 15 Jun 2024 04:59:57 GMT",
        "url": "https://medium.com/@butlersherrell04/driving-diversity-in-tech-innovative-approaches-for-an-inclusive-future-0d1b39fec946?source=rss------technology-5"
    }
]
    
    ```

## Components

### `TopicInput.js`

Renders an input field for the user to enter a topic and fetch articles.

### `ArticleList.js`

Displays a list of articles with smooth animations using Framer Motion and Chakra UI.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

