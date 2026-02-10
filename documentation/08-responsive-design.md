# Responsive Design

Responsive design is an approach to web design that makes your web pages look good on all devices (desktops, tablets, and phones).

## Media Queries

Media queries are the key to responsive design. They allow you to apply different styles for different screen sizes.

A media query consists of a media type and can contain one or more expressions, which resolve to either true or false.

```css
/* On screens that are 600px or less, set the background color to blue */
@media screen and (max-width: 600px) {
  body {
    background-color: blue;
  }
}
```

In this example, the `background-color` of the `body` will be blue if the screen width is 600px or less.

## Common Breakpoints

While there are no "official" breakpoints, here are some common ones that are often used:

*   **320px - 480px:** Mobile devices
*   **481px - 768px:** iPads, Tablets
*   **769px - 1024px:** Small screens, laptops
*   **1025px - 1200px:** Desktops, large screens
*   **1201px and more:** Extra large screens, TV

## Fluid Layouts

In addition to media queries, responsive design often involves using fluid layouts. This means using relative units like percentages (%) and viewport units (vw, vh) for widths, instead of fixed units like pixels.

```css
.container {
  width: 80%; /* 80% of the parent element's width */
  margin: 0 auto; /* Center the container */
}
```

By using fluid layouts and media queries together, you can create websites that adapt to any screen size.
