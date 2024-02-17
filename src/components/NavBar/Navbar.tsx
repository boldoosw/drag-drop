/** @format */
"use client";

import Image from "next/image";
import { useState } from "react";

import logonew from "@/assets/images/logo_mcu.png";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import todoImage from "@/assets/images/icon-todo.svg";
import calendarImage from "@/assets/images/icon-calendar.svg";
import remindersImage from "@/assets/images/icon-reminders.svg";
import planningImage from "@/assets/images/icon-planning.svg";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { signOut, useSession } from "next-auth/react";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  // {
  //   label: "МС онлайн тест",
  //   link: "#",
  //   children: [
  //     {
  //       label: "Климовын тест",
  //       link: "/climov_test",
  //       iconImage: todoImage,
  //     },
  //     {
  //       label: "Холландын тест",
  //       link: "/holland_test",
  //       iconImage: calendarImage,
  //     },
  //     {
  //       label: "Мэргэжлийн матрицын тест",
  //       link: "#",
  //       iconImage: remindersImage,
  //     },
  //     {
  //       label: "MBTI тест",
  //       link: "#",
  //       iconImage: planningImage,
  //     },
  //   ],
  // },
  // {
  //   label: "МС суурин тест",
  //   link: "#",
  //   children: [
  //     {
  //       label: "Генетик тест",
  //       link: "#",
  //     },
  //     {
  //       label: "Тоон мэдээллийн тест",
  //       link: "#",
  //     },
  //     {
  //       label: "Астро кодын тест",
  //       link: "#",
  //     },
  //     {
  //       label: "Фото тест",
  //       link: "#",
  //     },
  //     {
  //       label: "Вибра тест",
  //       link: "#",
  //     },
  //   ],
  // },
  // {
  //   label: "Мэргэжил танилцуулга",
  //   link: "#",
  //   children: [
  //     {
  //       label: "Урлагын салбар",
  //       link: "#",
  //       iconImage: todoImage,
  //     },
  //     {
  //       label: "Ирээдүйн мэргэжлүүд",
  //       link: "#",
  //       iconImage: calendarImage,
  //     },
  //     {
  //       label: "Боловсролын салбар",
  //       link: "#",
  //       iconImage: remindersImage,
  //     },
  //     {
  //       label: "IT салбар ",
  //       link: "#",
  //       iconImage: planningImage,
  //     },
  //   ],
  // },
  {
    label: "Климов Тест",
    link: "/climov_test",
  },
  {
    label: "Холланд тест",
    link: "/holland_test",
  },
  {
    label: "MBTI тест",
    link: "/custom_test/quiz",
  },
  {
    label: "Асуулга",
    link: "/job",
  },
  {
    label: "Холбоо барих",
    link: "#",
  },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className="mx-auto flex  w-full max-w-7xl justify-between px-4 py-4 text-sm">
      {/* left side  */}
      <section ref={animationParent} className="flex items-center gap-10">
        {/* logo */}
        <Link href="/">
          <Image className="w-12" src={logonew} alt=" logo" />
        </Link>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group  px-2 py-3 transition-all "
            >
              <p className="flex cursor-pointer items-center gap-2 text-neutral-900 group-hover:text-black ">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute   right-0   top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
                    >
                      {/* image */}
                      {ch.iconImage && (
                        <Image src={ch.iconImage} alt="item-icon" />
                      )}
                      {/* item */}
                      <span className="whitespace-nowrap   pl-3 ">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* navitems */}
      </section>

      {/* right side data */}
      {/* <section className=" hidden md:flex   items-center gap-8 ">
        <>
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Нэвтрэх
          </button>

          <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Бүртгүүлэх
          </button>
        </>
      </section> */}

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        {/* <section className="  flex  flex-col   gap-8  mt-4 items-center">
          <Link href="/login">
            <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
              Нэвтрэх
            </button>
          </Link>
          <Link href="/register">
            <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
              Бүртгүүлэх
            </button>
          </Link>
        </section> */}
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8 text-neutral-400 hover:text-black  "
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
