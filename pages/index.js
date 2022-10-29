import Header from "../common/Header";
import Portfolios from "../components/Home/Portfolios";
import Opportunity from "../components/Home/Opportunity";

export default function Home() {
  return (
    <>
      <Header />
      <div class="container mx-auto font-poppins p-5">
        <div className="flex flex-col space-y-28">
          <Opportunity />
          <Portfolios />
        </div>
      </div>
    </>
  );
}
