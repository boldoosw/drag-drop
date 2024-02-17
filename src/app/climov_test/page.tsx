import Image from "next/image";
import climov from "@/assets/images/klimov.png";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-5 py-5 md:flex-row-reverse md:justify-between">
      <div className="relative overflow-hidden rounded-2xl">
        <div className="md:w-[24rem]">
          {/* <Image src="/wallpaper.jpg" alt="" width={700} height={700} /> */}
          <Image
            className="sm:h-full sm:h-full"
            src={climov}
            alt="logo"
            width={700}
            height={700}
          />
        </div>
      </div>

      <div className="md:w-[50%] flex flex-col gap-5">
        <h1 className="text-2xl font-semibold">
          Мэргэжлийн төрлийг тодорхойлох: Климовын ажил мэргэжлийн чиг баримжаа
          олгох тест
        </h1>
        <p className="text-sm leading-6 text-gray-300">
          Энэхүү ажил мэргэжлийн чиг баримжаа олгох тест нь танд тохирох
          ирээдүйн мэргэжлийн төрлийг тодорхойлоход тусална Та 20 хос үйл
          ажиллагаанаас дуртай үйл ажиллагаагаа сонгох хэрэгтэй. Онлайн тестийг
          бөглөхөд 4-5 минутаас ихгүй хугацаа шаардагдана.
        </p>
        <Link
          href={`/climov_test/quiz/`}
          className="flex items-center justify-center gap-1 px-5 py-4 font-semibold text-blue-500 transition-colors rounded-md outline duration-600 hover:bg-blue-600 hover:text-white"
        >
          {/* <TbArrowBigRightFilled className="text-lg" /> */}
          Климовын тест өгөх
        </Link>
      </div>
    </div>
  );
}
