import { ThemeSunIcon, ThemeMoonIcon, HistoryIcon } from '../common/Icons.jsx'
import { useTheme } from '../../contexts/ThemeContext.jsx'
import { useUnits } from '../../contexts/UnitsContext.jsx'
import { useLanguage } from '../../contexts/LanguageContext.jsx'

const Toggles = ({ onHistoryClick }) => {
    const { theme, toggleTheme } = useTheme()
    const { units, toggleUnits } = useUnits()
    const { language, toggleLanguage } = useLanguage()

    return (
        <div className="flex items-center space-x-2">
            {/* History Button */}
            <button
                onClick={onHistoryClick}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                title="Search History"
            >
                <HistoryIcon />
            </button>

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
                {theme === 'dark' ? <ThemeSunIcon /> : <ThemeMoonIcon />}
            </button>

            {/* Units Toggle */}
            <button
                onClick={toggleUnits}
                className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-medium"
                title={`Switch to ${units === 'metric' ? 'imperial' : 'metric'} units`}
            >
                {units === 'metric' ? '°C' : '°F'}
            </button>

            {/* Language Toggle */}
            <button
                onClick={toggleLanguage}
                className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-medium"
                title={`Switch to ${language === 'en' ? 'Russian' : 'English'}`}
            >
                {language === 'en' ? 'EN' : 'RU'}
            </button>
        </div>
    )
}

export default Toggles
