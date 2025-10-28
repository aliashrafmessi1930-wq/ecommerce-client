export const getData = async (endpoint) => {
  try {
    // نعمل طلب للـ endpoint اللي اتبعت
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // بنقول إنّنا متوقعين JSON
      },
    });

    // لو الكود بتاع الاستجابة مش ضمن 200-299، نرمي خطأ
    if (!response.ok) {
      throw new Error("Data fetching Error: " + response.statusText);
    }

    // نحول الـ response إلى JSON
    const data = await response.json();
    return data; // نرجع الداتا لمَن استدعى الدالة
  } catch (error) {
    // لو حصل أي حاجة (شبكة، خطأ سيرفر، JSON غير صالح،...) نطبع الخطأ ونرميه برضه
    console.log("Error while fetching data:", error);
    throw error;
  }
};
