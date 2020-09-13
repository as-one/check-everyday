class Router {
  constructor(t) {
    this.routes = [], this.mode = null, this.root = "/", this.current = "", this.mode = window.history.pushState ? "history" : "hash", t.mode && (this.mode = t.mode), t.root && (this.root = t.root), this.listen();
  }

  add(t, e) {
    return this.routes.push({
      path: t,
      cb: e
    }), this;
  }

  remove(t) {
    for (let e = 0; e < this.routes.length; e += 1) if (this.routes[e].path === t) return this.routes.slice(e, 1), this;

    return this;
  }

  flush() {
    return this.routes = [], this;
  }

  clearSlashes(t) {
    return t.toString().replace(/\/$/, "").replace(/^\//, "");
  }

  getFragment() {
    let t = "";
    if ("history" === this.mode) t = this.clearSlashes(decodeURI(window.location.pathname + window.location.search)), t = t.replace(/\?(.*)$/, ""), t = "/" !== this.root ? t.replace(this.root, "") : t;else {
      const e = window.location.href.match(/#(.*)$/);
      t = e ? e[1] : "";
    }
    return this.clearSlashes(t);
  }

  navigate(t = "") {
    return "history" === this.mode ? window.history.pushState(null, null, this.root + this.clearSlashes(t)) : window.location.href = `${window.location.href.replace(/#(.*)$/, "")}#${t}`, this;
  }

  listen() {
    clearInterval(this.interval), this.interval = setInterval(this.interval.bind(this), 50);
  }

  interval() {
    void 0 !== this.current && this.current !== this.getFragment() && (this.current = this.getFragment(), this.routes.some(t => {
      const e = this.current.match(t.path);
      return !!e && (e.shift(), t.cb.apply({}, e), e);
    }));
  }

}

export default Router;