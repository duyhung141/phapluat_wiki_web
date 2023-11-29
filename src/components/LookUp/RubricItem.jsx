import React, { useEffect, useState } from "react"
import ChapterItem from "./ChapterItem";

function RubricItem(props) {
    const { id } = props
    console.log("🚀 ~ file: RubricItem.jsx:5 ~ RubricItem ~ id:", id)
    const [isClickedRubric, setIsClickedRubric] = useState("")
    const [idClick, setIdClick] = useState("")
    // console.log("🚀 ~ file: RubricItem.jsx:6 ~ RubricItem ~ isClickedRubric:", isClickedRubric)
    // const handleIsClickedRubric = (e) => {
    //     //    e.preventDefault()
    //     setIsClickedRubric("ok")
    //     console.log(isClickedRubric)
    // }
    const handleIsClickedRubric = (id) => {
        setIsClickedRubric(!isClickedRubric);
        setIdClick(id)
    };

    // useEffect(() => {
    //     console.log(isClickedRubric);
    // }, [isClickedRubric]);
    const data = [
        {
            name: "Bảo vệ môi trường",
            rubric_id: 1
        },
        {
            name: "Bảo vệ tài sản",
            rubric_id: 1
        }
    ]
    const filteredItems = data.filter((e) => e.rubric_id == id);
    console.log("🚀 ~ file: RubricItem.jsx:30 ~ RubricItem ~ dataTemp:", filteredItems)

    return (
        <>
            <ul className="pl-4">

                {filteredItems.map((item, index) => <>
                    <li key={item.rubric_id} className="mb-2 cursor-pointer" onClick={() => handleIsClickedRubric(index)}>
                        <div className="flex items-center">
                            <span className="mr-2">
                                <svg className="h-4 w-4 text-[#ff4343]" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18 5H0v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5Zm-7.258-2L9.092.8a2.009 2.009 0 0 0-1.6-.8H2.049a2 2 0 0 0-2 2v1h10.693Z" />

                                </svg>
                            </span>
                            <span className="font-medium hover:underline hover:text-decoration-2">{item.name}</span>
                        </div>

                    </li>
                    {isClickedRubric && index == idClick && (
                        <ChapterItem id={item.rubric_id} />
                    )}
                    {/* )} */}
                </>)}
            </ul>
        </>
    )
}

export default RubricItem