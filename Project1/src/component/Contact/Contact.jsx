
export default function Contact() {
  return (
    <div className=" flex flex-col items-center py-14">
      <h1 className="uppercase text-4xl text-blue-950 font-bold">
        conatct section
      </h1>
      <div className="flex  items-center justify-center mt-5">
        <div className="bg-blue-950 h-1 w-24"></div>
        <i className="fa-solid fa-meteor text-blue-950 text-xl  pl-6 pr-10"></i>
        <div className="bg-blue-950 h-1 w-24"></div>
      </div>
      <div className="flex flex-col w-[90%] lg:w-[45%] pt-12 lg:pt-18">
        <input
          type="text"
          placeholder="UserName"
          className=" border-0  border-b-2 border-b-gray-200  focus:outline-none py-3"
        />
        <input
          type="text"
          placeholder="UserAge"
          className="border-0  border-b-2 border-b-gray-200 ring-0 focus:outline-none py-3 mt-8"
        />
        <input
          type="text"
          placeholder="UserEmail"
          className="border-0  border-b-2 border-b-gray-200 ring-0 focus:outline-none py-3  mt-8"
        />
        <input
          type="text"
          placeholder="UserPassword"
          className="border-0  border-b-2 border-b-gray-200 ring-0 focus:outline-none py-3  mt-8"
        />
      <button className="self-start cursor-pointer bg-emerald-500 px-4 py-2 text-white rounded-lg mt-7">send Message</button>
      </div>
    </div>
  );
}
