import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownDisplay = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/Htmldocs.md'); // Replace with your markdown file URL
      const text = await response.text();
      setMarkdownContent(text);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownDisplay;
