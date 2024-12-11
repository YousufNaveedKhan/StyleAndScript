# Lecture 04 - Introduction to CSS and Its Methods

In the previous lecture, we learned about integrating **images**, **audio**, **videos**, and **tables** into our webpages. We have been steadily building upon our web design fundamentals, step by step. Initially, we explored **text formatting**, followed by **media tags** and **table integration**. Now, it's time to introduce CSS (Cascading Style Sheets) and understand how it enhances the visual presentation of HTML elements.

The purpose of this lecture is to ensure that you grasp the **basics of CSS** and how it integrates with HTML to create visually appealing web designs. In today's session, we will cover:
- What CSS is
- Why CSS is important
- CSS syntax
- Different methods of applying CSS to HTML

## What is CSS?

**CSS (Cascading Style Sheets)** is a language designed to style HTML elements. While HTML structures the content on a webpage, CSS adds styling to make the page visually appealing. Without CSS, HTML elements are displayed with basic, unstyled formatting. CSS allows us to apply colors, fonts, layouts, and other styling features to our webpage.

Not only is CSS used with HTML, but it can also be applied to **XML** documents.

## Attributes and Their Role

Before diving into CSS methods, it’s important to understand **attributes**. We have encountered the term "attributes" several times in our previous lectures, but let’s clarify their role here.

In HTML, **attributes** are used inside opening tags to provide additional information about an element. Attributes exist in **name-value pairs** and can be applied to any HTML element. An example we’ve seen before is the use of `width` and `height` attributes for images:

```html
<img src="image.jpg" height="200" width="300" alt="Description">
```

In this example:
- `src`: Specifies the source of the image.
- `height` and `width`: Define the size of the image.
- `alt`: Provides alternative text in case the image cannot be displayed.

These attributes are written within the opening `<img>` tag, providing extra details about the element.

## Methods of Applying CSS

There are three main ways to apply CSS to HTML:

1. **Inline CSS**  
2. **Internal CSS**  
3. **External CSS** (Recommended)

### 1. Inline CSS

**Inline CSS** is used to apply styling directly within an HTML element’s tag via the `style` attribute. It targets a specific element and is useful for quick changes, but it is not commonly recommended for larger projects due to poor scalability.

Example:

```html
<p style="color: blue; font-size: 24px;">This is a paragraph</p>
```

In this example:
- The `style` attribute applies styles to the `<p>` element.
- The **property-value pairs** specify the styling. Here, `color: blue;` changes the text color to blue, and `font-size: 24px;` adjusts the font size.

#### Syntax Breakdown:
- **Property**: The feature you want to style (e.g., `color`).
- **Value**: The value assigned to the property (e.g., `blue`).
- **Semicolon**: Used as a terminator to end each statement.

Each property-value pair is terminated with a semicolon (`;`). Failing to include it may result in errors, and the CSS will not be applied.

### 2. Internal CSS

**Internal CSS** is placed within a `<style>` tag inside the `<head>` section of the HTML document. It applies styles to the entire page, but all styles are contained within the HTML file itself.

Example:

```html
<style>
    b {
        color: red;
        font-size: 22px;
    }
</style>
```

In this example, the **`b`** element (bold text) is targeted, and the specified styles (red color and 22px font size) are applied to all `<b>` elements within the document.

The CSS is enclosed within curly braces `{}`. The **selector** (`b` in this case) defines which HTML elements the styles should apply to. This is part of a more advanced topic called **CSS Selectors**, which we will cover in future lectures.

### 3. External CSS

**External CSS** is the most recommended and scalable method. It involves creating a separate `.css` file where all styles are defined. This file is then linked to the HTML document using the `<link>` tag inside the `<head>` section.

Example:

```html
<link rel="stylesheet" href="css/style.css">
```

In the external CSS file (e.g., `style.css`):

```css
h3 {
    color: green;
    font-size: 26px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
```

In this case, the CSS rules are defined in a separate file, keeping the HTML file clean and easy to maintain. This method is ideal for larger projects where the same styles need to be applied across multiple pages.

## Key Points to Remember

- **HTML and CSS are not programming languages.** HTML is a **markup language** used to structure content, while CSS is a **style sheet language** used for presentation. They do not involve data manipulation or logic, as programming languages do.
  
- **CSS does not have types; it has methods.** There are no "types" of CSS—only the three methods for applying it, as described above.

- **SCSS** (Sassy Cascading Style Sheets) is a powerful extension of CSS that you may explore later. It offers additional features like variables, nested rules, and more.

- **CSS Frameworks** such as **Bootstrap** and **Tailwind CSS** are collections of pre-written CSS classes that simplify the design process. These are not new languages, but rather tools built on top of CSS to speed up development. We will cover Bootstrap in future lectures.

## Conclusion

In this lecture, we covered the following:
1. Introduction to CSS
2. Attributes and their role in HTML
3. The three methods of applying CSS (Inline, Internal, External)
4. Key differences between HTML, CSS, and programming languages
5. A brief look into SCSS and CSS frameworks

Stay tuned for the next lecture, where we will dive deeper into **CSS Selectors** and advanced styling techniques!