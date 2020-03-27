let recorder, _blob;

const init = async () => {
  // const AudioContext = window.AudioContext || window.webkitAudioContext;
  // const audioCtx = new AudioContext();
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const constraints = {
    audio: true,
    video: false
  };
  if (navigator.mediaDevices.getUserMedia) {
    try {
      const stream = await getMedia(constraints);
      const sourceNode = new MediaStreamAudioSourceNode(audioCtx, {
        mediaStream: stream
      });
      recorder = new WebAudioRecorder(sourceNode, {
        workerDir: "/assets/js/lib/"
      });
      recorder.setEncoding("mp3");
      registerEvent(recorder);
      console.log("Audio recorder object", recorder);
      console.log("Successfully initialized Audio recorder!");
      // alert("Successfully initialized Audio recorder!");
    } catch (err) {
      console.log(err);
      alert(`Error: ${err.message}. Please check console for detailed logs!`);
    }
  }
};

const registerEvent = recorder => {
  recorder.onEncoderLoaded = (recorder, enconding) => {
    console.log("Encoding option", enconding);
  };
  recorder.onError = (recorder, msg) => {
    console.log(msg);
  };
  recorder.onComplete = (recorder, blob) => {
    // console.log(blob);
    _blob = blob;
    //cross browser
    window.URL = window.URL || window.webkitURL;
    const blobURL = window.URL.createObjectURL(blob);
    uploadFile();
    // createAudioElement(blobURL);
  };
};


const uploadFile = async () => {
  if (!recorder.isRecording()) {
      // console.log('Blob', _blob);
      // const fileName = `recording-${new Date().toISOString().replace(/[-T:\.Z]/g, "")}.mp3`;
      const fileName = 'audio.mp3'
      const file = new File([_blob], fileName, {
          lastModified: Date.now(),
          type: 'audio/mpeg'
      });
      console.log(file);
      const formData = new FormData();
      formData.append('fileName', fileName);
      formData.append('fileData', file);
      formData.append('quoteID', localStorage.getItem('quoteID'));
      // console.log('Form data', formData);
      try {
          const res = await fetch('https://voiceviettest.herokuapp.com/recorder', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              },
              body: formData
          });
          console.log(res.status);
          if (res.status === 201) {
            alert('Uploaded succeed!');
          }
          const resData = await res.json();

          console.log(resData);
      } catch (err) {
          console.log(err);
          throw err;
      }

  }


}

const downloadFile = async () => {
  // Implement later
};

const checkInit = recorder => {
  if (recorder === undefined) {
    return false;
  }
  return true;
};

const record = () => {
  if (!checkInit(recorder)) {
    return alert("Audio recorder is uninitialized!");
  }
  if (!recorder.isRecording()) {
    alert("Recording...");
    recorder.startRecording();
    console.log("Recording");
  }
};

const stopRecord = async () => {
  if (!checkInit(recorder)) {
    return alert("Audio recorder is uninitialized!");
  }
  if (recorder.isRecording()) {
    recorder.finishRecording();
    alert("Recording exported!");
  }
};

const getMedia = async constraints => {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    return stream;
  } catch (err) {
    console.log(err);
  }
};
