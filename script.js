let treeNodes = [];
let nodeIndex = 0;

/* ===================== BUILD TREE ===================== */

function buildTreeFromInputs() {
    const inputStr = document.getElementById("nodeValues").value;
    const values = inputStr
        .split(/[\s,]+/)
        .map(v => parseInt(v.trim()))
        .filter(v => !isNaN(v));

    if (values.length === 0) return;

    resetTreeArea();
    treeNodes = values;

    const sortedValues = [...values].sort((a, b) => a - b);

    nodeIndex = 0;
    const treeRoot = buildBalancedTree(sortedValues, 0);
    assignPositions(treeRoot);

    const treeContainer = document.getElementById("tree");
    treeContainer.style.width = Math.max(1200, nodeIndex * 100) + "px";

    renderTree(treeRoot);
}

/* ===================== TREE STRUCTURE ===================== */

function buildBalancedTree(arr, depth) {
    if (!arr.length) return null;

    const mid = Math.floor(arr.length / 2);

    return {
        value: arr[mid],
        left: buildBalancedTree(arr.slice(0, mid), depth + 1),
        right: buildBalancedTree(arr.slice(mid + 1), depth + 1),
        depth: depth,
        index: null
    };
}

/* ===================== POSITION ASSIGNMENT ===================== */

function assignPositions(node) {
    if (!node) return;

    assignPositions(node.left);
    node.index = nodeIndex++;
    assignPositions(node.right);
}

/* ===================== RENDER TREE ===================== */

function renderTree(node) {
    if (!node) return;

    const xGap = 100;
    const yGap = 90;

    const x = node.index * xGap;
    const y = node.depth * yGap + 40;

    drawNode(node.value, x, y);

    if (node.left) {
        drawEdge(
            x + 20,
            y + 20,
            node.left.index * xGap + 20,
            node.left.depth * yGap + 60
        );
        renderTree(node.left);
    }

    if (node.right) {
        drawEdge(
            x + 20,
            y + 20,
            node.right.index * xGap + 20,
            node.right.depth * yGap + 60
        );
        renderTree(node.right);
    }
}

/* ===================== DRAW HELPERS ===================== */

function drawNode(value, x, y) {
    const node = document.createElement("div");
    node.className = "node";
    node.textContent = value;
    node.style.left = x + "px";
    node.style.top = y + "px";
    document.getElementById("tree").appendChild(node);
}

function drawEdge(x1, y1, x2, y2) {
    const length = Math.hypot(x2 - x1, y2 - y1);
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

    const line = document.createElement("div");
    line.className = "line";
    line.style.width = length + "px";
    line.style.left = x1 + "px";
    line.style.top = y1 + "px";
    line.style.transform = `rotate(${angle}deg)`;
    document.getElementById("tree").appendChild(line);
}

/* ===================== RESET ===================== */

function resetTreeArea() {
    document.getElementById("tree").innerHTML = "";
    document.getElementById("traversal-output").innerHTML = "";
}

function resetTree() {
    resetTreeArea();
    document.getElementById("numNodes").value = "";
    document.getElementById("nodeValues").value = "";
    treeNodes = [];
}

/* ===================== TRAVERSALS ===================== */

function showInorder() {
    const sorted = [...treeNodes].sort((a, b) => a - b);
    document.getElementById("traversal-output").innerHTML =
        "Inorder: " + sorted.join(" → ");
}

function showPreorder() {
    document.getElementById("traversal-output").innerHTML =
        "Preorder: " + treeNodes.join(" → ");
}

function showPostorder() {
    const sorted = [...treeNodes].sort((a, b) => b - a);
    document.getElementById("traversal-output").innerHTML =
        "Postorder: " + sorted.join(" → ");
}
