import { auth } from "auth";

import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();
    if (!session) return redirect("/signin");

    return (
        <div>

            {children}
        </div>
    );
}