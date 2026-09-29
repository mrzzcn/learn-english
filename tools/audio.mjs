// 处理音标录音：统一音量、转单声道、改成英文文件名，并生成索引 content/audio/index.json。
// 只在录音有变动时手动运行一次，处理好的文件提交到仓库；构建网站不需要 ffmpeg。
// 用法：node tools/audio.mjs <录音文件夹>
// 源文件名格式：UK_01_[iː]_sheep_音素.mp3、US_12_[ɚ]_mother_例词.mp3
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'content', 'audio');
const SRC = process.argv[2];
if (!SRC) { console.error('用法：node tools/audio.mjs <录音文件夹>'); process.exit(1); }

// 录音文件名用的是另一套美式音标写法，索引里统一换成课本的写法
const TEXTBOOK = { 'ɝː': 'ɜːr', 'ɚ': 'ər', 'ɛr': 'er', 'ɑr': 'ɑːr', 'ɔr': 'ɔːr' };
const normalize = ipa => {
  const s = ipa.replace(/g/g, 'ɡ');           // 普通字母 g 换成音标 ɡ
  return TEXTBOOK[s] || s;
};

const index = { uk: {}, us: {} };
const files = fs.readdirSync(SRC).filter(f => f.endsWith('.mp3')).sort();
let n = 0;
for (const f of files) {
  const m = f.normalize('NFC').match(/^(UK|US)_(\d+)_\[(.+?)\]_([A-Za-z]+)_(音素|例词)/);
  if (!m) { console.warn('跳过（文件名不符合格式）：', f); continue; }
  const [, acc, num, rawIpa, word, kind] = m;
  const accent = acc.toLowerCase();
  const ipa = normalize(rawIpa);
  const type = kind === '音素' ? 'phoneme' : 'word';
  const name = `${num}-${word.toLowerCase()}-${type}.mp3`;
  const out = path.join(OUT, accent, name);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  // 统一响度（-16 LUFS，峰值不超过 -1.5 dB），转单声道 64 kbps；不裁剪
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', path.join(SRC, f),
    '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11', '-ac', '1', '-ar', '44100', '-b:a', '64k', out]);
  const e = (index[accent][ipa] ||= { word: word.toLowerCase(), source: rawIpa });
  e[type] = `${accent}/${name}`;
  n++;
}
fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify(index, null, 2) + '\n');
console.log(`处理了 ${n} 个录音 → content/audio/（英式 ${Object.keys(index.uk).length} 个音，美式 ${Object.keys(index.us).length} 个音）`);
