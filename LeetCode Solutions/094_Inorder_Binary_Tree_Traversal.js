var inorderTraversal = function(root) {
    let st = [];
    let visited = [];
    
    while(root || st.length != 0) {
        while(root != null){
            st.push(root);
            root = root.left;        
        }
        
        root = st.pop();
        visited.push(root.val);
        
        root = root.right;
    }
    
    return visited;
};