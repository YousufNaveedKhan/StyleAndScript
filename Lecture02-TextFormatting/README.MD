# Lecture 02: Text Formatting and Image Insertion

Welcome to **Lecture 02** of our web design course! In this lecture, we'll explore text formatting and image insertion in HTML. We will cover various HTML tags and their applications to enhance the presentation of content on a web page.

## Text Formatting

HTML provides several tags for formatting text, enhancing its visual appeal. Here’s a brief overview:

- **Bold Text:** Use the `<strong>` tag to make text bold. This tag also implies that the text is of strong importance.
- **Italic Text:** Use the `<em>` tag to italicize text, which denotes emphasis. Alternatively, you can use the `<i>` tag for italics, but it does not imply any emphasis.
- **Underlined Text:** Use the `<u>` tag to underline text.

### Block vs. Inline Elements

HTML elements are categorized into two types: block elements and inline elements.

- **Block Elements:** These elements take up the full width available and start on a new line. They do not allow other elements to sit on the same line. Examples include `<h1>` to `<h6>` and `<p>`. Block elements are used for larger structures and are typically used for headings and paragraphs.

- **Inline Elements:** These elements take up only the space necessary for their content and can sit on the same line as other inline elements. Examples include `<b>`, `<i>`, and `<span>`. Inline elements are used for smaller parts of text or content that needs to be formatted differently within a block element.

## HTML Tags for Formatting

Here are some commonly used HTML tags for text formatting:

- `<div>`: Defines a division or section in a webpage. It is used to group block elements and apply styles.
- `<del>`: Marks text that has been deleted from the document but remains visible to indicate changes.
- `<strong>`: Makes text bold and signifies strong importance.
- `<em>`: Italicizes text and indicates emphasis.

For a deeper understanding of the differences between `<b>` and `<strong>`, or `<i>` and `<em>`, refer to [this Stack Overflow discussion](https://stackoverflow.com/questions/271743/whats-the-difference-between-b-and-strong-i-and-em).

## Image Insertion

To embed images in HTML, use the `<img>` tag. This tag requires the following attributes:

- **`src`**: Specifies the path to the image file.
- **`alt`**: Provides alternative text for the image, which improves accessibility and helps with SEO.

Additional attributes like `width` and `height` can also be used to control the image size. We will cover these attributes in more detail in upcoming lectures.

## Example: Block and Inline Elements in Action

Consider the following example:

```html
<h1>Aptech Gulshan-2</h1>
<p>Global Institute <b>Institute</b></p>
```

In this example:
- The `<h1>` tag is a block element that takes up the entire width of the page and starts on a new line.
- The `<p>` tag is also a block element. It includes inline elements `<b>` which makes the text bold.
- Note that the `<b>` tag, being an inline element, does not affect the layout of the block element `<p>`. As a result, the bold text appears on a new line.

![Block and Inline Elements](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_XApQz6RdJHqTCEQdOiuZDrgPutU8vsMSuuMw4GxNmlO6N9XEdjPyVbx2awSQZhjeAo&usqp=CAU)

This diagram helps illustrate how block and inline elements interact on a webpage.

## Conclusion

In this lecture, we have covered essential HTML tags for text formatting and image insertion. Understanding the difference between block and inline elements, as well as how to use various formatting tags, will help you create well-structured and visually appealing web pages.

Feel free to experiment with these tags and attributes in your own HTML projects to better grasp their functionality.