import { IoMdSearch } from "react-icons/io";
import shopping_cart from "../assets/shopping-cart.png";
function NavbarHeader() {
  return (
    <div className="w-full h-[auto] py-2 ">
      <div className="container mx-auto flex items-center gap-3  ">
        {/* logo */}
        <h3 className="text-[60px]">چوملا</h3>

        <div className="text-[14px] mt-5 text-center">
          <p>التوصيل إلى</p>
          <p>القاهرة</p>
        </div>
        {/* search icon */}
        <div
          className="w-[700px] h-[60px] relative 
        flex items-center 
        justify-center"
        >
          <input
            type="text"
            className="w-full h-full 
          rounded-[5px] px-3 border-2 border-[#007A4A]"
          />
          <div
            className="w-[50px] h-[50px] bg-[#007A4A] 
          absolute left-2 top-[50%] -translate-y-1/2 "
          >
            <div className="w-[44.88px] h-[44.96px] text-white">
              <IoMdSearch className="w-full h-full" />
            </div>
          </div>
        </div>
        {/* lagngauge toggle */}

        <select name="" id="" className="text-[22px] font-[800]">
          <option value="">AR</option>
          <option value="">EN</option>
        </select>

        {/* welcome message .... menus */}
        <div className="flex flex-col gap-2">
          <p>مرحبا ABDELRAHEMAN</p>
          <select name="" id="" className="bg-transparent">
            <option value="">الحساب والقوائم</option>
          </select>
        </div>

        {/* shopping cart logo */}

        <div className="flex flex-col">
          <div className="w-[auto] h-[70px]">
            <img
              className="w-full h-full"
              src={shopping_cart}
              alt="shopping-cart"
            />
          </div>
          <p>عربة التسوق</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarHeader;
