// hello_python.js
const { loadPyodide } = require("pyodide");
const path = require("path");

async function hello_python() {
  let pyodide = await loadPyodide({
    // indexURL: "<pyodide artifacts folder>",
    indexURL: path.join("./node_modules/pyodide"),
  });

  // RUN YOUR PYTHON CODE
  return pyodide.runPythonAsync("1+1");
}

hello_python().then((result) => {
  console.log("Python says that 1+1 =", result);
});
