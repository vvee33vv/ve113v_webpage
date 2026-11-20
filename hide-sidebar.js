// hide-sidebar.js
(function() {
    // 1. 创建样式标签
    var style = document.createElement('style');
    style.type = 'text/css';
    
    // 2. 定义要隐藏的侧边栏选择器和滚动条
    var css = `
        /* 隐藏常见的侧边栏 */
        aside, .sidebar, #sidebar, .left-sidebar, #left-sidebar, .right-sidebar, #right-sidebar {
            display: none !important;
        }
        
        /* 隐藏浏览器滚动条 */
        ::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
        }
        html, body {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
        }
    `;
    
    // 3. 将样式追加到 head 中
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.head.appendChild(style);
    
    // 4. (可选) 如果你使用的是 WYSIWYG Web Builder，侧边栏可能是某个特定的 div
    // 比如 <div id="wb_LayoutGrid2">。如果知道具体ID，可以在这里动态隐藏它：
    /*
    document.addEventListener("DOMContentLoaded", function() {
        var specificSidebar = document.getElementById("你的侧边栏ID");
        if(specificSidebar) {
            specificSidebar.style.display = "none";
        }
    });
    */
})();