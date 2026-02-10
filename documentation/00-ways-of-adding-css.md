# Ways of Adding CSS

There are three ways to add CSS to your HTML document:

## 1. External CSS

This is the most common and recommended method. You create a separate `.css` file and link to it from your HTML file using the `<link>` tag in the `<head>` section.

**style.css:**
```css
body {
  background-color: lightblue;
}
```

**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  ...
</body>
</html>
```

**Pros:**
*   Keeps your HTML and CSS separate, making your code cleaner and easier to maintain.
*   You can reuse the same CSS file for multiple pages.

## 2. Internal CSS

You can add CSS directly to your HTML file using the `<style>` tag in the `<head>` section.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <style>
    body {
      background-color: lightblue;
    }
  </style>
</head>
<body>
  ...
</body>
</html>
```

**Pros:**
*   Useful for single-page websites or for applying styles that are specific to a single page.

**Cons:**
*   Can make your HTML file larger and more difficult to read.

## 3. Inline CSS

You can apply styles directly to an HTML element using the `style` attribute.

```html
<p style="color: blue; font-size: 16px;">This is a blue paragraph.</p>
```

**Pros:**
*   Useful for applying a single style to a single element.

**Cons:**
*   Generally considered bad practice because it mixes content with presentation, making your code harder to maintain.
*   Has the highest specificity, which can make it difficult to override with other styles.
