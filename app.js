const users = [
    { username: 'admin', password: 'admin' }
];

const students = [
    { name: 'John Doe', email: 'john@example.com', age: 20, major: 'Computer Science' },
    { name: 'Jane Smith', email: 'jane@example.com', age: 21, major: 'Mathematics' },
    // Add more student objects as needed
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('students').style.display = 'block';
        loadStudentTable();
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('logoutButton').addEventListener('click', function() {
    document.getElementById('students').style.display = 'none';
    document.getElementById('login').style.display = 'block';
});

function loadStudentTable() {
    const studentTableBody = document.getElementById('studentTableBody');
    studentTableBody.innerHTML = '';
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
            <td>${student.major}</td>
        `;
        studentTableBody.appendChild(row);
    });
}
