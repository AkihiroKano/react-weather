import { useLanguage } from '../../contexts/LanguageContext.jsx'
import { SunriseIcon, SunsetIcon } from '../common/Icons.jsx'
import { formatTime } from '../../utils/formatters.js'

const SunCycle = ({ sunrise, sunset, timezone }) => {
    const { t, language } = useLanguage()

    const formattedSunrise = formatTime(sunrise, timezone, language)
    const formattedSunset = formatTime(sunset, timezone, language)

    return (
        <div className="glass-card">
            <h3 className="text-lg font-semibold text-white mb-4">{t('sunrise')} & {t('sunset')}</h3>

            <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-yellow-500/20 rounded-xl">
                    <div className="flex justify-center mb-2">
                        <SunriseIcon className="text-yellow-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{formattedSunrise}</div>
                    <div className="text-white/60 text-sm mt-1">{t('sunrise')}</div>
                </div>

                <div className="text-center p-4 bg-orange-500/20 rounded-xl">
                    <div className="flex justify-center mb-2">
                        <SunsetIcon className="text-orange-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{formattedSunset}</div>
                    <div className="text-white/60 text-sm mt-1">{t('sunset')}</div>
                </div>
            </div>
        </div>
    )
}

export default SunCycle
