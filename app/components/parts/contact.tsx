import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-900 to-gray-600">
      <div className="relative px-96 py-72 bg-gray-700 rounded-xl text-white">
        <div className="absolute top-0 left-0">
          <h3 className="text-5xl font-extrabold- p-12">Contact</h3>
          <p className="ml-12 -mt-4 mr-52 text-lg">
            Thank you for visiting. For any questions or inquiries, plase feel
            free to send me a message in any social media. I will get back to
            you as soon as possible
          </p>
          <div className="ml-12 mt-14">
            <div className="mb-6 flex">
              <EnvelopeIcon className="h-8 w-8 mr-4" />
              <p className="text-lg">jesusmolina583@gmail.com</p>
            </div>
            <div className="flex mb-6">
              <Image
                className="mr-3"
                src="/images/linkedin.png"
                alt="linkedin logo"
                width={30}
                height={30}
              />
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/jesuslmm/"
              >
                <p className="text-lg cursor-pointer hover:scale-110 hover:font-semibold transition-all">
                  jesuslmm
                </p>
              </Link>
            </div>
            <div className="flex -ml-1">
              <Image
                className="mr-2"
                src="/images/github.png"
                alt="github logo"
                width={40}
                height={40}
              />
              <Link target="_blank" href="https://github.com/jesuslmm">
                <p className="text-lg cursor-pointer hover:scale-110 hover:font-semibold transition-all">
                  jesuslmm
                </p>
              </Link>
            </div>
          </div>
        </div>
        <Image src="/images/pcPNG.png" alt="pc" width={200} height={200} />
      </div>
    </div>
  );
}
