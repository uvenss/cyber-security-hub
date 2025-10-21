// دالة لإظهار أو إخفاء المحتوى عند الضغط على الزر
function toggleInfo(elementId) {
    const element = document.getElementById(elementId);

    // التحقق مما إذا كان العنصر موجوداً قبل المتابعة
    if (element) {
        // تبديل الكلاس "show" لإظهار أو إخفاء المحتوى
        element.classList.toggle('show');
    }
}
