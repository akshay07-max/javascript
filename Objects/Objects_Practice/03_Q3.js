const schoolData = {
  schoolName: "Central High School",
  location: "Anytown, USA",
  students: [
    {
      studentId: "S1001",
      name: "Alice Smith",
      gradeLevel: 10,
      // Nested object for grades
      grades: {
        math: 92,
        science: 88,
        history: 95,
        english: 89,
      },
      // Another nested object for contact info
      contact: {
        email: "alice.s@example.com",
        phone: "555-1234",
      },
    },
    {
      studentId: "S1002",
      name: "Bob Johnson",
      gradeLevel: 10,
      grades: {
        math: 78,
        science: 82,
        history: 75,
        english: 80,
      },
      contact: {
        email: "bob.j@example.com",
        phone: "555-5678",
      },
    },
    {
      studentId: "S1003",
      name: "Charlie Brown",
      gradeLevel: 9,
      grades: {
        math: 85,
        science: 90,
        history: 82,
        english: 91,
      },
      contact: {
        email: "charlie.b@example.com",
        phone: "555-9012",
      },
    },
  ],
  // Other school-wide info
  principal: "Dr. Jane Doe",
};

// --- How to access data ---

// Get the first student's name:
console.log(schoolData.students[0].name); // Alice Smith

// Get Bob's Math grade:
console.log(schoolData.students[1].grades.math); // 78

// Get Charlie's email:
console.log(schoolData.students[2].contact.email); // charlie.b@example.com
