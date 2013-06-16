function getSelectionCoords() {
    var sel = document.selection, range;
    var x = 0, y = 0;
    if (sel) {
        if (sel.type != "Control") {
            range = sel.createRange();
            w = range.boundingWidth;
            h = range.boundingHeight;
            range.collapse(true);
            x = range.boundingLeft;
            y = range.boundingTop;
            a = range.boundingLeft + w;
            b = range.boundingTop + h;
        }
    } else if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0).cloneRange();
            if (range.getBoundingClientRect) {
                var rect = range.getBoundingClientRect();
                x = rect.left;
                y = rect.top;
                a = rect.right;
                b = rect.bottom;
                w = rect.right - rect.left;
                h = rect.bottom - rect.top;
            }
        }
    }
    return { x: x, y: y, a: a, b: b, w: w, h: h };
}

document.onmouseup = function() {
    var coords = getSelectionCoords();
    
   document.getElementById("top-left").value = coords.x;
   document.getElementById("top-right").value = coords.y;
   document.getElementById("bottom-left").value = coords.a;
   document.getElementById("bottom-right").value = coords.b;
  
  document.getElementById("width").value = coords.w;
  document.getElementById("height").value = coords.h;
  
};