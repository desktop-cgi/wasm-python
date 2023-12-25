# wasm-python
wasm-python wasm files to run python scripts in nodejs environments

USAGE:

```
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

```

This is a direct port of [npm package to run python using pyodide](https://www.npmjs.com/package/pyodide) ported for [desktop-cgi](https://github.com/desktop-cgi)

Check out more on different ways of using Python language interpretor inside of JS, Node.js here [https://pythondev.readthedocs.io/wasm.html](https://pythondev.readthedocs.io/wasm.html)

[PYODIDE](https://pyodide.org/en/stable/)
