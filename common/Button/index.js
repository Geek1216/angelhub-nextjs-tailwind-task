export default function PrimaryButton({ buttonText='' }) {
  return (
    <button className="bg-ah-primary w-full p-3">
      <div className="text-base font-semibold font-poppins">{buttonText}</div>
    </button>
  );
}
