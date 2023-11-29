import React from "react"
import RubricItem from "./RubricItem";

function TopicItem(props) {
    const {item} = props
    const [isClickedTopic, setIsClickedTopic] = React.useState(false)

    return (
        <>
            <ul className="p-2">

                <li className="mb-2 cursor-pointer" onClick={() => setIsClickedTopic(!isClickedTopic)}>
                    <div className="flex items-center">
                            <span className="mr-2 cursor-pointer">
                                <svg className="h-4 w-4 text-[#004A69]" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1 19h13a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H0v10a1 1 0 0 0 1 1ZM0 6h7.443l-1.2-1.6a1 1 0 0 0-.8-.4H1a1 1 0 0 0-1 1v1Z"/>
                                <path
                                    d="M17 4h-4.557l-2.4-3.2a2.009 2.009 0 0 0-1.6-.8H4a2 2 0 0 0-2 2h3.443a3.014 3.014 0 0 1 2.4 1.2l2.1 2.8H14a3 3 0 0 1 3 3v8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/>

                                </svg>
                            </span>
                        <span className="font-medium hover:underline hover:text-decoration-2">{item.name}</span>
                    </div>
                    {isClickedTopic && (
                        <RubricItem/>
                    )}
                </li>
            </ul>
        </>
    )
}

export default TopicItem