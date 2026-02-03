document.getElementById("contactForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: e.target[0].value,
    email: e.target[1].value,
    message: e.target[2].value
  };

  try {
    const res = await fetch(
      "https://cuddly-space-orbit-jvpwwjpqgw735wrr-5000.app.github.dev/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );

    if (res.ok) {
      alert("Message sent successfully!");
      e.target.reset();
    } else {
      alert("Server error");
    }
  } catch (err) {
    alert("Cannot reach backend");
    console.error(err);
  }
});
