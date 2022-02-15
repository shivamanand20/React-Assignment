function inner() {
    function innerInner() {
        function InnerInnerInner() {
            
        }
        InnerInnerInner()
    }
    innerInner()
}

inner();

// These 2 Function call will result in Error, because these function are not in Global Scope
innerInner()
InnerInnerInner()