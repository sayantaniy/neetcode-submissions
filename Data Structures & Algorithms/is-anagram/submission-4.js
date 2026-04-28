class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freq = {
        }

        if (s.length!==t.length)
        return false

        for(const alpha of s){
            freq[alpha] = (freq[alpha] || 0 ) + 1
        }

        for (const alpha of t){
            if(!freq[alpha]) {
                return false
            }
            freq[alpha]--
        }
        return true
        
    }
}
