<script type="text/javascript">
var count = 86400;
var counter = setInterval(timer, 1000);

function timer() {
    count = count - 1;
    if (count == -1) {
        clearInterval(counter);
        return;
    }

    var seconds = count % 60;
    var minutes = Math.floor(count / 60);
    var hours = Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 60;

    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds; // watch for spelling
}
</script>



<span id='timer'></span>