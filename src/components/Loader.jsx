export default function Loader() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-1 border-4 border-blue-300 border-b-transparent rounded-full animate-spin-reverse"></div>
      </div>
    </div>
  );
}