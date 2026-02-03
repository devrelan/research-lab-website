document.getElementById("contactForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: e.target[0].value,
    email: e.target[1].value,
    message: e.target[2].value
  };

  const res = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    alert("Message sent successfully!");
    e.target.reset();
  } else {
    alert("Error sending message");
  }
});
