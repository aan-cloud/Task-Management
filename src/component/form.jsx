import { Link } from "react-router-dom";

export default function Form({
  closeForm,
  onHandleItems,
  title,
  date,
  status,
  isVisible,
  onSaveEdit,
}) {
  return (
    <>
      <div
        id="bg"
        className="bg-transparent absolute top-0 left-0 w-full h-screen backdrop-blur-sm z-20 "
      ></div>
      <Input
        closeForm={closeForm}
        onHandleItems={onHandleItems}
        title={title}
        date={date}
        status={status}
        isVisible={isVisible}
        onSaveEdit={onSaveEdit}
      />
    </>
  );
}

export function Input({
  closeForm,
  onHandleItems,
  title,
  date,
  status,
  isVisible,
  onSaveEdit,
}) {
  return (
    <div
      id="form"
      className=" z-30 border-[1px] border-[#7d7d7d] bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm"
    >
      <div id="top" className="px-12 py-7">
        <input
          type="text"
          name="text"
          id="text"
          className="w-full h-fit mb-6 text-[30px] font-bold pl-3 placeholder:text-[30px] placeholder:text-[rgb(116,116,116)] border-[1px] border-[#3E3C3C] placeholder:font-bold rounded-sm focus:outline-none drop-shadow-md"
          placeholder="New Task"
          onChange={(e) => title(e.target.value)}
        />
        <div id="desc" className="flex justify-between items-center">
          <label htmlFor="description" className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 font-[100] text-[#656565]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
            <small className="text-[15px] text-[#656565] ">Description</small>
          </label>
          <textarea
            type="text"
            name="description"
            id="description"
            className="border-[1px] bg-[#D9D9D9] w-[55%] focus:outline-none text-[10px] px-3 py-2 rounded-sm "
          />
        </div>
        <div
          id="time"
          className="flex gap-2 items-center justify-between mt-[10px]"
        >
          <label htmlFor="time" className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 font-[100] text-[#656565]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <small className="text-[15px] text-[#656565]">Time</small>
          </label>
          <input
            name="time"
            id="time"
            className="border-[1px] bg-[#D9D9D9] w-[55%] focus:outline-none text-[10px] px-3 py-2 rounded-sm"
            onChange={(e) => date(e.target.value)}
          />
        </div>

        <div
          id="status"
          className="flex gap-2 items-center justify-between mt-[10px]"
        >
          <label htmlFor="description" className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 font-[100] text-[#656565]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>
            <small className="text-[15px] text-[#656565]">Status</small>
          </label>
          <select
            name="status"
            id="status"
            className="border-[1px] bg-[#D9D9D9] w-[55%] focus:outline-none text-[10px] px-3 py-2 rounded-sm"
            onChange={(e) => status(e.target.value)}
          >
            <option value="">Choose an option</option>
            <option value="not yet">Not yet</option>
            <option value="on process">On Process</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>
      <div
        id="bottom"
        className="p-4 pt-3 mt-[12px] border-t-[2px] border-t-[#BABABA] flex justify-end gap-3"
      >
        <Link
          to="/"
          className="text-[12px] flex justify-center items-center"
          onClick={closeForm}
        >
          Cancel
        </Link>
        {isVisible ? (
          <Link
            to="/"
            onClick={onSaveEdit}
            className="text-[12px] font-medium bg-[#f0840a] text-white py-[7px] px-[9px] rounded-md"
          >
            Update
          </Link>
        ) : (
          <Link
            to="/"
            onClick={onHandleItems}
            className="text-[12px] font-medium bg-[#0075EA] text-white py-[7px] px-[9px] rounded-md"
          >
            Create Task
          </Link>
        )}
      </div>
    </div>
  );
}
