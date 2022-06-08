import React from "react";
import PropTypes from "prop-types";
import * as S from "./TaskList.styles";
import ListItem from "../ListItem/ListItem";

const TaskList = ({ tasks }) => {
  return (
    <S.TaskList>
      {tasks &&
        tasks.map((task) => (
          <ListItem
            key={task.task}
            task={task.task}
            date={task.date}
            onChecked={(checkboxValue) => {
              //
            }}
          />
        ))}
    </S.TaskList>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TaskList;
