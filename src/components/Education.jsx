import { EDUCATION } from "../constants"

const Education = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Education</h2>
      <div>
        {EDUCATION.map((education, index)  => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-stone-400">
                    {education.year}
                </p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4 ">
                <h3 className="mb-2 font-semibold">{education.description} </h3>
                     <p className="mb-4 text-stone-400">{education.school}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Education
