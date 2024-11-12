import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [links] = useState([
    { path: "/sales-register", label: "بيع على چوملا" },
    { path: "#", label: "المتجر" },
    { path: "#", label: "أحدث المنتجات" },
    { path: "#", label: "أفضل العروض والخصومات" },
    { path: "#", label: "الأقسام" },
    { path: "#", label: "عروض اليوم" },
    { path: "#", label: "كوبونات الخصم" },
    { path: "#", label: "إعلانات چوملا" },
    { path: "#", label: "بائعين چوملا" },
    { path: "#", label: "عن چوملا" },
    { path: "#", label: "المساعدة" },
    { path: "#", label: "تواصل معنا" },
  ]);
  return (
    <div>
      <div  className="bg-secondary">
        <div className="container mx-auto text-white flex items-center gap-4 ">
          <div className="text-white text-[16px] flex gap-1 items-center">
            <IoMenuSharp />
            القائمة
          </div>
          <ul className="flex gap-4 w-full">
            {links.map((link) => {
              return (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
