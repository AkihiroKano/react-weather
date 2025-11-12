import { useLanguage } from '../../contexts/LanguageContext.jsx'
import { useUnits } from '../../contexts/UnitsContext.jsx'
import { WindIcon } from '../common/Icons.jsx'
import { formatTemperature, formatTime, getWeatherIconUrl, formatWindSpeed } from '../../utils/formatters.js'

const HourlyForecastCard = ({ hour, timezone }) => {
    const { language } = useLanguage()
    const { units } = useUnits()

    return (
        <div className="flex flex-col items-center p-3 bg-white/5 rounded-xl min-w-[80px]">
            <div className="text-sm font-medium text-white/80">
                {formatTime(hour.dt, timezone, language)}
            </div>

            <img
                src={getWeatherIconUrl(hour.weather[0].icon, 2)}
                alt={hour.weather[0].description}
                className="w-10 h-10 my-2 object-contain"
            />

            <div className="text-lg font-bold text-white">
                {formatTemperature(hour.main.temp, units)}
            </div>

            <div className="flex items-center space-x-1 mt-1">
                <WindIcon className="w-3 h-3 text-white/60" />
                <span className="text-xs text-white/60">
                    {formatWindSpeed(hour.wind.speed, units)}
                </span>
            </div>
        </div>
    )
}

export default HourlyForecastCard
