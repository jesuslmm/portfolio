import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();
  return (
    <div className="h-screen bg-gradient-to-b from-yellow-600 to-yellow-800 ">
      <p className="text-white text-center pt-24 font-semibold text-xl">
        PROJECTS
      </p>
      <p className="text-white text-center font-bold text-6xl mt-8 mb-12">
        My works
      </p>
      <div className="grid grid-cols-3">
        <div
          onClick={() => router.push("/projectDisplayer")}
          className="relative flex justify-center items-center overflow-hidden group hover:cursor-pointer "
        >
          <Image
            className="m-3 group-hover:blur-[3px] transition-all duration-200  ease-out group-hover:scale-110 group-hover:brightness-75"
            alt="auction-image"
            src="/images/projects/auct.jpg"
            width={365}
            height={400}
          />
          <div
            className="absolute bottom-0 h-2/3 text-center opacity-0
             group-hover:opacity-100 transition-all duration-200 ease-out"
          >
            <div className="p-2 text-white">
              <p className="text-2xl font-medium">Auctions</p>
              <p className="font-thin mb-6 mt-2">Website</p>
              <div className="flex space-x-2.5">
                <Image
                  className="opacity-80"
                  src="/images/nextLogo.png"
                  alt="nextLogo"
                  width={28}
                  height={28}
                />
                <Image
                  className="opacity-80"
                  src="/images/tsLogo.png"
                  alt="typescriptLogo"
                  width={28}
                  height={28}
                />
                <Image
                  className="opacity-80"
                  src="/images/tailwindLogo.png"
                  alt="tailwindLogo"
                  width={28}
                  height={28}
                />
                <Image
                  className="opacity-80"
                  src="/images/PostgreSQL.png"
                  alt="postgreSQL logo"
                  width={28}
                  height={28}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center overflow-hidden group hover:cursor-pointer ">
          <Image
            className="m-3 group-hover:blur-[3px] transition-all duration-200  ease-out group-hover:scale-110 group-hover:brightness-75"
            alt="auction-image"
            src="/images/projects/todo.jpeg"
            width={405}
            height={450}
          />
          <div
            className="absolute bottom-0 h-2/3 text-center opacity-0
             group-hover:opacity-100 transition-all duration-200 ease-out"
          >
            <div className="p-2 text-white">
              <p className="text-2xl font-medium">Todo app</p>
              <p className="font-thin mb-6 mt-2">Website</p>
              <div className="flex space-x-2.5">
                <Image
                  className="opacity-80"
                  src="/images/nextLogo.png"
                  alt="nextLogo"
                  width={28}
                  height={28}
                />
                <Image
                  className="opacity-80"
                  src="/images/tsLogo.png"
                  alt="typescriptLogo"
                  width={28}
                  height={28}
                />
                <Image
                  className="opacity-80"
                  src="/images/tailwindLogo.png"
                  alt="tailwindLogo"
                  width={28}
                  height={28}
                />
                <Image
                  className="opacity-80"
                  src="/images/PostgreSQL.png"
                  alt="postgreSQL logo"
                  width={28}
                  height={28}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center overflow-hidden group hover:cursor-pointer ">
          <Image
            className="m-3 group-hover:blur-[3px] transition-all duration-200  ease-out group-hover:scale-110 group-hover:brightness-75"
            alt="auction-image"
            src="/images/projects/pokemonquiz.jpg"
            width={365}
            height={400}
          />
          <div
            className="absolute bottom-0 h-2/3 text-center opacity-0
             group-hover:opacity-100 transition-all duration-200 ease-out"
          >
            <div className="p-2 text-white">
              <p className="text-2xl font-medium">Pokemon quiz</p>
              <p className="font-thin mb-6 mt-2">Website</p>
              <div className="flex space-x-2.5">
                <Image
                  className="opacity-80"
                  src="/images/nextLogo.png"
                  alt="nextLogo"
                  width={28}
                  height={28}
                />
                <Image
                  className="opacity-80"
                  src="/images/tsLogo.png"
                  alt="typescriptLogo"
                  width={28}
                  height={28}
                />
                <Image
                  className="opacity-80"
                  src="/images/tailwindLogo.png"
                  alt="tailwindLogo"
                  width={28}
                  height={28}
                />
                <Image
                  className="opacity-80"
                  src="/images/PostgreSQL.png"
                  alt="postgreSQL logo"
                  width={28}
                  height={28}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
