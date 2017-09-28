var removeDuplicates = function(nums) {
  var temp = nums[0]
  var result = []
  var count = 0
  nums.forEach(function(item,index){
      if(temp === item&&index !== 0){

      }else{
          temp = item
          nums[count] = temp
          count ++
      }
  })
  nums = nums.slice(0, count)
//   console.log(result)
  return nums.length
//   let set = new Set(nums)
//   let result = 
//   return Array.from(set)
}
let nums = [1,1,2,2]
console.log(removeDuplicates(nums))
console.log(nums)