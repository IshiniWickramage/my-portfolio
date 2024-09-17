import {RiReactjsLine} from "react-icons/ri"
import { SiDotnet } from 'react-icons/si';
import { SiMysql } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";


const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
            <RiReactjsLine className="text-7xl text-cyan-400 "/>
        </div>
        <div className="p-4">
            <SiDotnet className="text-8xl text-purple-600"/>
        </div>
        <div className="p-4">
            <SiMysql className="text-8xl text-blue-400"/>
        </div>
        <div className="p-4">
            <SiMicrosoftsqlserver className="text-7xl text-red-600"/>
        </div>
      </div>
    </div>
  )
}

export default Technologies

