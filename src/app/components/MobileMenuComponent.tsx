import styles from './componentStyles/components.module.css';

const MobileMenuComponent = () => {
    return (
        // small tailwind titlebar including name, title, location on left
        <div className="flex flex-row justify-between items-center p-4 text-white mobile-menu-bar">
            <div className="flex flex-row items-center">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Charles Rogers"
                    className="rounded-full h-10 w-10"
                />
                <div className="ml-2">
                    <h1 className="text-lg font-semibold">Charles Rogers</h1>
                    <h4 className="text-sm">Software Engineer</h4>
                    <p className="text-xs">Phoenix, AZ</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <svg viewBox="0 0 50 80" width="32" height="32" fill="white">
                    <rect width="60" height="10" rx="10"></rect>
                    <rect y="20" width="60" height="10" rx="10"></rect>
                    <rect y="40" width="60" height="10" rx="10"></rect>
                </svg>
            </div>
        </div>
    );
}

export default MobileMenuComponent;