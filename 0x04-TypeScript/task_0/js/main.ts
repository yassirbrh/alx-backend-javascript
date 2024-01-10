interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Yassir",
    lastName: "Brhaiberh",
    age: 22,
    location: "Morocco"
};

const student2: Student = {
    firstName: "Elon",
    lastName: "Musk",
    age: 52,
    location: "US"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Entire HTML content as a string
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Table</title>
</head>
<body>
  ${table.outerHTML}
  <script src="main.js"></script>
</body>
</html>
`;

// Create a Blob with the HTML content
const blob = new Blob([htmlContent], { type: "text/html" });

// Create a download link and trigger a click event to download the HTML file
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "index.html";
link.click();
