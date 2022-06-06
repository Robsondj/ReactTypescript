import style from "./Clock.module.scss";

interface Props {
    time: number | undefined
}

const Clock = ({ time = 0}: Props) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minutesTens, minutesUnit] = String(minutes).padStart(2, '0');
    const [secondsTens, secondsUnit] = String(seconds).padStart(2, '0');

    return (
    <>
        <span role="clockNumber" className={style.clockNumber}>{minutesTens}</span>
        <span role="clockNumber" className={style.clockNumber}>{minutesUnit}</span>
        <span role="clockSeparator" className={style.clockSeparator}>:</span>
        <span role="clockNumber" className={style.clockNumber}>{secondsTens}</span>
        <span role="clockNumber" className={style.clockNumber}>{secondsUnit}</span>
    </>
    );
}

export default Clock;