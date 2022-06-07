import { ITask } from "../../../types/task";
import style from "./Item.module.scss";

interface Props extends ITask {
    choseTask: (selectedTask: ITask) => void
}

const Item = (
    {
        task,
        time,
        selected,
        completed,
        id,
        choseTask
    }: Props) => {
    return (
        <li 
          className={`${style.item} ${selected ? style.selectedItem : ''} ${completed ? style.selectedItem : ''}`}
          onClick={() => !completed && choseTask(
            {
                task,
                time,
                selected,
                completed,
                id
             }
          )}
          >
            <h3>{task}</h3>
            <span role="time" >{time}</span>
            {completed && <span className={style.concluded} aria-label="tarefa completada"/>}
        </li>
    );
}

export default Item;