class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters
  constructor(iterable) {
    if (!(Array.isArray(iterable) 
      || typeof iterable === 'string'
      || iterable === undefined
    )) {
      throw new Error('Must pass in a string, array, or nothing')
    }

    this.data = {};

    if (iterable) {
      for (const value of iterable) {
        this.data[value] = true;
      }
    }
  }

  // return number of elements in MySet
  size() {
    return Object.keys(this.data).length
  }

  // add an item to MySet as is
  // don't worry about arrays here!
  // return the MySet instance
  add(item) {
    this.data[item] = true
    return this
  }

  // delete an item from MySet
  // don't worry about arrays here!
  // return true if successful, otherwise false
  delete(item) {
    if (this.has(item)) {
      delete this.data[item]
      return true
    }
    return false
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    return !!this.data[item]
  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    return Object.keys(this.data)
  }
}

if (require.main === module) {
  // add your own tests in here
  const unique = new MySet([1, 2, 3, 3])
  console.log(unique)
  console.log(unique.entries())
}

module.exports = MySet;

