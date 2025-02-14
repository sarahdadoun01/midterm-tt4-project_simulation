document.addEventListener("DOMContentLoaded", function () {
    // Parse URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const studentCode = urlParams.get("code");

    // Mock data for pre-filling the form
    const students = {
        "101": { name: "Alice Smith", course: "Math", dob: "2002-01-15" },
        "102": { name: "Bob Johnson", course: "Science", dob: "2001-12-10" },
        "103": { name: "Charlie Brown", course: "History", dob: "2003-05-20" },
        "104": { name: "Diana Prince", course: "Physics", dob: "2002-09-05" },
        "105": { name: "Ethan Hunt", course: "Chemistry", dob: "2000-11-25" },
    };

    const form = document.getElementById("editForm");
    const student = students[studentCode];

    if (student) {
        form.elements["code"].value = studentCode;
        form.elements["name"].value = student.name;
        form.elements["course"].value = student.course;
        form.elements["dob"].value = student.dob;
    }

    // Placeholder for form submission handling
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Form submitted!");
    });
});
