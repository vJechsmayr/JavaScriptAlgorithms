var twoSum = function (nums, target) {
        var ret = [0, 0];
        for (var i = 0; i < (nums.length / 2 | 0); i++) {
            {
                for (var j = i + 1; j < nums.length; j++) {
                    {
                        if ((nums[i] + nums[j]) === target) {
                            ret[0] = i;
                            ret[1] = j;
                        }
                    }
                    ;
                }
            }
            ;
        }
        return ret;
    };