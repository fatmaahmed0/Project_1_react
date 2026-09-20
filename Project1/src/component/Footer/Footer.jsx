export default function Footer() {
  return (
    <div className=" ">
      <div className=" flex bg-cyan-800 w-full py-18  text-white">
        <div className="flex flex-col items-center lg:flex-row w-[95%]  ">
          <div className="text-center  lg:w-[33%]">
            <h1 className="text-3xl font-semibold mb-2">LOCATION</h1>
            <h3 className="mb-3">2215 John Daniel Drive</h3>
            <h3>Clark, MO 65243</h3>
          </div>
          <div className="text-center flex justify-center flex-col items-center  lg:w-[33%] my-20 lg:my-0">
            <h1 className="text-2xl lg:text-3xl font-semibold mb-4">AROUND THE WEB</h1>
            <div className="w-[80%] lg:w-[40%]  justify-between text-lg flex">
              <div className="border border-amber-50 size-9  rounded-full flex justify-center items-center">
              <i className="fa-brands fa-pagelines"></i>
              </div>
              <div className="border border-amber-50 size-9  rounded-full flex justify-center items-center">
              <i className="fa-solid fa-umbrella "></i>
              </div>
              <div className="border border-amber-50 size-9  rounded-full flex justify-center items-center">
              <i className="fa-solid fa-snowflake"></i>
              </div>
              <div className="border border-amber-50 size-9  rounded-full flex justify-center items-center">
              <i className="fa-solid fa-tree"></i>
              </div>
            </div>
          </div>
          <div className="text-center  w-[70%] lg:w-[33%]">
            <h1 className="text-2xl lg:text-3xl font-semibold mb-4">ABOUT FREELANCER</h1>
            <h3>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </h3>
          </div>
        </div>
      </div>
      <div className=" bg-cyan-950 text-center text-white p-6">
        <h1>Copyright © Your Website 2021</h1>
      </div>
    </div>
  );
}
