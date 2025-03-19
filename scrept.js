function toggleNav() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}




document.addEventListener("DOMContentLoaded", function () {
    const columns = document.querySelectorAll(".footer-column h4");
    columns.forEach(column => {
        column.addEventListener("click", function () {
            let parent = this.parentElement;
            parent.classList.toggle("open");
        });
    });
});


 // الحصول على جميع العناصر من الفئة "product"
 const prodacts = document.querySelectorAll('.prodact,.prodact-2');

 // إنشاء المراقب
 const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.classList.add('active'); // تفعيل الأنيميشن
     }
   });
 });

 // مراقبة كل عنصر من المنتجات
 prodacts.forEach(product => observer.observe(product));
