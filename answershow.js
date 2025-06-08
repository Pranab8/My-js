
 const accs = document.getElementsByClassName("acc");
  for (let i = 0; i < accs.length; i++) {
    accs[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const pnl = this.nextElementSibling;
      pnl.style.display = pnl.style.display === "block" ? "none" : "block";
    });
  }

  const questionsPerPage = 5;
  const questions = document.querySelectorAll(".question-block");
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const pagination = document.getElementById("pagination");

  function showPage(page) {
    questions.forEach((q, i) => {
      q.style.display = (i >= (page - 1) * questionsPerPage && i < page * questionsPerPage) ? "block" : "none";
    });

    const buttons = pagination.querySelectorAll("button");
    buttons.forEach((btn, i) => {
      btn.classList.toggle("active", i + 1 === page);
    });
  }

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.addEventListener("click", () => showPage(i));
    pagination.appendChild(btn);
  }

  showPage(1);
