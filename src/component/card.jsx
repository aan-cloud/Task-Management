export default function Card({ closeCard, title, description, date, status }) {
  return (
    <>
      <div
        id="bg"
        className="bg-transparent absolute top-0 left-0 w-full h-screen backdrop-blur-sm z-20 "
      ></div>
      <div class="bg-[#FFF] absolute z-40 top-0 left-[50%] -translate-x-1/2 flex flex-col  text-gray-700 shadow-md bg-clip-border rounded-xl w-96">
        <div className="p-6">
          <h5 className="block mb-1 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h5>
          <small id="date" className="text-[11px] text-[#656565]">
            {date}
          </small>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit mt-3">
            {description}
          </p>
          <div
            id="status"
            className="flex items-center w-fit mt-[17px] mb-[5px]"
          >
            <div
              id="color"
              className="w-[12px] h-[29px] bg-red-500 rounded-tl-sm rounded-bl-sm"
              style={
                status === "on process"
                  ? { backgroundColor: "orange" }
                  : status === "done"
                  ? { backgroundColor: "green" }
                  : {}
              }
            ></div>
            <div id="option" className=" text-[10px] p-[7px] bg-[#B1ABAB] ">
              {status}
            </div>
          </div>
        </div>
        <div className="p-4 text-right border-t">
          <button
            onClick={closeCard}
            className="text-sm text-black font-light"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
