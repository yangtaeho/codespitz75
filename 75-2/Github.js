
// 소유기반의코드를구현하되 
// 강의에있는전략함수대신전략클래스를적용하여개발하라. 
// 전략클래스는추상층과구상층을구분한다.
const Github = class {
  constructor(id, repo) {
      this._base = `https://api.github.com/repos/${id}/${repo}/contents/`;
  }
  load(path) {
      const id = 'callback' + Github._id++;
      const f = Github[id] = ({
          data: {
              content
          }
      }) => {
        this._loaded(content);
        delete Github[id];
        document.head.removeChild(s);
      };
      const s = document.createElement('script');
      s.src = `${this._base + path}?callback=Github.${id}`;
      document.head.appendChild(s);
  }
  _loaded(v) {
      throw 'override!';
  }
};
Github._id = 0;
const ImageLoader = class extends Github {
  constructor(id, repo, target) {
    super(id, repo);
    this._target = target;
  }
  _loaded(v) {
      this._target.src = 'data:text/plain;base64,' + v;
  }
};