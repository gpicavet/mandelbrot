# mandelbrot

Benchmark Mandelbrot set in full HD resolution.

<img src="mandelbrot.png" width="256">

## tests :
- js (simple) : vanilla js with main thread rendering to canvas
- js and workers : js and service workers. default to 8 concurrent workers (best with 8 core cpus). Rendering is done by dispatching lines of screen across workers. This is done using a SharedArrayBuffer and then mapping it to canvas

## To run the js and workers test :
<pre>cd js_and_worker</pre>
start a local web server (because service worker)
<pre>python3 -m http.server</pre>
<pre>http://localhost:8000/mandelbrot.html</pre>


## benchmark results

Using Laptop with i7-8650U CPU@ 1.9Ghz

|test| compute time (Chrome 88.0.4324.190) | compute time (Brave 1.20.110) | compute time (Firefox 85) |
|---|---|---|---|
|js (simple)|510 ms|510 ms|520 ms|
|js and workers|45 ms|52 ms|60 ms|
