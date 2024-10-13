import Image from 'next/image'
import './SkillsWork.css'
const SkillsWork = () => {
  return (
    <div className='container'>
        <div className="SkillsWork mt-28 mb-28 overflow-x-hidden max-w-[900px] m-auto max-[768px]:max-w-[100%]" id='SkillsWork'>
            <div className="content_skills flex justify-between  gap-[100px] max-[992px]:gap-[50px] max-[768px]:flex-col">
                <div className="title_skills text-[25px] font-bold">
                    <h1 className="max-[992px]:w-[100px]">نمونه کارها</h1>
                </div>
                <div className="skills flex flex-wrap gap-20 w-[700px] max-[768px]:w-[100%]">
                    <div className="img_skill h-[350px] w-[300px] mb-[16px] overflow-hidden cursor-pointer max-[992px]:w-[200px] max-[768px]:w-full">
                        <Image src='/img/fitness.png' width={500} height={500} className='img rounded-[8px]'/>
                    </div>
                    <div className="img_skill h-[350px] w-[300px] mb-[16px] overflow-hidden cursor-pointer max-[992px]:w-[200px] max-[768px]:w-full">
                        <Image src='/img/shop.png' width={500} height={500} className='img rounded-[8px]'/>
                    </div>
                    <div className="img_skill h-[350px] w-[300px] mb-[16px] overflow-hidden cursor-pointer max-[992px]:w-[200px] max-[768px]:w-full">
                        <Image src='/img/ghahve.png' width={500} height={500} className='img rounded-[8px]'/>
                    </div>
                    <div className="img_skill h-[350px] w-[300px] mb-[16px] overflow-hidden cursor-pointer max-[992px]:w-[200px] max-[768px]:w-full">
                        <Image src='/img/cosmetic.png' width={500} height={500} className='img rounded-[8px]'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsWork