import React from "react"
import TermItem from "./TermItem";

function ChapterItem() {
    const [isClickedChapter, setIsClickedChapter] = React.useState(false)
    return (
        <>
            <ul className="pl-6">
                <li className="mb-2 cursor-pointer" onClick={() => setIsClickedChapter(!isClickedChapter)}>
                    <div className="flex items-center">
                        <svg className="h-4 w-4 text-[#004A69]" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                  d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                        </svg>
                        <span className="font-medium hover:underline hover:text-decoration-2">Node 1.1.1</span>
                    </div>
                    {isClickedChapter && (
                        <TermItem/>
                    )}
                </li>
            </ul>

        </>
    )
}

export default ChapterItem