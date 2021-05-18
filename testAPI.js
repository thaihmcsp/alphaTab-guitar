// const alpha = new alphaTab.AlphaTabApi(document.querySelector("#alphaTab"));
$("#alphaTab").alphaTab({
  scale: 1.5,
});
api.playedBeatChanged.on((beat) => {
  $(".learn").html("");
  let C = "Do";
  let D = "Re";
  let E = "Mi";
  let F = "Fa";
  let G = "Son";
  let A = "La";
  let B = "Si";
  // prettier-ignore
  let notes = [
    E,F,F,G,G,A,A,B,C,C,D,D,E,F,F,G,G,A,A,B,C,C,D, //1
    A,A,B,C,C,D,D,E,F,F,G,G,A,A,B,C,C,D,D,E,F,F,G, //2
    D,D,E,F,F,G,G,A,A,B,C,C,D,D,E,F,F,G,G,A,B,B,C, //3
    G,G,A,A,B,C,C,D,D,E,F,F,G,G,A,A,B,C,C,D,D,E,F, //4
    B,C,C,D,D,E,F,F,G,G,A,A,B,C,C,D,D,E,F,F,G,G,A, //5
    E,F,F,G,G,A,A,B,C,C,D,D,E,F,F,G,G,A,A,B,C,C,D, //6
    ];
  let text = "";
  console.log(beat.notes);
  for (let i = 0; i < beat.notes.length; i++) {
    let index = (beat.notes[i].string - 1) * 23 + beat.notes[i].fret;
    let link = {
      Do: "./finger notes-20210518T071907Z-001/finger notes/C4.png",
      Re: "./finger notes-20210518T071907Z-001/finger notes/D4.png",
      Mi: "./finger notes-20210518T071907Z-001/finger notes/E4.png",
      Fa: "./finger notes-20210518T071907Z-001/finger notes/F4.png",
      Son: "./finger notes-20210518T071907Z-001/finger notes/G4.png",
      La: "./finger notes-20210518T071907Z-001/finger notes/A3.png",
      Si: "./finger notes-20210518T071907Z-001/finger notes/B3.png",
    };
    text = text + " " + notes[index];
    let img = `
    <img src="${link[notes[index]]}" alt="" >
    `;
    $(".learn").append(img);
  }
  $(".show").html(text);
});

$("#speed").val("1");
$("#speed").change(() => {
  var playbackSpeed = $("#speed").val();
  api.playbackSpeed = playbackSpeed;
});
