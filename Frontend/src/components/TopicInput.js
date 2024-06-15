// src/components/TopicInput.js
import React, { useState } from "react";
import axios from "axios";
import {
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import { API } from "../services/api";

function TopicInput({ setArticles }) {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!topic) {
      setError("Topic cannot be empty");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await axios.get(`${API}medium/${topic}`);
      setArticles(response.data);
    } catch (error) {
      setError("Failed to fetch articles");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={4}>
      <FormControl isInvalid={!!error}>
        <Input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic"
          mb={2}
        />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
      <Button type="submit" isLoading={loading} colorScheme="teal">
        {loading ? "Loading..." : "Search"}
      </Button>
    </Box>
  );
}

export default TopicInput;
