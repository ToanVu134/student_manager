// Lưu trữ mật khẩu dưới dạng hàm băm
const users = [
    { username: 'admin', password: CryptoJS.SHA256('admin').toString() }
];

const students = [
    { name: 'A', email: 'A@example.com', age: 20, major: 'Computer Science' },
    { name: 'B', email: 'B@example.com', age: 21, major: 'Mathematics' },
    { name: 'C', email: 'C@example.com', age: 21, major: 'Information Technology' },
    // Add more student objects as needed
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Băm mật khẩu nhập vào
    const hashedPassword = CryptoJS.SHA256(password).toString();

    // Kiểm tra tên người dùng và mật khẩu đã băm
    const user = users.find(user => user.username === username && user.password === hashedPassword);
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
