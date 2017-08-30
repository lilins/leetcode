var removeDuplicates = function(nums) {
  var temp = nums[0]
  var length = nums.length
  nums.forEach(function(item,index){
      if(temp === item&&index !== 0){
          length --
      }else{
          temp = item
      }
  })
  return length
}

console.log(removeDuplicates([1,1,2,2,2,2,2,4,5,6]))