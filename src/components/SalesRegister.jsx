import { useState } from "react";
import add_logo from "../assets/add_logo.png";
import upload_img from "../assets/upload_img.png";
function SalesRegister() {
  // array for fields
  let [fields] = useState([
    { label: "الأسم الاول" },
    { label: "اسم الاب" },
    { label: "اسم الجد او اللقب" },
    { label: "المحافظة" },
    { label: "المدينة" },
    { label: "اسم الشارع" },
    { label: "رقم العقار او اسم العقار" },
    { label: "رقم الشقه" },
    { label: "رقم الهاتف" },
    { label: "البريد الالكتروني" },
    { label: "كلمة المرور " },
    { label: "اسم البائع (المتجر)" },
    { label: "رقم السجل التجاري  (اختياري)" },
    { label: "رقم التسجيل الضريبى  (اختياري)" },
    { label: "الرقم القومى" },
  ]);
  return (
    <div className="container">
      <h3 className="heading text-center mb-[100px]">
        بيع على چوملا
        <br />
        (إنشاء حساب بائع لتبيع على چوملا)
      </h3>
      <form action="" className="w-[80%] mx-auto flex flex-col gap-10">
        {/* fields */}
        {fields.map((field) => {
          if (field.label == "اسم البائع (المتجر)") {
            return (
              <div key={field.label}>
                <div
                  key={field.label}
                  className="flex justify-between items-start"
                >
                  <label htmlFor="">{field.label}</label>

                  <div className="flex flex-col">
                    <input type="text" className="input_style" />

                    <p className="text-center my-3 text-[20px] font-bold">
                      (اسم البائع هو اسم المتجر كما سيظهر للعملاء علي الموقع
                      <br /> من فضلك اختاره بعناية )
                    </p>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={field.label}
                className="flex justify-between items-center"
              >
                <label htmlFor="">{field.label}</label>
                <input type="text" className="input_style" />
              </div>
            );
          }
        })}

        <div className="mx-auto flex flex-col gap-4 items-center">
          {/* add logo */}
          <p className="text-center text-[28px] font-bold">أضف شعار متجرك</p>
          <div className="flex flex-col items-center gap-5 mt-10">
            <img
              className="w-[237.15px] h-[188.28px] cursor-pointer"
              src={add_logo}
              alt=""
            />

            <p className="text-center text-[28px] font-bold">أضف شعار متجرك</p>

            <button className="btn w-[416px] h-[60px] ">حمل صورة الشعار</button>
          </div>

          {/* write slogan */}
          <div className="my-10">
            <p className="text-[28px] text-center my-5">اكتب نبذة عن متجرك</p>
            <textarea
              className="w-full md:w-[1004px]  "
              name=""
              id=""
            ></textarea>
          </div>

          {/* id photo */}

          <div className=" flex flex-col items-center ">
            <p className="my-5 text-center text-[28px] font-bold">
              صورة البطاقة الشخصية
            </p>
            <textarea name="" id="" className="w-[446px] "></textarea>
            <div className="my-5">
              <p className=" text-center text-[28px] font-bold">
                صورة البطاقة الشخصية
              </p>
              <p className="text-[28px] text-center">
                صورة واضحة لبطاقتك الشخصية
              </p>
            </div>
            <button className="btn p-2 w-[416px]">تحميل صورة</button>
          </div>

          {/* personal img */}

          <div className=" flex flex-col items-center mt-10">
            <img src={upload_img} className="w-[336px] " />
            <div className="my-5">
              <p className=" text-center text-[28px] font-bold">صورة شخصية</p>
              <p className="text-[28px] text-center">صورة شخصية واضحة لك</p>
            </div>
            <button className="btn p-2 w-[416px]">تحميل صورة</button>
          </div>

          <div className="flex flex-col items-center">
            <button className="btn w-[416px] h-[60px] mt-[100px]">تسجيل</button>

            <p className="text-[22px] text-right">
              مع الضغط علي تسجيل أؤكد اني قرأت واوافق
              <br /> علي <span className="text-[#4070C2]">شروط وأحكام</span> جوملا
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SalesRegister;
