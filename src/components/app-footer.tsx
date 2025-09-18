export default function Footer() {
  return (
    <footer
      className="
    flex flex-col w-full 
    backdrop-blur-sm bg-white/10 
    border-t border-white/20
    py-1 sm:py-2 md:py-2 lg:py-3
    mt-2 sm:mt-3 md:mt-4 lg:mt-5
    shadow-md
  "
  >
      <div className="
        max-w-7xl mx-auto w-full
        px-4 sm:px-6 md:px-8 lg:px-12
        flex flex-col lg:flex-row 
        justify-between items-center 
        gap-4 sm:gap-6 md:gap-8 lg:gap-12
      ">

        <div className="
          flex items-center gap-2 sm:gap-3
          text-center lg:text-left
          group cursor-pointer
          transition-all duration-300 ease-in-out
          hover:scale-105 active:scale-95
        ">
          <a
            href="mailto:cethakotoharinomena@gmail.com"
            className="
              text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl
              font-semibold lg:font-bold
              text-white/90 group-hover:text-pink-400
              transition-colors duration-300
              break-all sm:break-normal
              leading-tight
            "
            aria-label="Envoyer un email à Cynthia"
          >
            cethakotoharinomena@gmail.com
          </a>
        </div>

        <div className="
          flex items-center gap-2 sm:gap-3
          text-center lg:text-right
          group cursor-pointer
          transition-all duration-300 ease-in-out
          hover:scale-105 active:scale-95
        ">
          <a
            href="tel:+261380575709"
            className="
              text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl
              font-semibold lg:font-bold
              text-white/90 group-hover:text-pink-400
              transition-colors duration-300
              whitespace-nowrap
            "
            aria-label="Appeler Cynthia"
          >
            +261 38 05 75 709
          </a>
        </div>
      </div>

      <div className="
        max-w-7xl mx-auto w-full 
        px-4 sm:px-6 md:px-8 lg:px-12
        my-4 sm:my-5 md:my-6 lg:my-8
      ">
        <hr className="border-white/20" />
      </div>

      <div className="
        max-w-7xl mx-auto w-full
        px-4 sm:px-6 md:px-8 lg:px-12
        flex flex-col sm:flex-row 
        justify-between items-center 
        gap-3 sm:gap-4 md:gap-6
      ">

        <div className="
          text-xs sm:text-sm md:text-base
          text-white/70 hover:text-white/90
          transition-colors duration-200
          text-center sm:text-left
          leading-relaxed
        ">
          &copy; {new Date().getFullYear()} Cynthia Rakotoharinomena.
          <span className="hidden sm:inline"> Tous droits réservés.</span>
          <span className="sm:hidden block mt-1">Tous droits réservés.</span>
        </div>

        <div className="
          text-xs sm:text-sm md:text-base
          text-white/60 hover:text-pink-400
          transition-colors duration-200
          text-center sm:text-right
          cursor-pointer
          leading-relaxed
        ">
          <span className="hidden sm:inline">Développé par </span>
          <span className="sm:hidden">Dev: </span>
          <span className="font-semibold hover:underline">
            Seth TAFIKA
          </span>
        </div>
      </div>

      <div className="
        absolute inset-x-0 bottom-0 h-px 
        bg-gradient-to-r from-transparent via-pink-400/50 to-transparent
        opacity-0 hover:opacity-100
        transition-opacity duration-500
        pointer-events-none
      " />
    </footer>
  );
}