# The CSS Box Model

Every element on a webpage is a rectangular box. The CSS box model describes how the space around an element is created.

The box model consists of:

*   **Content:** The actual content of the box, where text and images appear.
*   **Padding:** The space between the content and the border.
*   **Border:** A border that goes around the padding and content.
*   **Margin:** The space outside the border, between this box and other elements.

## Box Model Properties

*   `width` and `height`: Set the width and height of the content area.
*   `padding`: Sets the padding on all four sides. You can also use `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
*   `border`: Sets the border's width, style, and color.
*   `margin`: Sets the margin on all four sides. You can also use `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

## `box-sizing`

The `box-sizing` property changes how the `width` and `height` of an element are calculated.

*   `content-box` (default): The `width` and `height` properties only apply to the content of the element. Padding and border are added on top of the specified width and height.
*   `border-box`: The `width` and `height` properties include the content, padding, and border. This makes it much easier to reason about the size of elements.

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
  box-sizing: border-box; /* Recommended */
}
```
