import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="container mx-auto">
      <h3 className="heading text-center mb-[10px]">تسجيل دخول</h3>

      <div className="my-[40px] flex flex-col gap-8">
        <div
          className="w-[658px] h-[100px] 
            flex justify-center 
            items-center
            rounded-[15px]
            gap-5
            cursor-pointer
             bg-gray-200 mx-auto"
        >
          <img src={google} alt="" className="w-[22.74px] h-[23.19px]" />
          <p className="text-[28px] font-bold">تسجيل الدخول بواسطة Google</p>
        </div>
        <div
          className="w-[658px] h-[100px] 
            flex justify-center 
            items-center
            rounded-[15px]
            gap-5
            cursor-pointer
             bg-gray-200 mx-auto"
        >
          <img src={facebook} alt="" className="w-[24.31px] h-[23.19px]" />
          <p className="text-[28px] font-bold">تسجيل الدخول بواسطة facebook </p>
        </div>
      </div>

      <h3 className="heading text-green-600 text-center my-10">
        تسجيل دخول عبر البريد الألكتروني
      </h3>

      <form action="" className="w-[80%] mx-auto flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <label htmlFor="" className="">
            البريد الألكترونى أو رقم الهاتف{" "}
          </label>
          <input type="email" className=" input_style" />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="">كلمة المرور</label>

          <div className="flex flex-col gap-1">
            <input type="email" className="input_style " />
            <Link to="/what-is-phone-number" className="self-end text-[22px] font-bold">
              نسيت كلمة المرور
            </Link>
          </div>
        </div>

        <button className="w-[416px] h-[60px] mx-auto mt-10 btn">
          استمرار
        </button>

        <p className=" text-[22px] font-bold text-center">
          ليس لدى حساب{" "}
          <span className="text-green-600 ">إنشاء حساب بائع جدي</span>
        </p>
      </form>
    </div>
  );
}

export default Register;
