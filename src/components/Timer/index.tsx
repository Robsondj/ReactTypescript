import { useEffect, useState } from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";
import { castTimeToSeconds } from "../../common/utils/time";

interface Props {
    selected: ITask | undefined,
    finishTask: () => void
}

const Timer = ({ selected, finishTask }: Props) => {

    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time) {
            console.log(selected.time);
            setTime(castTimeToSeconds(selected.time));
        }
    }, [selected]);

    const decreaseTime = (cont: number = 0) => {
        setTimeout(() => {
            if(cont > 0) {
                setTime(cont - 1);
                return decreaseTime(cont - 1)
            }
            finishTask();
        }, 1000);
    }

    return (
        <div className={style.timer} >
            <p className={style.title} >Escolha um card e inicie o Cronômetro</p>
            <div className={style.clockWrapper} >
                <Clock time={time} />
            </div>
            <Button onClick={() => decreaseTime(time)} >
                Começar
            </Button>
        </div>
    );

}

export default Timer;