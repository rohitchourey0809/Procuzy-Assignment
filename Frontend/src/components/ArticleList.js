// src/components/ArticleList.js
import React from "react";
import { Box, Text, Link, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function ArticleList({ articles }) {
  return (
    <VStack spacing={4} align="stretch">
      {articles.map((article, index) => (
        <MotionBox
          key={index}
          p={5}
          shadow="md"
          borderWidth="1px"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Text fontSize="xl">{article.title}</Text>
          <Text mt={2}>
            By {article.author || "Unknown"} on{" "}
            {new Date(article.publicationDate).toLocaleDateString()}
          </Text>
          <Link href={article.url} isExternal color="teal.500">
            Read more
          </Link>
        </MotionBox>
      ))}
    </VStack>
  );
}

export default ArticleList;
