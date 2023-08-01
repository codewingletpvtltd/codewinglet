import { FC } from "react";
import Image from "next/image";
import HiringImg from "../../assets/hiring.svg";
import HiringBoardBg from "../../assets/hiringBoard.svg";
import { HiringBoardProps } from "./types";

const HiringBoard: FC<HiringBoardProps> = ({children, onClick, className = ''}) => {
    return (
        <div>
            <Image src={HiringImg} alt="" className="ml-[1.9rem]" />
            <figure className={`absolute top-[4.8rem] left-[20px] animate-swing transform origin-[center_-12px] float-left ${className}`}>
                <Image src={HiringBoardBg} alt="" height={150} width={150}/>
                <button className="absolute top-[30%] left-[0] p-2 rotate-[-15deg] flex items-center justify-center text-white" onClick={onClick}>{children}</button>
            </figure>
        </div>
    )
}

export default HiringBoard;