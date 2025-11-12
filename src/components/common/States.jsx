import { ErrorIcon, EmptyStateIcon, OfflineIcon, LoaderIcon } from './Icons.jsx'
import { useLanguage } from '../../contexts/LanguageContext.jsx'

export const Card = ({ children, className = "" }) => (
    <div className={`glass-card ${className}`}>
        {children}
    </div>
)

export const Loader = () => {
    const { t } = useLanguage()

    return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
            <LoaderIcon className="text-white" />
            <p className="mt-4 text-white/80 text-lg">{t('loading')}</p>
        </div>
    )
}

export const Error = ({ message, onRetry }) => {
    const { t } = useLanguage()

    return (
        <div className="flex flex-col items-center justify-center py-12 text-center text-white">
            <ErrorIcon className="text-red-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('error')}</h3>
            <p className="text-white/60 mb-6 max-w-md">{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                >
                    {t('retry')}
                </button>
            )}
        </div>
    )
}

export const Empty = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-center text-white">
            <EmptyStateIcon className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Location Selected</h3>
            <p className="text-white/60 max-w-md">
                Search for a city or use your current location to see weather information.
            </p>
        </div>
    )
}

export const Offline = () => {
    const { t } = useLanguage()

    return (
        <div className="flex flex-col items-center justify-center py-12 text-center text-white">
            <OfflineIcon className="text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Offline</h3>
            <p className="text-white/60 mb-4">You are currently offline.</p>
            <p className="text-white/40 text-sm">Please check your internet connection.</p>
        </div>
    )
}

const States = {
    Card,
    Loader,
    Error,
    Empty,
    Offline
}

export default States
