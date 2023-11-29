import React from "react"
import TopicItem from "../../components/LookUp/TopicItem";

function LookUpPage() {
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
    return (
        <>
            <div className="max-w-xl mx-auto bg-white rounded-md overflow-hidden p-4 shadow-md">
                {
                    data.map((item, index) => (
                        <TopicItem item={item} key={index}/>
                    ))
                }
                {/*<TopicItem data={data}/>*/}
                {/*<TopicItem/>*/}
                {/*<LookUp/>*/}
            </div>

        </>
    )
}

export default LookUpPage

