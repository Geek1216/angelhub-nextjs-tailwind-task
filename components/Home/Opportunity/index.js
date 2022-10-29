import SectionTitle from "../../../common/SectionTitle";
import Card from "./Card";

const opportunities = [
  {
    tag: "#Web3",
    title: "NeoSwap",
    description: "Perfect NFT swaps, by design.",
    image: "neoswap-thumbnail.png",
    buttonText: "Invest Now",
    logo: "neoswap.png",
  },
  {
    tag: "#ESGxTech",
    title: "Cerqular",
    description: "The largest and fastest growing sustainable marketplace.",
    image: "neoswap-thumbnail1.png",
    buttonText: "Invest Now",
    logo: "cerqular.png",
  },
  {
    tag: "#Industry4.0",
    title: "Antiverse",
    description: "Engineering the future of drug discovery",
    image: "neoswap-thumbnail3.png",
    buttonText: "Invest Now",
    logo: "antiverse.png",
  },
  {
    tag: "#Web3",
    title: "Bunch Live",
    description: "Roblox meets Discord on the blockchain.",
    image: "neoswap-thumbnail2.png",
    buttonText: "Invest Now",
    logo: "bunchlive.png",
  },
];

export default function Opportunity() {
  return (
    <div className="flex flex-col space-y-10">
      <SectionTitle
        title="Investment Opportunities"
        description="Investment opportunities on this platform are available to only Professional Investors as defined in the Securities and Futures Ordinance (SFO) of Hong Kong SAR"
      />
      <div className="flex items-center justify-center">
        <div className="w-full md:w-10/12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5 ">
            {opportunities.map((opportunity) => {
              return <Card data={opportunity} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
