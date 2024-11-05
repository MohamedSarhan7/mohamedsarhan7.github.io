const commandInput = document.getElementById("commandInput");
const output = document.getElementById("output");

const commands = {
  whoami: `
    Name: Mohamed Sarhan
    Role: Backend Developer, exploring the world of DevOps
    Experience: 2 years in backend development with Golang, Django, and Laravel.
  `,
  "ls projects": `
    Family Tree API: A CRUD application in Go for managing family relationships.
    Notification System: Real-time notifications with Django and Expo.
    Automated Testing: Using Docker and Appium to streamline Android app testing.
  `,
  help: `
    Available commands:
    - whoami
    - ls projects
    - help
  `,
};

commandInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const inputText = commandInput.value.trim();
    output.innerHTML += `<p>> ${inputText}</p>`;
    processCommand(inputText);
    commandInput.value = "";
  }
});

function processCommand(command) {
  if (commands[command]) {
    output.innerHTML += `<p>${commands[command]}</p>`;
  } else {
    output.innerHTML += `<p>Command not recognized. Type 'help' for available commands.</p>`;
  }
  output.scrollTop = output.scrollHeight;
}
