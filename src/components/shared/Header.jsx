import { ArrowLeft } from "lucide-react";
import cover from '../../../public/header.png'
export default function Header({ title, description }) {
  return (
    <div
      className="relative w-full min-h-[350px] bg-cover bg-center bg-no-repeat flex items-center  md:px-0"
     style={{ backgroundImage: `url(${cover.src})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative container mx-auto z-10 w-full py-5 px-4">
        <div>
          {/* Back button */}
          <button
            className="mb-8 md:mb-12 flex items-center text-white hover:text-gray-300 transition-colors group"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-10 h-10 mr-2 group-hover:-translate-x-1 transition-transform" />
          </button>

          <div className="relative flex flex-col items-start gap-5 pl-5">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#22C55E] z-[-1] rounded-r-full"></div>

            <div className="ml-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0091FF] mb-2 leading-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
