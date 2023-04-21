const uniq = (arr:unknown[]) => {
  return Array.from(new Set(arr));
}

function uniq2(arr:unknown[]) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item, 0) === index
  })
}

function uniq3(arr:unknown[]) {
  const newArr:unknown[] = []
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

function uniq4(arr:unknown[]) {
  const newArr:unknown[] = []
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

function uniq5(arr:unknown[]) {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i + 1, len = arr.length; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        j--
        len--
      }
    }
  }
  return arr
}

//todo 其他方法

