import moment from "moment";

export const INITAIAL_TASKS = {
  ids: [1, 2, 3],
  entities: {
    1: {
      id: 1,
      content: "Learn Redux",
      description: "Open source",
      priority: "urgent",
      isCompleted: false,
      order: 1,
      date: moment(new Date()).format("YYYY-MM-DD"),
      type: "day",
    },
    2: {
      id: 2,
      content: "Write code",
      description: "Write more",
      isCompleted: false,
      order: 3,
      date: moment(new Date()).format("YYYY-MM-DD"),
      type: "day",
    },
    3: {
      id: 3,
      content: "Have fun",
      description: "Playin games",
      priority: "low",
      isCompleted: false,
      order: 2,
      date: moment(new Date()).format("YYYY-MM-DD"),
      type: "day",
    },
  },
};
