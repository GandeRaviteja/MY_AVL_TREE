let treeNodes = [];

function buildTreeFromInputs() {
    const inputStr = document.getElementById("nodeValues").value;
    const values = inputStr.split(/[\s,]+/).map(v => parseInt(v.trim())).filter(v => !isNaN(v));
    
    if (values.length === 0) return;

    resetTreeArea();
    treeNodes = values;
    
    // Get the actual width of the output panel to find the center
    const treeContainer = document.getElementById("tree");
    const centerX = treeContainer.offsetWidth / 2 - 20; // Subtract half node width (20px)
    
    const sortedValues = [...values].sort((a, b) => a - b);
    
    // Start drawing from the calculated center
    drawTree(sortedValues, centerX, 50, centerX / 1.5);
}

function drawTree(arr, x, y, gap) {
    if (!arr.length) return;

    const mid = Math.floor(arr.length / 2);
    drawNode(arr[mid], x, y);

    const nextY = y + 80;
    // Reduce the gap for children to avoid overlapping
    const nextGap = gap * 0.5;

    if (mid > 0) {
        // Draw edge from center of current node to center of child node
        drawEdge(x + 20, y + 20, (x - gap) + 20, nextY + 20);
        drawTree(arr.slice(0, mid), x - gap, nextY, nextGap);
    }

    if (mid < arr.length - 1) {
        drawEdge(x + 20, y + 20, (x + gap) + 20, nextY + 20);
        drawTree(arr.slice(mid + 1), x + gap, nextY, nextGap);
    }
}

function drawNode(value, x, y) {
    const node = document.createElement("div");
    node.className = "node";
    node.textContent = value;
    node.style.left = x + "px";
    node.style.top = y + "px";
    document.getElementById("tree").appendChild(node);
}

function drawEdge(x1, y1, x2, y2) {
    const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

    const line = document.createElement("div");
    line.className = "line";
    line.style.width = length + "px";
    line.style.left = x1 + "px";
    line.style.top = y1 + "px";
    line.style.transform = `rotate(${angle}deg)`;
    document.getElementById("tree").appendChild(line);
}

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

// Simple traversal placeholders

function showInorder() {
    const sorted = [...treeNodes].sort((a,b)=>a-b);
    document.getElementById("traversal-output").innerHTML = "Inorder: " + sorted.join(" → ");
}

function showPreorder() {
    document.getElementById("traversal-output").innerHTML = "Preorder: " + treeNodes.join(" → ");
}

function showPostorder() {
    const sorted = [...treeNodes].sort((a,b)=>a-b).reverse();
    document.getElementById("traversal-output").innerHTML = "Postorder: " + sorted.join(" → ");
}