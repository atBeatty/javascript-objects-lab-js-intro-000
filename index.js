function updateObjectWithKeyAndValue(object, key, value) {
  //new resultObj
  var updatedObject = {};
  updatedObject[key] = value;

  Object.assign(updatedObject, object);
  return updatedObject;


}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  //delete from clone and return updated clone

  var updatedObject = {};
  Object.assign({}, object)



}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]

  return object;
}
