export default function PrimaryButton({ buttonText='' }) {
  return (
    <button class="bg-ah-primary w-full p-3">
      <div class="text-base font-semibold font-poppins">{buttonText}</div>
    </button>
  );
}
