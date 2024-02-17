//Card.js file
import React from "react";
import Image from "next/image";
import card1 from "@/assets/images/card_images/card1.png";
import card2 from "@/assets/images/card_images/card2.png";
import card3 from "@/assets/images/card_images/card3.png";
import card4 from "@/assets/images/card_images/card4.png";
function AboutCards() {
  // Card data
  // const cardList = [
  //   {
  //     img: "https://i.imgur.com/w5HYiQZ.png",
  //     title: "Growth",
  //     description:
  //       "Our group of specialists will collaborate with you to develop a personalized strategy aimed at guiding you toward success through incremental progress.",
  //   },
  //   {
  //     img: "https://i.imgur.com/4wouHGC.png",
  //     title: "Fitness",
  //     description:
  //       "Offering a diverse range of exercises for your selection, you'll have all the resources necessary to attain the peak of your physical fitness.",
  //   },
  //   {
  //     img: "https://i.imgur.com/UdPvj8T.png",
  //     title: "Diet",
  //     description:
  //       "Our team will collaborate with you to craft a tailor-made meal plan designed to assist you in achieving your distinct health objectives.",
  //   },
  //   {
  //     img: "https://i.imgur.com/UdPvj8T.png",
  //     title: "Diet",
  //     description:
  //       "Our team will collaborate with you to craft a tailor-made meal plan designed to assist you in achieving your distinct health objectives.",
  //   },
  // ];
  const cardList = [
    {
      // src={`/images/climov_images/${answer_pic[i]}`}
      img: card1,
      title: "Түргэн тандалт",
      description:
        "1.Мэргэжил сонголтын түргэн тандалт буюу өөрийгөө үнэлэх анкет",
    },
    {
      img: card2,
      title: "Хүсэл сонирхол",
      description: "2.Хувь хүний сонирхол ба чадварын сорил ",
    },
    ,
    {
      img: card3,
      title: "Анализ шинжилгээ",
      description: "3.Оношилгоо сорилын цахим анализ шинжилгээ ",
    },
    {
      img: card4,
      title: "Тайлан дүгнэлт",
      description: "4.ТАЙЛАН ДҮГНЭЛТ ЗӨВЛӨМЖ",
    },
  ];
  return (
    <>
      {cardList.map((card, id) =>
        card !== undefined ? (
          <div
            key={id}
            className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px]"
          >
            <Image src={card.img} alt="box_img" className="w-[75px] mb-4" />
            <p className="text-[16px] font-bold uppercase mb-7">{card.title}</p>
            <p className="text-[15px] font-medium leading-2 w-full">
              {card.description}
            </p>
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
}
export default AboutCards;
