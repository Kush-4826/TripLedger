import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-black uppercase leading-tight text-black dark:text-white">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="border-4 border-black bg-white shadow-neubrutalism-lg dark:border-white dark:bg-brand-darkCard dark:shadow-neubrutalism-dark-lg">
                        <div className="p-6 text-xl font-bold uppercase text-black dark:text-white">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
