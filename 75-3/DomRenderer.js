const DomRenderer = class {
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
    parent.innerHTML = '';
    parent.appendChild(
      "title,date"
        .split(",")
        .reduce(
          (nav, c) => (
            nav.appendChild(
              el(
                "button",
                "innerHTML",
                c,
                "@fontWeight",
                this._sort == c ? "bold" : "normal",
                "addEventListener",
                ["click", e => ((this._sort = Task[c]), this.render())]
              )
            ),
            nav
          ),
          el("nav")
        )
    );
    this._render(parent, this._list, this._list.getResult(), 0);
  }
  _render(base, parent, { item, children }, depth) {
    const temp = [];
    base.style.paddingLeft = depth * 10 + "px";
    if (item instanceof TaskList) {
      temp.push(el("h2", "innerHTML", item._title));
    } else {
      temp.push(
        el(
          "h3",
          "innerHTML",
          item._title,
          "@textDecoration",
          item.isComplete() ? "line-through" : "none"
        ),
        el(
          "time",
          "innerHTML",
          item._date.toString(),
          "datetime",
          item._date.toString()
        ),
        el(
          "button",
          "innerHTML",
          item.isComplete() ? "progress" : "complete",
          "addEventListener",
          ["click", _ => this.toggle(item)]
        ),
        el("button", "innerHTML", "remove", "addEventListener", [
          "click",
          _ => this.remove(parent, item)
        ])
      );
    }
    const sub = el(
      "section",
      "appendChild",
      el("input", "type", "text"),
      "appendChild",
      el("button", "innerHTML", "addTask", "addEventListener", [
        "click",
        e => this.add(item, e.target.previousSibling.value)
      ])
    );
    children.forEach(v => {
      this._render(sub, item, v, depth + 1);
    });
    temp.push(sub);
    temp.forEach(v => base.appendChild(v));
  }
};
