import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, canRegister }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-beige p-6 dark:bg-brand-darkBg">
                
                {/* Decorative Elements */}
                <div className="absolute left-4 top-10 h-16 w-16 border-4 border-black bg-brand-pink shadow-neubrutalism-sm dark:border-white dark:bg-brand-neonPurple dark:shadow-neubrutalism-dark-sm md:left-10 md:h-24 md:w-24 md:shadow-neubrutalism-md lg:left-20 lg:top-20"></div>
                <div className="absolute bottom-10 right-4 h-20 w-20 rounded-full border-4 border-black bg-brand-cyan shadow-neubrutalism-sm dark:border-white dark:shadow-neubrutalism-dark-sm md:right-10 md:h-32 md:w-32 md:shadow-neubrutalism-md lg:bottom-20 lg:right-20"></div>
                <div className="absolute right-10 top-20 h-12 w-12 rotate-12 border-4 border-black bg-brand-yellow shadow-neubrutalism-sm dark:border-white dark:bg-brand-neonGreen dark:shadow-neubrutalism-dark-sm md:right-20 md:top-32 md:h-16 md:w-16 lg:right-40 lg:top-32"></div>
                <div className="absolute bottom-20 left-10 h-14 w-14 -rotate-12 border-4 border-black bg-brand-neonGreen shadow-neubrutalism-sm dark:border-white dark:bg-brand-pink dark:shadow-neubrutalism-dark-sm md:bottom-32 md:left-20 md:h-20 md:w-20 lg:left-40 lg:bottom-32"></div>
                <div className="absolute left-1/2 top-10 h-8 w-24 -translate-x-1/2 rotate-6 border-4 border-black bg-white shadow-neubrutalism-sm dark:border-white dark:bg-brand-darkCard dark:shadow-neubrutalism-dark-sm md:top-16 md:h-10 md:w-32 lg:top-24"></div>

                <div className="relative z-10 w-full max-w-4xl border-4 border-black bg-white p-12 text-center shadow-neubrutalism-lg dark:border-white dark:bg-brand-darkCard dark:shadow-neubrutalism-dark-lg">
                    <div className="mb-8 flex justify-center">
                        <img 
                            src="/android-chrome-512x512.png" 
                            alt="TripLedger Logo" 
                            className="h-32 w-32 md:h-48 md:w-48 object-contain drop-shadow-md"
                        />
                    </div>
                    <h1 className="mb-6 text-5xl font-black uppercase tracking-tight text-black dark:text-white md:text-7xl">
                        TripLedger
                    </h1>
                    <p className="mx-auto mb-10 max-w-2xl text-lg font-bold uppercase text-gray-700 dark:text-gray-300 md:text-2xl">
                        Plan, log, and analyze your motorcycle journeys.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                        {auth.user ? (
                            <Link 
                                href={route('dashboard')}
                                className="inline-flex w-full items-center justify-center border-4 border-black bg-brand-yellow px-8 py-4 text-lg font-black uppercase tracking-widest text-black shadow-neubrutalism-md transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none focus:outline-none dark:border-white dark:bg-brand-neonGreen dark:shadow-neubrutalism-dark-md dark:hover:shadow-none sm:w-auto"
                            >
                                Go to Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link 
                                    href={route('login')}
                                    className="inline-flex w-full items-center justify-center border-4 border-black bg-brand-yellow px-8 py-4 text-lg font-black uppercase tracking-widest text-black shadow-neubrutalism-md transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none focus:outline-none dark:border-white dark:bg-brand-neonGreen dark:shadow-neubrutalism-dark-md dark:hover:shadow-none sm:w-auto"
                                >
                                    Log In
                                </Link>
                                {canRegister && (
                                    <Link 
                                        href={route('register')}
                                        className="inline-flex w-full items-center justify-center border-4 border-black bg-brand-pink px-8 py-4 text-lg font-black uppercase tracking-widest text-black shadow-neubrutalism-md transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none focus:outline-none dark:border-white dark:bg-brand-neonPurple dark:text-white dark:shadow-neubrutalism-dark-md dark:hover:shadow-none sm:w-auto"
                                    >
                                        Register
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
