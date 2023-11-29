import React, {useState} from "react"
import ChapterItem from "./ChapterItem";

function RubricItem() {
   const [isClickedRubric, setIsClickedRubric] = useState("")
    const handleIsClickedRubric = (e) => {
       e.preventDefault()
        setIsClickedRubric("ok")
        console.log(isClickedRubric)
    }
    return (
        <>
            <ul className="pl-4">
                <li className="mb-2 cursor-pointer" onClick={handleIsClickedRubric}>
                    <div className="flex items-center">
                        <span className="mr-2">
                            <svg className="h-4 w-4 text-[#ff4343]" fill="none"
                                 stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18 5H0v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5Zm-7.258-2L9.092.8a2.009 2.009 0 0 0-1.6-.8H2.049a2 2 0 0 0-2 2v1h10.693Z"/>

                            </svg>
                        </span>
                        <span className="font-medium hover:underline hover:text-decoration-2">Node 1.1</span>
                    </div>
                    {isClickedRubric && (
                        <ChapterItem/>
                    )}

                </li>
            </ul>
        </>
    )
}

export default RubricItem