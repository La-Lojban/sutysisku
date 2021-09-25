const params = {
	IdentityPoolId: 'us-east-1:375f6ca5-3f02-4e61-b59f-4bf3fd51176b',
	region: "us-east-1",
	VoiceId: "Vicki",
	LanguageCode: 'de-DE',
	Engine: 'neural',
	lojban2IPAMapping: {
		"«": "",
		"-": ".",
		"»": "",
		"?": "",
		",": "",
		".": "ʔ",
		" ": " ",
		"ˈ": "ˈ",
		a: "a",
		e: "ɛ:",
		i: "i:",
		o: "ɔ",
		u: "u",
		y: "ə",
		ai: "aj",
		ei: "ɛj",
		oi: "ɔj",
		au: "aʊ",
		ia: "ja",
		ie: "jɛ:",
		ii: "ji",
		io: "jɔ",
		iu: "ju",
		ua: "wa",
		ue: "wɛ:",
		ui: "wi:",
		uo: "wɔ",
		uu: "wu",
		iy: "jə",
		uy: "wə",
		c: "ʃ",
		j: "ʒ",
		s: "s",
		z: "z",
		f: "f",
		v: "v",
		x: "x",
		"'": "h",
		dj: "dʒ",
		tc: "tʃ",
		dz: "ʣ",
		ts: "ʦ",
		r: "ɹ",
		n: "n",
		m: "m",
		l: "l",
		b: "b",
		d: "d",
		g: "g",
		k: "k",
		p: "p",
		t: "t"
	}
}

function PollyPlayer(params) {
	AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		IdentityPoolId: params.IdentityPoolId,
	});
	AWS.config.region = params.region;

	async function getAndPlayAudio(text, dontSpeak) {
		const sance_datni = getLocalAudio(text) || await downloadAudio(text, dontSpeak);
		if (dontSpeak) return
		return new Promise(function (resolve) {
			audio.src = URL.createObjectURL(new Blob([(new Uint8Array(sance_datni)).buffer]));
			audio.addEventListener("ended", function () {
				resolve();
			});
			audio.pause();
			audio.play();
		});
	}

	function downloadAudio(Text, dontSpeak) {
		return new Promise(function (resolve) {
			const polly = new AWS.Polly();
			polly.synthesizeSpeech({
				Text,
				VoiceId: params.VoiceId,
				LanguageCode: params.LanguageCode,
				Engine: params.Engine,
				OutputFormat: 'mp3',
				TextType: 'ssml',
				SampleRate: '24000'
			}, (error, data) => {
				if (error) {
					resolve()
				} else {
					cacheAudio(Text, data.AudioStream, dontSpeak);
					resolve(data.AudioStream);
				}
			});
		});
	}

	function cacheAudio(text, sance_datni, dontSpeak) {
		let cache = JSON.parse(localStorage.getItem("cachedAudio")) || [];
		cache = cache.slice(dontSpeak ? -100 : -10)
		cache.push({
			text,
			audio: JSON.stringify(sance_datni)
		});
		localStorage.setItem("cachedAudio", JSON.stringify(cache));
	}

	function getLocalAudio(text) {
		const audioStreamArray = JSON.parse(localStorage.getItem("cachedAudio")) || [];
		const sance_datni = audioStreamArray.filter((record) => record.text === text)[0];
		if (!sance_datni) return;
		return JSON.parse(sance_datni.audio).data
	}

	return function (text, dontSpeak) {
		getAndPlayAudio(text, dontSpeak)
	}
}

function matchForm(word, form) {
	let regex = "^";
	const working = word.replace(/[\.\?»«]/, '');
	for (var f = 0; f < form.length; f++) {
		if (form[f] == "?")
			regex += ".";
		if (form[f] == "*")
			regex += ".*";
		if (form[f] == "C")
			regex += "[^aeiouy]";
		if (form[f] == "V")
			regex += "[aeiouy]";
	}
	regex += "$";
	const re = new RegExp(regex);
	return re.test(working);
}

function isBrivla(word) {
	return matchForm(word, "CCVCV") ||
		matchForm(word, "CVCCV");
}

const polly = PollyPlayer(params);

const famymaho = ["kei", "vau", "ku'o", "li'u", "le'u", "ge'u"]

function runSpeakableAudio(textToSpeak, dontSpeak = false) {
	const words = textToSpeak.replace(/(?:\r\n|\r|\n)/g, ' ').split(' ');
	let output = ['<speak><prosody rate="slow">', "<s>"];
	for (let w = 0; w < words.length; w++) {
		if (words[w] == ".i" || words[w] == "ni'o") {
			output.push("</s>\n<s>");
		} else if (words[w][0] == ".") {
			output.push('<break time="20ms" strength="x-weak" />');
		}

		let ph = [];
		for (let i = 0; i < [...words[w]].length; i++) {
			const c = [...words[w]][i];
			if ((matchForm(words[w], "CV") || matchForm(words[w], "CVV")) && (i == 0) && words[w + 1] && !isBrivla(words[w + 1]))
				ph.push('ˈ');
			if ((matchForm(words[w], "CVCV") || matchForm(words[w], "CVCVV")) && (i == 0))
				ph.push('ˈ');
			if (matchForm(words[w], "CVCCV") || matchForm(words[w], "CCVCV") || matchForm(words[w], "CCVCVV") || matchForm(words[w], "CVCCVV")) {
				if (i == 0)
					ph.push('ˈ');
				if (i == 3)
					ph.push('.');
			}
			if (params.lojban2IPAMapping[[...words[w]][i - 1] + c])
				ph.push(params.lojban2IPAMapping[[...words[w]][i - 1] + c]);
			else if (params.lojban2IPAMapping[c + [...words[w]][i + 1]])
				continue;
			else
				ph.push(params.lojban2IPAMapping[c]);
		}
		output.push('<phoneme alphabet="ipa" ph="' + ph.join("") + '">' + words[w] + '</phoneme>');
		if (words[w][words[w].length - 1] == "." || famymaho.includes(words[w])) {
			output.push('<break time="20ms" strength="x-weak" />');
		}
	}

	output.push("</s>", '</prosody></speak>');
	polly(output.join("\n"), dontSpeak);
}