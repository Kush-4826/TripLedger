import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-brand-beige pt-6 dark:bg-brand-darkBg sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden border-2 border-black bg-white px-6 py-4 shadow-neubrutalism-lg dark:border-white dark:bg-brand-darkCard dark:shadow-neubrutalism-dark-lg sm:max-w-md">
                {children}
            </div>
        </div>
    );
}
