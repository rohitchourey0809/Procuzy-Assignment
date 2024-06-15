// src/App.js
import React, { useState } from "react";
import { Box, Heading, Container } from "@chakra-ui/react";
import TopicInput from "./components/TopicInput";
import ArticleList from "./components/ArticleList";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <Container maxW="container.md" p={4}>
      <Box textAlign="center" mb={8}>
        <Heading>Medium Article Scraper</Heading>
      </Box>
      <TopicInput setArticles={setArticles} />
      <ArticleList articles={articles} />
    </Container>
  );
}

export default App;
