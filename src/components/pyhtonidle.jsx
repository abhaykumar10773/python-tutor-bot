import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

const PythonIDE = () => {
  const [code, setCode] = useState("print('Hello, Python! 🐍')");

  const handleRunCode = () => {
    try {
      // Run Python code using Brython (Browser Python)
      window.brython(); 
      let output = eval(code);  // This is a simple way to execute Python-like scripts
      alert(output);  // Show output in an alert (Replace with better UI)
    } catch (error) {
      alert("Error in code: " + error.message);
    }
  };

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-700">Python Playground 🐍</h2>
      <MonacoEditor
        height="300px"
        language="python"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value)}
        options={{ fontSize: 14, minimap: { enabled: false } }}
      />
      <button
        onClick={handleRunCode}
        className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        Run Code ▶️
      </button>
    </div>
  );
};

export default PythonIDE;
