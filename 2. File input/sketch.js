function loadFile() {

    loadStrings("rainbow.txt", fileloaded);

}

function fileloaded(text) {
    createP(join(text, '</br>'));
}

function fileSelected(file) {

    createP(file.name + "  " + file.size + "  " + file.type);
    // console.log(file);
    if (file.type == "text") {
        createP(file.data);
    } else {
        createP("I Need a texte file");
    }
}

function setup() {

    createFileInput(fileSelected);
    var button = select('#rainbow');
    button.mousePressed(loadFile);
}
