import { useState } from "react";
import SectionTitle from "../../../common/SectionTitle";
import Card from "./Card";

const portfolios = [
  {
    name: "Web3",
    companies: [
      "animoca.jpg",
      "coda.jpg",
      "klang.jpg",
      "village.jpg",
      "metakey.jpg",
      "klang.jpg",
      "metakey.jpg",
    ],
    class: "row-span-3",
  },
  {
    name: "ESGxTech",

    companies: ["animoca.jpg", "coda.jpg", "klang.jpg"],
    class: "row-span-1",
  },
  {
    name: "Fintech",
    companies: [
      "animoca.jpg",
      "coda.jpg",
      "klang.jpg",
      "village.jpg",
      "metakey.jpg",
    ],
    class: "row-span-2",
  },
  {
    name: "Industry4",
    companies: ["animoca.jpg", "coda.jpg", "klang.jpg", "village.jpg"],
    class: "row-span-2",
  },
];

export default function Portfolios() {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div className="flex flex-col space-y-10">
      <SectionTitle title="Successful Portfolio Companies" />
      <div class="grid md:grid-rows-4 md:grid-flow-col md:gap-4 block md:hidden">
        {portfolios.map((portfolio, idx) => {
          return (
            <Card
              data={portfolio}
              idx={idx}
              activeIndex={activeIndex}
              setActiveIndex={() =>
                setActiveIndex(activeIndex === idx ? -1 : idx)
              }
            />
          );
        })}
      </div>
      <div className="hidden md:block">
        <div class="grid grid-rows-4 grid-flow-col gap-4">
          {portfolios.map((portfolio, idx) => {
            return <Card data={portfolio} idx={idx} mediumDevice={true} />;
          })}
        </div>
      </div>
    </div>
  );
}
