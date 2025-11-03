document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("introForm");
  const h2 = document.querySelector("h2");
  const generateJSONBtn = document.getElementById("generateJSON");

  generateJSONBtn.addEventListener("click", () => {
    const data = {
      firstName: document.getElementById("firstName").value,
      preferredName: document.getElementById("nickname").value,
      middleInitial: document.getElementById("middleName").value,
      lastName: document.getElementById("lastName").value,
      divider: document.getElementById("divider").value,
      mascotAdjective: document.getElementById("mascotAdj").value,
      mascotAnimal: document.getElementById("mascotAnimal").value,
      image: document.getElementById("imageUpload").value || "images/saige-by-boba.png",
      imageCaption: document.getElementById("caption").value,
      personalStatement: document.getElementById("personalStatement").value,
      personalBackground: document.getElementById("personalBackground").value,
      professionalBackground: document.getElementById("professionalBackground").value,
      academicBackground: document.getElementById("academicBackground").value,
      subjectBackground: "...", // optional field placeholder
      primaryComputer: document.getElementById("computerPlatform").value,
      courses: Array.from(document.querySelectorAll(".course")).map((c) => ({
        department: c.children[0].value,
        number: c.children[1].value,
        name: c.children[2].value,
        reason: c.children[3].value
      })),
      links: Array.from(document.querySelectorAll(".linkInput")).map((l) => ({
        name: l.previousElementSibling.textContent.replace(":", ""),
        href: l.value
      }))
    };

    // replace form with JSON display
    h2.textContent = "Introduction JSON";
    form.outerHTML = `<section id="jsonOutput"><pre><code>${JSON.stringify(data, null, 2)}</code></pre></section>`;
  });
});
