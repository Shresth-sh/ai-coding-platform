function runCode() {
  const code = document.getElementById("code").value;
  const outputElement = document.getElementById("output");

  try {
    // Capture console.log output
    let consoleOutput = "";
    const originalLog = console.log;
    
    console.log = function (...args) {
      consoleOutput += args.join(" ") + "\n";
      originalLog.apply(console, args);
    };

    // Execute the user code
    eval(code);

    // Restore console.log
    console.log = originalLog;

    outputElement.textContent = consoleOutput || "No output";
  } catch (err) {
    outputElement.textContent = "Error: " + err.message;
  }
}
