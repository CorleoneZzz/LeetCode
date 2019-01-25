/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.valueStack=[];
    this.minStack=[];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.valueStack.push(x);
    if (this.minStack.length===0||x<=this.getMin())
    {
        this.minStack.push(x);
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.top()===this.getMin()&&this.minStack.length>0)
    {
        this.minStack.pop();
    }
    this.valueStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.valueStack[this.valueStack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.minStack.length===0)
    {
        return this.valueStack[0];
    }
    return this.minStack[this.minStack.length-1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */