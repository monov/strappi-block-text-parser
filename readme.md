# BlocksRenderer

This function is designed to render rich text blocks fetched from Strapi. It converts the structured data of the article body into HTML elements based on the type of content present.

## Functionality

The `BlocksRenderer` function iterates through each block of the article body and converts it into HTML elements based on its type. Here's how each type of block is handled:

- **Heading**: Renders headings (`<h1>`, `<h2>`, `<h3>`, etc.) based on the level specified in the article.
- **List**: Renders either ordered or unordered lists (`<ol>` or `<ul>`) depending on the format of the list in the article.
- **Quote**: Renders a blockquote (`<q>`) element.
- **Paragraph**: Renders paragraphs (`<p>`) for regular text content.
- **Image**: Renders an image (`<img>`) element with the source taken from the URL specified in the article.

## Usage

To use this function, pass the article body fetched from Strapi as an argument to the function. It will return an array of HTML strings, each representing a rendered block of the article body.

```javascript
import { BlocksRenderer } from './BlocksRenderer';

const articleBody = /* Fetch article body from Strapi */;
const renderedBlocks = BlocksRenderer(articleBody);
// Render the HTML elements in your application
```
Ensure that the article body passed to the function follows the expected structure with appropriate types and content.

# BlocksRenderer Example

Here's an example demonstrating how to use the `BlocksRenderer` function with sample data:

Suppose we have an article body represented as an array of objects:

```javascript
const articleBody = [
  { type: 'heading', level: 1, children: [{ text: 'Sample Heading' }] },
  { type: 'paragraph', children: [{ text: 'This is a sample paragraph.' }] },
  { type: 'list', format: 'unordered', children: [{ children: [{ text: 'Item 1' }] }, { children: [{ text: 'Item 2' }] }] },
  { type: 'quote', children: [{ text: 'This is a sample quote.' }] },
  { type: 'image', image: { url: 'https://example.com/image.jpg' } }
];
```

We can then render this article body using the BlocksRenderer function:

```javascript
import { BlocksRenderer } from './BlocksRenderer';

const renderedBlocks = BlocksRenderer(articleBody);
```

The renderedBlocks array now contains HTML strings representing each block of the article body, ready to be rendered in a web page or application.

## Rendered Output
Assuming the article body contains various types of content, the rendered output might look like this:
```javascript
<h1>Sample Heading</h1>
<p>This is a sample paragraph.</p>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<q>This is a sample quote.</q>
<img src="https://example.com/image.jpg" width="100%" height="auto"/>
```