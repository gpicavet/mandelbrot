//version optimisée de la suite complexe Z(n+1)=Z(n)^2+C
function mandelIter(cx, cy, maxIter) {
    var x = 0.0;
    var y = 0.0;
    var xx = 0;
    var yy = 0;
    var xy = 0;

    var i = maxIter;
    while (i-- && xx + yy <= 4) {
        xy = x * y;
        xx = x * x;
        yy = y * y;
        x = xx - yy + cx;
        y = xy + xy + cy;
    }
    return i + 1;
}

var palette = [];

// Generate palette
function generatePalette() {
    // Calculate a gradient
    var roffset = 24;
    var goffset = 16;
    var boffset = 0;
    palette[255] = (255 << 24);
    for (var i = 0; i < 255; i++) {
        palette[i] = (255 << 24) + (boffset << 16) + (goffset << 8) + roffset;

        if (i < 64) {
            roffset += 3;
        } else if (i < 128) {
            goffset += 3;
        } else if (i < 192) {
            boffset += 3;
        }
    }
}

generatePalette();

onmessage = ({ data }) => {
    //demande de calcul d'une ligne...
    const {
        xs,
        ys,
        xe,
        ye,
        height,
        width,
        py,
        sab
    } = data;

    //vue 32 bit sur une portion du buffer
	const canvasData = new Uint32Array(sab, py*width*4, width);

    var dx = (xe - xs) / width;
    var dy = (ye - ys) / height;

    var x = xs,
        y = ys + py * dy;
    var offs = 0;

    for (px = 0; px < width; px++) {
    	var col = palette[255-mandelIter(x, y, 255)];
        canvasData[offs++] = col;
        x += dx;
    }
    // on notifie avec le resultat
    postMessage({msg:"ok"});
}