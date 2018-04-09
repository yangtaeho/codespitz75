const ConsoleRenderer = class {
  constructor(list, parent) {
    this._parent = parent;
    this._list = list;
    this._sort = "title";
  }
  add(parent, title, date) {
    parent.add(new TaskItem(title, date));
    this.render();
  }
  remove(parent, task) {
    parent.remove(task);
    this.render();
  }
  toggle(task) {
    if (task instanceof TaskItem) {
      task.toggle();
      this.render();
    }
  }

  render() {
    const parent = this._parent;
    parent.push(
      "title,date"
        .split(",")
        .reduce(
          (nav, c) => (
            nav.push({
              c,
              fontFamily: this._sort == c ? "***" : ""
            }),
            nav
          ),
          []
        )
    );
    this._render(parent, this._list, this._list.getResult(), 0);
    const lineDelim = '\R\r\n';
    console.log(parent.join(lineDelim));
  }
  _render(base, parent, { item, children }, depth) {
    const temp = [];
    let indent = '';
    for(let i = 0; i < depth; i++) {
      indent += '_';
    }
    base.push(indent);
    if (item instanceof TaskList) {
      temp.push('title: ' + item._title);
    } else {
      temp.push(
        (
          'subtitle: ' +
          item._title +

        ' || 완료: ' +
          item.isComplete() ? "완료" : "미완료"
        ),
        (
          "time: " + 
          item._date.toString() + 
          ", datetime: " +
          item._date.toString()
        )
      );
    }
    const sub = ['[ sub ] ||'];
    children.forEach(v => {
      this._render(sub, item, v, depth + 1);
    });
    temp.push(sub);
    // temp.forEach(v => base.push(v));
    temp.forEach(v => console.log(JSON.stringify(v)));
  }
};
