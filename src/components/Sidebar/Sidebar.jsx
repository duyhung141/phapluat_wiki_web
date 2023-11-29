import React, {useState} from "react"
import {Link} from "react-router-dom";

function Sidebar() {
    const [isEdit, setIsEdit] = useState(false)
    const [itemText, setItemText] = useState('')
    const [saveEdit, setSaveEdit] = useState(false)
    const handleSaveEdit = () => {
        setIsEdit(false)
    }
    return (
        <>
            <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar"
                    aria-controls="separator-sidebar" type="button"
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd"
                          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="separator-sidebar"
                   className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div
                    className="h-full px-3 py-4 overflow-y-auto flex flex-col justify-between bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium relative">
                        <li>
                            <Link to="/"
                               className="flex items-center p-2 text-[#3b5998] font-semibold rounded-lg hover:bg-[#3b5998] hover:text-white group">
                                <span className="ms-3 uppercase">Pháp điển việt</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#"
                               className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                {!isEdit ? (

                                    <>
                                        <span
                                        className="flex-1 ms-3 text-start whitespace-nowrap truncate">{itemText}</span>
                                        <button id="dropdownMenuIconHorizontalButton"
                                                data-dropdown-toggle="dropdownDotsHorizontal"
                                                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                                type="button">
                                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor" viewBox="0 0 16 3">
                                                <path
                                                    d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                            </svg>
                                        </button>
                                    </>
                                ):(
                                    <>
                                        <input
                                            type="text"
                                            value={itemText}
                                            onChange={(e) => setItemText(e.target.value)}
                                        />
                                        <button className="absolute right-3 text-white bg-blue-700 px-2 py-1 rounded-lg" onClick={handleSaveEdit}>Lưu</button>
                                    </>
                                )}


                                <div id="dropdownDotsHorizontal"
                                     className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownMenuIconHorizontalButton">
                                        <li>
                                            <a
                                                className="block py-2 hover:bg-gray-100"
                                                onClick={() => setIsEdit(!isEdit)}
                                            >Sửa
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="block py-2 text-red-600 hover:bg-gray-100">Xóa</a>
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        </li>

                    </ul>
                    <ul className=" pt-4 mt-4 space-y-2 font-medium border-t border-black">
                        <li className="">
                            <a href="#"
                               className="bg-gray-700 flex items-center p-2 text-white transition duration-75 rounded-lg hover:bg-gray-500 dark:hover:bg-gray-700 dark:text-white group">
                                <svg className="w-5 h-5 text-gray-200 dark:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M7 19H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v4M6 1v4a1 1 0 0 1-1 1H1m11 8h4m-2 2v-4m5 2a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
                                </svg>
                                <span className="ms-3">Thêm cuộc trò chuyện</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar