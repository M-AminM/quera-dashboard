import React, { useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";

interface ModalProps extends React.PropsWithChildren {}
const Modal: React.FunctionComponent<ModalProps> = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <AiFillEdit
        className="cursor-pointer text-lg hover:text-cyan-500 duration-150 ease-in"
        onClick={() => setShowModal(true)}
      />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    تغییر وضعیت اطلاعات ؟
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    {/* <span style={} className=" text-red-500 ">X</span> */}
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col gap-2">
                    <label className="text-red-400" htmlFor="name">
                      نام
                    </label>
                    <input
                      className="bg-slate-600 outline-0 text-white px-2 py-1"
                      placeholder="amin"
                      id="name"
                    />
                    <label className="text-red-400" htmlFor="email">
                      ایمیل
                    </label>
                    <input
                      className="bg-slate-600 outline-0 text-white px-2 py-1"
                      placeholder="amin@gmail.com"
                      id="email"
                      type="email"
                    />
                    <label className="text-red-400" htmlFor="phone">
                      شماره تلفن
                    </label>

                    <input
                      className="bg-slate-600 outline-0 text-white px-2 py-1"
                      placeholder="09191234567"
                      id="phone"
                    />
                    <label className="text-red-400" htmlFor="date">
                      تاریخ تولد
                    </label>

                    <input
                      className="bg-slate-600 outline-0 text-white px-2 py-1"
                      placeholder="1380/01/24"
                      id="data"
                    />
                    <label className="text-red-400" htmlFor="code">
                      شماره ملی
                    </label>

                    <input
                      className="bg-slate-600 outline-0 text-white px-2 py-1"
                      placeholder="1234567894"
                      id="code"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    بستن
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // onClick={clickHandler}
                  >
                    ذخیره تغییرات
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
