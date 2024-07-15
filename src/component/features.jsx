import { useState } from "react";
import { Link } from "react-router-dom";

export default function Features({ openForm, children, form }) {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);

  function handleform() {
    openForm();
  }

  return (
    <>
      {form && children}
      <section className="flex gap-3 px-[35px]">
        <Link
          to="/new"
          onClick={handleform}
          className="text-[14px] font-medium bg-[#0075EA] text-white py-[8px] px-[10px] rounded-md hover:bg-[#2473c2] transition-all "
        >
          New Task
        </Link>
        <div
          id="input"
          className="border-[1px] focus-within:ring-2 rounded-md border-[#BABABA] w-[200px] flex items-center px-[5px] shadow-sm "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 mx-1 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            type="search"
            placeholder="Search"
            className=" w-full bg-transparent text-black outline-none text-[13px]  placeholder:text-[#656565] "
          />
        </div>
        <button
          id="filter"
          className="flex items-center flex-col justify-center"
          onMouseOver={() => setIsOpenFilter(true)}
          onMouseOut={() => setIsOpenFilter(false)}
        >
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-[22px] font-normal text-[#656565] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
            <p className="text-[17px] font-semibold text-[#656565] mx-[5px] ">
              Filter
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-[#656565]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          {isOpenFilter && <Filter isOpen={setIsOpenFilter} />}
        </button>
        <button
          id="sort"
          className="flex items-center justify-center"
          onMouseOver={() => setIsOpenSort(true)}
          onMouseOut={() => setIsOpenSort(false)}
        >
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-[22px] font-normal text-[#656565]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <p className="text-[17px] font-semibold text-[#656565] mx-[5px]">
              Sort
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-[#656565]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          {isOpenSort && <Sort isOpen={setIsOpenSort} />}
        </button>
      </section>
    </>
  );
}

function Filter({ isOpen }) {
  return (
    <div
      id="filter"
      className="w-[100px] h-[89px] border rounded-md px-4 fixed top-[186px] z-20 bg-[#ebebeb] shadow-md gap-1 flex flex-col items-center justify-center transition-all"
      onMouseOver={() => isOpen(true)}
      onMouseOut={() => isOpen(false)}
    >
      <button className="w-full border-l-4 border-[#F7093B]  text-[11px] text-[#424242] font-semibold ">
        To Do
      </button>
      <button className="w-full border-l-4 border-[#FFA732] text-[11px] text-[#424242] font-semibold ">
        Procces
      </button>
      <button className="w-full border-l-4 border-[#00CB7D] text-[11px] text-[#424242] font-semibold ">
        Done
      </button>
    </div>
  );
}

function Sort({ isOpen }) {
  return (
    <div
      id="filter"
      className="w-[100px] h-[60px] border rounded-md px-4 bg-[#ebebeb] fixed top-[186px] z-20 shadow-md gap-1  flex flex-col items-center justify-center transition-all"
      onMouseOver={() => isOpen(true)}
      onMouseOut={() => isOpen(false)}
    >
      <button className="w-full border-l-4 border-[#00CB7D] text-[11px] text-[#424242] font-semibold ">
        A - Z
      </button>
      <button className="w-full border-l-4 border-[#F7093B] text-[11px] text-[#424242] font-semibold ">
        Reverse
      </button>
    </div>
  );
}
