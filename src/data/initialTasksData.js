import moment from "moment";

export const INITAIAL_TASKS = {
  ids: [1, 2, 3],
  entities: {
    1: {
      id: 1,
      name: "Learn Redux",
      notes: "Open source",
      priority: "urgent",
      isCompleted: false,
      date: moment(new Date()).format("YYYY-MM-DD"),
      type: "day",
    },
    2: {
      id: 2,
      content: "Write code",
      description: "Write more",
      isCompleted: false,
      date: moment(new Date()).format("YYYY-MM-DD"),
      type: "day",
    },
    3: {
      id: 3,
      content: "Have fun",
      description: "Playin games",
      priority: "low",
      isCompleted: false,
      date: moment(new Date()).format("YYYY-MM-DD"),
      type: "day",
    },
  },
};
