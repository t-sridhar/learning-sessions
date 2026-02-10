# CSS Selectors and Specificity

CSS selectors are patterns used to select the element(s) you want to style.

## Common Selectors

*   **Type Selector:** Selects all elements of a given type.
    ```css
    p {
      color: blue;
    }
    ```
*   **Class Selector:** Selects all elements with a given class.
    ```css
    .my-class {
      font-weight: bold;
    }
    ```
*   **ID Selector:** Selects a single element with a given ID.
    ```css
    #my-id {
      background-color: yellow;
    }
    ```
*   **Attribute Selector:** Selects elements with a certain attribute.
    ```css
    a[target="_blank"] {
      text-decoration: none;
    }
    ```
*   **Universal Selector:** Selects all elements.
    ```css
    * {
      margin: 0;
      padding: 0;
    }
    ```

## Specificity

Specificity is the algorithm used by browsers to determine which CSS rule is the most "specific" and therefore should be applied.

*   **Inline styles:** (e.g., `style="font-weight: bold;"`) - highest specificity
*   **IDs:** (e.g., `#my-id`)
*   **Classes, pseudo-classes, attribute selectors:** (e.g., `.my-class`, `:hover`, `[type="submit"]`)
*   **Type selectors, pseudo-elements:** (e.g., `p`, `::before`) - lowest specificity
