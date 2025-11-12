import { LoaderIcon, LocationIcon } from '../common/Icons.jsx'
import { useLanguage } from '../../contexts/LanguageContext.jsx'

const SearchSuggestions = ({ suggestions, onSelect, loading }) => {
    const { t } = useLanguage()

    if (loading) {
        return (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg z-50 p-4 text-center text-gray-600 dark:text-gray-300">
                <LoaderIcon />
            </div>
        )
    }

    if (suggestions.length === 0) {
        return null
    }

    return (
        <ul className="absolute top-full left-0 right-0 mt-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
            {suggestions.map((city, index) => (
                <li key={`${city.lat}-${city.lon}-${index}`}>
                    <button
                        onClick={() => onSelect(city)}
                        className="flex items-center w-full px-4 py-3 text-left text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors first:rounded-t-xl last:rounded-b-xl"
                    >
                        <LocationIcon className="w-5 h-5 mr-3 text-gray-400" />
                        <div>
                            <span className="font-medium">{city.name}</span>
                            {city.state && <span className="text-gray-500">, {city.state}</span>}
                            <span className="text-gray-500">, {city.country}</span>
                        </div>
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default SearchSuggestions
