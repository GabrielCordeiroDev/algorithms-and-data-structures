module.exports = class Stack {
  items = []

  /**
    * @param {*} element
    * @return {Array}
  */
  push (element) {
    return this.items.push(element)
  }

  /**
    * @return {Array}
  */
  pop () {
    return this.items.pop()
  }

  /**
    * @return {*}
  */
  peek () {
    return this.items[this.items.length - 1]
  }

  /**
    * @return {boolean}
  */
  isEmpty () {
    return this.items.length === 0
  }

  /**
    * @return {[]}
  */
  clear () {
    return this.items = []
  }

  /**
    * @return {number}
  */
  size () {
    return this.items.length
  }
}
