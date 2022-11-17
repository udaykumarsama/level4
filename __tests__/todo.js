/* eslint-disable no-undef */
const todoList = require("../todo");
let today = new Date().toLocaleDateString("en-CA");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todolist Testing", () => {
  beforeAll(() => {
    add({
      title: "DS algorithms Practice",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Add a new todo in to the list", () => {
    // expect(all.length).toBe(0);

    let l = all.length;

    add({
      title: "Reactjs learning",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(l + 1);
  });

  test("Mark today's todo as a completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("retrive all todos that are overdue today", () => {
    let list_Of_Todos = overdue();

    expect(
      list_Of_Todos.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("retrive all todos that are due for Today", () => {
    let list_Of_Todos = dueToday();

    expect(
      list_Of_Todos.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("retrive all todos that are due for Later", () => {
    let list_Of_Todos = dueLater();

    expect(
      list_Of_Todos.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
