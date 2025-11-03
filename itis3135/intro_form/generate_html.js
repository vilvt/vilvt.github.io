document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("introForm");
  const h2 = document.querySelector("h2");
  const generateHTMLBtn = document.getElementById("generateHTML");

  generateHTMLBtn.addEventListener("click", () => {
    const firstName = document.getElementById("firstName").value;
    const middle = document.getElementById("middleName").value;
    const nickname = document.getElementById("nickname").value;
    const lastName = document.getElementById("lastName").value;
    const mascotAdj = document.getElementById("mascotAdj").value;
    const mascotAnimal = document.getElementById("mascotAnimal").value;
    const imageSrc = document.getElementById("imageUpload").value || "images/saige-by-boba.png";
    const caption = document.getElementById("caption").value;

    const personalStatement = document.getElementById("personalStatement").value;
    const personalBG = document.getElementById("personalBackground").value;
    const professionalBG = document.getElementById("professionalBackground").value;
    const academicBG = document.getElementById("academicBackground").value;
    const computer = document.getElementById("computerPlatform").value;

    const coursesHTML = Array.from(document.querySelectorAll(".course"))
      .map((c) => `<li><strong>${c.children[0].value} ${c.children[1].value} - ${c.children[2].value}:</strong> ${c.children[3].value}</li>`)
      .join("\n");

    const linksHTML = Array.from(document.querySelectorAll(".linkInput"))
      .map((l) => `<li><a href="${l.value}" target="_blank">${l.previousElementSibling.textContent.replace(":", "")}</a></li>`)
      .join("\n");

    const htmlContent = `
<h2>Introduction HTML</h2>
<h3>${firstName} ${middle} "${nickname}" ${lastName} ★ ${mascotAdj} ${mascotAnimal}</h3>
<figure>
  <img src="${imageSrc}" alt="Profile Image of ${firstName}">
  <figcaption>${caption}</figcaption>
</figure>
<p><strong>Personal Statement:</strong> ${personalStatement}</p>
<ul>
  <li><strong>Personal Background:</strong> ${personalBG}</li>
  <li><strong>Professional Background:</strong> ${professionalBG}</li>
  <li><strong>Academic Background:</strong> ${academicBG}</li>
  <li><strong>Primary Computer Platform:</strong> ${computer}</li>
</ul>
<h4>Courses</h4>
<ul>
  ${coursesHTML}
</ul>
<h4>Links</h4>
<ul>
  ${linksHTML}
</ul>
`;

    h2.textContent = "Introduction HTML";
    form.outerHTML = `
    <section id="htmlOutput" style="white-space: pre-wrap; max-height: 600px; overflow: auto; border: 1px solid #ccc; padding: 10px;">
        <pre><code>${htmlContent}</code></pre>
    </section>
    `;

  });
});


