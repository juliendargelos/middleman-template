//= require_self
//= require ./element/_scroll
//= require ./element/_offset
//= require ./element/_bounds

Component.Element = class Element extends Component {
  constructor() {
    super(...arguments)
    if(!this.element) this.element = null
    this.constructor.all.push(this)
  }

  get element() {
    return this._element
  }

  set element(v) {
    if(!(v instanceof Node) && !(v instanceof Window)) v = this.constructor.element
    this._element = v

    this.load()
    this.update()
  }

  get visible() {
    return this.bounds.visible()
  }

  get contained() {
    return this.bounds.contained()
  }

  set(element) {
    if(typeof element === 'string') element = document.querySelector(element)
    return element instanceof Node || element instanceof Window ? super.set({element}) : super.set(...arguments)
  }

  load() {
    super.load()

    if(this.scroll) this.scroll.element = this.element
    else this.scroll = new this.constructor.Scroll(this.element)

    if(this.offset) this.offset.element = this.element
    else this.offset = new this.constructor.Offset(this.element)

    if(this.bounds) this.bounds.element = this.element
    else this.bounds = new this.constructor.Bounds(this.element)
  }

  update() {
    super.update()

    this.scroll.update()
    this.offset.update()
    this.bounds.update()
  }

  on(events, listener, useCapture) {
    events.split(' ').forEach(event => {
      if(event) this.element.addEventListener(event, listener, useCapture)
    })
  }

  off(events, listener, useCapture) {
    events.split(' ').forEach(event => {
      if(event) this.element.removeEventListener(event, listener, useCapture)
    })
  }

  static update() {
    this.all.forEach(component => component.update())
  }

  static element() {
    return document.createElement('div')
  }

  static instanciate(scope) {
    if(!this.element) return []

    return Array.prototype.slice
      .call((scope || document).querySelectorAll(this.selector))
      .map(element => this.for(element))
  }

  static for(element) {
    return this.all.find(component => component.element === element) || new this(element)
  }

  static init() {
    super.init()
    this.all = []
  }
}
