export default function Title({ head, title }) {
  return (
    <div className="md:mt-16 mt-5">
      <div className="flex gap-3">
        <div className="w-4 h-8 rounded-md bg-[#fe6201]"></div>
        <div>
          <h3 className="mt-1 text-[#fe6201] font-medium">{head}</h3>
        </div>
      </div>
      <div>
        <h1 className="md:text-3xl text-xl font-semibold my-3">{title}</h1>
      </div>
    </div>
  );
}
