import {Howl, Howler} from 'howler';

const Sound = new Howl({
    src: "../../sounds/eyetiger.mp3",
    autoplay: true,
    volume: 0.5
        });

    // var sound2 = new Howl({
    // src: ['./assets/sounds/wrongbuzz.mp3'],
    // autoplay: false,
    // volume: 0.3
    //     });

    // var sound3 = new Howl({
    // src: ['./assets/sounds/correct.mp3'],
    // autoplay: false,
    // volume: 0.5
    //     });

    //     var sound4 = new Howl({
    // src: ['./assets/sounds/airhorn.mp3'],
    // autoplay: false,
    // volume: 0.5
    //     });


    // var soundEffects=true;
    // var id1 = sound.play();
    // // var id2 = sound2.play();
    // console.log(id1);

    // $("#soundIcon").click(function() {
    //     if(sound.playing(id1)===false){
    //         sound.play(id1);
    //         $("#soundIcon").attr("src", "./assets/img/soundicon.png");
    //     }
    //     else {
    //         $("#soundIcon").attr("src", "./assets/img/nosoundicon.png");
    //         sound.pause(id1);
    //     }
    // });

    // $("#soundIcon2").click(function() {
    //     if(soundEffects){
    //         sound2._volume = 0;
    //         sound3._volume = 0;
    //         sound4._volume = 0;
    //         soundEffects=false;
    //         $("#soundIcon2").attr("src", "./assets/img/nosoundicon.png");
    //     }
    //     else {
    //         sound2._volume = 0.3;
    //         sound3._volume = 0.5;
    //         sound4._volume = 0.5;
    //         soundEffects=true;
    //         $("#soundIcon2").attr("src", "./assets/img/soundicon.png");
    //     }
    // });

export default Sound