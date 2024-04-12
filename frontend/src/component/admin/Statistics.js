import React,{useState, useEffect} from 'react'
import Admin from '../Admin'
import { getAllDetails } from '../../utils/labourController';
import { getList } from '../../utils/listController';
import StatsCard from '../StatsCard';
export default function Statistics() {
  const [list,setList] = useState([]);
  const [labour,setLabour] = useState([]);
  useEffect(()=>{
    getList(setList);
    getAllDetails(setLabour);
  },[])
  let merged = [];

  for(let i=0; i<list.length; i++) {
    merged.push({
    ...list[i], 
    ...(labour.find((itmInner) => itmInner._id === list[i].labourID))}
    );
  }
  console.log(merged);
  return (
    <>  
    <Admin />
    <div className="max-w-4xl mx-auto py-8">
      <div className=" flex justify-center items-center bg-gray-700 mb-6 py-2 px-4 rounded">
        <h1 className=" text-xl font-bold text-white">Statistics</h1>
      </div>
      <div className="flex justify-between items-center bg-gray-500 shadow-md rounded-lg p-4 mb-2">
        <span className="text-sm font-semibold">Sl. NO</span>
        <span className="text-sm font-semibold">ComplaintID</span>
        <span className="text-sm font-semibold">labour Assigned</span>
        <span className="text-sm font-semibold">Resource Allocated</span>
        <span className="text-sm font-semibold">Status</span>
      </div>
      <div>
        {merged && merged.map((data, index) => (
          <StatsCard slNO={index+1} id={data.id} location={data.name} type={data.materials.slice(0,15)} name={`${data.isCompleted === true ? "Completed" : "Pending"}`} key={index} />
        ))}
        {!merged && <p>Loading..</p>}
      </div>
    </div>
  </>
  )
}