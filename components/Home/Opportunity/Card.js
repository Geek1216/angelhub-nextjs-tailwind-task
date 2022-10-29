import PrimaryButton from "../../../common/Button";

export default function Card({ data = null }) {
  return data ? (
    <div class="shadow-2xl flex flex-col justify-between transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
      <div>
        <div class="bg-ah-black flex items-center">
          <div class="p-5 pl-5 text-white text-sm font-poppins">{data.tag}</div>
        </div>
        <div className="relative">
          <img class="w-full h-48 object-cover" src={`/images/${data.image}`} />
          <div className="absolute right-3 -bottom-5">
            <img class="w-12 h-12" src={`/images/${data.logo}`} />
          </div>
        </div>
        <div class="m-5 mb-0 space-y-3">
          <div class="text-base font-semibold font-poppins">{data.title}</div>
          <p class="text-base	font-poppins">{data.description}</p>
        </div>
      </div>
      <div className="p-3">
        <PrimaryButton buttonText={data.buttonText} />
      </div>
    </div>
  ) : null;
}
