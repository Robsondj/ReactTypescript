import { ITask } from "../../types/task";
import style from "./List.module.scss";
import Item from "./Item";

interface Props {
    tasks: ITask[],
    choseTask: (selectedTask: ITask) => void
}

const List = ({ tasks, choseTask }: Props) => {
    return (
        <aside className={style.taskList} >
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map(item => (
                    <Item 
                      choseTask={choseTask}
                      key={item.id}
                      {...item} 
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;