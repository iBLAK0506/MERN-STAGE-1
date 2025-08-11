import { useSelector } from "react-redux";

export default function Profile() {
  const currentUser = useSelector((state) => state.user?.currentUser);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Porfile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser?.avatar}
          alt="profile"
          className="rounded-full h-24 object-cover cursor-pointer self-center mt-4"
        />
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg bg-white"
          id="username"
        />
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg bg-white"
          id="email"
        />
        <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-lg bg-white"
          id="password"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className=" text-red-700 cursor-pointer">Delete Account</span>
        <span className=" text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
