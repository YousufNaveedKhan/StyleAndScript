# Lecture 06 - Responsive Design with CSS

Responsive web design ensures that your website looks good and functions well on devices of all sizes. In this lecture, we will cover:

### Topics Covered:
- **Media Queries and Breakpoints**
- **Mobile-First Design Principles**
- **Introduction to CSS Frameworks**

---

## **1. Media Queries and Breakpoints**

**Media queries** allow you to apply different styles to your webpage depending on the characteristics of the device, such as its width, height, or resolution. This helps create a responsive design that adapts to different screen sizes.

### Real-World Example:
Think of a **flexible webpage layout** that adjusts based on the device:
- On **larger screens**, the page might show a multi-column layout.
- On **smaller screens**, it adjusts to a single column for better readability.

### Practical Example:  
Using media queries, we can change the layout of a webpage based on the screen width.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Design with Media Queries</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .box {
            background-color: lightblue;
            height: 100px;
            width: 100%;
            text-align: center;
            line-height: 100px;
        }

        /* For screens wider than 600px */
        @media (min-width: 600px) {
            .box {
                width: 48%;
            }
        }

        /* For screens wider than 900px */
        @media (min-width: 900px) {
            .box {
                width: 30%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Item 1</div>
        <div class="box">Item 2</div>
        <div class="box">Item 3</div>
        <div class="box">Item 4</div>
    </div>
</body>
</html>
```

### Explanation:
- The layout starts with a single-column view.
- For screens wider than **600px**, the boxes adjust to two columns.
- For screens wider than **900px**, the boxes arrange themselves into three columns.

---

## **2. Mobile-First Design Principles**

The **Mobile-First** design approach starts by designing the layout for mobile devices, then scaling up to larger devices using media queries. This ensures that the website works efficiently on smaller screens before enhancing it for larger ones.

### Real-World Example:
Imagine you're designing an **e-commerce website**. On mobile devices, you want the product images to be stacked vertically with a simple navigation menu. As the screen size increases, you can introduce more complex layouts, like a grid of products and a horizontal navigation bar.

### Practical Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobile-First Design</title>
    <style>
        /* Mobile-first styles */
        body {
            font-family: Arial, sans-serif;
        }

        .container {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .box {
            background-color: lightgreen;
            height: 100px;
            text-align: center;
            line-height: 100px;
        }

        /* For screens wider than 768px */
        @media (min-width: 768px) {
            .container {
                flex-direction: row;
                gap: 20px;
            }

            .box {
                width: 48%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Item 1</div>
        <div class="box">Item 2</div>
    </div>
</body>
</html>
```

### Explanation:
- On mobile devices, the layout is stacked vertically.
- When the screen width exceeds **768px**, the layout switches to a horizontal row layout.

---

## **3. Introduction to CSS Frameworks**

A **CSS framework** is a pre-built collection of CSS, JavaScript, and other components that help you quickly build responsive and well-designed websites. Frameworks like **Bootstrap**, **Tailwind CSS**, and **Foundation** come with predefined styles and layout systems that help speed up development.

### Real-World Example:
Consider a **landing page** for a business. Using a framework like Bootstrap, you can quickly implement a responsive grid system, buttons, forms, and navigation bars with minimal custom CSS.

### Practical Example (Using Bootstrap):
Here's how you can use the **Bootstrap framework** to create a responsive layout.

1. **Link to Bootstrap** (you can add the CDN in your HTML `<head>` section):
```html
<head>
    <!-- Bootstrap CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
```

2. **Create a Responsive Layout**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Responsive Layout</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="box" style="background-color: lightcoral; height: 100px; text-align: center; line-height: 100px;">
                    Item 1
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="box" style="background-color: lightblue; height: 100px; text-align: center; line-height: 100px;">
                    Item 2
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="box" style="background-color: lightgreen; height: 100px; text-align: center; line-height: 100px;">
                    Item 3
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Explanation:
- The **container** ensures proper spacing.
- The **row** defines a flexible layout structure.
- The **col-12**, **col-md-6**, and **col-lg-4** classes define how the columns behave at different screen widths.

---

## Conclusion

In this lecture, we covered the following key concepts of responsive web design:
1. **Media Queries and Breakpoints**: Adapt styles based on screen sizes.
2. **Mobile-First Design Principles**: Design for mobile devices first, then enhance for larger screens.
3. **Introduction to CSS Frameworks**: Use pre-built frameworks like Bootstrap to quickly create responsive layouts.

By implementing these techniques, you’ll be able to design websites that look great and function well on devices of all sizes.