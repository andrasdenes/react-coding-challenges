# Dark Mode Pairing/Small Coding Challenge 🌙

### Difficulty: Medium | Time required: ~ 30 minutes

# Requirements

- Add dark-mode switching functionality to the _existing_ dark-mode button
  - Utilise the _existing_ dark-mode scss file by adding a `dark-mode` class to the root `html` element
- When in Dark mode:
  - The button icon should be `faSun`
  - The button icon colour should be `(#FFA500)`. You can use the `color` prop on the `Icon` component.

# Think about

- How we would use Dark mode on other potential routes/components in a bigger application. Would your solution work for this?
- How we can apply a class to the `html` DOM element

![screenshot-light](https://puu.sh/Fq13d/04a9e5ad48.png)
![screenshot-dark](https://puu.sh/Fq132/caa2fa0c6d.png)

# My idea

- **useState** to have persistent state
- conditional rendering
- added _Content_ component to see how easy it is to reproduce this. (available at: /content; also added Links with react-router-dom)
