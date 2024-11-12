import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function WhatIsPhoneNum() {
  let [phone, setPhone] = useState("");
  return (
    <div className="container mx-auto py-8">
      <h3 className="heading text-center mb-[100px] ">ما هو رقم هاتفك ؟</h3>

      <form action="" className="w-[80%] mx-auto flex flex-col gap-[50px] ">
        <PhoneInput
          placeholder="Enter phone number"
          value={phone}
          onChange={setPhone}
          defaultCountry="US"
          international
          className="input_style self-center"
        />

        <div className="flex gap-[72px] items-start">
          <label htmlFor="" className="">
            رقم الهاتف
          </label>

          <div className="flex flex-col items-start">
          <input type="email" className=" input_style" />
          <p className="text-right text-[18px] font-bold">
            بالضغط علي (ارسال رمز التأكيد) أدناه , سنرسل لك رسالة قصيرة لتأكيد
            رقم هاتفك <br /> في الشاشة التالية.
          </p>
          </div>

          
         
        </div>

        <button className="btn w-[416px] mx-auto h-[60px]">
        إرسال رمز التأكيد
        </button>
      </form>
    </div>
  );
}

export default WhatIsPhoneNum;
