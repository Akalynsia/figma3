import React from "react";

const App = () => {
  return (
    <div className="relative w-[1430px] h-[878px] left-60">
      <div className="bg-[#1AEBB7] w-[586px] h-[945px]"></div>
      <div
        className="flex justify-between items-center w-[1251px] h-[739px] absolute top-28 left-20 shadow-xl"
        style={{ boxShadow: "0px 0px 20px 0px #B0AAAA" }}
      >
        <div>
          <img src="./lion.png" alt="lion" />
        </div>
        <div className="flex flex-col items-center justify-center w-[526px] h-[594px] relative right-20 top-5">
          <div className="font-montserrat font-[700] text-[50px] text-[#000000] mb-10">
            LOGIN
          </div>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              id
              placeholder="Username"
              className="p-3 border w-[440px] h-[59px}"
              name
            ></input>
            <input
              type="text"
              id
              placeholder="Password"
              className="p-3 border w-[440px] h-[59px]"
              name
            ></input>
          </form>
          <div className="flex justify-between mt-10 w-[440px]">
            <button className="w-[233px] h-[60px] bg-[#1AEBB8] text-white font-montserrat font-[700] text-[25px]">
              LOGIN
            </button>
            <div className="flex flex-col items-end">
              <p className="font-montserrat font-[600] text-[20px]">
                Forgot Password
              </p>
              <p className="font-montserrat font-[600] text-[20px]">Register</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
