class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const arr = []
        
        for (let i = 0; i<nums.length; i++){
            let s = target - nums[i]
            for (let j = i+1; j<nums.length; j++){
                if (nums[j]==s){
                    arr.push(i)
                    arr.push(j)
                }
            }
        }
        return arr
    }
}
