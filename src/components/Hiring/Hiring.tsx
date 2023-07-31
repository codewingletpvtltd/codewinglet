import { FC } from "react";
import Image from "next/image";
import HiringImg from "../../assets/hiring.svg";
import HiringBoard from "../../assets/hiringBoard.svg";

const Hiring: FC = () => {
    return (
        <div className="bg-slate-300 border border-red-400 h-56 w-56">
            <Image src={HiringImg} alt="" className="ml-[1.9rem]" />
            <figure className="absolute top-[5.3rem] left-0 animate-swing transform origin-[center_-12px] float-left before:content-[''] before:absolute before:w-[5px] before:h-[5px] before:top-[3px] before:left-[57%] before:z-5 before:rounded-[50%] before:bg-primary before:border after:content-[''] after:absolute
    after:w-[30px] after:h-[33px] after:top-[10px] after:left-[75px] after:-z-10
    after:border-t after:border-l after:rotate-[37deg]">
                <Image src={HiringBoard} alt="" height={150} width={150}/>
                <p className="absolute top-[30%] left-[40%] rotate-[-15deg] flex items-center justify-center">Click here to Apply</p>
            </figure>
        </div>
    )
}

export default Hiring;