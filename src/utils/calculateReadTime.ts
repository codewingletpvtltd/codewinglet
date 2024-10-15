export const calculateReadTime = (contentArray: any) => {
  const wordsPerMinute = 200; // Average reading speed

  // Helper function to extract text from nested structure
  const extractText = (contentArray: any) => {
    let fullText = '';

    contentArray.forEach((section: any) => {
      section.content.forEach((block: any) => {
        block.children.forEach((child: any) => {
          if (child.text) {
            fullText += child.text + ' ';
          }
        });
      });
    });

    return fullText;
  };

  const fullText = extractText(contentArray); // Extract text from content

  const wordCount = fullText.split(/\s+/).filter(Boolean).length; // Count words
  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute); // Calculate reading time

  return `${readTimeMinutes} min read`;
};
