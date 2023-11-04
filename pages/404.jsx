import { FaArrowRight } from "react-icons/fa"

export default function Page404() {
    return (
        <div className="bg-[rgba(17,17,17)] h-screen flex flex-col items-center justify-center text-white gap-2">
            <span>This page could not be found.</span>
            <div className="font-bold text-white font text-8xl">404</div>
            <a className="flex flex-row items-center gap-2 p-2" href="/">
                <div>Plugin Doc</div>
                <FaArrowRight />
            </a>
        </div>
    )
}

// linear-gradient(1deg,#383838,#212121)linear-gradient(1deg,#383838,#212121)