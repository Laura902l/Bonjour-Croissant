import { assets } from '../assets/assets'
import IconLink from './IconLink'

const MainBanner = () => {
  return (
    <div className="relative">

      <img
        src={assets.main_banner_bg_sm}
        alt="Main Banner"
        className="w-full h-auto object-cover block md:hidden"
      />
      <img
        src={assets.main_banner_bg}
        alt="Main Banner"
        className="w-full h-[750px] object-cover hidden md:block"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-200 leading-tight drop-shadow-2xl">
          Bonjour Croissant
        </h1>

        <p className="text-lg md:text-xl text-yellow-50 mt-4 max-w-xl drop-shadow-md">
          A Taste of Paris in Every Bite - handcrafted and baked fresh every morning.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-10 font-medium">
          <IconLink to="/products" icon={assets.white_arrow_icon}>
            Shop now
          </IconLink>

          <IconLink to="/products" icon={assets.white_arrow_icon} variant="outline">
            Explore menu
          </IconLink>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
