const actionType = {  // Symbol 在以后不小心重复种类的时候减少隐患
  Add: Symbol('add'),
  Update: Symbol('update'),
  Delete: Symbol('delete'),
}

export default actionType;