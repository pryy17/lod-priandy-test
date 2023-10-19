import Image from "next/image";
import React, { FC, ComponentProps, useState } from "react";
import CircleFood from "@/public/Group 7.png";
import Button from "@/components/Button";
import btnLeft from "@/public/btn-left.png";
import btnRight from "@/public/btn-right.png";
import food from "@/public/food/dada ayam.png";
import { dataFood } from "@/data";

type Tfood = {
  id: any;
  name: string;
  price: number;
  desc: string;
  img: any;
};

const FoodPage: FC<ComponentProps<"div">> = () => {
  const [degree, setDegree] = useState<number>(0);
  const [currentFoodIndex, setCurrentFoodIndex] = useState<number>(0);
  const [food, setFood] = useState<Tfood>(dataFood[0]);

  const handleTwist = (type: string) => {
    if (type === "left") {
      if (degree === 80) {
        setCurrentFoodIndex(currentFoodIndex + (dataFood.length - 1));
        setFood(dataFood[currentFoodIndex + (dataFood.length - 1)]);
        setDegree(0);
      }
      if (degree === 0) {
        setCurrentFoodIndex(currentFoodIndex + (dataFood.length - 1));
        setFood(dataFood[currentFoodIndex + (dataFood.length - 1)]);
        setDegree(-80);
      } else {
        setCurrentFoodIndex(currentFoodIndex - 1);
        setFood(dataFood[currentFoodIndex - 1]);
        setDegree(degree + 40);
      }
    }

    if (type === "right") {
      if (degree === -80) {
        setCurrentFoodIndex(currentFoodIndex - (dataFood.length - 1));
        setFood(dataFood[currentFoodIndex - (dataFood.length - 1)]);
        setDegree(0);
      } else {
        setCurrentFoodIndex(currentFoodIndex + 1);
        setFood(dataFood[currentFoodIndex + 1]);
        setDegree(degree + -40);
      }
    }
  };
  console.log(currentFoodIndex);
  console.log(dataFood.length - 1);
  return (
    <div>
      <div className="bg-white min-h-[48em] h-[90vh] mx-[100px] min-w-[90em] w-full relative flex">
        {/* list food */}
        <div className="circle bg-[#FFEEDE] h-[1177px] w-[1177px] rounded-full absolute left-[283px] top-[-645px] overflow-hidden">
          <Image
            className={`absolute top-[52em] left-[14em] transition-transform duration-200`}
            style={{ transform: `rotate(${degree}deg)` }}
            src={CircleFood}
            alt="cirle-food"
          />
        </div>
        {/* desc food*/}
        <div className="self-end mb-[150px] max-w-[330px]" key={food.id}>
          <h2 className="text-[#FF922C] font-[500] text-[44px] leading-normal transition origin-top-left animate-baloon">
            Rp{" "}
            {new Intl.NumberFormat("id-ID", {
              currency: "IDR",
            }).format(food.price)}
          </h2>
          <p className="text-[36px] font-[500] leading-[50px] transition origin-top-left animate-baloon">
            {food.name}
          </p>
          <p className="text-[13px] font-[400] leading-normal ransition origin-top-left animate-baloon">
            {food.desc}
          </p>
          <Button className="my-6 py-3 px-4">BELI SEKARANG</Button>
        </div>

        {/* food preview */}
        <div className="flex items-end space-x-9 z-40 w-fit h-fit self-end mb-24 ms-[16rem]">
          <button type="button" onClick={() => handleTwist("left")}>
            <Image alt="button left" src={btnLeft} />
          </button>
          <div>
            {food.img ? (
              <Image
                key={food.id}
                src={`/food/${food.img}`}
                className=" transition animate-twist"
                alt="food preview"
                width="325"
                height="325"
              />
            ) : null}
          </div>
          <button type="button" onClick={() => handleTwist("right")}>
            <Image alt="button right" src={btnRight} />
          </button>
        </div>
      </div>
      <p className="text-[13.16px] leading-[19.74px] font-semibold ml-[100px] mb-10">
        Butuh menu lain?
      </p>
    </div>
  );
};

export default FoodPage;
