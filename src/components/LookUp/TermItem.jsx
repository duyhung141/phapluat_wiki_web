import React from "react"

function TermItem() {
    return(
        <>
            <ul className="pl-6">
                <li className="mb-2 cursor-pointer ">
                    <div className="flex items-center">
                        <svg className="h-4 w-4 text-[#ff4343]" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z"/>
                            <path d="M6 5H5v1h1V5Z"/>
                        </svg>
                        <span className="font-medium hover:underline hover:text-decoration-2">Node 1.1.1.1</span>
                    </div>
                </li>
            </ul>

        </>
    )
}

export default TermItem