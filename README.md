
# 🌳 AVL Tree Visualizer

An interactive and visually rich **AVL Tree Visualizer** built using **HTML**, **CSS**, and **JavaScript**. This project provides a clean, professional interface to understand how self-balancing Binary Search Trees (BST) organize data.



* **LIVE DEMO** : https://my-avl-tree.vercel.app/
---


## ✨ Features

* 🎯 **Dynamic Node Control:** Define the tree size and input custom values via a space-separated text area.
* 📏 **Automatic Centering:** The tree root dynamically calculates the center of the output panel.
* 🧠 **Built-in Traversal Logic:** Instantly calculate and display:
    * **Inorder:** Displays nodes in ascending order.
    * **Preorder:** Displays nodes starting from the root.
    * **Postorder:** Displays nodes from leaves to root.
* 🎨 **Modern UI/UX:** A deep-space dark theme featuring vibrant gradient buttons and smooth circular nodes.
* ⚡ **Responsive Visualization:** Uses coordinate-based rendering to ensure nodes never overlap.

---

## 🛠️ Tech Stack

* **HTML5** – Structured semantic layout for the Input and Output panels.
* **CSS3** – Custom styling featuring radial-gradients, flexbox, and absolute positioning.
* **JavaScript (ES6)** – Core logic for Tree Construction and geometric rendering.

---

🚀 How It Works
* **Input Panel**: The user enters the number of nodes and their values (e.g., 10 20 30 5 15).
* **Build Process**: The script parses the input string.
    The drawTree() function recursively calculates the coordinates $(x, y)$ for each node.The drawEdge() function connects parent and child nodes with calculated lines.
* **Analysis**: Click the traversal buttons to see the mathematical representation of the generated tree.

* **Traversals**: Array-based sorting and mapping for Pre/In/Postorder outputs.

---

## 📂 Project Structure

* `index.html` – Core layout and panel structure.
* `style.css` – Dark theme aesthetics and button gradients.
* `script.js` – AVL logic, coordinate math, and traversals.

