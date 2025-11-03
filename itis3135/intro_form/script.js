document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("introForm");
  const addCourseBtn = document.getElementById("addCourse");
  const coursesDiv = document.getElementById("courses");
  const imageUpload = document.getElementById("imageUpload");
  const clearBtn = document.getElementById("clearResults");
  let imageData = "";

  // convert uploaded image
  imageUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => imageData = e.target.result;
      reader.readAsDataURL(file);
    }
  });

  // add a new course block
  addCourseBtn.addEventListener("click", () => {
    const courseDiv = document.createElement("div");
    courseDiv.classList.add("course");
    courseDiv.innerHTML = `
      <input type="text" placeholder="Department">
      <input type="text" placeholder="Number">
      <input type="text" placeholder="Course Name">
      <input type="text" placeholder="Reason for taking">
      <button type="button" class="removeCourse">Remove</button>
    `;
    coursesDiv.appendChild(courseDiv);

    courseDiv.querySelector(".removeCourse").addEventListener("click", () => {
      courseDiv.remove();
    });
  });

  // handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      firstName: document.getElementById("firstName").value,
      middleName: document.getElementById("middleName").value,
      nickname: document.getElementById("nickname").value,
      lastName: document.getElementById("lastName").value,
      mascotAdj: document.getElementById("mascotAdj").value,
      mascotAnimal: document.getElementById("mascotAnimal").value,
      divider: document.getElementById("divider").value,
      caption: document.getElementById("caption").value,
      ackStatement: document.getElementById("ackStatement").value,
      ackDate: document.getElementById("ackDate").value,
      personalStatement: document.getElementById("personalStatement").value,
      personalBackground: document.getElementById("personalBackground").value,
      professionalBackground: document.getElementById("professionalBackground").value,
      academicBackground: document.getElementById("academicBackground").value,
      computerPlatform: document.getElementById("computerPlatform").value,
      funnyThing: document.getElementById("funnyThing").value,
      somethingShare: document.getElementById("somethingShare").value,
      quote: document.getElementById("quote").value,
      quoteAuthor: document.getElementById("quoteAuthor").value,
      imageData: imageData,
      links: Array.from(document.querySelectorAll(".linkInput")).map((input) => input.value),
      courses: Array.from(coursesDiv.querySelectorAll(".course")).map((c) => ({
        dept: c.children[0].value,
        num: c.children[1].value,
        name: c.children[2].value,
        reason: c.children[3].value
      }))
    };

    localStorage.setItem("introData", JSON.stringify(data));

    window.open("results.html", "_blank");
  });

  // reset: kill everything
const resetBtn = form.querySelector('button[type="reset"]');
resetBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevent default
  localStorage.removeItem("introData");
  imageData = "";
  // remove all courses
  coursesDiv.querySelectorAll(".course").forEach((course) => course.remove());
  // clear all form fields
  form.querySelectorAll("input, textarea").forEach((input) => {
    if (input.type === "file") input.value = "";
    else input.value = "";
  });
});


  // clear button: restore default prefilled info
  clearBtn.addEventListener("click", () => {
    form.reset();
    imageData = "";
    const originalCourses = 5;
    const courseElements = coursesDiv.querySelectorAll(".course");
    courseElements.forEach((course, index) => {
      if (index >= originalCourses) course.remove();
    });
  });
});








