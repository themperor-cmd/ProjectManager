# Project Manager UI

This project is a simple **Project Manager UI** with a **retro-styled design**. The interface includes a sidebar for projects, a main section for project details, and a button to create new projects. The design ensures that elements like the project manager title and icons are centered properly.

---

## Features

- **Retro-themed UI** with pixel-style fonts.
- **Flexbox and CSS Grid-based Layout** for easy alignment.
- **Responsive Design** for various screen sizes.
- **Centered Elements:**
  - `#null` (Main SVG/Empty State) is **centered in the page**.
  - `Project Manager` title is **aligned at the center**.

---

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/project-manager-ui.git
   cd project-manager-ui
   ```
2. Open the `index.html` in a browser.

---

## Styling Details

### Centering `#null`

We use **Flexbox** to ensure the `#null` element is perfectly centered in the main section:

```css
#null {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
}
```

If `#null` is inside another container, ensure the parent is also flex-centered:

```css
.parent-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
```

### Aligning `Project Manager` Title

To ensure the `Project Manager` title is centered, we use:

```css
h1 {
    text-align: center;
    width: 100%;
}
```

---

## Usage

- Click **Create Project** to start a new project.
- View projects in the **Projects Sidebar**.
- The UI dynamically adjusts for a clean and minimalistic look.

---

## Contributing

Feel free to fork this repository and submit pull requests. Suggestions and improvements are always welcome!