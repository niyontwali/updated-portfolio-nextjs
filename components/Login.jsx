import { useSession, signIn } from "next-auth/react";
import Loader from "./Loader";
import { BsGithub, BsTwitter, BsGoogle } from "react-icons/bs";
import { useRouter } from "next/router";

const Login = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const github = <BsGithub />;
  const twitter = <BsTwitter />;
  const google = <BsGoogle />;
  if (status === "loading")
    return (
      <div>
        <Loader />
      </div>
    );

  if (session) {
    setTimeout(() => {
      push("/");
    }, 3000);
    return (
      <div className="h-screen pt-[40vh] text-center">
        <h3 className="text-xl tracking-wide mb-3">
          Successfully, logged in as {session.user.name}
        </h3>
        <h3 className="text-blue-500">redirecting.......</h3>
      </div>
    );
  }

  const providers = [
    {
      name: "github",
      Icon: github,
    },
    {
      name: "twitter",
      Icon: twitter,
    },
    {
      name: "google",
      Icon: google,
    },
  ];

  const handleAuthLogin = (provider) => () => signIn(provider);
  return (
    <div className="w-full h-screen pt-[20vh] px-4">
      <div className="bg-gray-100 dark:bg-[#2d333b] max-w-[450px] mx-auto mt-[5vh] rounded-xl shadow-xl shadow-gray-300 dark:shadow-lg dark:shadow-gray-900">
        <div className="mx-4 lg:px-12 items-center py-6">
          <div className="flex flex-col items-center justify-center py-4">
            {providers.map(({ name, Icon }) => (
              <button
                key={name}
                onClick={handleAuthLogin(name)}
                className="flex justify-center items-center gap-4 text-md max-w-[250px] w-full uppercase py-2 shadow-sm rounded-lg hover:border-[3px] hover:bg-[#0284c7] dark:hover:bg-[#026799]  border-[3px] font-[500] border-[#0284c7] dark:border-[#026799] hover:border-[#0284c7] dark:hover:border-[#026799] hover:text-white text-black dark:text-white focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap m-3"
              >
                {Icon}
                Login with {name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
