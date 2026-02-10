# CSS Colors and Backgrounds

CSS provides a variety of ways to specify colors and apply them to the background of elements.

## Color Values

*   **Color Names:** `red`, `blue`, `green`, etc.
*   **Hexadecimal:** `#RRGGBB` (e.g., `#FF0000` for red).
*   **RGB:** `rgb(red, green, blue)` (e.g., `rgb(255, 0, 0)` for red).
*   **RGBA:** `rgba(red, green, blue, alpha)` (e.g., `rgba(255, 0, 0, 0.5)` for semi-transparent red).
*   **HSL:** `hsl(hue, saturation, lightness)` (e.g., `hsl(0, 100%, 50%)` for red).
*   **HSLA:** `hsla(hue, saturation, lightness, alpha)` (e.g., `hsla(0, 100%, 50%, 0.5)` for semi-transparent red).

## Background Properties

*   `background-color`: Sets the background color of an element.
*   `background-image`: Sets an image as the background.
    ```css
    .hero {
      background-image: url("hero-image.jpg");
    }
    ```
*   `background-repeat`: Sets if/how a background image will be repeated.
*   `background-position`: Sets the starting position of a background image.
*   `background-size`: Specifies the size of the background images.
*   `background-attachment`: Sets whether a background image scrolls with the rest of the page, or is fixed.

## Gradients

CSS also supports gradients, which are smooth transitions between two or more specified colors.

*   **Linear Gradient:**
    ```css
    .gradient {
      background-image: linear-gradient(to right, red, yellow);
    }
    ```
*   **Radial Gradient:**
    ```css
    .gradient {
      background-image: radial-gradient(circle, red, yellow);
    }
    ```
