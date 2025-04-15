import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#171717] mt-32">
            <div className="flex flex-col gap-6 text-center max-w-[1296px] mx-auto px-6 py-10 text-white md:flex-row md:justify-between">
                <div>
                    <p className="opacity-75 font-light">&copy; 2025 Copyright <span className="font-semibold">NexTech</span></p>
                </div>

                <div className="flex items-center justify-center gap-5">
                    <Instagram className="!h-5 !w-5 md:!w-7 md:!h-7" />
                    <Facebook className="!h-5 !w-5 md:!w-7 md:!h-7" />
                    <Twitter className="!h-5 !w-5 md:!w-7 md:!h-7" />
                </div>
            </div>
        </footer>
    )
}

export default Footer