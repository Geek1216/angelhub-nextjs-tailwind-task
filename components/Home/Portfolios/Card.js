export default function Card({
  data = null,
  idx = null,
  activeIndex = -1,
  setActiveIndex = () => {},
  mediumDevice = false,
}) {
  return data ? (
    <div
      class={`shadow-2xl h-42 ${data.class} bg-card-light-blue `}
      // style={{ backgroundColor: "#F2F2F2" }}
    >
      <div
        class="bg-ah-primary flex items-center"
        onClick={() => {
          !mediumDevice && setActiveIndex();
        }}
      >
        <p class="p-5 pl-5 text-white text-sm font-poppins text-2xl">
          {data.name}
        </p>
      </div>
      {activeIndex === idx || mediumDevice ? (
        <div
          class="p-5 grid grid-cols-2 md:grid-cols-3 gap-5"
          style={{ backgroundColor: "#F2F2F2" }}
        >
          {data.companies.map((company) => {
            return <img class="w-30 h-30" src={`/images/${company}`} />;
          })}
        </div>
      ) : null}
    </div>
  ) : null;
}
