document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("studentTableBody");

    // Mock data
    const students = [
        { code: "101", name: "Alice Smith", course: "Math", dob: "2002-01-15" },
        { code: "102", name: "Bob Johnson", course: "Science", dob: "2001-12-10" },
        { code: "103", name: "Charlie Brown", course: "History", dob: "2003-05-20" },
        { code: "104", name: "Diana Prince", course: "Physics", dob: "2002-09-05" },
        { code: "105", name: "Ethan Hunt", course: "Chemistry", dob: "2000-11-25" },
    ];

    // Populate table with mock data
    students.forEach((student) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.code}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.dob}</td>
            <td>
                <a href="edit.html?code=${student.code}" class="btn btn-primary btn-sm">Edit</a>
                <button class="btn btn-danger btn-sm">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
});
