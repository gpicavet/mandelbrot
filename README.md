# mandelbrot

Benchmark Mandelbrot set in full HD resolution.

tests :
- js (simple) : vanilla js with main thread rendering to canvas
- js and workers : js and service workers. default to 8 concurrent workers (best with 8 core cpus). Rendering is done by dispatching lines of screen across workers

To run the js and workers test :
<pre>cd js_and_worker</pre>
start a local web server (because service worker)
<pre>python3 -m http.server</pre>
<pre>http://localhost:8000/mandelbrot.html</pre>

|test| compute time pre frame (ms) |
|---|---|
|js (simple)|500|
|js and workers|50|
