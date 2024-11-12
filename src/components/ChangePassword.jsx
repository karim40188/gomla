function ChangePassword() {
  return (
    <div className="container">
      <div className=" mx-auto">
        <h3 className="heading text-center mb-[100px]">
          تسجيل كلمة مرور جديدة
        </h3>

        <form action="" className="w-[80%] mx-auto flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <label htmlFor="" className="">
              البريد الألكترونى أو رقم الهاتف{" "}
            </label>
            <input
              type="email"
              className=" input_style"
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="">
              ادخل كلمة المرور الجديدة
            </label>
            <input
              type="email"
              className="input_style "
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="" className="text-[28px] font-bold">
              تأكيد كلمة المرور الجديدة
            </label>
            <input
              type="email"
              className="input_style "
            />
          </div>

          <button className="w-[416px] h-[60px] mx-auto mt-10 btn">
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
