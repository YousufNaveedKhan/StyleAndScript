## **Lecture 10 - Bootstrap Basics**  

### **Overview:**  
In this lecture, you’ll be introduced to the **Bootstrap framework**, a powerful toolkit for building responsive and mobile-first websites. We will explore its core features, including the **grid system**, responsive utilities, and pre-styled components like navbars, cards, and modals. By the end of the lecture, you'll know how to use Bootstrap to create visually appealing and responsive layouts.  

---

### **Topics Covered:**  
1. **Introduction to the Bootstrap Framework**  
2. **Grid System and Responsive Utilities**  
3. **Styling Components: Navbar, Cards, Modals, etc.**  

---

### **1. Introduction to the Bootstrap Framework**  

Bootstrap is a popular open-source CSS framework that simplifies web design by offering pre-designed components and a responsive grid system.  

#### **Why Use Bootstrap?**  
Bootstrap is widely used for the following reasons:  
1. **Responsive Design:** Built-in responsiveness ensures your website looks great on all devices.  
2. **Ease of Use:** Predefined classes and components reduce the need to write custom CSS from scratch.  
3. **Time-Saving:** Accelerates development with ready-to-use elements like navbars, buttons, modals, etc.  
4. **Consistency:** Ensures uniform design across different browsers and devices.  
5. **Community Support:** Extensive documentation and a vast community for troubleshooting and ideas.  

#### **How to Integrate Bootstrap:**  
Bootstrap can be included in your project via:  
- **CDN (Content Delivery Network):**  
Add the following `<link>` to your `<head>`:  
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```
- **Download:** Download the files from [Bootstrap's official website](https://getbootstrap.com/).  

---

### **2. Grid System and Responsive Utilities**  

The Bootstrap **grid system** allows you to create responsive layouts using rows and columns.  

#### **Key Concepts:**  
- **Container:** Wraps the content and aligns it in the center of the page.  
- **Row:** Divides the container into horizontal sections.  
- **Columns:** Defines the width of the content, split into 12 units.  

#### **Example:**  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Grid</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-4">Column 1</div>
            <div class="col-md-4">Column 2</div>
            <div class="col-md-4">Column 3</div>
        </div>
    </div>
</body>
</html>
```
In this example:  
- **`col-md-4`** ensures the column takes up 4 out of 12 units on medium-sized screens.  
- **Responsive utilities**: Automatically adjust layout for different screen sizes (e.g., `col-sm`, `col-lg`).  

---

### **3. Styling Components: Navbar, Cards, Modals**  

Bootstrap comes with pre-designed components to speed up development.  

#### **Navbar Example:**  
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
            </ul>
        </div>
    </div>
</nav>
```

#### **Card Example:**  
```html
<div class="card" style="width: 18rem;">
    <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
```

#### **Modal Example:**  
```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">This is the content of the modal.</div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
```

---

### **Conclusion:**  
In this lecture, we covered:  
- How to integrate Bootstrap into your projects.  
- The Bootstrap **grid system** for creating responsive layouts.  
- Pre-styled components like **Navbar**, **Cards**, and **Modals** for faster development.  

Bootstrap simplifies web design, allowing you to focus more on functionality and less on styling. Mastering its features will significantly boost your productivity in front-end development!  