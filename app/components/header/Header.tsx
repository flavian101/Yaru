import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed top-0 w-full z-50  backdrop-blur-xl  flex justify-between items-center">
      <div className="pl-5 flex items-center space-x-3">
        <Image
          src={"/logo.png"}
          alt={"yaru logo"}
          width={30}
          height={50}
          className="rounded-lg"
        />
        <Link href="/homepage" className="hover:scale-105 transition-transform">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Yaru
          </h1>
        </Link>
      </div>

      <div className="flex items-center space-x-4 pr-4">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-5 5-5-5h5v-12z"
                />
              </svg>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">Quick Actions</span>
              <button className="btn btn-primary btn-sm">New Project</button>
              <button className="btn btn-secondary btn-sm">New Task</button>
            </div>
          </div>
        </div>

        <div className="avatar placeholder">
          <Link href="/profile">
            <Image
              src={"/logo.png"}
              alt={"yaru logo"}
              width={50}
              height={50}
              className="rounded-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
