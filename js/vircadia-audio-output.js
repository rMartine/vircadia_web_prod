class s extends AudioWorkletProcessor{_audioBuffer=[];MAX_AUDIO_BUFFER_LENGTH=16;MIN_AUDIO_BUFFER_LENGTH=4;_isPlaying=!1;constructor(s){super(s),this.port.onmessage=this.onMessage}onMessage=s=>{const i=new Int16Array(s.data);if(this._audioBuffer.push(i),this._audioBuffer.length>this.MAX_AUDIO_BUFFER_LENGTH)for(;this._audioBuffer.length>this.MIN_AUDIO_BUFFER_LENGTH;)this._audioBuffer.shift();this._isPlaying||this._audioBuffer.length>=this.MIN_AUDIO_BUFFER_LENGTH&&(this._isPlaying=!0)};process(s,i){let t;if(this._isPlaying&&(t=this._audioBuffer.shift(),void 0===t&&(this._isPlaying=!1)),!(i&&i[0]&&i[0][0]&&i[0][1]))return!0;const e=Math.min(i[0][0].length,t?t.length/2:128),o=i[0];for(let r=0;r<2;r++){const s=o[r];for(let i=0;i<e;i++){let e=0;t&&(e=t[2*i+r]/32767),s[i]=e}}return!0}}registerProcessor("vircadia-audio-output-processor",s);