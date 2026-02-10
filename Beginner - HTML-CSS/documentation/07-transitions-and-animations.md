# CSS Transitions and Animations

CSS transitions and animations allow you to create smooth and engaging user experiences by changing property values over time.

## Transitions

Transitions allow you to change property values smoothly, over a given duration.

To create a transition, you need to specify two things:

1.  The CSS property you want to add an effect to.
2.  The duration of the effect.

```css
.button {
  background-color: blue;
  transition: background-color 0.5s ease;
}

.button:hover {
  background-color: red;
}
```

In this example, when you hover over the button, the background color will change from blue to red over a period of 0.5 seconds.

### Transition Properties

*   `transition-property`: Specifies the name of the CSS property the transition effect is for.
*   `transition-duration`: Specifies how many seconds or milliseconds a transition effect takes to complete.
*   `transition-timing-function`: Specifies the speed curve of the transition effect (`ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`).
*   `transition-delay`: Specifies a delay (in seconds) for the transition effect.

## Animations

Animations are more powerful than transitions. They allow you to create complex animations with multiple steps.

To create an animation, you first need to define the animation with `@keyframes`, and then apply it to an element.

```css
@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.box {
  animation-name: slide-in;
  animation-duration: 1s;
}
```

### Animation Properties

*   `animation-name`: Specifies the name of the `@keyframes` animation.
*   `animation-duration`: Specifies how long an animation should take to complete one cycle.
*   `animation-timing-function`: Specifies the speed curve of the animation.
*   `animation-delay`: Specifies a delay for the start of an animation.
*   `animation-iteration-count`: Specifies the number of times an animation should be played.
*   `animation-direction`: Specifies whether an animation should be played forwards, backwards, or in alternate cycles.
