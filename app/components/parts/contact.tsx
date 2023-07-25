import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Contact() {
  const handleSendMail = () => {
    window.location.href =
      "mailto:jesuslmmv2@gmail.com?subject=Work inquiries&body=Feel free to ask whatever you need!";
  };

  const [isXs, setIsXs] = useState(false);
  const [isMd, setIsMd] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const [isXl, setIsXl] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 575px)");
    media.addEventListener("change", () => {
      setIsXs(media.matches);
    });

    const media1 = window.matchMedia(
      "(min-width: 576px) and (max-width:: 767px)"
    );
    media1.addEventListener("change", () => {
      setIsMd(media1.matches);
    });

    const media2 = window.matchMedia(
      "(min-width: 768px) and (max-width: 1031px)"
    );
    media2.addEventListener("change", () => {
      setIsLg(media2.matches);
    });

    const media3 = window.matchMedia("(min-width: 1032px)");
    media3.addEventListener("change", () => {
      setIsXl(media3.matches);
    });

    setIsXs(media.matches);
    setIsMd(media1.matches);
    setIsLg(media2.matches);
    setIsXl(media3.matches);
  }, []);

  return (
    <div
      id="contact"
      className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-900 to-gray-600"
    >
      <div className="absolute lg:px-96 lg:py-72 md:px-72 md:py-56 px-48 py-72 -mt-36 bg-gray-700 rounded-xl text-white">
        <div className="absolute top-0 left-0">
          <h3 className="lg:text-5xl text-3xl  font-extrabold p-12">Contact</h3>
          <p className="ml-12 -mt-4 lg:mr-52 md:mr-32 text-lg mr-24 ">
            Thank you for visiting! For any questions or inquiries, please feel
            free to send me a message in any social media. I will get back to
            you as soon as possible
          </p>
          <div className="ml-12 mt-14 md:grid md:grid-cols-2">
            <div>
              <div className="mb-6 flex">
                <EnvelopeIcon className="h-8 w-8 mr-4" />
                <p
                  className="text-lg cursor-pointer hover:scale-110 hover:font-semibold transition-all"
                  onClick={handleSendMail}
                >
                  jesuslmmv2@gmail.com
                </p>
              </div>
              <div className="flex mb-6 z-50">
                <Image
                  className="mr-3"
                  src="/images/linkedin.png"
                  alt="linkedin logo"
                  width={30}
                  height={30}
                />
                <Link
                  className="cursor-pointer hover:scale-110 hover:font-semibold transition-all"
                  target="_blank"
                  href="https://www.linkedin.com/in/jesuslmm/"
                >
                  <p className="text-lg">jesuslmm</p>
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
            <div className="ml-8">
              {isXl ? (
                <Image
                  src="/images/trying.png"
                  alt="trying"
                  height={200}
                  width={200}
                />
              ) : isLg ? (
                <Image
                  src="/images/trying.png"
                  alt="trying"
                  height={120}
                  width={120}
                />
              ) : isMd ? (
                <Image
                  src="/images/trying.png"
                  alt="trying"
                  height={150}
                  width={150}
                />
              ) : (
                <Image
                  className="ml-40 -mt-20"
                  src="/images/trying.png"
                  alt="trying"
                  height={80}
                  width={80}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
