var removeDuplicates = function(nums) {
    var n=nums.length;
    //console.log(n);
    if(n==0||n==1){
        return n;
    }
    
    var j=0;
    
    for (var i=0; i < n-1; i++){
		if (nums[i] !== nums[i+1]){
            nums[j++] = nums[i];
    }
}
    nums[j++] = nums[n-1];
    return j;
    
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 5]));