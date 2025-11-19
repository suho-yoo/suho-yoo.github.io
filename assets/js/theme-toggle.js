(function () {
  function setTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    // 버튼 아이콘 바꾸기
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
    }
    localStorage.setItem("theme", theme);
  }

  // 초기 테마 결정: 저장된 값 > 시스템 선호도
  var stored = localStorage.getItem("theme");
  var prefersDark = window.matchMedia &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches;

  setTheme(stored ? stored : (prefersDark ? "dark" : "light"));

  // 버튼 클릭 시 토글
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;

    btn.addEventListener("click", function () {
      var nowDark = document.body.classList.contains("dark");
      setTheme(nowDark ? "light" : "dark");
    });
  });
})();
