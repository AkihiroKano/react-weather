import {
    // Layout & Navigation
    Sun,
    Moon,
    Clock,
    Settings,

    // Search & Location
    Search,
    MapPin,
    Navigation,
    X,

    // Weather Metrics
    Wind,
    Droplets,
    Gauge,
    Eye,
    Sunrise,
    Sunset,
    Thermometer,
    Compass,

    // Status & Feedback
    Loader2,
    AlertTriangle,
    WifiOff,
    Check,
    Cloud,
    CloudRain,
    CloudSnow,
    CloudDrizzle,
    CloudSun,

    // Actions
    Trash2,
    History
} from 'lucide-react';

// Re-export base icons
export {
    Sun,
    Moon,
    Clock,
    Settings,
    Search,
    MapPin,
    Navigation,
    X,
    Wind,
    Droplets,
    Gauge,
    Eye,
    Sunrise,
    Sunset,
    Thermometer,
    Compass,
    Loader2,
    AlertTriangle,
    WifiOff,
    Check,
    Cloud,
    CloudRain,
    CloudSnow,
    CloudDrizzle,
    CloudSun,
    Trash2,
    History
};

// Custom icons with default styles
export const SearchIcon = (props) => <Search className="w-5 h-5" {...props} />;
export const LocationIcon = (props) => <MapPin className="w-5 h-5" {...props} />;
export const HistoryIcon = (props) => <Clock className="w-5 h-5" {...props} />;
export const CloseIcon = (props) => <X className="w-6 h-6" {...props} />;
export const WindIcon = (props) => <Wind className="w-6 h-6" {...props} />;
export const HumidityIcon = (props) => <Droplets className="w-6 h-6" {...props} />;
export const PressureIcon = (props) => <Gauge className="w-6 h-6" {...props} />;
export const VisibilityIcon = (props) => <Eye className="w-6 h-6" {...props} />;
export const SunriseIcon = (props) => <Sunrise className="w-8 h-8" {...props} />;
export const SunsetIcon = (props) => <Sunset className="w-8 h-8" {...props} />;
export const LoaderIcon = (props) => <Loader2 className="w-6 h-6 animate-spin" {...props} />;
export const ErrorIcon = (props) => <AlertTriangle className="w-16 h-16" {...props} />;
export const OfflineIcon = (props) => <WifiOff className="w-16 h-16" {...props} />;
export const ThemeSunIcon = (props) => <Sun className="w-5 h-5" {...props} />;
export const ThemeMoonIcon = (props) => <Moon className="w-5 h-5" {...props} />;
export const EmptyStateIcon = (props) => <MapPin className="w-16 h-16 opacity-50" {...props} />;
export const GeolocationIcon = (props) => <Navigation className="w-5 h-5" {...props} />;
