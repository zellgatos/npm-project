const $ = __webpack_require__("Jquery");
const hello = () => console.log("hello redwood from webpack");

hello();

$("body").html("<h1>Hello from jQuery</h1>");