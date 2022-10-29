export default function SectionTitle({ title = "", description = "" }) {
  return (
    <div className="flex items-center flex-col space-y-3">
      <p className="font-semibold text-center font-poppins text-3xl">{title}</p>
      {description && (
        <p className="font-normal text-center text-base font-poppins">
          {description}
        </p>
      )}
    </div>
  );
}
