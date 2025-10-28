import React from "react";
import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  // دمج كلاس Tailwind الأساسي مع أي كلاس إضافي
  const newClassName = twMerge(
    "max-w-screen-xl mx-auto py-10 px-4 lg:px-0",
    className
  );

  // يعرض العناصر داخل div بنفس الكلاسات المدموجة
  return <div className={newClassName}>{children}</div>;
};

export default Container;
