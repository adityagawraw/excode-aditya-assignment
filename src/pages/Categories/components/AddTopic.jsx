import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {GrFormClose} from "react-icons/gr";

const categories = ["custom", "icp", "mission", "product"];
const AddTopic = ({addTopicModal, setAddTopicModal}) => {
  const [topicData, setTopicData] = useState({
    topic: "",
    category: "",
    keywords: [],
  });

  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    console.log(topicData);
  }, [topicData]);
if(!addTopicModal) return null
  return (
    <div className="bg-[#00000010] absolute top-0 left-0 z-10 w-full h-[100vh] flex justify-center items-center">
      <div className= "min-w-[400px] bg-white rounded px-3 py-3 border  border-gray-700">
        <div className="flex justify-end">
          <button
          onClick={()=>setAddTopicModal(false)}
          >
            {" "}
            <AiOutlineClose />
          </button>
        </div>
        <p className="text-lg font-semibold text-gray-700">Topic Name</p>
        <input
          onChange={(e) =>
            setTopicData((prev) => {
              return { ...prev, topic: e.target.value };
            })
          }
          type="text"
          className="w-full my-2 border border-gray-500 px-2 py-1 rounded outline-none"
        />
        <p className="text-lg font-semibold text-gray-700">Category</p>
        <select
          onChange={(e) => {
            setTopicData((prev) => {
              return { ...prev, category: categories[e.target.value] };
            });
          }}
          type="text"
          className="w-full my-2 text-gray-700 bg-white border border-gray-500 px-2 py-1 rounded outline-none"
        >
          {categories.map((element, index) => (
            <option value={index}>{element}</option>
          ))}
        </select>

        <p className="text-lg font-semibold text-gray-700">Keywords</p>
        <div className="border border-gray-500 px-2 my-2 rounded">
          <div className="flex gap-3 items-center">
            <input
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              type="text"
              className="w-full my-2 px-2 outline-none"
            />
            <button
              onClick={() => {
                if(keyword=="") return;
                
                setTopicData((prev) => {
                  let arr = [...prev.keywords, keyword];
                  return { ...prev, keywords: arr };
                });
                setKeyword("");
              }}
              className="text-white bg-[#fd5829] font-semibold px-2 rounded"
            >
              Add
            </button>
          </div>
          <div className="flex gap-2 flex-wrap mb-1">
            {topicData.keywords?.map((element, index) => (
              <p
              key={index}
              index={index}
                className={ `items-center flex gap-2 border border-[#ffdd75] rounded px-1 text-sm font-semibold text-[#ffdd75] bg-[#fdf8e8] w-fit`}
              >
                {element}
                <button 
                onClick={()=>setTopicData(prev=>{
                    let arr = prev.keywords?.filter((e,i)=>i!=index);
                    return {...prev, keywords:arr}
                    
                })}
                ><GrFormClose className="text-white"/></button>
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-center ">
          <button 
          onClick={()=>{
            setAddTopicModal(false);
          }}
          className="text-white bg-[#fd5829] px-2 pb-1 font-semibold rounded">
            Submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTopic;