import Opportunity from "./Opportunity";
import Portfolios from "./Portfolios";

export default function Home() {
  return (
      <div className="container mx-auto font-poppins p-5">
        <div className="flex flex-col space-y-28">
          <Opportunity />
          <Portfolios />
        </div>
      </div>
  );
}
