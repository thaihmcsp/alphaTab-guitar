// const alpha = new alphaTab.AlphaTabApi(document.querySelector("#alphaTab"));
$("#alphaTab").alphaTab({
  scale: 1.5,
});
api.playedBeatChanged.on((beat) => {
  $(".learn").html("");
  $(".show").html("");
  // prettier-ignore
  let notes = [
    'E2' ,'F2' ,'F#2','G2' ,"G#2",'A2' ,'A#2','B2' ,'C3' ,'C#3','D3' ,'D#3','E3' ,'F3' ,'F#3','G3' ,'G#3','A3' ,'A#3','B3' ,'C4' ,'C#4','D4', //String 1
    'A2 ','A#2','B2' ,'C3' ,'C#3','D3' ,'D#3','E3' ,'F3' ,'F#3','G3' ,'G#3','A3' ,'A#3','B3' ,'C4' ,'C#4','D4' ,'D#4','E4' ,'F4' ,'F#4','G4', //String 2
    'D3' ,'D#3','E3' ,'F3' ,'F#3','G3' ,'G#3','A3' ,'A#3','B3' ,'C4' ,'C#4','D4' ,'D#4','E4' ,'F4' ,'F#4','G4' ,'G#4','A4' ,'A#4','B4' ,'C5', //String 3
    'G3' ,'G#3','A3' ,'A#3','B3' ,'C4' ,'C#4','D4' ,'D#4','E4' ,'F4' ,'F#4','G4' ,'G#4','A4' ,'A#4','B4' ,'C5' ,'C#5','D5' ,'D#5','E5' ,'F5', //String 4
    'B3' ,'C4' ,'C#4','D4' ,'D#4','E4' ,'F4' ,'F#4','G4' ,'G#4','A4' ,'A#4','B4' ,'C5' ,'C#5','D5' ,'D#5','E5' ,'F5' ,'F#5','G5' ,'G#5','A5', //String 5
    'E4' ,'F4' ,'F#4','G4' ,'G#4','A4' ,'A#4','B4' ,'C5' ,'C#5','D5' ,'D#5','E5' ,'F5' ,'F#5','G5' ,'G#5','A5' ,'A#5','B5' ,'C6' ,'C#6','D6', //String 6
    ];
  let text = "";
  // console.log(beat.voice.beats[0]);
  let link = {
    C4: "./finger notes-20210518T071907Z-001/finger notes/C4.png",
    D4: "./finger notes-20210518T071907Z-001/finger notes/D4.png",
    E4: "./finger notes-20210518T071907Z-001/finger notes/E4.png",
    F4: "./finger notes-20210518T071907Z-001/finger notes/F4.png",
    G4: "./finger notes-20210518T071907Z-001/finger notes/G4.png",
    G3: "./finger notes-20210518T071907Z-001/finger notes/G3.png",
    A3: "./finger notes-20210518T071907Z-001/finger notes/A3.png",
    B3: "./finger notes-20210518T071907Z-001/finger notes/B3.png",
  };
  let beatIndex = beat.index
  for (let i = 0; i < beat.notes.length; i++) {
    let index = (beat.notes[i].string - 1) * 23 + beat.notes[i].fret;
    let img = `
    <img src="${link[notes[index]]}" alt="" >
    `;
    $(".learn").append(img);
  }

  for (let i = 0; i < beat.voice.beats.length; i++) {
    let style = i<=beatIndex ? 'red' : 'black'
    console.log(beat.voice.beats[i]);
    text = `<span style='color:${style}'> ${beat.voice.beats[i].lyrics[0]} </span>`;
    $(".show").append(text);
  }
});

api.playerFinished.on((args) => {
  console.log("ok");
  $(".show").html('')
});

$("#speed").val("1");
$("#speed").change(() => {
  var playbackSpeed = $("#speed").val();
  api.playbackSpeed = playbackSpeed;
});
