function generatePrimeTable(width, height) {
    document.writeln("<table>");
    var counter = 1;
    for(var y = 0; y < height; y++) {
        document.writeln('<tr>');
        for(var x = 0; x < width; x++) {
            document.writeln('<td');
            if(isPrime(counter)) {
                document.writeln(' class="prime"');
            }
            document.writeln('>' + counter + '</td>');
            counter++;
        }
        document.writeln('</tr>');
    }
    document.writeln("</table>");
}

function isPrime(n) {
    if(n == 1) {
        return false;
    }
    for(var i = 2; i <= n / 2; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}