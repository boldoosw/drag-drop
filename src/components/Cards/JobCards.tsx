//Card.js file
import React from "react";
import Image from "next/image";
import card1 from "@/assets/images/choose-yes.png";
import card2 from "@/assets/images/choose-no.png";
import Link from "next/link";
function JobCards() {
  const cardList = [
    {
      img: card1,
      title: "ТИЙМ",
      description: "",
      link: "/dragdrop",
    },
    {
      img: card2,
      title: "ҮГҮЙ",
      description: " ",
      link: "/dragdrop_no",
    },
  ];
  return (
    <>
      {cardList.map((card, id) =>
        card !== undefined ? (
          <>
            <Link href={card.link}>
              <div
                key={id}
                className="flex flex-col cursor-pointer bg-white justify-center py-2 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[300px] hover:bg-blue-800"
              >
                <Image
                  src={card.img}
                  alt="box_img"
                  className="w-[300px] mb-4"
                />
                <p className="text-[24px] font-bold uppercase mb-7">
                  {card.title}
                </p>
                <p className="text-[15px] font-medium leading-2 w-full">
                  {/* {card.description} */}
                </p>
              </div>
            </Link>
          </>
        ) : (
          ""
        )
      )}
    </>
  );
}
export default JobCards;
