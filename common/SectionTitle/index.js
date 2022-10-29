export default function SectionTitle({ title = "", description = "" }) {
  return (
    <div class="flex items-center flex-col space-y-3">
      <p class="font-semibold text-center font-poppins text-3xl">{title}</p>
      {description && (
        <p class="font-normal text-center text-base font-poppins">
          {description}
        </p>
      )}
    </div>
  );
}
