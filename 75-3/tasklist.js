const Task = class {
  static title(a, b) {
    return a.sortTitle(b);
  }
  static date(a, b) {
    return a.sortDate(b);
  }
  constructor(title) {
    if (!title) throw "invalid title";
    else this._title = title;
    this._list = [];
  }
  add(task) {
    if (task instanceof Task) this._list.push(task);
    else throw "invalid";
  }
  remove(task) {
    const list = this._list;
    if (list.includes(task)) list.splice(list.indexOf(task), 1);
  }
  getResult(_sort, stateGroup) {
    const list = this._list;
    return {
      item: this,
      children: (!stateGroup
        ? [...list].sort(_sort)
        : [
            ...list.filter(v => !v.isComplete()).sort(_sort),
            ...list.filter(v => v.isComplete()).sort(_sort)
          ]
      ).map(v => v.getResult(_sort, stateGroup))
    };
  }
  isComplete() {
    throw "override";
  }
  sortTitle() {
    throw "override";
  }
  sortDate() {
    throw "override";
  }
};
const TaskItem = class extends Task {
  constructor(title, date = new Date()) {
    super(title);
    this._date = date;
    this._isComplete = false;
  }
  isComplete() {
    return this._isComplete;
  }
  sortTitle(task) {
    return this._title > task._title;
  }
  sortDate(task) {
    return this._date > task._date;
  }
  toggle() {
    this._isComplete = !this._isComplete;
  }
};
const TaskList = class extends Task {
  constructor(title) {
    super(title);
  }
  isComplete() {}
  sortTitle() {
    return this;
  }
  sortDate() {
    return this;
  }
};
