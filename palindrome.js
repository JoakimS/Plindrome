function palindrome(str) {
  let beta = str.toLowerCase()
  let my=/[a-z0-9]/gi
  let popy=beta.match(my)
  let left=0
  let right=popy.length-1
  while (left < right){
    if (popy[left] !==popy[right]){
      return false
    }
    left++
    right--
  }
  return true;
}

palindrome("eye");