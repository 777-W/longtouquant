// scripts/main.js

// 确保文档加载完毕后再执行脚本
document.addEventListener("DOMContentLoaded", function() {
  console.log("龙头量化网站已加载成功");

  // 示例：平滑滚动功能
  const links = document.querySelectorAll('.navbar-menu a');

  for (const link of links) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // 偏移量可根据导航栏高度调整
          behavior: "smooth"
        });
      }
    });
  }
});