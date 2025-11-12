import { useLanguage } from '../../contexts/LanguageContext.jsx'
import { useUnits } from '../../contexts/UnitsContext.jsx'
import { HumidityIcon, WindIcon, PressureIcon, VisibilityIcon } from '../common/Icons.jsx'
import { formatWindSpeed, formatPressure, formatHumidity } from '../../utils/formatters.js'

const WeatherMetrics = ({ data }) => {
    const { t } = useLanguage()
    const { units } = useUnits()
    const { main, wind, visibility } = data

    const metrics = [
        {
            icon: <HumidityIcon className="text-blue-300" />,
            title: t('humidity'),
            value: formatHumidity(main.humidity)
        },
        {
            icon: <WindIcon className="text-green-300" />,
            title: t('wind'),
            value: formatWindSpeed(wind.speed, units)
        },
        {
            icon: <PressureIcon className="text-purple-300" />,
            title: t('pressure'),
            value: formatPressure(main.pressure, 'mmhg')
        },
        {
            icon: <VisibilityIcon className="text-yellow-300" />,
            title: t('visibility'),
            value: `${(visibility / 1000).toFixed(1)} km`
        }
    ]

    return (
        <div className="glass-card">
            <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                        <div className="p-2 rounded-lg bg-white/10">
                            {metric.icon}
                        </div>
                        <div>
                            <div className="text-sm text-white/60">{metric.title}</div>
                            <div className="text-lg font-semibold text-white">{metric.value}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeatherMetrics
